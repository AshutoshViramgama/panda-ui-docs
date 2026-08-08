import { useState } from 'react';
import { css } from '../../styled-system/css';
import { useTheme } from '../hooks/useTheme';
import { DocSection } from '../components/docs/DocSection';
import { CodeBlock } from '../components/docs/CodeBlock';

export function ModalPage() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [isOpen, setIsOpen] = useState(false);
  const [size, setSize] = useState<'sm' | 'md' | 'lg'>('md');

  const sizeMap = { sm: '24rem', md: '32rem', lg: '42rem' };

  return (
    <div>
      <div className={css({ mb: '10' })}>
        <h1 className={css({ fontSize: '4xl', fontWeight: 'black', color: isDark ? 'zinc.100' : 'zinc.900', mb: '3' })}>Modal</h1>
        <p className={css({ fontSize: 'lg', color: isDark ? 'zinc.400' : 'zinc.600', lineHeight: 'relaxed', maxW: '3xl' })}>
          Dialog overlays for important content, confirmations, and forms. Supports multiple sizes and backdrop click dismiss.
        </p>
      </div>

      <DocSection title="Modal Sizes" description="Click buttons to open modals at different sizes.">
        <div className={css({ display: 'flex', flexWrap: 'wrap', gap: '3', mb: '6', p: '6', bg: isDark ? 'zinc.800' : 'white', rounded: 'xl', border: '1px solid', borderColor: isDark ? 'zinc.700' : 'zinc.200' })}>
          {(['sm', 'md', 'lg'] as const).map((s) => (
            <button
              key={s}
              onClick={() => { setSize(s); setIsOpen(true); }}
              className={css({ px: '5', py: '2.5', rounded: 'lg', fontSize: 'sm', fontWeight: 'semibold', bg: 'blue.500', color: 'white', border: 'none', cursor: 'pointer', _hover: { bg: 'blue.600' }, transition: 'all 0.2s' })}
            >
              Open {s.toUpperCase()} Modal
            </button>
          ))}
        </div>

        {/* Modal Overlay */}
        {isOpen && (
          <div
            onClick={() => setIsOpen(false)}
            className={css({
              position: 'fixed',
              inset: '0',
              bg: 'rgba(0,0,0,0.5)',
              backdropFilter: 'blur(4px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 'modal',
              p: '4',
              animation: 'fadeIn 0.2s ease-out',
            })}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className={css({
                bg: isDark ? 'zinc.800' : 'white',
                rounded: '2xl',
                shadow: '2xl',
                width: 'full',
                animation: 'slideUp 0.3s ease-out',
              })}
              style={{ maxWidth: sizeMap[size] }}
            >
              <div className={css({ display: 'flex', alignItems: 'center', justifyContent: 'space-between', px: '6', py: '4', borderBottom: '1px solid', borderColor: isDark ? 'zinc.700' : 'zinc.200' })}>
                <h3 className={css({ fontSize: 'lg', fontWeight: 'bold', color: isDark ? 'zinc.100' : 'zinc.900' })}>
                  Modal Title ({size.toUpperCase()})
                </h3>
                <button
                  onClick={() => setIsOpen(false)}
                  className={css({ bg: 'transparent', border: 'none', fontSize: 'xl', cursor: 'pointer', color: isDark ? 'zinc.400' : 'zinc.500', _hover: { color: isDark ? 'zinc.200' : 'zinc.800', bg: isDark ? 'zinc.700' : 'zinc.100' }, transition: 'all 0.15s', width: '8', height: '8', display: 'flex', alignItems: 'center', justifyContent: 'center', rounded: 'lg' })}
                >
                  ×
                </button>
              </div>
              <div className={css({ px: '6', py: '5' })}>
                <p className={css({ fontSize: 'sm', color: isDark ? 'zinc.400' : 'zinc.600', lineHeight: 'relaxed' })}>
                  This is a {size} modal dialog. You can place any content here including forms, confirmations,
                  or detailed information. Click the backdrop or close button to dismiss.
                </p>
              </div>
              <div className={css({ display: 'flex', justifyContent: 'flex-end', gap: '3', px: '6', py: '4', borderTop: '1px solid', borderColor: isDark ? 'zinc.700' : 'zinc.200' })}>
                <button
                  onClick={() => setIsOpen(false)}
                  className={css({ px: '4', py: '2', rounded: 'lg', fontSize: 'sm', fontWeight: 'medium', bg: 'transparent', color: isDark ? 'zinc.400' : 'zinc.600', border: '1px solid', borderColor: isDark ? 'zinc.600' : 'zinc.300', cursor: 'pointer', _hover: { bg: isDark ? 'zinc.700' : 'zinc.100' }, transition: 'all 0.2s' })}
                >
                  Cancel
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className={css({ px: '4', py: '2', rounded: 'lg', fontSize: 'sm', fontWeight: 'semibold', bg: 'blue.500', color: 'white', border: 'none', cursor: 'pointer', _hover: { bg: 'blue.600' }, transition: 'all 0.2s' })}
                >
                  Confirm
                </button>
              </div>
            </div>
          </div>
        )}

        <CodeBlock
          code={`const [isOpen, setIsOpen] = useState(false);

// Backdrop
<div
  onClick={() => setIsOpen(false)}
  className={css({
    position: 'fixed', inset: '0',
    bg: 'rgba(0,0,0,0.5)',
    backdropFilter: 'blur(4px)',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    zIndex: 'modal',
  })}
>
  {/* Modal Content */}
  <div
    onClick={(e) => e.stopPropagation()}
    className={css({
      bg: 'white', rounded: '2xl', shadow: '2xl',
      maxW: 'lg', w: 'full',
    })}
  >
    <div className={css({ px: '6', py: '4', borderBottom: '1px solid', borderColor: 'zinc.200' })}>
      <h3>Title</h3>
    </div>
    <div className={css({ px: '6', py: '5' })}>Content</div>
    <div className={css({ px: '6', py: '4', borderTop: '1px solid', borderColor: 'zinc.200', display: 'flex', justifyContent: 'flex-end', gap: '3' })}>
      <button>Cancel</button>
      <button>Confirm</button>
    </div>
  </div>
</div>`}
        />
      </DocSection>
    </div>
  );
}
