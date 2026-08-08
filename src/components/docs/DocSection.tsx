import type { ReactNode } from 'react';
import { css } from '../../../styled-system/css';
import { useTheme } from '../../hooks/useTheme';

interface DocSectionProps {
  title: string;
  description?: string;
  children: ReactNode;
}

export function DocSection({ title, description, children }: DocSectionProps) {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const id = title.toLowerCase().replace(/\s+/g, '-');

  return (
    <section
      id={id}
      className={css({
        mb: '12',
        pb: '8',
        borderBottom: '1px solid',
        borderColor: isDark ? 'zinc.800/50' : 'zinc.200',
      })}
    >
      <h2
        className={css({
          fontSize: '2xl',
          fontWeight: 'bold',
          color: isDark ? 'zinc.100' : 'zinc.900',
          mb: '2',
          display: 'flex',
          alignItems: 'center',
          gap: '2',
        })}
      >
        <span
          className={css({
            color: 'blue.500',
            fontSize: 'lg',
            userSelect: 'none',
          })}
        >
          #
        </span>
        {title}
      </h2>
      {description && (
        <p
          className={css({
            fontSize: 'md',
            color: isDark ? 'zinc.400' : 'zinc.600',
            lineHeight: 'relaxed',
            mb: '6',
            maxW: '3xl',
          })}
        >
          {description}
        </p>
      )}
      <div>{children}</div>
    </section>
  );
}
