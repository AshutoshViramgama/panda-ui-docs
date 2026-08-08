import { css } from '../../styled-system/css';
import { useTheme } from '../hooks/useTheme';
import { DocSection } from '../components/docs/DocSection';
import { CodeBlock } from '../components/docs/CodeBlock';
import { PropsTable } from '../components/docs/PropsTable';
import {
  FONT_SIZES,
  FONT_WEIGHTS,
  LINE_HEIGHTS,
  LETTER_SPACINGS,
} from '../constants/tokens';

export function TypographyPage() {
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
          Typography
        </h1>
        <p
          className={css({
            fontSize: 'lg',
            color: isDark ? 'zinc.400' : 'zinc.600',
            lineHeight: 'relaxed',
            maxW: '3xl',
          })}
        >
          Typography tokens control font sizes, weights, line heights, and letter spacing for
          consistent text styling across your application.
        </p>
      </div>

      <DocSection
        title="Font Size"
        description="Scale from xs (0.75rem) to 9xl (8rem). Use the fontSize property."
      >
        <div className={css({ mb: '6' })}>
          {FONT_SIZES.map((fs) => (
            <div
              key={fs.token}
              className={css({
                display: 'flex',
                alignItems: 'baseline',
                gap: '4',
                py: '3',
                borderBottom: '1px solid',
                borderColor: isDark ? 'zinc.800/50' : 'zinc.100',
              })}
            >
              <span
                className={css({
                  fontFamily: 'mono',
                  fontSize: 'xs',
                  color: 'blue.500',
                  minW: '12',
                  fontWeight: 'semibold',
                })}
              >
                {fs.token}
              </span>
              <span
                className={css({
                  fontFamily: 'mono',
                  fontSize: 'xs',
                  color: isDark ? 'zinc.500' : 'zinc.400',
                  minW: '20',
                })}
              >
                {fs.value}
              </span>
              <span
                className={css({
                  color: isDark ? 'zinc.200' : 'zinc.800',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                })}
                style={{ fontSize: fs.value }}
              >
                The quick brown fox
              </span>
            </div>
          ))}
        </div>
        <CodeBlock
          code={`css({ fontSize: 'lg' })    // 1.125rem
css({ fontSize: '3xl' })   // 1.875rem
css({ fontSize: '6xl' })   // 3.75rem`}
        />
      </DocSection>

      <DocSection
        title="Font Weight"
        description="Nine font weight tokens from thin (100) to black (900)."
      >
        <div className={css({ mb: '6' })}>
          {FONT_WEIGHTS.map((fw) => (
            <div
              key={fw.token}
              className={css({
                display: 'flex',
                alignItems: 'center',
                gap: '4',
                py: '3',
                borderBottom: '1px solid',
                borderColor: isDark ? 'zinc.800/50' : 'zinc.100',
              })}
            >
              <span
                className={css({
                  fontFamily: 'mono',
                  fontSize: 'xs',
                  color: 'blue.500',
                  minW: '20',
                  fontWeight: 'semibold',
                })}
              >
                {fw.token}
              </span>
              <span
                className={css({
                  fontFamily: 'mono',
                  fontSize: 'xs',
                  color: isDark ? 'zinc.500' : 'zinc.400',
                  minW: '10',
                })}
              >
                {fw.value}
              </span>
              <span
                className={css({
                  fontSize: 'xl',
                  color: isDark ? 'zinc.200' : 'zinc.800',
                })}
                style={{ fontWeight: Number(fw.value) }}
              >
                The quick brown fox jumps over the lazy dog
              </span>
            </div>
          ))}
        </div>
        <CodeBlock
          code={`css({ fontWeight: 'bold' })       // 700
css({ fontWeight: 'semibold' })   // 600
css({ fontWeight: 'medium' })     // 500`}
        />
      </DocSection>

      <DocSection
        title="Line Height"
        description="Line height tokens for controlling text vertical spacing."
      >
        <PropsTable
          headers={['Token', 'Value', 'Preview']}
          rows={LINE_HEIGHTS.map((lh) => [
            lh.token,
            lh.value,
            <span
              key={lh.token}
              className={css({
                fontSize: 'sm',
                color: isDark ? 'zinc.300' : 'zinc.700',
                display: 'block',
                maxW: 'sm',
              })}
              style={{ lineHeight: lh.value }}
            >
              The quick brown fox jumps over the lazy dog. Pack my box with five dozen liquor
              jugs.
            </span>,
          ])}
        />
        <CodeBlock
          code={`css({ lineHeight: 'tight' })     // 1.25
css({ lineHeight: 'relaxed' })   // 1.625
css({ lineHeight: 'loose' })     // 2`}
        />
      </DocSection>

      <DocSection
        title="Letter Spacing"
        description="Control the tracking (letter spacing) of text."
      >
        <PropsTable
          headers={['Token', 'Value', 'Preview']}
          rows={LETTER_SPACINGS.map((ls) => [
            ls.token,
            ls.value,
            <span
              key={ls.token}
              className={css({
                fontSize: 'lg',
                color: isDark ? 'zinc.300' : 'zinc.700',
                fontWeight: 'medium',
              })}
              style={{ letterSpacing: ls.value }}
            >
              LETTER SPACING
            </span>,
          ])}
        />
        <CodeBlock
          code={`css({ letterSpacing: 'tight' })    // -0.025em
css({ letterSpacing: 'wide' })     // 0.025em
css({ letterSpacing: 'widest' })   // 0.1em`}
        />
      </DocSection>

      <DocSection
        title="Font Family"
        description="Default font family tokens available in Panda CSS."
      >
        <div className={css({ mb: '6' })}>
          {[
            { token: 'sans', sample: 'The quick brown fox jumps over the lazy dog' },
            { token: 'serif', sample: 'The quick brown fox jumps over the lazy dog' },
            { token: 'mono', sample: 'const x = { key: "value" };' },
          ].map((ff) => (
            <div
              key={ff.token}
              className={css({
                p: '4',
                mb: '3',
                bg: isDark ? 'zinc.800' : 'white',
                rounded: 'lg',
                border: '1px solid',
                borderColor: isDark ? 'zinc.700' : 'zinc.200',
              })}
            >
              <span
                className={css({
                  fontFamily: 'mono',
                  fontSize: 'xs',
                  color: 'blue.500',
                  fontWeight: 'semibold',
                  display: 'block',
                  mb: '2',
                })}
              >
                {ff.token}
              </span>
              <span
                className={css({
                  fontSize: 'xl',
                  color: isDark ? 'zinc.200' : 'zinc.800',
                  fontFamily: ff.token as 'sans' | 'serif' | 'mono',
                })}
              >
                {ff.sample}
              </span>
            </div>
          ))}
        </div>
        <CodeBlock
          code={`css({ fontFamily: 'sans' })   // System sans-serif stack
css({ fontFamily: 'serif' })  // System serif stack
css({ fontFamily: 'mono' })   // System monospace stack`}
        />
      </DocSection>
    </div>
  );
}
