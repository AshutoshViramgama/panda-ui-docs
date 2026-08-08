import { useState } from 'react';
import { css } from '../../styled-system/css';
import { useTheme } from '../hooks/useTheme';
import { DocSection } from '../components/docs/DocSection';
import { CodeBlock } from '../components/docs/CodeBlock';

const ACCORDION_ITEMS = [
  { id: '1', title: 'What is Panda CSS?', content: 'Panda CSS is a build-time CSS-in-JS framework that generates atomic CSS at compile time. It provides type-safe styling with zero runtime overhead, making it perfect for performance-critical applications.' },
  { id: '2', title: 'How does it differ from Tailwind CSS?', content: 'While both generate utility CSS, Panda CSS uses a CSS-in-JS approach with JavaScript objects instead of class names. This provides type safety, better IDE support, and the ability to use conditional logic directly in your styles.' },
  { id: '3', title: 'What are design tokens?', content: 'Design tokens are the smallest pieces of a design system — colors, spacing, typography values, etc. They provide a single source of truth for design decisions and ensure consistency across your application.' },
  { id: '4', title: 'Can I use Panda CSS with React?', content: 'Yes! Panda CSS has first-class support for React (as well as Vue, Solid, and other frameworks). Set jsxFramework: "react" in your panda.config.ts to enable JSX style props.' },
  { id: '5', title: 'Is Panda CSS production-ready?', content: 'Absolutely. Panda CSS generates optimized, atomic CSS at build time with zero runtime cost. It is used in production by many companies and has a growing ecosystem of tools and plugins.' },
];

export function AccordionPage() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [openItems, setOpenItems] = useState<string[]>(['1']);
  const [singleOpen, setSingleOpen] = useState<string | null>('1');

  const toggleItem = (id: string) => {
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id],
    );
  };

  return (
    <div>
      <div className={css({ mb: '10' })}>
        <h1 className={css({ fontSize: '4xl', fontWeight: 'black', color: isDark ? 'zinc.100' : 'zinc.900', mb: '3' })}>Accordion</h1>
        <p className={css({ fontSize: 'lg', color: isDark ? 'zinc.400' : 'zinc.600', lineHeight: 'relaxed', maxW: '3xl' })}>
          Collapsible content sections for FAQ, settings, or any grouped content. Supports single and multi-expand modes.
        </p>
      </div>

      <DocSection title="Single Expand" description="Only one section can be open at a time.">
        <div className={css({ rounded: 'xl', border: '1px solid', borderColor: isDark ? 'zinc.700' : 'zinc.200', overflow: 'hidden', mb: '6' })}>
          {ACCORDION_ITEMS.map((item, index) => (
            <div key={item.id}>
              <button
                onClick={() => setSingleOpen(singleOpen === item.id ? null : item.id)}
                className={css({
                  width: 'full',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  px: '5',
                  py: '4',
                  bg: isDark ? 'zinc.800' : 'white',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: 'sm',
                  fontWeight: 'semibold',
                  color: isDark ? 'zinc.200' : 'zinc.800',
                  textAlign: 'left',
                  borderTop: index > 0 ? '1px solid' : 'none',
                  borderColor: isDark ? 'zinc.700' : 'zinc.200',
                  transition: 'background 0.15s',
                  _hover: { bg: isDark ? 'zinc.750' : 'zinc.50' },
                })}
              >
                {item.title}
                <span
                  className={css({
                    fontSize: 'lg',
                    transition: 'transform 0.2s',
                    color: isDark ? 'zinc.400' : 'zinc.500',
                  })}
                  style={{ transform: singleOpen === item.id ? 'rotate(180deg)' : 'rotate(0deg)' }}
                >
                  ▾
                </span>
              </button>
              <div
                className={css({
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                })}
                style={{
                  maxHeight: singleOpen === item.id ? '200px' : '0px',
                  opacity: singleOpen === item.id ? 1 : 0,
                }}
              >
                <div className={css({ px: '5', py: '4', bg: isDark ? 'zinc.800/50' : 'zinc.50', borderTop: '1px solid', borderColor: isDark ? 'zinc.700/50' : 'zinc.100' })}>
                  <p className={css({ fontSize: 'sm', color: isDark ? 'zinc.400' : 'zinc.600', lineHeight: 'relaxed' })}>{item.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </DocSection>

      <DocSection title="Multi Expand" description="Multiple sections can be open simultaneously.">
        <div className={css({ rounded: 'xl', border: '1px solid', borderColor: isDark ? 'zinc.700' : 'zinc.200', overflow: 'hidden', mb: '6' })}>
          {ACCORDION_ITEMS.map((item, index) => (
            <div key={`multi-${item.id}`}>
              <button
                onClick={() => toggleItem(item.id)}
                className={css({
                  width: 'full',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  px: '5',
                  py: '4',
                  bg: isDark ? 'zinc.800' : 'white',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: 'sm',
                  fontWeight: 'semibold',
                  color: openItems.includes(item.id) ? 'blue.500' : isDark ? 'zinc.200' : 'zinc.800',
                  textAlign: 'left',
                  borderTop: index > 0 ? '1px solid' : 'none',
                  borderColor: isDark ? 'zinc.700' : 'zinc.200',
                  transition: 'all 0.15s',
                  _hover: { bg: isDark ? 'zinc.750' : 'zinc.50' },
                })}
              >
                <div className={css({ display: 'flex', alignItems: 'center', gap: '3' })}>
                  <span
                    className={css({ fontSize: 'xs', transition: 'transform 0.2s', color: 'blue.500' })}
                    style={{ transform: openItems.includes(item.id) ? 'rotate(90deg)' : 'rotate(0deg)' }}
                  >
                    ▸
                  </span>
                  {item.title}
                </div>
              </button>
              <div
                className={css({ overflow: 'hidden', transition: 'all 0.3s ease' })}
                style={{
                  maxHeight: openItems.includes(item.id) ? '200px' : '0px',
                  opacity: openItems.includes(item.id) ? 1 : 0,
                }}
              >
                <div className={css({ px: '5', py: '4', bg: isDark ? 'zinc.800/50' : 'zinc.50', borderTop: '1px solid', borderColor: isDark ? 'zinc.700/50' : 'zinc.100' })}>
                  <p className={css({ fontSize: 'sm', color: isDark ? 'zinc.400' : 'zinc.600', lineHeight: 'relaxed' })}>{item.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </DocSection>

      <DocSection title="Code Example">
        <CodeBlock
          code={`const [open, setOpen] = useState<string | null>('1');

<button
  onClick={() => setOpen(open === id ? null : id)}
  className={css({
    width: 'full',
    display: 'flex',
    justifyContent: 'space-between',
    px: '5', py: '4',
    bg: 'white',
    border: 'none',
    cursor: 'pointer',
    fontSize: 'sm',
    fontWeight: 'semibold',
    _hover: { bg: 'zinc.50' },
  })}
>
  {title}
  <span style={{ transform: open === id ? 'rotate(180deg)' : 'rotate(0deg)' }}>▾</span>
</button>
<div style={{ maxHeight: open === id ? '200px' : '0px', overflow: 'hidden', transition: 'all 0.3s' }}>
  <div className={css({ px: '5', py: '4', bg: 'zinc.50' })}>
    {content}
  </div>
</div>`}
        />
      </DocSection>
    </div>
  );
}
