import { useState, useEffect, useRef, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { css } from '../../../styled-system/css';
import { useTheme } from '../../hooks/useTheme';
import searchIndexData from '../../constants/searchIndex.json';

interface SearchSection {
  title: string;
  id: string;
}

interface SearchPage {
  id: string;
  title: string;
  category: string;
  path: string;
  sections: SearchSection[];
}

const searchIndex = searchIndexData as SearchPage[];

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const navigate = useNavigate();
  
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [expandedPages, setExpandedPages] = useState<Record<string, boolean>>({});
  
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  // Compute filtered pages based on query
  const filteredPages = useMemo(() => {
    if (!query) {
      // Return all pages if no query, but limit to prevent lag
      return searchIndex;
    }
    const lower = query.toLowerCase();
    return searchIndex.map(page => {
      const pageMatch = page.title.toLowerCase().includes(lower) || page.category.toLowerCase().includes(lower);
      const matchingSections = page.sections.filter(s => s.title.toLowerCase().includes(lower));
      
      if (pageMatch || matchingSections.length > 0) {
        return {
          ...page,
          // If page matches, maybe show all sections, otherwise just matching ones
          sections: matchingSections.length > 0 ? matchingSections : page.sections
        };
      }
      return null;
    }).filter(Boolean) as SearchPage[];
  }, [query]);

  // Auto-expand pages that have matching sections when searching
  useEffect(() => {
    if (query) {
      const newExpanded: Record<string, boolean> = {};
      filteredPages.forEach(p => {
        newExpanded[p.id] = true;
      });
      setExpandedPages(newExpanded);
    } else {
      setExpandedPages({});
    }
  }, [query, filteredPages]);

  // Flatten the visible structure for keyboard navigation
  const visibleItems = useMemo(() => {
    const items: Array<{ type: 'page' | 'section', path: string, label: string, category?: string, parentId?: string }> = [];
    filteredPages.forEach(page => {
      items.push({ type: 'page', path: page.path, label: page.title, category: page.category, parentId: page.id });
      if (expandedPages[page.id]) {
        page.sections.forEach(sec => {
          items.push({ type: 'section', path: `${page.path}#${sec.id}`, label: sec.title, parentId: page.id });
        });
      }
    });
    return items;
  }, [filteredPages, expandedPages]);

  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setSelectedIndex(0);
      setExpandedPages({});
      setTimeout(() => inputRef.current?.focus(), 50);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [visibleItems.length]);

  const toggleExpand = (pageId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setExpandedPages(prev => ({ ...prev, [pageId]: !prev[pageId] }));
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex(prev => (prev + 1) % Math.max(visibleItems.length, 1));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex(prev => (prev - 1 + visibleItems.length) % Math.max(visibleItems.length, 1));
      } else if (e.key === 'Enter' && visibleItems[selectedIndex]) {
        e.preventDefault();
        navigate(visibleItems[selectedIndex].path);
        onClose();
        // Handle anchor scroll
        if (visibleItems[selectedIndex].path.includes('#')) {
          setTimeout(() => {
            const id = visibleItems[selectedIndex].path.split('#')[1];
            const el = document.getElementById(id);
            if (el) {
              const y = el.getBoundingClientRect().top + window.scrollY - 100; // Offset for topbar
              window.scrollTo({ top: y, behavior: 'smooth' });
            }
          }, 100);
        }
      } else if (e.key === 'Escape') {
        onClose();
      } else if (e.key === ' ' || e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
        // Toggle accordion if it's a page and we press Space/Right/Left
        const currentItem = visibleItems[selectedIndex];
        if (currentItem && currentItem.type === 'page' && currentItem.parentId) {
          if (e.key === 'ArrowRight' && !expandedPages[currentItem.parentId]) {
            setExpandedPages(prev => ({ ...prev, [currentItem.parentId as string]: true }));
          } else if (e.key === 'ArrowLeft' && expandedPages[currentItem.parentId]) {
            setExpandedPages(prev => ({ ...prev, [currentItem.parentId as string]: false }));
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, visibleItems, selectedIndex, navigate, onClose, expandedPages]);

  // Scroll active item into view
  useEffect(() => {
    if (isOpen && listRef.current) {
      const activeElement = listRef.current.children[selectedIndex] as HTMLElement;
      if (activeElement) {
        activeElement.scrollIntoView({ block: 'nearest' });
      }
    }
  }, [selectedIndex, isOpen]);

  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      className={css({
        position: 'fixed',
        inset: '0',
        zIndex: 2000,
        bg: isDark ? 'rgba(0,0,0,0.6)' : 'rgba(0,0,0,0.4)',
        backdropFilter: 'blur(4px)',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        pt: { base: '16', sm: '32' },
        px: '4',
        animation: 'fadeIn 0.2s ease-out',
      })}
    >
      <div
        onClick={e => e.stopPropagation()}
        className={css({
          width: 'full',
          maxW: '2xl',
          bg: isDark ? 'zinc.900' : 'white',
          rounded: 'xl',
          shadow: '2xl',
          border: '1px solid',
          borderColor: isDark ? 'zinc.800' : 'zinc.200',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          maxHeight: '80vh',
          animation: 'slideDown 0.2s ease-out',
        })}
      >
        <div className={css({ position: 'relative', display: 'flex', alignItems: 'center', borderBottom: '1px solid', borderColor: isDark ? 'zinc.800' : 'zinc.200', px: '4' })}>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={css({ color: isDark ? 'zinc.500' : 'zinc.400' })}>
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <input
            ref={inputRef}
            type="text"
            placeholder="Search docs and components..."
            value={query}
            onChange={e => setQuery(e.target.value)}
            className={css({
              width: 'full',
              py: '4',
              px: '3',
              bg: 'transparent',
              border: 'none',
              outline: 'none',
              fontSize: 'lg',
              color: isDark ? 'zinc.100' : 'zinc.900',
              _placeholder: { color: isDark ? 'zinc.500' : 'zinc.400' },
            })}
          />
          <button
            onClick={onClose}
            className={css({
              fontSize: 'xs',
              fontWeight: 'medium',
              px: '2',
              py: '1',
              rounded: 'md',
              bg: isDark ? 'zinc.800' : 'zinc.100',
              color: isDark ? 'zinc.400' : 'zinc.500',
              border: 'none',
              cursor: 'pointer',
              _hover: { bg: isDark ? 'zinc.700' : 'zinc.200' },
            })}
          >
            ESC
          </button>
        </div>
        
        <div className={css({ overflowY: 'auto', p: '2' })}>
          {visibleItems.length === 0 ? (
            <div className={css({ p: '8', textAlign: 'center', color: isDark ? 'zinc.500' : 'zinc.400' })}>
              <p className={css({ fontSize: 'sm' })}>No results found for "{query}"</p>
            </div>
          ) : (
            <div ref={listRef} className={css({ display: 'flex', flexDirection: 'column', gap: '1' })}>
              {visibleItems.map((item, index) => {
                const isSelected = index === selectedIndex;
                const isPage = item.type === 'page';
                const isExpanded = item.parentId ? expandedPages[item.parentId] : false;

                return (
                  <div
                    key={item.path}
                    onMouseEnter={() => setSelectedIndex(index)}
                    onClick={() => {
                      navigate(item.path);
                      onClose();
                      if (item.path.includes('#')) {
                        setTimeout(() => {
                          const id = item.path.split('#')[1];
                          const el = document.getElementById(id);
                          if (el) {
                            const y = el.getBoundingClientRect().top + window.scrollY - 100;
                            window.scrollTo({ top: y, behavior: 'smooth' });
                          }
                        }, 100);
                      }
                    }}
                    className={css({
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      px: isPage ? '4' : '4',
                      ml: isPage ? '0' : '6',
                      py: isPage ? '3' : '2',
                      rounded: 'lg',
                      cursor: 'pointer',
                      bg: isSelected ? (isDark ? 'blue.500/10' : 'blue.50') : 'transparent',
                      color: isSelected ? 'blue.500' : (isDark ? 'zinc.300' : 'zinc.700'),
                      borderLeft: isPage ? 'none' : '2px solid',
                      borderColor: isPage ? 'transparent' : (isSelected ? 'blue.500' : (isDark ? 'zinc.800' : 'zinc.200')),
                      transition: 'all 0.1s ease',
                    })}
                  >
                    <div className={css({ display: 'flex', alignItems: 'center', gap: '3' })}>
                      {isPage && (
                        <button
                          onClick={(e) => toggleExpand(item.parentId!, e)}
                          className={css({
                            p: '1',
                            rounded: 'sm',
                            color: isDark ? 'zinc.500' : 'zinc.400',
                            bg: 'transparent',
                            border: 'none',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            _hover: { bg: isDark ? 'zinc.800' : 'zinc.200', color: isDark ? 'zinc.300' : 'zinc.600' }
                          })}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            style={{ transform: isExpanded ? 'rotate(90deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }}
                          >
                            <polyline points="9 18 15 12 9 6"></polyline>
                          </svg>
                        </button>
                      )}
                      {!isPage && (
                        <span className={css({ color: isSelected ? 'blue.500' : (isDark ? 'zinc.600' : 'zinc.400'), ml: '2' })}>
                           ↳ 
                        </span>
                      )}
                      <span className={css({ fontSize: isPage ? 'sm' : 'xs', fontWeight: isSelected ? 'semibold' : (isPage ? 'medium' : 'normal') })}>
                        {item.label}
                      </span>
                    </div>
                    {isPage && (
                      <span className={css({ 
                        fontSize: 'xs', 
                        color: isSelected ? (isDark ? 'blue.400' : 'blue.600') : (isDark ? 'zinc.500' : 'zinc.400'),
                        bg: isSelected ? (isDark ? 'blue.500/20' : 'blue.100') : (isDark ? 'zinc.800' : 'zinc.100'),
                        px: '2',
                        py: '0.5',
                        rounded: 'full'
                      })}>
                        {item.category}
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
