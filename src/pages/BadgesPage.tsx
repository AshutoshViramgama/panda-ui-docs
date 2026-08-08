import { css } from '../../styled-system/css';
import { useTheme } from '../hooks/useTheme';
import { DocSection } from '../components/docs/DocSection';
import { CodeBlock } from '../components/docs/CodeBlock';

const BADGE_COLORS = ['blue', 'red', 'green', 'purple', 'amber', 'teal', 'pink', 'indigo'] as const;

export function BadgesPage() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div>
      <div className={css({ mb: '10' })}>
        <h1 className={css({ fontSize: '4xl', fontWeight: 'black', color: isDark ? 'zinc.100' : 'zinc.900', mb: '3' })}>Badges</h1>
        <p className={css({ fontSize: 'lg', color: isDark ? 'zinc.400' : 'zinc.600', lineHeight: 'relaxed', maxW: '3xl' })}>
          Small labels for status, counts, and categorization. Available in solid, subtle, and outline variants.
        </p>
      </div>

      <DocSection title="Solid Badges" description="Filled badges with strong visual emphasis.">
        <div className={css({ display: 'flex', flexWrap: 'wrap', gap: '3', mb: '6', p: '6', bg: isDark ? 'zinc.800' : 'white', rounded: 'xl', border: '1px solid', borderColor: isDark ? 'zinc.700' : 'zinc.200' })}>
          {BADGE_COLORS.map((color) => (
            <span
              key={color}
              className={css({ display: 'inline-flex', alignItems: 'center', px: '2.5', py: '0.5', rounded: 'full', fontSize: 'xs', fontWeight: 'semibold', color: 'white' })}
              style={{ backgroundColor: `var(--colors-${color}-500)` }}
            >
              {color}
            </span>
          ))}
        </div>
        <CodeBlock code={`<span className={css({ px: '2.5', py: '0.5', rounded: 'full', fontSize: 'xs', fontWeight: 'semibold', bg: 'blue.500', color: 'white' })}>\n  Badge\n</span>`} />
      </DocSection>

      <DocSection title="Subtle Badges" description="Light background badges for softer visual emphasis.">
        <div className={css({ display: 'flex', flexWrap: 'wrap', gap: '3', mb: '6', p: '6', bg: isDark ? 'zinc.800' : 'white', rounded: 'xl', border: '1px solid', borderColor: isDark ? 'zinc.700' : 'zinc.200' })}>
          {BADGE_COLORS.map((color) => (
            <span
              key={color}
              className={css({ display: 'inline-flex', alignItems: 'center', px: '2.5', py: '0.5', rounded: 'full', fontSize: 'xs', fontWeight: 'semibold' })}
              style={{ backgroundColor: `var(--colors-${color}-${isDark ? '900' : '100'})`, color: `var(--colors-${color}-${isDark ? '300' : '700'})` }}
            >
              {color}
            </span>
          ))}
        </div>
      </DocSection>

      <DocSection title="Outline Badges" description="Bordered badges with transparent background.">
        <div className={css({ display: 'flex', flexWrap: 'wrap', gap: '3', mb: '6', p: '6', bg: isDark ? 'zinc.800' : 'white', rounded: 'xl', border: '1px solid', borderColor: isDark ? 'zinc.700' : 'zinc.200' })}>
          {BADGE_COLORS.map((color) => (
            <span
              key={color}
              className={css({ display: 'inline-flex', alignItems: 'center', px: '2.5', py: '0.5', rounded: 'full', fontSize: 'xs', fontWeight: 'semibold', borderWidth: '1', borderStyle: 'solid', bg: 'transparent' })}
              style={{ borderColor: `var(--colors-${color}-500)`, color: `var(--colors-${color}-500)` }}
            >
              {color}
            </span>
          ))}
        </div>
      </DocSection>

      <DocSection title="Badge Sizes" description="Small, medium, and large badge sizing.">
        <div className={css({ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '3', mb: '6', p: '6', bg: isDark ? 'zinc.800' : 'white', rounded: 'xl', border: '1px solid', borderColor: isDark ? 'zinc.700' : 'zinc.200' })}>
          <span className={css({ px: '2', py: '0.5', rounded: 'full', fontSize: '2xs', fontWeight: 'semibold', bg: 'blue.500', color: 'white' })}>Small</span>
          <span className={css({ px: '2.5', py: '0.5', rounded: 'full', fontSize: 'xs', fontWeight: 'semibold', bg: 'blue.500', color: 'white' })}>Medium</span>
          <span className={css({ px: '3', py: '1', rounded: 'full', fontSize: 'sm', fontWeight: 'semibold', bg: 'blue.500', color: 'white' })}>Large</span>
        </div>
      </DocSection>

      <DocSection title="Badge with Dot" description="Badges with status dot indicator.">
        <div className={css({ display: 'flex', flexWrap: 'wrap', gap: '3', mb: '6', p: '6', bg: isDark ? 'zinc.800' : 'white', rounded: 'xl', border: '1px solid', borderColor: isDark ? 'zinc.700' : 'zinc.200' })}>
          {[
            { label: 'Online', color: 'green' },
            { label: 'Away', color: 'amber' },
            { label: 'Offline', color: 'red' },
            { label: 'Busy', color: 'purple' },
          ].map((item) => (
            <span
              key={item.label}
              className={css({ display: 'inline-flex', alignItems: 'center', gap: '1.5', px: '3', py: '1', rounded: 'full', fontSize: 'xs', fontWeight: 'medium', bg: isDark ? 'zinc.700' : 'zinc.100', color: isDark ? 'zinc.300' : 'zinc.700' })}
            >
              <span
                className={css({ width: '2', height: '2', rounded: 'full', flexShrink: '0' })}
                style={{ backgroundColor: `var(--colors-${item.color}-500)` }}
              />
              {item.label}
            </span>
          ))}
        </div>
        <CodeBlock
          code={`<span className={css({ display: 'inline-flex', alignItems: 'center', gap: '1.5', px: '3', py: '1', rounded: 'full', fontSize: 'xs', fontWeight: 'medium', bg: 'zinc.100', color: 'zinc.700' })}>\n  <span className={css({ w: '2', h: '2', rounded: 'full', bg: 'green.500' })} />\n  Online\n</span>`}
        />
      </DocSection>
    </div>
  );
}
