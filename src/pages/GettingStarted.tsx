import { css } from '../../styled-system/css';
import { useTheme } from '../hooks/useTheme';
import { DocSection } from '../components/docs/DocSection';
import { CodeBlock } from '../components/docs/CodeBlock';

export function GettingStarted() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div>
      <div className={css({ mb: '10' })}>
        <span
          className={css({
            fontSize: '5xl',
            display: 'block',
            mb: '4',
          })}
        >
          🐼
        </span>
        <h1
          className={css({
            fontSize: '4xl',
            fontWeight: 'black',
            color: isDark ? 'zinc.100' : 'zinc.900',
            mb: '4',
            lineHeight: 'tight',
          })}
        >
          Panda CSS
          <br />
          <span className={css({ color: 'blue.500' })}>Design System Documentation</span>
        </h1>
        <p
          className={css({
            fontSize: 'lg',
            color: isDark ? 'zinc.400' : 'zinc.600',
            lineHeight: 'relaxed',
            maxW: '3xl',
          })}
        >
          A comprehensive showcase of all default Panda CSS tokens and components.
          Every example is styled exclusively using the{' '}
          <code
            className={css({
              fontFamily: 'mono',
              bg: isDark ? 'zinc.800' : 'zinc.200',
              px: '1.5',
              py: '0.5',
              rounded: 'md',
              fontSize: 'md',
            })}
          >
            css()
          </code>{' '}
          function with default tokens — no recipes, no custom CSS.
        </p>
      </div>

      <DocSection
        title="Installation"
        description="Get started with Panda CSS in a Vite + React + TypeScript project."
      >
        <CodeBlock
          title="1. Create a new project"
          language="bash"
          code={`npm create vite@latest my-app -- --template react-ts
cd my-app
npm install`}
        />
        <CodeBlock
          title="2. Install Panda CSS"
          language="bash"
          code={`npm install -D @pandacss/dev
npx panda init --postcss`}
        />
        <CodeBlock
          title="3. Configure panda.config.ts"
          language="ts"
          code={`import { defineConfig } from '@pandacss/dev';

export default defineConfig({
  preflight: true,
  include: ['./src/**/*.{js,jsx,ts,tsx}'],
  outdir: 'styled-system',
  jsxFramework: 'react',
});`}
        />
        <CodeBlock
          title="4. Add layer directives to index.css"
          language="css"
          code={`@layer reset, base, tokens, recipes, utilities;`}
        />
        <CodeBlock
          title="5. Add prepare script to package.json"
          language="json"
          code={`{
  "scripts": {
    "prepare": "panda codegen",
    "dev": "panda codegen && vite",
    "build": "panda codegen && tsc -b && vite build"
  }
}`}
        />
      </DocSection>

      <DocSection
        title="Usage"
        description="Import the css function and start styling your components with type-safe tokens."
      >
        <CodeBlock
          title="Basic usage with css() function"
          language="tsx"
          code={`import { css } from '../styled-system/css';

function MyComponent() {
  return (
    <div
      className={css({
        bg: 'blue.500',
        color: 'white',
        p: '4',
        rounded: 'lg',
        fontSize: 'lg',
        fontWeight: 'bold',
        shadow: 'md',
        _hover: {
          bg: 'blue.600',
          shadow: 'lg',
        },
        transition: 'all 0.2s',
      })}
    >
      Hello, Panda CSS!
    </div>
  );
}`}
        />
        <div
          className={css({
            p: '6',
            bg: isDark ? 'zinc.800' : 'white',
            rounded: 'lg',
            border: '1px solid',
            borderColor: isDark ? 'zinc.700' : 'zinc.200',
            mb: '6',
          })}
        >
          <p
            className={css({
              fontSize: 'sm',
              fontWeight: 'semibold',
              color: isDark ? 'zinc.400' : 'zinc.500',
              mb: '3',
              textTransform: 'uppercase',
              letterSpacing: 'wider',
            })}
          >
            Live Preview
          </p>
          <div
            className={css({
              bg: 'blue.500',
              color: 'white',
              p: '4',
              rounded: 'lg',
              fontSize: 'lg',
              fontWeight: 'bold',
              shadow: 'md',
              _hover: {
                bg: 'blue.600',
                shadow: 'lg',
              },
              transition: 'all 0.2s',
              cursor: 'pointer',
              display: 'inline-block',
            })}
          >
            Hello, Panda CSS!
          </div>
        </div>
      </DocSection>

      <DocSection
        title="Key Concepts"
        description="Understanding the fundamentals of Panda CSS styling."
      >
        <div
          className={css({
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '4',
          })}
        >
          {[
            {
              icon: '🎨',
              title: 'Design Tokens',
              desc: 'Pre-defined values for colors, spacing, typography, and more.',
            },
            {
              icon: '⚡',
              title: 'Zero Runtime',
              desc: 'Styles are generated at build time — no runtime cost.',
            },
            {
              icon: '🔒',
              title: 'Type Safety',
              desc: 'Full TypeScript support with autocomplete for all tokens.',
            },
            {
              icon: '📦',
              title: 'Atomic CSS',
              desc: 'Generates minimal, reusable CSS classes automatically.',
            },
            {
              icon: '🎯',
              title: 'Shorthand Props',
              desc: 'Use bg, p, rounded, etc. for faster development.',
            },
            {
              icon: '🌗',
              title: 'Pseudo Selectors',
              desc: '_hover, _focus, _active and more for interactive states.',
            },
          ].map((card) => (
            <div
              key={card.title}
              className={css({
                p: '5',
                bg: isDark ? 'zinc.800' : 'white',
                rounded: 'xl',
                border: '1px solid',
                borderColor: isDark ? 'zinc.700' : 'zinc.200',
                transition: 'all 0.2s',
                _hover: {
                  borderColor: 'blue.500',
                  shadow: 'md',
                  transform: 'translateY(-2px)',
                },
              })}
            >
              <span className={css({ fontSize: '2xl', display: 'block', mb: '2' })}>
                {card.icon}
              </span>
              <h4
                className={css({
                  fontWeight: 'bold',
                  color: isDark ? 'zinc.100' : 'zinc.900',
                  mb: '1',
                })}
              >
                {card.title}
              </h4>
              <p
                className={css({
                  fontSize: 'sm',
                  color: isDark ? 'zinc.400' : 'zinc.600',
                  lineHeight: 'relaxed',
                })}
              >
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </DocSection>
    </div>
  );
}
