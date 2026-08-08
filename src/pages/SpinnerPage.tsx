import { css } from '../../styled-system/css';
import { useTheme } from '../hooks/useTheme';
import { DocSection } from '../components/docs/DocSection';
import { CodeBlock } from '../components/docs/CodeBlock';

export function SpinnerPage() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div>
      <div className={css({ mb: '10' })}>
        <h1 className={css({ fontSize: '4xl', fontWeight: 'black', color: isDark ? 'zinc.100' : 'zinc.900', mb: '3' })}>Spinner</h1>
        <p className={css({ fontSize: 'lg', color: isDark ? 'zinc.400' : 'zinc.600', lineHeight: 'relaxed', maxW: '3xl' })}>
          Loading spinners for indicating async operations. CSS-only implementation with sizes and colors.
        </p>
      </div>

      <DocSection title="Basic Spinner" description="Default border-based spinner animation.">
        <div className={css({ display: 'flex', alignItems: 'center', gap: '6', mb: '6', p: '6', bg: isDark ? 'zinc.800' : 'white', rounded: 'xl', border: '1px solid', borderColor: isDark ? 'zinc.700' : 'zinc.200' })}>
          <div
            className={css({
              width: '8',
              height: '8',
              border: '3px solid',
              borderColor: isDark ? 'zinc.700' : 'zinc.200',
              borderTopColor: 'blue.500',
              rounded: 'full',
              animation: 'spin 0.7s linear infinite',
            })}
          />
          <span className={css({ fontSize: 'sm', color: isDark ? 'zinc.400' : 'zinc.500' })}>Loading...</span>
        </div>
      </DocSection>

      <DocSection title="Spinner Sizes" description="From xs to xl sizing.">
        <div className={css({ display: 'flex', alignItems: 'center', gap: '8', mb: '6', p: '6', bg: isDark ? 'zinc.800' : 'white', rounded: 'xl', border: '1px solid', borderColor: isDark ? 'zinc.700' : 'zinc.200' })}>
          {[
            { label: 'XS', size: '4', borderW: '2px' },
            { label: 'SM', size: '6', borderW: '2px' },
            { label: 'MD', size: '8', borderW: '3px' },
            { label: 'LG', size: '12', borderW: '3px' },
            { label: 'XL', size: '16', borderW: '4px' },
          ].map((sp) => (
            <div key={sp.label} className={css({ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2' })}>
              <div
                className={css({ rounded: 'full', animation: 'spin 0.7s linear infinite' })}
                style={{
                  width: `var(--spacing-${sp.size})`,
                  height: `var(--spacing-${sp.size})`,
                  border: `${sp.borderW} solid ${isDark ? 'var(--colors-zinc-700)' : 'var(--colors-zinc-200)'}`,
                  borderTopColor: 'var(--colors-blue-500)',
                }}
              />
              <span className={css({ fontSize: 'xs', fontFamily: 'mono', color: isDark ? 'zinc.500' : 'zinc.400' })}>{sp.label}</span>
            </div>
          ))}
        </div>
      </DocSection>

      <DocSection title="Color Variants" description="Spinners using different color tokens.">
        <div className={css({ display: 'flex', alignItems: 'center', gap: '6', mb: '6', p: '6', bg: isDark ? 'zinc.800' : 'white', rounded: 'xl', border: '1px solid', borderColor: isDark ? 'zinc.700' : 'zinc.200' })}>
          {['blue', 'red', 'green', 'purple', 'amber', 'teal', 'pink'].map((color) => (
            <div
              key={color}
              className={css({ width: '8', height: '8', rounded: 'full', animation: 'spin 0.7s linear infinite' })}
              style={{
                border: `3px solid ${isDark ? 'var(--colors-zinc-700)' : 'var(--colors-zinc-200)'}`,
                borderTopColor: `var(--colors-${color}-500)`,
              }}
            />
          ))}
        </div>
      </DocSection>

      <DocSection title="Button with Spinner" description="Inline spinner inside a loading button.">
        <div className={css({ display: 'flex', gap: '4', mb: '6', p: '6', bg: isDark ? 'zinc.800' : 'white', rounded: 'xl', border: '1px solid', borderColor: isDark ? 'zinc.700' : 'zinc.200' })}>
          <button className={css({ px: '5', py: '2.5', rounded: 'lg', fontSize: 'sm', fontWeight: 'semibold', bg: 'blue.500', color: 'white', border: 'none', display: 'inline-flex', alignItems: 'center', gap: '2', cursor: 'wait' })}>
            <span
              className={css({ display: 'inline-block', width: '4', height: '4', border: '2px solid', borderColor: 'white/30', borderTopColor: 'white', rounded: 'full', animation: 'spin 0.6s linear infinite' })}
            />
            Saving...
          </button>
          <button className={css({ px: '5', py: '2.5', rounded: 'lg', fontSize: 'sm', fontWeight: 'semibold', bg: isDark ? 'zinc.700' : 'zinc.200', color: isDark ? 'zinc.300' : 'zinc.700', border: 'none', display: 'inline-flex', alignItems: 'center', gap: '2', cursor: 'wait' })}>
            <span
              className={css({ display: 'inline-block', width: '4', height: '4', rounded: 'full', animation: 'spin 0.6s linear infinite' })}
              style={{
                border: `2px solid ${isDark ? 'var(--colors-zinc-600)' : 'var(--colors-zinc-300)'}`,
                borderTopColor: isDark ? 'var(--colors-zinc-300)' : 'var(--colors-zinc-600)',
              }}
            />
            Loading...
          </button>
        </div>
        <CodeBlock
          code={`<button className={css({ display: 'inline-flex', alignItems: 'center', gap: '2', cursor: 'wait', /* ...styles */ })}>
  <span className={css({
    display: 'inline-block',
    w: '4', h: '4',
    border: '2px solid',
    borderColor: 'white/30',
    borderTopColor: 'white',
    rounded: 'full',
    animation: 'spin 0.6s linear infinite',
  })} />
  Saving...
</button>`}
        />
      </DocSection>
    </div>
  );
}
