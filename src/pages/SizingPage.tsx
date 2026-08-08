import { css } from '../../styled-system/css';
import { useTheme } from '../hooks/useTheme';
import { DocSection } from '../components/docs/DocSection';
import { CodeBlock } from '../components/docs/CodeBlock';
import { PropsTable } from '../components/docs/PropsTable';
import { SIZING_TOKENS } from '../constants/tokens';

export function SizingPage() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div>
      <div className={css({ mb: '10' })}>
        <h1 className={css({ fontSize: '4xl', fontWeight: 'black', color: isDark ? 'zinc.100' : 'zinc.900', mb: '3' })}>
          Sizing
        </h1>
        <p className={css({ fontSize: 'lg', color: isDark ? 'zinc.400' : 'zinc.600', lineHeight: 'relaxed', maxW: '3xl' })}>
          Sizing tokens control width, height, min-width, min-height, max-width, and max-height properties.
        </p>
      </div>

      <DocSection title="Usage" description="Apply sizing using width and height properties.">
        <CodeBlock
          code={`// Fixed sizes
css({ w: '20' })         // 5rem
css({ h: '10' })         // 2.5rem

// Full width/height
css({ w: 'full' })       // 100%
css({ h: 'screen' })     // 100vh

// Max width (useful for containers)
css({ maxW: '4xl' })     // 56rem
css({ maxW: 'prose' })   // 65ch

// Min dimensions
css({ minH: 'screen' })  // 100vh
css({ minW: '0' })       // 0rem`}
        />
      </DocSection>

      <DocSection title="Width & Height Scale" description="Visual reference for common sizing tokens.">
        <div className={css({ mb: '6' })}>
          {SIZING_TOKENS.slice(0, 20).map((sz) => (
            <div
              key={sz.token}
              className={css({
                display: 'flex',
                alignItems: 'center',
                gap: '4',
                py: '2',
                borderBottom: '1px solid',
                borderColor: isDark ? 'zinc.800/30' : 'zinc.100',
              })}
            >
              <span className={css({ fontFamily: 'mono', fontSize: 'xs', color: 'blue.500', minW: '8', fontWeight: 'semibold', textAlign: 'right' })}>
                {sz.token}
              </span>
              <span className={css({ fontFamily: 'mono', fontSize: 'xs', color: isDark ? 'zinc.500' : 'zinc.400', minW: '16' })}>
                {sz.value}
              </span>
              <div
                className={css({
                  height: '6',
                  bg: 'purple.500',
                  rounded: 'sm',
                  minW: '1',
                })}
                style={{
                  width: sz.value === '100%' ? '100%' : `${Math.min(parseFloat(sz.value) * 16, 400)}px`,
                }}
              />
            </div>
          ))}
        </div>
      </DocSection>

      <DocSection title="Max Width Reference" description="Commonly used max-width values.">
        <PropsTable
          headers={['Token', 'Value', 'Use Case']}
          rows={[
            ['xs', '20rem (320px)', 'Small cards, tooltips'],
            ['sm', '24rem (384px)', 'Narrow cards, modals'],
            ['md', '28rem (448px)', 'Form containers'],
            ['lg', '32rem (512px)', 'Content cards'],
            ['xl', '36rem (576px)', 'Wide cards'],
            ['2xl', '42rem (672px)', 'Articles'],
            ['3xl', '48rem (768px)', 'Blog content'],
            ['4xl', '56rem (896px)', 'Page content'],
            ['5xl', '64rem (1024px)', 'Large containers'],
            ['6xl', '72rem (1152px)', 'Wide containers'],
            ['7xl', '80rem (1280px)', 'Full-width layouts'],
            ['full', '100%', 'Full parent width'],
          ]}
        />
      </DocSection>

      <DocSection title="Token Reference">
        <PropsTable
          headers={['Token', 'Value']}
          rows={SIZING_TOKENS.map((sz) => [sz.token, sz.value])}
        />
      </DocSection>
    </div>
  );
}
