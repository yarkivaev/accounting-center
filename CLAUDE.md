# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

UC Svobodny Sokol (УЦ Свободный Сокол) - A full-stack web application for an accounting center and industrial laboratory in Lipetsk, Russia. The site presents two main service categories:

- **Accounting Services**: Business registration, tax reporting, payroll, legal support
- **Laboratory Services**: Chemical analysis, mechanical testing, water quality control, non-destructive testing

**Status**: Early-stage project (v1.0.0) with initial commit

## Development Commands

```bash
# Development
npm run dev          # Start Vite dev server on port 3000 with hot reload
npm run check        # TypeScript type checking (no emit)
npm run format       # Format all files with Prettier

# Production
npm run build        # Build frontend (Vite) + bundle server (esbuild)
npm start           # Run production server (requires NODE_ENV=production)
npm run preview     # Preview production build locally

# Package Management
pnpm install        # Install dependencies (pnpm 10.4.1+ required)
```

## Architecture

**Monorepo Structure**:

- `client/` - React 19 SPA (Vite + TypeScript)
- `server/` - Express server for static file serving
- `shared/` - Shared constants between client/server

**Technology Stack**:

- Frontend: React 19, TypeScript 5.6, Vite 7, Tailwind CSS 4
- Routing: Wouter (lightweight client-side router with patched version)
- UI Components: Radix UI (50+ components) with Shadcn patterns
- Forms: React Hook Form + Zod validation
- Animation: Framer Motion
- Backend: Express (minimal static file server)

**Build Output**:

- `dist/public/` - Frontend assets served by Express
- `dist/index.js` - Bundled server

## Code Organization

**Path Aliases** (configured in tsconfig.json and vite.config.ts):

- `@/` → `client/src/`
- `@shared/` → `shared/`
- `@assets/` → `attached_assets/`

**Directory Structure**:

```
client/src/
├── pages/           # 7 route components (Home, Accounting, Laboratory, Legal, About, Contacts, NotFound)
├── components/      # Layout and shared components
│   ├── Layout.tsx   # Main layout with header/footer
│   └── ui/          # 50+ Radix UI components (button, card, dialog, form, etc.)
├── contexts/        # ThemeContext for light/dark mode
├── hooks/           # Custom hooks (useComposition, useMobile, usePersistFn)
└── lib/             # Utilities (clsx, cn merge function)
```

**Routing**:

- Uses Wouter for client-side routing
- Custom patch applied to wouter@3.7.1 (see patches/wouter@3.7.1.patch)
- Server returns index.html for all routes (SPA fallback pattern)

## TypeScript Configuration

**Strict Mode Enabled**:

- All compiler strict flags active
- Module: ESNext with bundler resolution
- JSX preserved (Vite handles transformation)
- Incremental compilation with build info caching

**Important**: Use path aliases consistently. Import from `@/components/ui/button` not `../components/ui/button`

## Styling Architecture

**Tailwind CSS v4**:

- Utility-first approach with CSS variables for theming
- Theme defined in `client/src/index.css`
- Responsive breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px), 2xl (1536px)
- No separate CSS modules - all styling via className

**Component Patterns**:

- Radix UI primitives wrapped with Tailwind classes
- Variant system using class-variance-authority
- Utility function `cn()` for conditional class merging

**Theme System**:

- Light theme by default (dark theme infrastructure present but disabled)
- CSS custom properties for colors (--primary, --secondary, etc.)
- next-themes provider wraps entire app

## Design Philosophy

Follows "Industrial Precision" design movement (see ideas.md):

- **Style**: Swiss Style + Brutalist elements
- **Colors**: Deep graphite, white, with safety orange or steel blue accents
- **Layout**: Asymmetric grid, split-screen for service duality
- **Typography**: Industrial grotesque (Oswald/Manrope) + monospace for technical data
- **Animations**: Bottom-up reveal with ease-out-quart, parallax textures
- **Interaction**: Mechanical feel, color inversion on hover

## Component Development

**Form Handling**:

```typescript
// Use React Hook Form + Zod
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const schema = z.object({
  /* ... */
});
const form = useForm({ resolver: zodResolver(schema) });
```

**UI Components**:

- All UI components are in `client/src/components/ui/`
- Based on Radix UI primitives with Tailwind styling
- Import from `@/components/ui/[component-name]`

**Error Handling**:

- ErrorBoundary wraps the app in Layout.tsx
- Catches React errors and displays fallback UI

## Server Configuration

**Express Server** (`server/index.ts`):

- Serves static files from `dist/public/`
- Returns index.html for all routes (SPA fallback)
- Minimal configuration - no API endpoints yet

**Vite Dev Server**:

- Port 3000 (finds next available if busy)
- Allowed hosts configured for Manus runtime
- Strict filesystem access (denies dotfiles)

## Dependencies

**Patched Dependencies**:

- wouter@3.7.1 - Custom routing patch in `patches/wouter@3.7.1.patch`

**Overrides**:

- tailwindcss>nanoid@3.3.7 - Locked to specific version

## Code Quality

**Prettier Configuration** (.prettierrc):

- 80 character line width
- 2 space indentation
- Trailing commas (ES5)
- Double quotes for JSX/strings

**Important**: Run `npm run format` before committing

## Current State

**Implemented**:

- Complete page structure (7 pages)
- Responsive layout with mobile navigation
- Theme system infrastructure
- UI component library (50+ components)
- Form handling infrastructure

**Not Yet Implemented**:

- Backend API endpoints
- Form submissions
- Database integration
- Test suite (Vitest configured but no tests)
- Dark theme UI (infrastructure exists)

## Notes

- Package manager: pnpm 10.4.1+ (enforced by packageManager field)
- Main git branch: main (no remote configured yet)
- No README.md - create one if needed for external documentation
- Design inspired by industrial/corporate aesthetics for professional services firm
