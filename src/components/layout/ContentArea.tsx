import type { ReactNode } from 'react';
import { css } from '../../../styled-system/css';
import { useTheme } from '../../hooks/useTheme';

interface ContentAreaProps {
  children: ReactNode;
}

export function ContentArea({ children }: ContentAreaProps) {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <main
      className={css({
        minHeight: '100vh',
        pt: '16', // Topbar height
        ml: { base: '0', lg: '64' }, // Sidebar width
        px: { base: '4', md: '8' },
        py: '8',
        bg: isDark ? 'zinc.900' : 'zinc.50',
      })}
    >
      <div
        className={css({
          maxW: '5xl',
          mx: 'auto',
        })}
      >
        {children}
      </div>
    </main>
  );
}
