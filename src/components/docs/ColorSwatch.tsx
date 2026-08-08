import { css } from '../../../styled-system/css';
import { useClipboard } from '../../hooks/useClipboard';
import { useTheme } from '../../hooks/useTheme';

interface ColorSwatchProps {
  name: string;
  token: string;
}

export function ColorSwatch({ name, token }: ColorSwatchProps) {
  const { copied, copy } = useClipboard(1500);
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      onClick={() => copy(token)}
      className={css({
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1.5',
        cursor: 'pointer',
        transition: 'transform 0.15s',
        _hover: {
          transform: 'scale(1.05)',
        },
        border: 'none',
        bg: 'transparent',
        padding: '0',
      })}
      title={`Click to copy: ${token}`}
    >
      <div
        className={css({
          width: '16',
          height: '16',
          rounded: 'lg',
          shadow: 'sm',
          border: '1px solid',
          borderColor: isDark ? 'zinc.700' : 'zinc.200',
          transition: 'shadow 0.2s',
          _hover: {
            shadow: 'md',
          },
        })}
        style={{ backgroundColor: `var(--colors-${name.replace('.', '-')})` }}
      />
      <span
        className={css({
          fontSize: 'xs',
          fontFamily: 'mono',
          color: copied ? 'green.500' : isDark ? 'zinc.400' : 'zinc.600',
          fontWeight: 'medium',
        })}
      >
        {copied ? 'Copied!' : name.split('.')[1] || name}
      </span>
    </button>
  );
}
