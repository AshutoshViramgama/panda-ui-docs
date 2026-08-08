import { css } from '../../styled-system/css';
import { useTheme } from '../hooks/useTheme';
import { DocSection } from '../components/docs/DocSection';
import { CodeBlock } from '../components/docs/CodeBlock';

const PROGRESS_COLORS = ['blue', 'green', 'red', 'purple', 'amber', 'teal'] as const;

export function ProgressPage() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div>
      <div className={css({ mb: '10' })}>
        <h1 className={css({ fontSize: '4xl', fontWeight: 'black', color: isDark ? 'zinc.100' : 'zinc.900', mb: '3' })}>Progress</h1>
        <p className={css({ fontSize: 'lg', color: isDark ? 'zinc.400' : 'zinc.600', lineHeight: 'relaxed', maxW: '3xl' })}>
          Progress bars for showing completion percentage. Available in multiple colors and sizes.
        </p>
      </div>

      <DocSection title="Basic Progress" description="Simple progress bars at various percentages.">
        <div className={css({ display: 'flex', flexDirection: 'column', gap: '4', mb: '6', p: '6', bg: isDark ? 'zinc.800' : 'white', rounded: 'xl', border: '1px solid', borderColor: isDark ? 'zinc.700' : 'zinc.200' })}>
          {[15, 35, 60, 85, 100].map((pct) => (
            <div key={pct}>
              <div className={css({ display: 'flex', justifyContent: 'space-between', mb: '1' })}>
                <span className={css({ fontSize: 'xs', fontWeight: 'medium', color: isDark ? 'zinc.400' : 'zinc.600' })}>Progress</span>
                <span className={css({ fontSize: 'xs', fontWeight: 'semibold', color: isDark ? 'zinc.300' : 'zinc.700' })}>{pct}%</span>
              </div>
              <div className={css({ width: 'full', height: '2.5', bg: isDark ? 'zinc.700' : 'zinc.200', rounded: 'full', overflow: 'hidden' })}>
                <div
                  className={css({ height: 'full', bg: 'blue.500', rounded: 'full', transition: 'width 0.5s ease' })}
                  style={{ width: `${pct}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </DocSection>

      <DocSection title="Color Variants" description="Progress bars with different color tokens.">
        <div className={css({ display: 'flex', flexDirection: 'column', gap: '4', mb: '6', p: '6', bg: isDark ? 'zinc.800' : 'white', rounded: 'xl', border: '1px solid', borderColor: isDark ? 'zinc.700' : 'zinc.200' })}>
          {PROGRESS_COLORS.map((color, i) => (
            <div key={color}>
              <div className={css({ display: 'flex', justifyContent: 'space-between', mb: '1' })}>
                <span className={css({ fontSize: 'xs', fontWeight: 'medium', color: isDark ? 'zinc.400' : 'zinc.600' })}>{color}</span>
                <span className={css({ fontSize: 'xs', fontWeight: 'semibold', color: isDark ? 'zinc.300' : 'zinc.700' })}>{40 + i * 10}%</span>
              </div>
              <div className={css({ width: 'full', height: '2.5', bg: isDark ? 'zinc.700' : 'zinc.200', rounded: 'full', overflow: 'hidden' })}>
                <div
                  className={css({ height: 'full', rounded: 'full', transition: 'width 0.5s ease' })}
                  style={{ width: `${40 + i * 10}%`, backgroundColor: `var(--colors-${color}-500)` }}
                />
              </div>
            </div>
          ))}
        </div>
      </DocSection>

      <DocSection title="Sizes" description="Progress bars in different heights.">
        <div className={css({ display: 'flex', flexDirection: 'column', gap: '5', mb: '6', p: '6', bg: isDark ? 'zinc.800' : 'white', rounded: 'xl', border: '1px solid', borderColor: isDark ? 'zinc.700' : 'zinc.200' })}>
          {[
            { label: 'Extra Small (1)', height: '1' },
            { label: 'Small (2)', height: '2' },
            { label: 'Medium (3)', height: '3' },
            { label: 'Large (4)', height: '4' },
          ].map((s) => (
            <div key={s.label}>
              <span className={css({ fontSize: 'xs', fontWeight: 'medium', color: isDark ? 'zinc.400' : 'zinc.600', display: 'block', mb: '1' })}>{s.label}</span>
              <div className={css({ width: 'full', bg: isDark ? 'zinc.700' : 'zinc.200', rounded: 'full', overflow: 'hidden' })} style={{ height: `var(--spacing-${s.height})` }}>
                <div className={css({ width: '65%', height: 'full', bg: 'blue.500', rounded: 'full' })} />
              </div>
            </div>
          ))}
        </div>
      </DocSection>

      <DocSection title="Animated Stripe" description="Striped progress bar with CSS animation.">
        <div className={css({ mb: '6', p: '6', bg: isDark ? 'zinc.800' : 'white', rounded: 'xl', border: '1px solid', borderColor: isDark ? 'zinc.700' : 'zinc.200' })}>
          <div className={css({ width: 'full', height: '4', bg: isDark ? 'zinc.700' : 'zinc.200', rounded: 'full', overflow: 'hidden' })}>
            <div
              className={css({ width: '70%', height: 'full', bg: 'green.500', rounded: 'full' })}
              style={{
                backgroundImage: 'linear-gradient(45deg, rgba(255,255,255,.15) 25%, transparent 25%, transparent 50%, rgba(255,255,255,.15) 50%, rgba(255,255,255,.15) 75%, transparent 75%, transparent)',
                backgroundSize: '1rem 1rem',
                animation: 'progress-stripe 1s linear infinite',
              }}
            />
          </div>
        </div>
        <CodeBlock
          code={`<div className={css({ w: 'full', h: '4', bg: 'zinc.200', rounded: 'full', overflow: 'hidden' })}>
  <div
    className={css({ w: '70%', h: 'full', bg: 'green.500', rounded: 'full' })}
    style={{
      backgroundImage: 'linear-gradient(45deg, rgba(255,255,255,.15) 25%, transparent 25%, ...)',
      backgroundSize: '1rem 1rem',
    }}
  />
</div>`}
        />
      </DocSection>
    </div>
  );
}
