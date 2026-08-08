# Panda UI Components

A React-based UI component library and documentation site built using [Vite](https://vitejs.dev/) and [Panda CSS](https://panda-css.com/).

## Overview

This project serves as a Proof of Concept (POC) for building and documenting reusable UI components with Panda CSS's atomic utility-first styling engine.

### Features

- ⚡️ **Fast Development**: Powered by Vite and React.
- 🎨 **Type-safe Styling**: Zero-runtime CSS-in-JS using Panda CSS.
- 📚 **Component Documentation**: Built-in pages for showcasing components like Accordion, Alerts, Forms, Grid Layouts, and more.

## Getting Started

### Prerequisites

- Node.js (v18+)
- npm

### Installation

1. Clone the repository and install dependencies:
   ```bash
   npm install
   ```

2. Generate the Panda CSS styling artifacts:
   ```bash
   npm run prepare
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

## Available Scripts

- `npm run dev`: Starts the Vite development server with Panda CSS codegen watch mode.
- `npm run build`: Builds the application for production.
- `npm run lint`: Runs Oxlint to check for code issues.
- `npm run preview`: Previews the production build locally.

## License

MIT
