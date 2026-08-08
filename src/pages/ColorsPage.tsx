import { css } from '../../styled-system/css';
import { useTheme } from '../hooks/useTheme';
import { DocSection } from '../components/docs/DocSection';
import { CodeBlock } from '../components/docs/CodeBlock';
import { COLOR_PALETTES, COLOR_SCALES } from '../constants/tokens';

export function ColorsPage() {
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
          Colors
        </h1>
        <p
          className={css({
            fontSize: 'lg',
            color: isDark ? 'zinc.400' : 'zinc.600',
            lineHeight: 'relaxed',
            maxW: '3xl',
          })}
        >
          Panda CSS ships with a comprehensive color palette inspired by Tailwind CSS. Each color
          has 11 shades ranging from 50 (lightest) to 950 (darkest).
        </p>
      </div>

      <DocSection title="Usage" description="Apply colors using the css() function.">
        <CodeBlock
          title="Color tokens"
          code={`import { css } from '../styled-system/css';

// Background color
css({ bg: 'blue.500' })

// Text color
css({ color: 'red.600' })

// Border color
css({ borderColor: 'green.300' })

// With opacity
css({ bg: 'blue.500/50' }) // 50% opacity`}
        />
      </DocSection>

      {COLOR_PALETTES.map((palette) => (
        <DocSection
          key={palette}
          title={palette.charAt(0).toUpperCase() + palette.slice(1)}
          description={`The ${palette} color palette with all shade variations.`}
        >
          <div
            className={css({
              display: 'flex',
              gap: '1',
              mb: '4',
              flexWrap: 'wrap',
            })}
          >
            {COLOR_SCALES.map((scale) => (
              <div
                key={`${palette}.${scale}`}
                className={css({
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '1',
                  flex: '1',
                  minW: '16',
                })}
              >
                <div
                  className={css({
                    width: 'full',
                    height: '14',
                    rounded: 'lg',
                    shadow: 'sm',
                    border: '1px solid',
                    borderColor: isDark ? 'zinc.700/50' : 'zinc.200',
                    transition: 'transform 0.15s, shadow 0.15s',
                    _hover: {
                      transform: 'scale(1.08)',
                      shadow: 'md',
                    },
                  })}
                  style={{
                    backgroundColor: `var(--colors-${palette}-${scale})`,
                  }}
                />
                <span
                  className={css({
                    fontSize: 'xs',
                    fontFamily: 'mono',
                    color: isDark ? 'zinc.500' : 'zinc.400',
                  })}
                >
                  {scale}
                </span>
              </div>
            ))}
          </div>
          <CodeBlock
            code={`css({ bg: '${palette}.500', color: '${palette}.50' })`}
            language="ts"
          />
        </DocSection>
      ))}
    </div>
  );
}
