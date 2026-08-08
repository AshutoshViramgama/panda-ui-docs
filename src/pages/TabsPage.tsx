import { useState } from 'react';
import { css } from '../../styled-system/css';
import { useTheme } from '../hooks/useTheme';
import { DocSection } from '../components/docs/DocSection';
import { CodeBlock } from '../components/docs/CodeBlock';

const TAB_CONTENT = [
  { id: 'overview', label: 'Overview', content: 'Panda CSS generates atomic CSS at build time, providing type-safe styling with zero runtime overhead. It supports design tokens, responsive styles, and conditional patterns.' },
  { id: 'features', label: 'Features', content: 'Key features include type-safe tokens, CSS-in-JS with no runtime, JSX style props, pattern-based layouts, and built-in design tokens with a comprehensive default preset.' },
  { id: 'usage', label: 'Usage', content: 'Use the css() function to create styles, styled-system/jsx for style props, and patterns for common layouts like Stack, HStack, VStack, Grid, and more.' },
];

export function TabsPage() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [activeTab, setActiveTab] = useState('overview');
  const [activeLineTab, setActiveLineTab] = useState('overview');
  const [activePillTab, setActivePillTab] = useState('overview');

  return (
    <div>
      <div className={css({ mb: '10' })}>
        <h1 className={css({ fontSize: '4xl', fontWeight: 'black', color: isDark ? 'zinc.100' : 'zinc.900', mb: '3' })}>Tabs</h1>
        <p className={css({ fontSize: 'lg', color: isDark ? 'zinc.400' : 'zinc.600', lineHeight: 'relaxed', maxW: '3xl' })}>
          Tab navigation for switching between views. Available in line, enclosed, and pill variants.
        </p>
      </div>

      <DocSection title="Line Tabs" description="Underline-style tabs, minimal and clean.">
        <div className={css({ mb: '6', p: '6', bg: isDark ? 'zinc.800' : 'white', rounded: 'xl', border: '1px solid', borderColor: isDark ? 'zinc.700' : 'zinc.200' })}>
          <div className={css({ display: 'flex', borderBottom: '2px solid', borderColor: isDark ? 'zinc.700' : 'zinc.200', mb: '4' })}>
            {TAB_CONTENT.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveLineTab(tab.id)}
                className={css({
                  px: '4',
                  py: '2.5',
                  fontSize: 'sm',
                  fontWeight: 'medium',
                  bg: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  color: activeLineTab === tab.id ? 'blue.500' : isDark ? 'zinc.400' : 'zinc.600',
                  borderBottom: '2px solid',
                  borderColor: activeLineTab === tab.id ? 'blue.500' : 'transparent',
                  marginBottom: '-2px',
                  transition: 'all 0.2s',
                  _hover: { color: activeLineTab === tab.id ? 'blue.500' : isDark ? 'zinc.200' : 'zinc.800' },
                })}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <p className={css({ fontSize: 'sm', color: isDark ? 'zinc.400' : 'zinc.600', lineHeight: 'relaxed' })}>
            {TAB_CONTENT.find((t) => t.id === activeLineTab)?.content}
          </p>
        </div>
      </DocSection>

      <DocSection title="Enclosed Tabs" description="Tabs with a bordered/enclosed style.">
        <div className={css({ mb: '6', p: '6', bg: isDark ? 'zinc.800' : 'white', rounded: 'xl', border: '1px solid', borderColor: isDark ? 'zinc.700' : 'zinc.200' })}>
          <div className={css({ display: 'flex', gap: '0', mb: '0' })}>
            {TAB_CONTENT.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={css({
                  px: '4',
                  py: '2.5',
                  fontSize: 'sm',
                  fontWeight: 'medium',
                  cursor: 'pointer',
                  bg: activeTab === tab.id ? (isDark ? 'zinc.700' : 'white') : 'transparent',
                  color: activeTab === tab.id ? (isDark ? 'zinc.100' : 'zinc.900') : isDark ? 'zinc.400' : 'zinc.500',
                  border: '1px solid',
                  borderColor: activeTab === tab.id ? (isDark ? 'zinc.600' : 'zinc.200') : 'transparent',
                  borderBottom: activeTab === tab.id ? '1px solid' : '1px solid',
                  borderBottomColor: activeTab === tab.id ? (isDark ? 'zinc.700' : 'white') : isDark ? 'zinc.600' : 'zinc.200',
                  roundedTop: 'lg',
                  transition: 'all 0.15s',
                  _hover: { color: isDark ? 'zinc.200' : 'zinc.800' },
                })}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <div className={css({ p: '4', border: '1px solid', borderColor: isDark ? 'zinc.600' : 'zinc.200', borderTop: 'none', roundedBottom: 'lg' })}>
            <p className={css({ fontSize: 'sm', color: isDark ? 'zinc.400' : 'zinc.600', lineHeight: 'relaxed' })}>
              {TAB_CONTENT.find((t) => t.id === activeTab)?.content}
            </p>
          </div>
        </div>
      </DocSection>

      <DocSection title="Pill Tabs" description="Rounded pill-shaped tabs.">
        <div className={css({ mb: '6', p: '6', bg: isDark ? 'zinc.800' : 'white', rounded: 'xl', border: '1px solid', borderColor: isDark ? 'zinc.700' : 'zinc.200' })}>
          <div className={css({ display: 'inline-flex', p: '1', bg: isDark ? 'zinc.700' : 'zinc.100', rounded: 'lg', mb: '4' })}>
            {TAB_CONTENT.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActivePillTab(tab.id)}
                className={css({
                  px: '4',
                  py: '2',
                  fontSize: 'sm',
                  fontWeight: 'medium',
                  cursor: 'pointer',
                  rounded: 'md',
                  border: 'none',
                  bg: activePillTab === tab.id ? (isDark ? 'zinc.800' : 'white') : 'transparent',
                  color: activePillTab === tab.id ? (isDark ? 'zinc.100' : 'zinc.900') : isDark ? 'zinc.400' : 'zinc.500',
                  shadow: activePillTab === tab.id ? 'sm' : 'none',
                  transition: 'all 0.2s',
                  _hover: { color: isDark ? 'zinc.200' : 'zinc.800' },
                })}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <p className={css({ fontSize: 'sm', color: isDark ? 'zinc.400' : 'zinc.600', lineHeight: 'relaxed' })}>
            {TAB_CONTENT.find((t) => t.id === activePillTab)?.content}
          </p>
        </div>
      </DocSection>

      <DocSection title="Code Example">
        <CodeBlock
          code={`const [active, setActive] = useState('tab1');

// Line Tabs
<div className={css({ display: 'flex', borderBottom: '2px solid', borderColor: 'zinc.200' })}>
  <button
    onClick={() => setActive('tab1')}
    className={css({
      px: '4', py: '2.5',
      fontSize: 'sm',
      fontWeight: 'medium',
      bg: 'transparent',
      border: 'none',
      borderBottom: '2px solid',
      borderColor: active === 'tab1' ? 'blue.500' : 'transparent',
      color: active === 'tab1' ? 'blue.500' : 'zinc.500',
      marginBottom: '-2px',
      cursor: 'pointer',
    })}
  >
    Tab 1
  </button>
</div>`}
        />
      </DocSection>
    </div>
  );
}
