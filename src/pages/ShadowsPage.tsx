import { css } from '../../styled-system/css';
import { useTheme } from '../hooks/useTheme';
import { DocSection } from '../components/docs/DocSection';
import { CodeBlock } from '../components/docs/CodeBlock';
import { PropsTable } from '../components/docs/PropsTable';
import { SHADOWS } from '../constants/tokens';

export function ShadowsPage() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div>
      <div className={css({ mb: '10' })}>
        <h1 className={css({ fontSize: '4xl', fontWeight: 'black', color: isDark ? 'zinc.100' : 'zinc.900', mb: '3' })}>
          Shadows
        </h1>
        <p className={css({ fontSize: 'lg', color: isDark ? 'zinc.400' : 'zinc.600', lineHeight: 'relaxed', maxW: '3xl' })}>
          Box shadow tokens for adding depth and elevation to elements. From subtle xs shadows to dramatic 2xl shadows.
        </p>
      </div>

      <DocSection title="Shadow Scale" description="Visual comparison of all shadow tokens.">
        <div className={css({ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '6', mb: '6' })}>
          {SHADOWS.map((sh) => (
            <div
              key={sh.token}
              className={css({
                p: '6',
                rounded: 'xl',
                bg: isDark ? 'zinc.800' : 'white',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '3',
                transition: 'transform 0.2s',
                _hover: { transform: 'translateY(-2px)' },
              })}
              style={{ boxShadow: sh.value }}
            >
              <span className={css({ fontSize: 'lg', fontWeight: 'bold', color: isDark ? 'zinc.200' : 'zinc.800' })}>
                {sh.token}
              </span>
              <span className={css({ fontSize: 'xs', fontFamily: 'mono', color: isDark ? 'zinc.500' : 'zinc.400', textAlign: 'center' })}>
                shadow: '{sh.token}'
              </span>
            </div>
          ))}
        </div>
        <CodeBlock
          code={`css({ shadow: 'xs' })     // Subtle shadow
css({ shadow: 'sm' })     // Small shadow
css({ shadow: 'md' })     // Medium shadow
css({ shadow: 'lg' })     // Large shadow
css({ shadow: 'xl' })     // Extra large shadow
css({ shadow: '2xl' })    // Dramatic shadow
css({ shadow: 'inner' })  // Inset shadow`}
        />
      </DocSection>

      <DocSection title="Interactive Shadows" description="Shadows work great with hover states for interactive elements.">
        <div className={css({ display: 'flex', flexWrap: 'wrap', gap: '4', mb: '6' })}>
          <div
            className={css({
              px: '6',
              py: '4',
              rounded: 'xl',
              bg: isDark ? 'zinc.800' : 'white',
              border: '1px solid',
              borderColor: isDark ? 'zinc.700' : 'zinc.200',
              shadow: 'sm',
              _hover: { shadow: 'xl', transform: 'translateY(-4px)' },
              transition: 'all 0.3s',
              cursor: 'pointer',
            })}
          >
            <p className={css({ fontWeight: 'bold', color: isDark ? 'zinc.200' : 'zinc.800', mb: '1' })}>Hover me</p>
            <p className={css({ fontSize: 'sm', color: isDark ? 'zinc.400' : 'zinc.500' })}>sm → xl shadow</p>
          </div>
          <div
            className={css({
              px: '6',
              py: '4',
              rounded: 'xl',
              bg: 'blue.500',
              color: 'white',
              shadow: 'md',
              _hover: { shadow: '2xl', transform: 'translateY(-4px)' },
              transition: 'all 0.3s',
              cursor: 'pointer',
            })}
          >
            <p className={css({ fontWeight: 'bold', mb: '1' })}>Colored Shadow</p>
            <p className={css({ fontSize: 'sm', opacity: '0.8' })}>md → 2xl shadow</p>
          </div>
          <div
            className={css({
              px: '6',
              py: '4',
              rounded: 'xl',
              bg: isDark ? 'zinc.800' : 'white',
              shadow: 'inner',
              border: '1px solid',
              borderColor: isDark ? 'zinc.700' : 'zinc.200',
            })}
          >
            <p className={css({ fontWeight: 'bold', color: isDark ? 'zinc.200' : 'zinc.800', mb: '1' })}>Inner Shadow</p>
            <p className={css({ fontSize: 'sm', color: isDark ? 'zinc.400' : 'zinc.500' })}>Inset effect</p>
          </div>
        </div>
        <CodeBlock
          code={`css({
  shadow: 'sm',
  _hover: {
    shadow: 'xl',
    transform: 'translateY(-4px)',
  },
  transition: 'all 0.3s',
})`}
        />
      </DocSection>

      <DocSection title="Token Reference">
        <PropsTable
          headers={['Token', 'CSS Value']}
          rows={SHADOWS.map((sh) => [sh.token, sh.value])}
        />
      </DocSection>
    </div>
  );
}
