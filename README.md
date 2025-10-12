# Midoman Dashboard

A modern, responsive financial dashboard built with React, TypeScript, and Tailwind CSS. Features a clean interface with account management, transaction history, and mobile-responsive navigation.

## Features

- 🎨 **Modern UI Design** - Clean, professional interface with Poppins font
- 📱 **Mobile Responsive** - Hamburger menu and mobile-optimized layouts
- 🌙 **Dark Mode Support** - Toggle between light and dark themes
- 🧭 **React Router** - Client-side routing with active navigation states
- 🎯 **TypeScript** - Full type safety throughout the application
- ⚡ **Vite** - Fast development and optimized builds
- 🎨 **Tailwind CSS v4** - Modern styling with custom theme configuration

## Tech Stack

- **React 19** with TypeScript
- **Vite** for build tooling
- **React Router** for navigation
- **Tailwind CSS v4** for styling
- **React Icons** (Feather Icons)
- **Poppins Font** from Google Fonts

## Getting Started

### Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment to Vercel

This project is optimized for Vercel deployment with the included `vercel.json` configuration.

### Option 1: Deploy via Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Deploy to Vercel
vercel

# Follow the prompts to configure your deployment
```

### Option 2: Deploy via Git Integration

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Go to [vercel.com](https://vercel.com) and sign in
3. Click "New Project" and import your repository
4. Vercel will automatically detect the settings and deploy

### Environment Variables

No environment variables are required for basic deployment. The app will work out of the box.

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.tsx      # Page header with search and hamburger menu
│   ├── Sidebar.tsx     # Desktop navigation sidebar
│   ├── MobileNav.tsx   # Mobile navigation overlay
│   ├── MainContent.tsx # Main dashboard content
│   └── DepositHistory.tsx # Deposit history component
├── pages/              # Route components
│   ├── Home.tsx        # Dashboard home page
│   ├── Escrow.tsx      # Escrow services page
│   ├── Transaction.tsx # Transaction management page
│   └── Settings.tsx    # Application settings page
├── App.tsx             # Main app component with routing
├── main.tsx           # Application entry point
└── index.css          # Global styles and Tailwind imports
```

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
