import { css } from '../../styled-system/css';
import { useTheme } from '../hooks/useTheme';
import { DocSection } from '../components/docs/DocSection';
import { CodeBlock } from '../components/docs/CodeBlock';
import { PropsTable } from '../components/docs/PropsTable';
import { BORDER_RADII, BORDER_WIDTHS } from '../constants/tokens';

export function BordersPage() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div>
      <div className={css({ mb: '10' })}>
        <h1 className={css({ fontSize: '4xl', fontWeight: 'black', color: isDark ? 'zinc.100' : 'zinc.900', mb: '3' })}>
          Borders
        </h1>
        <p className={css({ fontSize: 'lg', color: isDark ? 'zinc.400' : 'zinc.600', lineHeight: 'relaxed', maxW: '3xl' })}>
          Border tokens for controlling border radius, width, and style across your components.
        </p>
      </div>

      <DocSection title="Border Radius" description="Rounded corner tokens from none to full (circle).">
        <div className={css({ display: 'flex', flexWrap: 'wrap', gap: '6', mb: '6' })}>
          {BORDER_RADII.map((br) => (
            <div
              key={br.token}
              className={css({
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '2',
              })}
            >
              <div
                className={css({
                  width: '20',
                  height: '20',
                  bg: 'blue.500',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: 'xs',
                  fontWeight: 'bold',
                  transition: 'transform 0.2s',
                  _hover: { transform: 'scale(1.1)' },
                })}
                style={{ borderRadius: br.value }}
              >
                {br.token}
              </div>
              <span className={css({ fontFamily: 'mono', fontSize: 'xs', color: isDark ? 'zinc.500' : 'zinc.400' })}>
                {br.value}
              </span>
            </div>
          ))}
        </div>
        <CodeBlock
          code={`css({ rounded: 'md' })       // 0.375rem
css({ rounded: 'lg' })       // 0.5rem
css({ rounded: 'xl' })       // 0.75rem
css({ rounded: 'full' })     // 9999px (circle)
css({ roundedTop: 'lg' })    // Top corners only
css({ roundedLeft: 'xl' })   // Left corners only`}
        />
        <PropsTable
          headers={['Token', 'Value']}
          rows={BORDER_RADII.map((br) => [br.token, br.value])}
        />
      </DocSection>

      <DocSection title="Border Width" description="Control border thickness.">
        <div className={css({ display: 'flex', flexWrap: 'wrap', gap: '6', mb: '6' })}>
          {BORDER_WIDTHS.map((bw) => (
            <div
              key={bw.token}
              className={css({
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '2',
              })}
            >
              <div
                className={css({
                  width: '24',
                  height: '16',
                  rounded: 'lg',
                  bg: isDark ? 'zinc.800' : 'white',
                  borderStyle: 'solid',
                  borderColor: 'blue.500',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                })}
                style={{ borderWidth: bw.value }}
              >
                <span className={css({ fontFamily: 'mono', fontSize: 'xs', color: isDark ? 'zinc.300' : 'zinc.600' })}>
                  {bw.value}
                </span>
              </div>
              <span className={css({ fontFamily: 'mono', fontSize: 'xs', color: isDark ? 'zinc.500' : 'zinc.400' })}>
                {bw.token}
              </span>
            </div>
          ))}
        </div>
        <CodeBlock
          code={`css({ border: '1px solid', borderColor: 'zinc.200' })
css({ borderBottom: '2px solid', borderColor: 'blue.500' })
css({ borderWidth: '4', borderStyle: 'dashed', borderColor: 'red.500' })`}
        />
      </DocSection>

      <DocSection title="Border Colors" description="Use any color token as a border color.">
        <div className={css({ display: 'flex', flexWrap: 'wrap', gap: '3', mb: '6' })}>
          {['red', 'orange', 'amber', 'yellow', 'green', 'emerald', 'teal', 'cyan', 'blue', 'indigo', 'violet', 'purple'].map(
            (color) => (
              <div
                key={color}
                className={css({
                  px: '4',
                  py: '2',
                  rounded: 'lg',
                  bg: isDark ? 'zinc.800' : 'white',
                  fontSize: 'xs',
                  fontFamily: 'mono',
                  color: isDark ? 'zinc.300' : 'zinc.600',
                  borderWidth: '2',
                  borderStyle: 'solid',
                })}
                style={{ borderColor: `var(--colors-${color}-500)` }}
              >
                {color}.500
              </div>
            ),
          )}
        </div>
        <CodeBlock
          code={`css({ borderColor: 'blue.500' })
css({ borderColor: 'red.300' })
css({ borderColor: 'green.600' })`}
        />
      </DocSection>
    </div>
  );
}
