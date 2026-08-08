import { useState } from 'react';
import { css } from '../../styled-system/css';
import { useTheme } from '../hooks/useTheme';
import { DocSection } from '../components/docs/DocSection';
import { CodeBlock } from '../components/docs/CodeBlock';

export function PaginationPage() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [currentPage, setCurrentPage] = useState(3);
  const totalPages = 10;

  const getPageNumbers = () => {
    const pages: (number | '...')[] = [];
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);
      if (currentPage > 3) pages.push('...');
      for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++) pages.push(i);
      if (currentPage < totalPages - 2) pages.push('...');
      pages.push(totalPages);
    }
    return pages;
  };

  return (
    <div>
      <div className={css({ mb: '10' })}>
        <h1 className={css({ fontSize: '4xl', fontWeight: 'black', color: isDark ? 'zinc.100' : 'zinc.900', mb: '3' })}>Pagination</h1>
        <p className={css({ fontSize: 'lg', color: isDark ? 'zinc.400' : 'zinc.600', lineHeight: 'relaxed', maxW: '3xl' })}>
          Page navigation for multi-page content. Features numbered pages, prev/next, and ellipsis for large page counts.
        </p>
      </div>

      <DocSection title="Standard Pagination" description="Interactive pagination with current page highlighting.">
        <div className={css({ mb: '6', p: '6', bg: isDark ? 'zinc.800' : 'white', rounded: 'xl', border: '1px solid', borderColor: isDark ? 'zinc.700' : 'zinc.200' })}>
          <nav className={css({ display: 'flex', alignItems: 'center', gap: '1' })}>
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              className={css({ px: '3', py: '2', rounded: 'lg', fontSize: 'sm', fontWeight: 'medium', bg: 'transparent', color: currentPage === 1 ? (isDark ? 'zinc.600' : 'zinc.300') : isDark ? 'zinc.300' : 'zinc.600', border: '1px solid', borderColor: isDark ? 'zinc.700' : 'zinc.200', cursor: currentPage === 1 ? 'not-allowed' : 'pointer', _hover: currentPage === 1 ? {} : { bg: isDark ? 'zinc.700' : 'zinc.100' }, transition: 'all 0.15s' })}
            >
              ← Prev
            </button>
            {getPageNumbers().map((page, i) =>
              page === '...' ? (
                <span key={`dots-${i}`} className={css({ px: '2', color: isDark ? 'zinc.500' : 'zinc.400' })}>…</span>
              ) : (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={css({
                    width: '10', height: '10', rounded: 'lg', fontSize: 'sm', fontWeight: page === currentPage ? 'semibold' : 'medium', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    bg: page === currentPage ? 'blue.500' : 'transparent',
                    color: page === currentPage ? 'white' : isDark ? 'zinc.300' : 'zinc.600',
                    border: page === currentPage ? 'none' : '1px solid',
                    borderColor: isDark ? 'zinc.700' : 'zinc.200',
                    cursor: 'pointer',
                    _hover: page === currentPage ? {} : { bg: isDark ? 'zinc.700' : 'zinc.100' },
                    transition: 'all 0.15s',
                  })}
                >
                  {page}
                </button>
              ),
            )}
            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              className={css({ px: '3', py: '2', rounded: 'lg', fontSize: 'sm', fontWeight: 'medium', bg: 'transparent', color: currentPage === totalPages ? (isDark ? 'zinc.600' : 'zinc.300') : isDark ? 'zinc.300' : 'zinc.600', border: '1px solid', borderColor: isDark ? 'zinc.700' : 'zinc.200', cursor: currentPage === totalPages ? 'not-allowed' : 'pointer', _hover: currentPage === totalPages ? {} : { bg: isDark ? 'zinc.700' : 'zinc.100' }, transition: 'all 0.15s' })}
            >
              Next →
            </button>
          </nav>
        </div>
      </DocSection>

      <DocSection title="Simple Pagination" description="Minimal prev/next pagination.">
        <div className={css({ mb: '6', p: '6', bg: isDark ? 'zinc.800' : 'white', rounded: 'xl', border: '1px solid', borderColor: isDark ? 'zinc.700' : 'zinc.200' })}>
          <div className={css({ display: 'flex', alignItems: 'center', justifyContent: 'space-between' })}>
            <button className={css({ px: '4', py: '2', rounded: 'lg', fontSize: 'sm', fontWeight: 'medium', bg: isDark ? 'zinc.700' : 'zinc.100', color: isDark ? 'zinc.300' : 'zinc.600', border: 'none', cursor: 'pointer', _hover: { bg: isDark ? 'zinc.600' : 'zinc.200' }, transition: 'all 0.15s' })}>
              ← Previous
            </button>
            <span className={css({ fontSize: 'sm', color: isDark ? 'zinc.400' : 'zinc.500' })}>Page {currentPage} of {totalPages}</span>
            <button className={css({ px: '4', py: '2', rounded: 'lg', fontSize: 'sm', fontWeight: 'medium', bg: isDark ? 'zinc.700' : 'zinc.100', color: isDark ? 'zinc.300' : 'zinc.600', border: 'none', cursor: 'pointer', _hover: { bg: isDark ? 'zinc.600' : 'zinc.200' }, transition: 'all 0.15s' })}>
              Next →
            </button>
          </div>
        </div>
        <CodeBlock
          code={`<div className={css({ display: 'flex', justifyContent: 'space-between' })}>
  <button className={css({ px: '4', py: '2', rounded: 'lg', fontSize: 'sm', bg: 'zinc.100' })}>
    ← Previous
  </button>
  <span className={css({ fontSize: 'sm', color: 'zinc.500' })}>Page 3 of 10</span>
  <button className={css({ px: '4', py: '2', rounded: 'lg', fontSize: 'sm', bg: 'zinc.100' })}>
    Next →
  </button>
</div>`}
        />
      </DocSection>
    </div>
  );
}
