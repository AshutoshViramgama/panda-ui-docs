import { css } from '../../styled-system/css';
import { useTheme } from '../hooks/useTheme';
import { DocSection } from '../components/docs/DocSection';
import { CodeBlock } from '../components/docs/CodeBlock';

export function BreadcrumbPage() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div>
      <div className={css({ mb: '10' })}>
        <h1 className={css({ fontSize: '4xl', fontWeight: 'black', color: isDark ? 'zinc.100' : 'zinc.900', mb: '3' })}>Breadcrumb</h1>
        <p className={css({ fontSize: 'lg', color: isDark ? 'zinc.400' : 'zinc.600', lineHeight: 'relaxed', maxW: '3xl' })}>
          Navigation breadcrumbs for showing the user's location in a page hierarchy.
        </p>
      </div>

      <DocSection title="Default Breadcrumb" description="Slash-separated breadcrumb navigation.">
        <div className={css({ mb: '6', p: '6', bg: isDark ? 'zinc.800' : 'white', rounded: 'xl', border: '1px solid', borderColor: isDark ? 'zinc.700' : 'zinc.200' })}>
          <nav className={css({ display: 'flex', alignItems: 'center', gap: '2', fontSize: 'sm' })}>
            {['Home', 'Components', 'Breadcrumb'].map((item, i, arr) => (
              <span key={item} className={css({ display: 'flex', alignItems: 'center', gap: '2' })}>
                {i > 0 && <span className={css({ color: isDark ? 'zinc.600' : 'zinc.400' })}>/</span>}
                {i < arr.length - 1 ? (
                  <a href="#" className={css({ color: 'blue.500', textDecoration: 'none', _hover: { textDecoration: 'underline' }, transition: 'color 0.15s' })}>{item}</a>
                ) : (
                  <span className={css({ color: isDark ? 'zinc.400' : 'zinc.500', fontWeight: 'medium' })}>{item}</span>
                )}
              </span>
            ))}
          </nav>
        </div>
      </DocSection>

      <DocSection title="Arrow Separator" description="Breadcrumb with chevron/arrow separators.">
        <div className={css({ mb: '6', p: '6', bg: isDark ? 'zinc.800' : 'white', rounded: 'xl', border: '1px solid', borderColor: isDark ? 'zinc.700' : 'zinc.200' })}>
          <nav className={css({ display: 'flex', alignItems: 'center', gap: '2', fontSize: 'sm' })}>
            {['Dashboard', 'Projects', 'Panda CSS', 'Settings'].map((item, i, arr) => (
              <span key={item} className={css({ display: 'flex', alignItems: 'center', gap: '2' })}>
                {i > 0 && <span className={css({ color: isDark ? 'zinc.600' : 'zinc.400' })}>›</span>}
                {i < arr.length - 1 ? (
                  <a href="#" className={css({ color: 'blue.500', textDecoration: 'none', _hover: { textDecoration: 'underline' } })}>{item}</a>
                ) : (
                  <span className={css({ color: isDark ? 'zinc.400' : 'zinc.500', fontWeight: 'medium' })}>{item}</span>
                )}
              </span>
            ))}
          </nav>
        </div>
      </DocSection>

      <DocSection title="With Icons" description="Breadcrumb with home icon.">
        <div className={css({ mb: '6', p: '6', bg: isDark ? 'zinc.800' : 'white', rounded: 'xl', border: '1px solid', borderColor: isDark ? 'zinc.700' : 'zinc.200' })}>
          <nav className={css({ display: 'flex', alignItems: 'center', gap: '2', fontSize: 'sm' })}>
            <a href="#" className={css({ color: 'blue.500', textDecoration: 'none', display: 'flex', alignItems: 'center', _hover: { color: 'blue.600' } })}>🏠</a>
            <span className={css({ color: isDark ? 'zinc.600' : 'zinc.400' })}>/</span>
            <a href="#" className={css({ color: 'blue.500', textDecoration: 'none', _hover: { textDecoration: 'underline' } })}>Docs</a>
            <span className={css({ color: isDark ? 'zinc.600' : 'zinc.400' })}>/</span>
            <span className={css({ color: isDark ? 'zinc.400' : 'zinc.500', fontWeight: 'medium' })}>Breadcrumb</span>
          </nav>
        </div>
        <CodeBlock
          code={`<nav className={css({ display: 'flex', alignItems: 'center', gap: '2', fontSize: 'sm' })}>
  <a href="#" className={css({ color: 'blue.500' })}>🏠</a>
  <span className={css({ color: 'zinc.400' })}>/</span>
  <a href="#" className={css({ color: 'blue.500', _hover: { textDecoration: 'underline' } })}>Docs</a>
  <span className={css({ color: 'zinc.400' })}>/</span>
  <span className={css({ color: 'zinc.500', fontWeight: 'medium' })}>Current</span>
</nav>`}
        />
      </DocSection>
    </div>
  );
}
