import { css } from '../../styled-system/css';
import { useTheme } from '../hooks/useTheme';
import { DocSection } from '../components/docs/DocSection';
import { CodeBlock } from '../components/docs/CodeBlock';

const BUTTON_COLORS = ['blue', 'red', 'green', 'purple', 'amber', 'teal', 'pink', 'indigo'] as const;

export function ButtonsPage() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div>
      <div className={css({ mb: '10' })}>
        <h1 className={css({ fontSize: '4xl', fontWeight: 'black', color: isDark ? 'zinc.100' : 'zinc.900', mb: '3' })}>
          Buttons
        </h1>
        <p className={css({ fontSize: 'lg', color: isDark ? 'zinc.400' : 'zinc.600', lineHeight: 'relaxed', maxW: '3xl' })}>
          Button styles built entirely with the <code className={css({ fontFamily: 'mono', bg: isDark ? 'zinc.800' : 'zinc.200', px: '1.5', py: '0.5', rounded: 'md' })}>css()</code> function. Showcasing solid, outline, ghost, and link variants across sizes and states.
        </p>
      </div>

      {/* Solid Buttons */}
      <DocSection title="Solid Buttons" description="Filled buttons with background color. The most common button style.">
        <div className={css({ display: 'flex', flexWrap: 'wrap', gap: '3', mb: '6', p: '6', bg: isDark ? 'zinc.800' : 'white', rounded: 'xl', border: '1px solid', borderColor: isDark ? 'zinc.700' : 'zinc.200' })}>
          {BUTTON_COLORS.map((color) => (
            <button
              key={color}
              className={css({
                px: '5',
                py: '2.5',
                rounded: 'lg',
                fontSize: 'sm',
                fontWeight: 'semibold',
                color: 'white',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.2s',
                _hover: { opacity: '0.9', transform: 'translateY(-1px)', shadow: 'md' },
                _active: { transform: 'translateY(0)', shadow: 'sm' },
              })}
              style={{ backgroundColor: `var(--colors-${color}-500)` }}
            >
              {color.charAt(0).toUpperCase() + color.slice(1)}
            </button>
          ))}
        </div>
        <CodeBlock
          code={`<button
  className={css({
    px: '5',
    py: '2.5',
    rounded: 'lg',
    fontSize: 'sm',
    fontWeight: 'semibold',
    bg: 'blue.500',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
    _hover: { bg: 'blue.600', shadow: 'md' },
    _active: { bg: 'blue.700' },
    transition: 'all 0.2s',
  })}
>
  Click me
</button>`}
        />
      </DocSection>

      {/* Outline Buttons */}
      <DocSection title="Outline Buttons" description="Bordered buttons with transparent background.">
        <div className={css({ display: 'flex', flexWrap: 'wrap', gap: '3', mb: '6', p: '6', bg: isDark ? 'zinc.800' : 'white', rounded: 'xl', border: '1px solid', borderColor: isDark ? 'zinc.700' : 'zinc.200' })}>
          {BUTTON_COLORS.map((color) => (
            <button
              key={color}
              className={css({
                px: '5',
                py: '2.5',
                rounded: 'lg',
                fontSize: 'sm',
                fontWeight: 'semibold',
                bg: 'transparent',
                borderWidth: '2',
                borderStyle: 'solid',
                cursor: 'pointer',
                transition: 'all 0.2s',
                _hover: { color: 'white', transform: 'translateY(-1px)' },
              })}
              style={{
                borderColor: `var(--colors-${color}-500)`,
                color: `var(--colors-${color}-500)`,
              }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = `var(--colors-${color}-500)`; e.currentTarget.style.color = 'white'; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = `var(--colors-${color}-500)`; }}
            >
              {color.charAt(0).toUpperCase() + color.slice(1)}
            </button>
          ))}
        </div>
        <CodeBlock
          code={`<button
  className={css({
    px: '5',
    py: '2.5',
    rounded: 'lg',
    fontSize: 'sm',
    fontWeight: 'semibold',
    bg: 'transparent',
    borderWidth: '2',
    borderStyle: 'solid',
    borderColor: 'blue.500',
    color: 'blue.500',
    cursor: 'pointer',
    _hover: { bg: 'blue.500', color: 'white' },
    transition: 'all 0.2s',
  })}
>
  Outline
</button>`}
        />
      </DocSection>

      {/* Ghost Buttons */}
      <DocSection title="Ghost Buttons" description="Subtle buttons with no border, only color on hover.">
        <div className={css({ display: 'flex', flexWrap: 'wrap', gap: '3', mb: '6', p: '6', bg: isDark ? 'zinc.800' : 'white', rounded: 'xl', border: '1px solid', borderColor: isDark ? 'zinc.700' : 'zinc.200' })}>
          {BUTTON_COLORS.map((color) => (
            <button
              key={color}
              className={css({
                px: '5',
                py: '2.5',
                rounded: 'lg',
                fontSize: 'sm',
                fontWeight: 'semibold',
                bg: 'transparent',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.2s',
              })}
              style={{ color: `var(--colors-${color}-500)` }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = `var(--colors-${color}-${isDark ? '500' : '50'})`; if (!isDark) e.currentTarget.style.color = `var(--colors-${color}-700)`; else { e.currentTarget.style.backgroundColor = `var(--colors-${color}-500)`; e.currentTarget.style.color = 'white'; } }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = `var(--colors-${color}-500)`; }}
            >
              {color.charAt(0).toUpperCase() + color.slice(1)}
            </button>
          ))}
        </div>
        <CodeBlock
          code={`<button
  className={css({
    px: '5',
    py: '2.5',
    rounded: 'lg',
    fontSize: 'sm',
    fontWeight: 'semibold',
    bg: 'transparent',
    color: 'blue.500',
    border: 'none',
    cursor: 'pointer',
    _hover: { bg: 'blue.50', color: 'blue.700' },
    transition: 'all 0.2s',
  })}
>
  Ghost
</button>`}
        />
      </DocSection>

      {/* Button Sizes */}
      <DocSection title="Button Sizes" description="Small, medium, and large button sizing.">
        <div className={css({ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '3', mb: '6', p: '6', bg: isDark ? 'zinc.800' : 'white', rounded: 'xl', border: '1px solid', borderColor: isDark ? 'zinc.700' : 'zinc.200' })}>
          <button className={css({ px: '3', py: '1.5', rounded: 'md', fontSize: 'xs', fontWeight: 'semibold', bg: 'blue.500', color: 'white', border: 'none', cursor: 'pointer', _hover: { bg: 'blue.600' }, transition: 'all 0.2s' })}>
            Small
          </button>
          <button className={css({ px: '5', py: '2.5', rounded: 'lg', fontSize: 'sm', fontWeight: 'semibold', bg: 'blue.500', color: 'white', border: 'none', cursor: 'pointer', _hover: { bg: 'blue.600' }, transition: 'all 0.2s' })}>
            Medium
          </button>
          <button className={css({ px: '7', py: '3', rounded: 'lg', fontSize: 'md', fontWeight: 'semibold', bg: 'blue.500', color: 'white', border: 'none', cursor: 'pointer', _hover: { bg: 'blue.600' }, transition: 'all 0.2s' })}>
            Large
          </button>
          <button className={css({ px: '9', py: '4', rounded: 'xl', fontSize: 'lg', fontWeight: 'bold', bg: 'blue.500', color: 'white', border: 'none', cursor: 'pointer', _hover: { bg: 'blue.600' }, transition: 'all 0.2s' })}>
            Extra Large
          </button>
        </div>
        <CodeBlock
          code={`// Small
css({ px: '3', py: '1.5', fontSize: 'xs', rounded: 'md' })

// Medium (default)
css({ px: '5', py: '2.5', fontSize: 'sm', rounded: 'lg' })

// Large
css({ px: '7', py: '3', fontSize: 'md', rounded: 'lg' })

// Extra Large
css({ px: '9', py: '4', fontSize: 'lg', rounded: 'xl' })`}
        />
      </DocSection>

      {/* Button States */}
      <DocSection title="Button States" description="Disabled, loading, and focus states.">
        <div className={css({ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '3', mb: '6', p: '6', bg: isDark ? 'zinc.800' : 'white', rounded: 'xl', border: '1px solid', borderColor: isDark ? 'zinc.700' : 'zinc.200' })}>
          <button className={css({ px: '5', py: '2.5', rounded: 'lg', fontSize: 'sm', fontWeight: 'semibold', bg: 'blue.500', color: 'white', border: 'none', cursor: 'pointer', _hover: { bg: 'blue.600' }, transition: 'all 0.2s' })}>
            Normal
          </button>
          <button className={css({ px: '5', py: '2.5', rounded: 'lg', fontSize: 'sm', fontWeight: 'semibold', bg: 'blue.500', color: 'white', border: 'none', cursor: 'pointer', _hover: { bg: 'blue.600' }, transition: 'all 0.2s', outline: '3px solid', outlineColor: 'blue.300', outlineOffset: '2' })}>
            Focused
          </button>
          <button
            disabled
            className={css({ px: '5', py: '2.5', rounded: 'lg', fontSize: 'sm', fontWeight: 'semibold', bg: 'blue.300', color: 'white', border: 'none', cursor: 'not-allowed', opacity: '0.6' })}
          >
            Disabled
          </button>
          <button className={css({ px: '5', py: '2.5', rounded: 'lg', fontSize: 'sm', fontWeight: 'semibold', bg: 'blue.500', color: 'white', border: 'none', cursor: 'wait', display: 'inline-flex', alignItems: 'center', gap: '2', transition: 'all 0.2s' })}>
            <span
              className={css({
                display: 'inline-block',
                width: '4',
                height: '4',
                border: '2px solid',
                borderColor: 'white',
                borderTopColor: 'transparent',
                rounded: 'full',
                animation: 'spin 0.6s linear infinite',
              })}
            />
            Loading
          </button>
        </div>
        <CodeBlock
          code={`// Disabled
<button
  disabled
  className={css({
    bg: 'blue.300',
    color: 'white',
    cursor: 'not-allowed',
    opacity: '0.6',
  })}
>
  Disabled
</button>

// Loading with spinner
<button
  className={css({
    display: 'inline-flex',
    alignItems: 'center',
    gap: '2',
    cursor: 'wait',
  })}
>
  <span className={css({
    display: 'inline-block',
    width: '4',
    height: '4',
    border: '2px solid',
    borderColor: 'white',
    borderTopColor: 'transparent',
    rounded: 'full',
    animation: 'spin 0.6s linear infinite',
  })} />
  Loading
</button>`}
        />
      </DocSection>

      {/* Icon Buttons */}
      <DocSection title="Icon Buttons" description="Square buttons with icons, and buttons with leading/trailing icons.">
        <div className={css({ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '3', mb: '6', p: '6', bg: isDark ? 'zinc.800' : 'white', rounded: 'xl', border: '1px solid', borderColor: isDark ? 'zinc.700' : 'zinc.200' })}>
          <button className={css({ width: '10', height: '10', rounded: 'lg', fontSize: 'md', bg: 'blue.500', color: 'white', border: 'none', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', _hover: { bg: 'blue.600' }, transition: 'all 0.2s' })}>
            ✏️
          </button>
          <button className={css({ width: '10', height: '10', rounded: 'lg', fontSize: 'md', bg: 'red.500', color: 'white', border: 'none', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', _hover: { bg: 'red.600' }, transition: 'all 0.2s' })}>
            🗑️
          </button>
          <button className={css({ width: '10', height: '10', rounded: 'full', fontSize: 'md', bg: 'green.500', color: 'white', border: 'none', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', _hover: { bg: 'green.600' }, transition: 'all 0.2s' })}>
            ＋
          </button>
          <button className={css({ px: '5', py: '2.5', rounded: 'lg', fontSize: 'sm', fontWeight: 'semibold', bg: 'purple.500', color: 'white', border: 'none', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '2', _hover: { bg: 'purple.600' }, transition: 'all 0.2s' })}>
            📥 Download
          </button>
          <button className={css({ px: '5', py: '2.5', rounded: 'lg', fontSize: 'sm', fontWeight: 'semibold', bg: 'teal.500', color: 'white', border: 'none', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '2', _hover: { bg: 'teal.600' }, transition: 'all 0.2s' })}>
            Next →
          </button>
        </div>
        <CodeBlock
          code={`// Icon-only button
<button
  className={css({
    w: '10',
    h: '10',
    rounded: 'lg',
    bg: 'blue.500',
    color: 'white',
    border: 'none',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    _hover: { bg: 'blue.600' },
  })}
>
  ✏️
</button>

// Button with leading icon
<button
  className={css({
    px: '5', py: '2.5',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '2',
  })}
>
  📥 Download
</button>`}
        />
      </DocSection>

      {/* Button Group */}
      <DocSection title="Button Group" description="Group buttons together for related actions.">
        <div className={css({ display: 'flex', flexWrap: 'wrap', gap: '6', mb: '6', p: '6', bg: isDark ? 'zinc.800' : 'white', rounded: 'xl', border: '1px solid', borderColor: isDark ? 'zinc.700' : 'zinc.200' })}>
          <div className={css({ display: 'inline-flex' })}>
            <button className={css({ px: '4', py: '2', fontSize: 'sm', fontWeight: 'medium', bg: 'blue.500', color: 'white', border: 'none', cursor: 'pointer', roundedLeft: 'lg', _hover: { bg: 'blue.600' }, transition: 'all 0.15s' })}>
              Left
            </button>
            <button className={css({ px: '4', py: '2', fontSize: 'sm', fontWeight: 'medium', bg: 'blue.500', color: 'white', border: 'none', borderLeft: '1px solid', borderColor: 'blue.400', cursor: 'pointer', _hover: { bg: 'blue.600' }, transition: 'all 0.15s' })}>
              Center
            </button>
            <button className={css({ px: '4', py: '2', fontSize: 'sm', fontWeight: 'medium', bg: 'blue.500', color: 'white', border: 'none', borderLeft: '1px solid', borderColor: 'blue.400', cursor: 'pointer', roundedRight: 'lg', _hover: { bg: 'blue.600' }, transition: 'all 0.15s' })}>
              Right
            </button>
          </div>
          <div className={css({ display: 'inline-flex' })}>
            <button className={css({ px: '4', py: '2', fontSize: 'sm', fontWeight: 'medium', bg: isDark ? 'zinc.700' : 'zinc.100', color: isDark ? 'zinc.200' : 'zinc.700', border: '1px solid', borderColor: isDark ? 'zinc.600' : 'zinc.300', cursor: 'pointer', roundedLeft: 'lg', _hover: { bg: isDark ? 'zinc.600' : 'zinc.200' }, transition: 'all 0.15s' })}>
              Year
            </button>
            <button className={css({ px: '4', py: '2', fontSize: 'sm', fontWeight: 'medium', bg: isDark ? 'zinc.700' : 'zinc.100', color: isDark ? 'zinc.200' : 'zinc.700', borderTop: '1px solid', borderBottom: '1px solid', borderColor: isDark ? 'zinc.600' : 'zinc.300', cursor: 'pointer', _hover: { bg: isDark ? 'zinc.600' : 'zinc.200' }, transition: 'all 0.15s' })}>
              Month
            </button>
            <button className={css({ px: '4', py: '2', fontSize: 'sm', fontWeight: 'medium', bg: isDark ? 'zinc.700' : 'zinc.100', color: isDark ? 'zinc.200' : 'zinc.700', border: '1px solid', borderColor: isDark ? 'zinc.600' : 'zinc.300', cursor: 'pointer', roundedRight: 'lg', _hover: { bg: isDark ? 'zinc.600' : 'zinc.200' }, transition: 'all 0.15s' })}>
              Day
            </button>
          </div>
        </div>
        <CodeBlock
          code={`// Button Group
<div className={css({ display: 'inline-flex' })}>
  <button className={css({ roundedLeft: 'lg', /* ...styles */ })}>
    Left
  </button>
  <button className={css({ /* no radius */ })}>
    Center
  </button>
  <button className={css({ roundedRight: 'lg', /* ...styles */ })}>
    Right
  </button>
</div>`}
        />
      </DocSection>

      {/* Link Buttons */}
      <DocSection title="Link Buttons" description="Buttons that look like hyperlinks.">
        <div className={css({ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '4', mb: '6', p: '6', bg: isDark ? 'zinc.800' : 'white', rounded: 'xl', border: '1px solid', borderColor: isDark ? 'zinc.700' : 'zinc.200' })}>
          {BUTTON_COLORS.slice(0, 4).map((color) => (
            <button
              key={color}
              className={css({
                bg: 'transparent',
                border: 'none',
                cursor: 'pointer',
                fontSize: 'sm',
                fontWeight: 'semibold',
                textDecoration: 'underline',
                textUnderlineOffset: '2px',
                transition: 'color 0.15s',
              })}
              style={{ color: `var(--colors-${color}-500)` }}
            >
              {color.charAt(0).toUpperCase() + color.slice(1)} Link
            </button>
          ))}
        </div>
        <CodeBlock
          code={`<button
  className={css({
    bg: 'transparent',
    border: 'none',
    color: 'blue.500',
    cursor: 'pointer',
    fontSize: 'sm',
    fontWeight: 'semibold',
    textDecoration: 'underline',
    textUnderlineOffset: '2px',
    _hover: { color: 'blue.700' },
  })}
>
  Link Button
</button>`}
        />
      </DocSection>
    </div>
  );
}
