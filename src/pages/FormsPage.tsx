import { css } from '../../styled-system/css';
import { useTheme } from '../hooks/useTheme';
import { DocSection } from '../components/docs/DocSection';
import { CodeBlock } from '../components/docs/CodeBlock';

export function FormsPage() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const inputBase = {
    width: 'full',
    px: '4',
    py: '2.5',
    rounded: 'lg',
    fontSize: 'sm',
    bg: isDark ? 'zinc.800' : 'white',
    color: isDark ? 'zinc.200' : 'zinc.900',
    border: '1px solid',
    borderColor: isDark ? 'zinc.700' : 'zinc.300',
    outline: 'none',
    transition: 'all 0.2s',
    _focus: { borderColor: 'blue.500', shadow: '0 0 0 3px rgba(59,130,246,0.15)' },
    _placeholder: { color: isDark ? 'zinc.500' : 'zinc.400' },
  } as const;

  return (
    <div>
      <div className={css({ mb: '10' })}>
        <h1 className={css({ fontSize: '4xl', fontWeight: 'black', color: isDark ? 'zinc.100' : 'zinc.900', mb: '3' })}>
          Forms
        </h1>
        <p className={css({ fontSize: 'lg', color: isDark ? 'zinc.400' : 'zinc.600', lineHeight: 'relaxed', maxW: '3xl' })}>
          Form controls styled with Panda CSS tokens for inputs, textareas, selects, checkboxes, radios, and switches.
        </p>
      </div>

      <DocSection title="Text Input" description="Standard text input with label and helper text.">
        <div className={css({ maxW: 'md', mb: '6', p: '6', bg: isDark ? 'zinc.800' : 'white', rounded: 'xl', border: '1px solid', borderColor: isDark ? 'zinc.700' : 'zinc.200' })}>
          <label className={css({ display: 'block', mb: '1.5', fontSize: 'sm', fontWeight: 'medium', color: isDark ? 'zinc.300' : 'zinc.700' })}>
            Email Address
          </label>
          <input
            type="email"
            placeholder="you@example.com"
            className={css(inputBase)}
          />
          <p className={css({ mt: '1.5', fontSize: 'xs', color: isDark ? 'zinc.500' : 'zinc.400' })}>
            We'll never share your email.
          </p>
        </div>
        <CodeBlock
          code={`<label className={css({ display: 'block', mb: '1.5', fontSize: 'sm', fontWeight: 'medium', color: 'zinc.700' })}>
  Email Address
</label>
<input
  type="email"
  placeholder="you@example.com"
  className={css({
    width: 'full',
    px: '4',
    py: '2.5',
    rounded: 'lg',
    fontSize: 'sm',
    bg: 'white',
    color: 'zinc.900',
    border: '1px solid',
    borderColor: 'zinc.300',
    outline: 'none',
    _focus: { borderColor: 'blue.500', shadow: '0 0 0 3px rgba(59,130,246,0.15)' },
    _placeholder: { color: 'zinc.400' },
    transition: 'all 0.2s',
  })}
/>`}
        />
      </DocSection>

      <DocSection title="Input Variants" description="Different input states and types.">
        <div className={css({ maxW: 'md', display: 'flex', flexDirection: 'column', gap: '4', mb: '6', p: '6', bg: isDark ? 'zinc.800' : 'white', rounded: 'xl', border: '1px solid', borderColor: isDark ? 'zinc.700' : 'zinc.200' })}>
          <div>
            <label className={css({ display: 'block', mb: '1.5', fontSize: 'sm', fontWeight: 'medium', color: isDark ? 'zinc.300' : 'zinc.700' })}>Default</label>
            <input placeholder="Default input" className={css(inputBase)} />
          </div>
          <div>
            <label className={css({ display: 'block', mb: '1.5', fontSize: 'sm', fontWeight: 'medium', color: 'red.500' })}>Error</label>
            <input placeholder="Invalid input" className={css({ ...inputBase, borderColor: 'red.500', _focus: { borderColor: 'red.500', shadow: '0 0 0 3px rgba(239,68,68,0.15)' } })} />
            <p className={css({ mt: '1.5', fontSize: 'xs', color: 'red.500' })}>This field is required.</p>
          </div>
          <div>
            <label className={css({ display: 'block', mb: '1.5', fontSize: 'sm', fontWeight: 'medium', color: 'green.500' })}>Success</label>
            <input placeholder="Valid input" defaultValue="john@example.com" className={css({ ...inputBase, borderColor: 'green.500', _focus: { borderColor: 'green.500', shadow: '0 0 0 3px rgba(34,197,94,0.15)' } })} />
          </div>
          <div>
            <label className={css({ display: 'block', mb: '1.5', fontSize: 'sm', fontWeight: 'medium', color: isDark ? 'zinc.500' : 'zinc.400' })}>Disabled</label>
            <input disabled placeholder="Disabled input" className={css({ ...inputBase, opacity: '0.5', cursor: 'not-allowed', bg: isDark ? 'zinc.900' : 'zinc.100' })} />
          </div>
        </div>
      </DocSection>

      <DocSection title="Textarea" description="Multi-line text input.">
        <div className={css({ maxW: 'md', mb: '6', p: '6', bg: isDark ? 'zinc.800' : 'white', rounded: 'xl', border: '1px solid', borderColor: isDark ? 'zinc.700' : 'zinc.200' })}>
          <label className={css({ display: 'block', mb: '1.5', fontSize: 'sm', fontWeight: 'medium', color: isDark ? 'zinc.300' : 'zinc.700' })}>
            Message
          </label>
          <textarea
            rows={4}
            placeholder="Type your message..."
            className={css({
              ...inputBase,
              resize: 'vertical',
              minH: '24',
            })}
          />
        </div>
      </DocSection>

      <DocSection title="Select" description="Dropdown select input.">
        <div className={css({ maxW: 'md', mb: '6', p: '6', bg: isDark ? 'zinc.800' : 'white', rounded: 'xl', border: '1px solid', borderColor: isDark ? 'zinc.700' : 'zinc.200' })}>
          <label className={css({ display: 'block', mb: '1.5', fontSize: 'sm', fontWeight: 'medium', color: isDark ? 'zinc.300' : 'zinc.700' })}>
            Country
          </label>
          <select className={css({ ...inputBase, cursor: 'pointer' })}>
            <option value="">Select a country</option>
            <option>United States</option>
            <option>United Kingdom</option>
            <option>Canada</option>
            <option>India</option>
            <option>Germany</option>
          </select>
        </div>
      </DocSection>

      <DocSection title="Checkbox & Radio" description="Selection controls for forms.">
        <div className={css({ display: 'flex', gap: '8', mb: '6', p: '6', bg: isDark ? 'zinc.800' : 'white', rounded: 'xl', border: '1px solid', borderColor: isDark ? 'zinc.700' : 'zinc.200' })}>
          <div className={css({ display: 'flex', flexDirection: 'column', gap: '3' })}>
            <span className={css({ fontSize: 'sm', fontWeight: 'semibold', color: isDark ? 'zinc.300' : 'zinc.700', mb: '1' })}>Checkboxes</span>
            {['React', 'Vue', 'Angular'].map((item) => (
              <label key={item} className={css({ display: 'flex', alignItems: 'center', gap: '2', cursor: 'pointer', fontSize: 'sm', color: isDark ? 'zinc.300' : 'zinc.600' })}>
                <input
                  type="checkbox"
                  defaultChecked={item === 'React'}
                  className={css({ width: '4', height: '4', cursor: 'pointer', accentColor: 'blue.500' })}
                />
                {item}
              </label>
            ))}
          </div>
          <div className={css({ display: 'flex', flexDirection: 'column', gap: '3' })}>
            <span className={css({ fontSize: 'sm', fontWeight: 'semibold', color: isDark ? 'zinc.300' : 'zinc.700', mb: '1' })}>Radio Buttons</span>
            {['Small', 'Medium', 'Large'].map((item) => (
              <label key={item} className={css({ display: 'flex', alignItems: 'center', gap: '2', cursor: 'pointer', fontSize: 'sm', color: isDark ? 'zinc.300' : 'zinc.600' })}>
                <input
                  type="radio"
                  name="size"
                  defaultChecked={item === 'Medium'}
                  className={css({ width: '4', height: '4', cursor: 'pointer', accentColor: 'blue.500' })}
                />
                {item}
              </label>
            ))}
          </div>
        </div>
      </DocSection>

      <DocSection title="Toggle Switch" description="A CSS-only toggle switch built with Panda CSS tokens.">
        <div className={css({ display: 'flex', alignItems: 'center', gap: '3', mb: '6', p: '6', bg: isDark ? 'zinc.800' : 'white', rounded: 'xl', border: '1px solid', borderColor: isDark ? 'zinc.700' : 'zinc.200' })}>
          <label className={css({ position: 'relative', display: 'inline-block', width: '11', height: '6', cursor: 'pointer' })}>
            <input type="checkbox" defaultChecked className={css({ opacity: '0', width: '0', height: '0', position: 'absolute', _checked: { '& ~ span': { bg: 'blue.500' }, '& ~ span::before': { transform: 'translateX(20px)' } } })} />
            <span className={css({ position: 'absolute', inset: '0', bg: isDark ? 'zinc.600' : 'zinc.300', rounded: 'full', transition: 'all 0.3s', _before: { content: '""', position: 'absolute', height: '4', width: '4', left: '1', bottom: '1', bg: 'white', rounded: 'full', transition: 'transform 0.3s' } })} />
          </label>
          <span className={css({ fontSize: 'sm', color: isDark ? 'zinc.300' : 'zinc.600' })}>Enable notifications</span>
        </div>
      </DocSection>
    </div>
  );
}
