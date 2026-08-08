import { css } from '../../styled-system/css';
import { useTheme } from '../hooks/useTheme';
import { DocSection } from '../components/docs/DocSection';
import { CodeBlock } from '../components/docs/CodeBlock';
import { PropsTable } from '../components/docs/PropsTable';
import { BREAKPOINTS } from '../constants/tokens';

export function ResponsivePage() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div>
      <div className={css({ mb: '10' })}>
        <h1 className={css({ fontSize: '4xl', fontWeight: 'black', color: isDark ? 'zinc.100' : 'zinc.900', mb: '3' })}>Responsive Design</h1>
        <p className={css({ fontSize: 'lg', color: isDark ? 'zinc.400' : 'zinc.600', lineHeight: 'relaxed', maxW: '3xl' })}>
          Panda CSS provides responsive utilities through breakpoint tokens. Apply different styles at different screen sizes.
        </p>
      </div>

      <DocSection title="Breakpoints" description="Default breakpoint tokens and their values.">
        <PropsTable
          headers={['Token', 'Min Width', 'Target Devices']}
          rows={[
            ['base', '0px', 'Mobile (default)'],
            ...BREAKPOINTS.map((bp) => [
              bp.token,
              bp.value,
              bp.token === 'sm' ? 'Small tablets' :
              bp.token === 'md' ? 'Tablets' :
              bp.token === 'lg' ? 'Laptops' :
              bp.token === 'xl' ? 'Desktops' : 'Large desktops',
            ]),
          ]}
        />
      </DocSection>

      <DocSection title="Responsive Syntax" description="Use object syntax to apply responsive styles.">
        <CodeBlock
          title="Object syntax"
          code={`css({
  // Mobile first approach
  fontSize: { base: 'sm', md: 'lg', xl: '2xl' },
  p: { base: '4', md: '6', lg: '8' },
  display: { base: 'block', md: 'flex' },
  gridTemplateColumns: { base: '1', md: '2', lg: '3' },
})`}
        />
      </DocSection>

      <DocSection title="Responsive Demo" description="Resize your browser to see styles change.">
        <div className={css({ mb: '6', p: '6', bg: isDark ? 'zinc.800' : 'white', rounded: 'xl', border: '1px solid', borderColor: isDark ? 'zinc.700' : 'zinc.200' })}>
          <div
            className={css({
              display: 'grid',
              gridTemplateColumns: { base: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' },
              gap: '4',
            })}
          >
            {[
              { label: 'Users', value: '2,340', color: 'blue' },
              { label: 'Revenue', value: '$18.2K', color: 'green' },
              { label: 'Orders', value: '482', color: 'purple' },
              { label: 'Growth', value: '+12%', color: 'amber' },
            ].map((stat) => (
              <div
                key={stat.label}
                className={css({ p: '4', rounded: 'lg', border: '1px solid', borderColor: isDark ? 'zinc.600' : 'zinc.200', textAlign: 'center' })}
              >
                <p className={css({ fontSize: 'xs', color: isDark ? 'zinc.400' : 'zinc.500', mb: '1' })}>{stat.label}</p>
                <p
                  className={css({ fontSize: { base: 'lg', md: '2xl' }, fontWeight: 'bold' })}
                  style={{ color: `var(--colors-${stat.color}-500)` }}
                >
                  {stat.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </DocSection>

      <DocSection title="Hide/Show by Breakpoint" description="Conditionally show or hide elements at different breakpoints.">
        <div className={css({ mb: '6', p: '6', bg: isDark ? 'zinc.800' : 'white', rounded: 'xl', border: '1px solid', borderColor: isDark ? 'zinc.700' : 'zinc.200' })}>
          <div className={css({ display: { base: 'block', md: 'none' }, p: '3', rounded: 'lg', bg: 'red.500/10', color: 'red.500', fontSize: 'sm', fontWeight: 'medium', textAlign: 'center', mb: '2' })}>
            📱 Visible on mobile only (base → md)
          </div>
          <div className={css({ display: { base: 'none', md: 'block', lg: 'none' }, p: '3', rounded: 'lg', bg: 'amber.500/10', color: 'amber.500', fontSize: 'sm', fontWeight: 'medium', textAlign: 'center', mb: '2' })}>
            📟 Visible on tablet only (md → lg)
          </div>
          <div className={css({ display: { base: 'none', lg: 'block' }, p: '3', rounded: 'lg', bg: 'green.500/10', color: 'green.500', fontSize: 'sm', fontWeight: 'medium', textAlign: 'center' })}>
            🖥️ Visible on desktop only (lg+)
          </div>
        </div>
        <CodeBlock
          code={`// Hide on mobile, show on desktop
css({ display: { base: 'none', lg: 'block' } })

// Show on mobile, hide on desktop
css({ display: { base: 'block', md: 'none' } })

// Responsive font size
css({ fontSize: { base: 'sm', md: 'lg', xl: '2xl' } })`}
        />
      </DocSection>

      <DocSection title="Responsive Spacing" description="Different padding and margins per breakpoint.">
        <div className={css({ mb: '6' })}>
          <div
            className={css({
              bg: 'blue.500',
              color: 'white',
              fontWeight: 'bold',
              fontSize: 'sm',
              rounded: 'lg',
              textAlign: 'center',
              p: { base: '3', sm: '4', md: '6', lg: '8', xl: '10' },
              transition: 'padding 0.3s',
            })}
          >
            Responsive Padding — resize the browser!
            <span className={css({ display: 'block', fontSize: 'xs', fontWeight: 'normal', opacity: '0.8', mt: '1' })}>
              base: p=3 → sm: p=4 → md: p=6 → lg: p=8 → xl: p=10
            </span>
          </div>
        </div>
      </DocSection>
    </div>
  );
}
