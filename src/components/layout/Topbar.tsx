import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { css } from '../../../styled-system/css';
import { useTheme } from '../../hooks/useTheme';
import { SearchModal } from './SearchModal';

interface TopbarProps {
  onMenuToggle?: () => void;
  isMenuOpen?: boolean;
}

export function Topbar({ onMenuToggle, isMenuOpen }: TopbarProps) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <>
      <header
        className={css({
          position: 'fixed',
          top: '0',
          left: '0',
          right: '0',
          height: '16',
          bg: isDark ? 'zinc.900' : 'white',
          borderBottom: '1px solid',
          borderColor: isDark ? 'zinc.800' : 'zinc.200',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          px: '6',
          zIndex: 50,
        })}
      >
        <div className={css({ display: 'flex', alignItems: 'center', gap: '3' })}>
          <button
            onClick={onMenuToggle}
            className={css({
              display: { base: 'flex', lg: 'none' },
              alignItems: 'center',
              justifyContent: 'center',
              w: '10',
              h: '10',
              rounded: 'md',
              color: isDark ? 'zinc.300' : 'zinc.700',
              bg: 'transparent',
              border: 'none',
              cursor: 'pointer',
              _hover: { bg: isDark ? 'zinc.800' : 'zinc.100' },
              ml: '-2',
            })}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              {isMenuOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
          <Link to="/" className={css({ display: 'flex', alignItems: 'center', gap: '2', textDecoration: 'none' })}>
            <span className={css({ fontSize: '2xl' })}>🐼</span>
            <span className={css({ fontSize: 'lg', fontWeight: 'bold', color: isDark ? 'white' : 'zinc.900', display: { base: 'none', sm: 'block' } })}>
              Panda UI
            </span>
          </Link>
        </div>
        
        <div className={css({ display: 'flex', alignItems: 'center', gap: '4', flex: 1, justifyContent: 'flex-end' })}>
          <button
            onClick={() => setIsSearchOpen(true)}
            className={css({
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: { base: 'auto', md: '64' },
              height: '9',
              px: '3',
              rounded: 'lg',
              bg: isDark ? 'zinc.800' : 'zinc.100',
              border: '1px solid',
              borderColor: isDark ? 'zinc.700' : 'zinc.200',
              color: isDark ? 'zinc.400' : 'zinc.500',
              cursor: 'pointer',
              _hover: { bg: isDark ? 'zinc.700' : 'zinc.200' },
              transition: 'all 0.2s',
            })}
          >
            <div className={css({ display: 'flex', alignItems: 'center', gap: '2' })}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
              <span className={css({ fontSize: 'sm', display: { base: 'none', md: 'block' } })}>Search...</span>
            </div>
            <div className={css({ display: { base: 'none', md: 'flex' }, alignItems: 'center', gap: '1' })}>
              <kbd className={css({ fontSize: 'xs', fontFamily: 'sans', bg: isDark ? 'zinc.700' : 'white', px: '1.5', py: '0.5', rounded: 'md', shadow: 'sm' })}>⌘</kbd>
              <kbd className={css({ fontSize: 'xs', fontFamily: 'sans', bg: isDark ? 'zinc.700' : 'white', px: '1.5', py: '0.5', rounded: 'md', shadow: 'sm' })}>K</kbd>
            </div>
          </button>

          <div className={css({ display: 'flex', alignItems: 'center', gap: '2' })}>
            <a 
              href="https://panda-css.com" 
              target="_blank" 
              rel="noreferrer"
              className={css({
                display: { base: 'none', sm: 'inline-flex' },
                fontSize: 'sm',
                fontWeight: 'medium',
                color: isDark ? 'zinc.400' : 'zinc.600',
                textDecoration: 'none',
                _hover: { color: isDark ? 'zinc.200' : 'zinc.900' },
                transition: 'color 0.2s',
              })}
            >
              Docs
            </a>
            <button
              onClick={toggleTheme}
              className={css({
                p: '2',
                rounded: 'md',
                color: isDark ? 'zinc.400' : 'zinc.600',
                bg: 'transparent',
                border: 'none',
                cursor: 'pointer',
                _hover: { bg: isDark ? 'zinc.800' : 'zinc.100', color: isDark ? 'zinc.200' : 'zinc.900' },
                transition: 'all 0.2s',
              })}
              aria-label="Toggle theme"
            >
              {isDark ? '☀️' : '🌙'}
            </button>
          </div>
        </div>
      </header>

      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
}
