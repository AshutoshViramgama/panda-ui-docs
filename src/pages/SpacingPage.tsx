import { css } from '../../styled-system/css';
import { useTheme } from '../hooks/useTheme';
import { DocSection } from '../components/docs/DocSection';
import { CodeBlock } from '../components/docs/CodeBlock';
import { PropsTable } from '../components/docs/PropsTable';
import { SPACING_TOKENS } from '../constants/tokens';

export function SpacingPage() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div>
      <div className={css({ mb: '10' })}>
        <h1
          className={css({
            fontSize: '4xl',
            fontWeight: 'black',
            color: isDark ? 'zinc.100' : 'zinc.900',
            mb: '3',
          })}
        >
          Spacing
        </h1>
        <p
          className={css({
            fontSize: 'lg',
            color: isDark ? 'zinc.400' : 'zinc.600',
            lineHeight: 'relaxed',
            maxW: '3xl',
          })}
        >
          Spacing tokens are used for padding, margin, gap, and other layout properties. The scale
          follows a consistent 0.25rem increment pattern.
        </p>
      </div>

      <DocSection title="Usage" description="Apply spacing using shorthand properties.">
        <CodeBlock
          code={`// Padding
css({ p: '4' })       // 1rem all sides
css({ px: '6' })      // 1.5rem horizontal
css({ py: '2' })      // 0.5rem vertical
css({ pt: '8' })      // 2rem top only

// Margin
css({ m: '4' })       // 1rem all sides
css({ mx: 'auto' })   // auto horizontal (centering)
css({ mb: '6' })      // 1.5rem bottom

// Gap (for Flex/Grid)
css({ gap: '4' })     // 1rem gap`}
        />
      </DocSection>

      <DocSection
        title="Spacing Scale"
        description="Visual reference of all spacing tokens with proportional bars."
      >
        <div className={css({ mb: '6' })}>
          {SPACING_TOKENS.slice(0, 30).map((sp) => (
            <div
              key={sp.token}
              className={css({
                display: 'flex',
                alignItems: 'center',
                gap: '4',
                py: '2',
                borderBottom: '1px solid',
                borderColor: isDark ? 'zinc.800/30' : 'zinc.100',
              })}
            >
              <span
                className={css({
                  fontFamily: 'mono',
                  fontSize: 'xs',
                  color: 'blue.500',
                  minW: '8',
                  fontWeight: 'semibold',
                  textAlign: 'right',
                })}
              >
                {sp.token}
              </span>
              <span
                className={css({
                  fontFamily: 'mono',
                  fontSize: 'xs',
                  color: isDark ? 'zinc.500' : 'zinc.400',
                  minW: '16',
                })}
              >
                {sp.value}
              </span>
              <div
                className={css({
                  height: '6',
                  bg: 'blue.500',
                  rounded: 'sm',
                  transition: 'width 0.3s',
                  minW: '1',
                })}
                style={{
                  width: `${Math.min(parseFloat(sp.value) * 16, 400)}px`,
                }}
              />
            </div>
          ))}
        </div>
      </DocSection>

      <DocSection
        title="Token Reference"
        description="Complete list of all available spacing tokens."
      >
        <PropsTable
          headers={['Token', 'Value', 'Pixels']}
          rows={SPACING_TOKENS.map((sp) => [
            sp.token,
            sp.value,
            `${parseFloat(sp.value) * 16}px`,
          ])}
        />
      </DocSection>
    </div>
  );
}
