import { css } from '../../styled-system/css';
import { useTheme } from '../hooks/useTheme';
import { DocSection } from '../components/docs/DocSection';
import { CodeBlock } from '../components/docs/CodeBlock';

export function CardsPage() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div>
      <div className={css({ mb: '10' })}>
        <h1 className={css({ fontSize: '4xl', fontWeight: 'black', color: isDark ? 'zinc.100' : 'zinc.900', mb: '3' })}>Cards</h1>
        <p className={css({ fontSize: 'lg', color: isDark ? 'zinc.400' : 'zinc.600', lineHeight: 'relaxed', maxW: '3xl' })}>
          Card components for grouping related content. Supports header, body, footer, and image layouts.
        </p>
      </div>

      <DocSection title="Basic Card" description="Simple card with title and content.">
        <div className={css({ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '6', mb: '6' })}>
          <div className={css({ bg: isDark ? 'zinc.800' : 'white', rounded: 'xl', border: '1px solid', borderColor: isDark ? 'zinc.700' : 'zinc.200', overflow: 'hidden', shadow: 'sm' })}>
            <div className={css({ p: '6' })}>
              <h3 className={css({ fontSize: 'lg', fontWeight: 'bold', color: isDark ? 'zinc.100' : 'zinc.900', mb: '2' })}>Card Title</h3>
              <p className={css({ fontSize: 'sm', color: isDark ? 'zinc.400' : 'zinc.600', lineHeight: 'relaxed' })}>
                This is a basic card component with a title and description text. Cards are great for organizing content.
              </p>
            </div>
          </div>
          <div className={css({ bg: isDark ? 'zinc.800' : 'white', rounded: 'xl', border: '1px solid', borderColor: isDark ? 'zinc.700' : 'zinc.200', overflow: 'hidden', shadow: 'sm' })}>
            <div className={css({ px: '6', py: '4', borderBottom: '1px solid', borderColor: isDark ? 'zinc.700' : 'zinc.200' })}>
              <h3 className={css({ fontSize: 'md', fontWeight: 'semibold', color: isDark ? 'zinc.200' : 'zinc.800' })}>With Header</h3>
            </div>
            <div className={css({ p: '6' })}>
              <p className={css({ fontSize: 'sm', color: isDark ? 'zinc.400' : 'zinc.600', lineHeight: 'relaxed' })}>
                A card with a separate header section divided by a border.
              </p>
            </div>
            <div className={css({ px: '6', py: '4', borderTop: '1px solid', borderColor: isDark ? 'zinc.700' : 'zinc.200', bg: isDark ? 'zinc.800/50' : 'zinc.50' })}>
              <button className={css({ px: '4', py: '2', rounded: 'lg', fontSize: 'sm', fontWeight: 'semibold', bg: 'blue.500', color: 'white', border: 'none', cursor: 'pointer', _hover: { bg: 'blue.600' }, transition: 'all 0.2s' })}>
                Action
              </button>
            </div>
          </div>
        </div>
        <CodeBlock
          code={`<div className={css({ bg: 'white', rounded: 'xl', border: '1px solid', borderColor: 'zinc.200', shadow: 'sm', overflow: 'hidden' })}>\n  <div className={css({ p: '6' })}>\n    <h3 className={css({ fontSize: 'lg', fontWeight: 'bold', mb: '2' })}>Title</h3>\n    <p className={css({ fontSize: 'sm', color: 'zinc.600' })}>Content</p>\n  </div>\n</div>`}
        />
      </DocSection>

      <DocSection title="Image Cards" description="Cards with image header.">
        <div className={css({ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '6', mb: '6' })}>
          {[
            { title: 'Mountain Vista', desc: 'Experience breathtaking mountain views from scenic trails.', gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' },
            { title: 'Ocean Sunset', desc: 'Watch the sun paint the sky over calm ocean waters.', gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)' },
            { title: 'Forest Path', desc: 'Wander through lush green forests on peaceful paths.', gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)' },
          ].map((card) => (
            <div key={card.title} className={css({ bg: isDark ? 'zinc.800' : 'white', rounded: 'xl', border: '1px solid', borderColor: isDark ? 'zinc.700' : 'zinc.200', overflow: 'hidden', shadow: 'sm', transition: 'all 0.3s', _hover: { shadow: 'lg', transform: 'translateY(-4px)' }, cursor: 'pointer' })}>
              <div className={css({ height: '40' })} style={{ background: card.gradient }} />
              <div className={css({ p: '5' })}>
                <h3 className={css({ fontSize: 'lg', fontWeight: 'bold', color: isDark ? 'zinc.100' : 'zinc.900', mb: '2' })}>{card.title}</h3>
                <p className={css({ fontSize: 'sm', color: isDark ? 'zinc.400' : 'zinc.600', lineHeight: 'relaxed', mb: '4' })}>{card.desc}</p>
                <button className={css({ px: '4', py: '2', rounded: 'lg', fontSize: 'sm', fontWeight: 'medium', bg: 'blue.500', color: 'white', border: 'none', cursor: 'pointer', _hover: { bg: 'blue.600' }, transition: 'all 0.2s' })}>
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </DocSection>

      <DocSection title="Horizontal Card" description="Card with side-by-side layout.">
        <div className={css({ display: 'flex', flexDirection: { base: 'column', md: 'row' } as never, bg: isDark ? 'zinc.800' : 'white', rounded: 'xl', border: '1px solid', borderColor: isDark ? 'zinc.700' : 'zinc.200', overflow: 'hidden', shadow: 'sm', mb: '6' })}>
          <div className={css({ width: { base: 'full', md: '72' } as never, minH: '48', flexShrink: '0' })} style={{ background: 'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)' }} />
          <div className={css({ p: '6', display: 'flex', flexDirection: 'column', justifyContent: 'center' })}>
            <span className={css({ fontSize: 'xs', fontWeight: 'semibold', color: 'purple.500', textTransform: 'uppercase', letterSpacing: 'wider', mb: '2' })}>Featured</span>
            <h3 className={css({ fontSize: 'xl', fontWeight: 'bold', color: isDark ? 'zinc.100' : 'zinc.900', mb: '2' })}>Horizontal Layout</h3>
            <p className={css({ fontSize: 'sm', color: isDark ? 'zinc.400' : 'zinc.600', lineHeight: 'relaxed', mb: '4' })}>
              This card demonstrates a horizontal layout where the image sits beside the content. Great for featured content or blog post previews.
            </p>
            <div className={css({ display: 'flex', gap: '3' })}>
              <button className={css({ px: '4', py: '2', rounded: 'lg', fontSize: 'sm', fontWeight: 'medium', bg: 'purple.500', color: 'white', border: 'none', cursor: 'pointer', _hover: { bg: 'purple.600' }, transition: 'all 0.2s' })}>
                Read More
              </button>
              <button className={css({ px: '4', py: '2', rounded: 'lg', fontSize: 'sm', fontWeight: 'medium', bg: 'transparent', color: isDark ? 'zinc.400' : 'zinc.600', border: '1px solid', borderColor: isDark ? 'zinc.600' : 'zinc.300', cursor: 'pointer', _hover: { bg: isDark ? 'zinc.700' : 'zinc.100' }, transition: 'all 0.2s' })}>
                Save
              </button>
            </div>
          </div>
        </div>
      </DocSection>

      <DocSection title="Stats Card" description="Card displaying key metrics.">
        <div className={css({ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '4', mb: '6' })}>
          {[
            { label: 'Total Users', value: '12,489', change: '+12.5%', color: 'blue' },
            { label: 'Revenue', value: '$48.2K', change: '+8.1%', color: 'green' },
            { label: 'Active Sessions', value: '3,421', change: '-2.4%', color: 'amber' },
            { label: 'Bounce Rate', value: '24.3%', change: '-5.2%', color: 'purple' },
          ].map((stat) => (
            <div key={stat.label} className={css({ p: '5', bg: isDark ? 'zinc.800' : 'white', rounded: 'xl', border: '1px solid', borderColor: isDark ? 'zinc.700' : 'zinc.200', shadow: 'sm' })}>
              <p className={css({ fontSize: 'sm', color: isDark ? 'zinc.400' : 'zinc.500', mb: '1' })}>{stat.label}</p>
              <p className={css({ fontSize: '2xl', fontWeight: 'bold', color: isDark ? 'zinc.100' : 'zinc.900', mb: '1' })}>{stat.value}</p>
              <span
                className={css({ fontSize: 'xs', fontWeight: 'semibold' })}
                style={{ color: stat.change.startsWith('+') ? 'var(--colors-green-500)' : 'var(--colors-red-500)' }}
              >
                {stat.change}
              </span>
            </div>
          ))}
        </div>
      </DocSection>
    </div>
  );
}
