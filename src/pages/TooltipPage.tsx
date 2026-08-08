import { useState } from 'react';
import { css } from '../../styled-system/css';
import { useTheme } from '../hooks/useTheme';
import { DocSection } from '../components/docs/DocSection';
import { CodeBlock } from '../components/docs/CodeBlock';

export function TooltipPage() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [visible, setVisible] = useState<string | null>(null);

  const tooltipPositions = ['top', 'right', 'bottom', 'left'] as const;

  return (
    <div>
      <div className={css({ mb: '10' })}>
        <h1 className={css({ fontSize: '4xl', fontWeight: 'black', color: isDark ? 'zinc.100' : 'zinc.900', mb: '3' })}>Tooltip</h1>
        <p className={css({ fontSize: 'lg', color: isDark ? 'zinc.400' : 'zinc.600', lineHeight: 'relaxed', maxW: '3xl' })}>
          Hover tooltips for additional context. Supports top, right, bottom, and left positioning.
        </p>
      </div>

      <DocSection title="Tooltip Positions" description="Hover over buttons to see tooltips at different positions.">
        <div className={css({ display: 'flex', flexWrap: 'wrap', gap: '8', justifyContent: 'center', py: '16', mb: '6', p: '6', bg: isDark ? 'zinc.800' : 'white', rounded: 'xl', border: '1px solid', borderColor: isDark ? 'zinc.700' : 'zinc.200' })}>
          {tooltipPositions.map((pos) => (
            <div key={pos} className={css({ position: 'relative', display: 'inline-flex' })}>
              <button
                onMouseEnter={() => setVisible(pos)}
                onMouseLeave={() => setVisible(null)}
                className={css({
                  px: '5', py: '2.5', rounded: 'lg', fontSize: 'sm', fontWeight: 'semibold',
                  bg: isDark ? 'zinc.700' : 'zinc.200', color: isDark ? 'zinc.200' : 'zinc.700',
                  border: 'none', cursor: 'pointer',
                  _hover: { bg: isDark ? 'zinc.600' : 'zinc.300' },
                  transition: 'all 0.15s',
                })}
              >
                {pos.charAt(0).toUpperCase() + pos.slice(1)}
              </button>
              {visible === pos && (
                <div
                  className={css({
                    position: 'absolute',
                    px: '3', py: '1.5', rounded: 'md',
                    bg: isDark ? 'zinc.100' : 'zinc.800',
                    color: isDark ? 'zinc.800' : 'white',
                    fontSize: 'xs', fontWeight: 'medium',
                    whiteSpace: 'nowrap', shadow: 'lg', zIndex: 'tooltip',
                    ...(pos === 'top' ? { bottom: 'calc(100% + 8px)', left: '50%', transform: 'translateX(-50%)' } : {}),
                    ...(pos === 'bottom' ? { top: 'calc(100% + 8px)', left: '50%', transform: 'translateX(-50%)' } : {}),
                    ...(pos === 'left' ? { right: 'calc(100% + 8px)', top: '50%', transform: 'translateY(-50%)' } : {}),
                    ...(pos === 'right' ? { left: 'calc(100% + 8px)', top: '50%', transform: 'translateY(-50%)' } : {}),
                  })}
                >
                  Tooltip on {pos}
                </div>
              )}
            </div>
          ))}
        </div>
        <CodeBlock
          code={`const [visible, setVisible] = useState(false);

<div className={css({ position: 'relative' })}>
  <button
    onMouseEnter={() => setVisible(true)}
    onMouseLeave={() => setVisible(false)}
  >
    Hover me
  </button>
  {visible && (
    <div className={css({
      position: 'absolute',
      bottom: 'calc(100% + 8px)',
      left: '50%',
      transform: 'translateX(-50%)',
      px: '3', py: '1.5', rounded: 'md',
      bg: 'zinc.800', color: 'white',
      fontSize: 'xs', fontWeight: 'medium',
      whiteSpace: 'nowrap', shadow: 'lg',
      zIndex: 'tooltip',
    })}>
      Tooltip text
    </div>
  )}
</div>`}
        />
      </DocSection>
    </div>
  );
}
