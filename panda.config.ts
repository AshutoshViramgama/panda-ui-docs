import { defineConfig } from '@pandacss/dev';

export default defineConfig({
  // Enable CSS reset for consistent cross-browser baseline
  preflight: true,

  // Source files to scan for Panda CSS usage
  include: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],

  // Files to exclude from scanning
  exclude: [],

  // Output directory for generated CSS system
  outdir: 'styled-system',

  // Enable React JSX style props
  jsxFramework: 'react',

  // Extend theme with custom fonts
  theme: {
    extend: {
      tokens: {
        fonts: {
          sans: { value: '"Inter", ui-sans-serif, system-ui, sans-serif' },
          mono: { value: '"JetBrains Mono", ui-monospace, monospace' },
        },
      },
    },
  },
});
