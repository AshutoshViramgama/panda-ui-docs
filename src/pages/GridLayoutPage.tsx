import { css } from '../../styled-system/css';
import { useTheme } from '../hooks/useTheme';
import { DocSection } from '../components/docs/DocSection';
import { CodeBlock } from '../components/docs/CodeBlock';

export function GridLayoutPage() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const demoBox = () =>
    css({
      p: '4',
      rounded: 'lg',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      fontWeight: 'bold',
      fontSize: 'sm',
    });

  return (
    <div>
      <div className={css({ mb: '10' })}>
        <h1 className={css({ fontSize: '4xl', fontWeight: 'black', color: isDark ? 'zinc.100' : 'zinc.900', mb: '3' })}>Grid & Flexbox</h1>
        <p className={css({ fontSize: 'lg', color: isDark ? 'zinc.400' : 'zinc.600', lineHeight: 'relaxed', maxW: '3xl' })}>
          Layout utilities using CSS Grid and Flexbox properties with Panda CSS tokens.
        </p>
      </div>

      <DocSection title="Flexbox" description="Horizontal and vertical flex layouts.">
        <div className={css({ mb: '4', p: '4', bg: isDark ? 'zinc.800' : 'white', rounded: 'xl', border: '1px solid', borderColor: isDark ? 'zinc.700' : 'zinc.200' })}>
          <p className={css({ fontSize: 'xs', fontWeight: 'semibold', color: isDark ? 'zinc.400' : 'zinc.500', mb: '3', textTransform: 'uppercase', letterSpacing: 'wider' })}>Row (default)</p>
          <div className={css({ display: 'flex', gap: '3' })}>
            {[1, 2, 3].map((n) => (
              <div key={n} className={demoBox()} style={{ backgroundColor: 'var(--colors-blue-500)', flex: '1' }}>{n}</div>
            ))}
          </div>
        </div>
        <div className={css({ mb: '4', p: '4', bg: isDark ? 'zinc.800' : 'white', rounded: 'xl', border: '1px solid', borderColor: isDark ? 'zinc.700' : 'zinc.200' })}>
          <p className={css({ fontSize: 'xs', fontWeight: 'semibold', color: isDark ? 'zinc.400' : 'zinc.500', mb: '3', textTransform: 'uppercase', letterSpacing: 'wider' })}>Justify Content</p>
          {['flex-start', 'center', 'flex-end', 'space-between', 'space-around'].map((jc) => (
            <div key={jc} className={css({ mb: '2' })}>
              <span className={css({ fontSize: 'xs', fontFamily: 'mono', color: isDark ? 'zinc.500' : 'zinc.400', display: 'block', mb: '1' })}>{jc}</span>
              <div className={css({ display: 'flex', gap: '2', p: '2', bg: isDark ? 'zinc.900' : 'zinc.50', rounded: 'md' })} style={{ justifyContent: jc }}>
                {[1, 2, 3].map((n) => (
                  <div key={n} className={css({ px: '4', py: '2', rounded: 'md', bg: 'purple.500', color: 'white', fontSize: 'xs', fontWeight: 'bold' })}>{n}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <CodeBlock
          code={`css({ display: 'flex', gap: '4', justifyContent: 'space-between', alignItems: 'center' })
css({ display: 'flex', flexDirection: 'column', gap: '2' })
css({ display: 'flex', flexWrap: 'wrap', gap: '3' })`}
        />
      </DocSection>

      <DocSection title="CSS Grid" description="Grid layouts with columns and gaps.">
        <div className={css({ mb: '4', p: '4', bg: isDark ? 'zinc.800' : 'white', rounded: 'xl', border: '1px solid', borderColor: isDark ? 'zinc.700' : 'zinc.200' })}>
          <p className={css({ fontSize: 'xs', fontWeight: 'semibold', color: isDark ? 'zinc.400' : 'zinc.500', mb: '3', textTransform: 'uppercase', letterSpacing: 'wider' })}>Equal Columns</p>
          {[2, 3, 4].map((cols) => (
            <div key={cols} className={css({ mb: '3' })}>
              <span className={css({ fontSize: 'xs', fontFamily: 'mono', color: isDark ? 'zinc.500' : 'zinc.400', display: 'block', mb: '1' })}>{cols} columns</span>
              <div className={css({ display: 'grid', gap: '3' })} style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}>
                {Array.from({ length: cols }).map((_, i) => (
                  <div key={i} className={css({ p: '4', rounded: 'lg', bg: 'teal.500', color: 'white', fontWeight: 'bold', fontSize: 'sm', textAlign: 'center' })}>{i + 1}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className={css({ mb: '4', p: '4', bg: isDark ? 'zinc.800' : 'white', rounded: 'xl', border: '1px solid', borderColor: isDark ? 'zinc.700' : 'zinc.200' })}>
          <p className={css({ fontSize: 'xs', fontWeight: 'semibold', color: isDark ? 'zinc.400' : 'zinc.500', mb: '3', textTransform: 'uppercase', letterSpacing: 'wider' })}>Auto-fit Grid</p>
          <div className={css({ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '3' })}>
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className={css({ p: '4', rounded: 'lg', bg: 'indigo.500', color: 'white', fontWeight: 'bold', fontSize: 'sm', textAlign: 'center' })}>{i + 1}</div>
            ))}
          </div>
        </div>
        <CodeBlock
          code={`// Equal columns
css({ display: 'grid', gridTemplateColumns: '3', gap: '4' })

// Auto-fit responsive
css({ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '4' })

// Span columns
css({ gridColumn: 'span 2' })`}
        />
      </DocSection>

      <DocSection title="Gap Tokens" description="Space between flex/grid children.">
        <div className={css({ display: 'flex', flexDirection: 'column', gap: '3', mb: '6' })}>
          {['1', '2', '4', '6', '8'].map((g) => (
            <div key={g} className={css({ p: '3', bg: isDark ? 'zinc.800' : 'white', rounded: 'lg', border: '1px solid', borderColor: isDark ? 'zinc.700' : 'zinc.200' })}>
              <span className={css({ fontSize: 'xs', fontFamily: 'mono', color: 'blue.500', fontWeight: 'semibold', display: 'block', mb: '2' })}>gap: '{g}'</span>
              <div className={css({ display: 'flex' })} style={{ gap: `var(--spacing-${g})` }}>
                {[1, 2, 3, 4].map((n) => (
                  <div key={n} className={css({ px: '3', py: '2', rounded: 'md', bg: 'amber.500', color: 'white', fontSize: 'xs', fontWeight: 'bold' })}>{n}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </DocSection>
    </div>
  );
}
