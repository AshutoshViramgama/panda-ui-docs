import { useClipboard } from '../../hooks/useClipboard';
import { useTheme } from '../../hooks/useTheme';
import { css } from '../../../styled-system/css';

interface CodeBlockProps {
  code: string;
  language?: string;
  title?: string;
}

export function CodeBlock({ code, language = 'tsx', title }: CodeBlockProps) {
  const { copied, copy } = useClipboard();
  const { theme } = useTheme();

  const isDark = theme === 'dark';

  return (
    <div
      className={css({
        rounded: 'lg',
        overflow: 'hidden',
        border: '1px solid',
        borderColor: isDark ? 'zinc.800' : 'zinc.200',
        mb: '4',
      })}
    >
      {title && (
        <div
          className={css({
            px: '4',
            py: '2',
            bg: isDark ? 'zinc.800' : 'zinc.100',
            borderBottom: '1px solid',
            borderColor: isDark ? 'zinc.700' : 'zinc.200',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          })}
        >
          <span
            className={css({
              fontSize: 'xs',
              fontWeight: 'semibold',
              color: isDark ? 'zinc.400' : 'zinc.500',
              textTransform: 'uppercase',
              letterSpacing: 'wider',
            })}
          >
            {title}
          </span>
          <span
            className={css({
              fontSize: 'xs',
              color: isDark ? 'zinc.500' : 'zinc.400',
              fontFamily: 'mono',
            })}
          >
            {language}
          </span>
        </div>
      )}
      <div className={css({ position: 'relative' })}>
        <pre
          className={css({
            bg: isDark ? 'zinc.900' : 'zinc.50',
            p: '4',
            overflowX: 'auto',
            fontSize: 'sm',
            lineHeight: 'relaxed',
            fontFamily: 'mono',
            color: isDark ? 'zinc.300' : 'zinc.700',
            margin: '0',
          })}
        >
          <code>{code}</code>
        </pre>
        <button
          onClick={() => copy(code)}
          className={css({
            position: 'absolute',
            top: '3',
            right: '3',
            px: '3',
            py: '1.5',
            rounded: 'md',
            fontSize: 'xs',
            fontWeight: 'medium',
            bg: isDark ? 'zinc.800' : 'zinc.200',
            color: isDark ? 'zinc.300' : 'zinc.600',
            border: '1px solid',
            borderColor: isDark ? 'zinc.700' : 'zinc.300',
            cursor: 'pointer',
            transition: 'all 0.15s',
            _hover: {
              bg: isDark ? 'zinc.700' : 'zinc.300',
            },
          })}
        >
          {copied ? '✓ Copied' : 'Copy'}
        </button>
      </div>
    </div>
  );
}
