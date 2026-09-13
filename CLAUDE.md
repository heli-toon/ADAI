# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

ADAI (AI Design Aesthetic Inspiration) is a searchable visual collection of website design references, design metadata, and reusable AI design prompts. The app allows users to browse 13 design aesthetic categories, filter inspirations by various criteria, view detailed pages for each inspiration, and add their own references (stored in browser localStorage).

## Tech Stack

- **Framework**: TanStack Start (React 19 + TanStack Router)
- **Build Tool**: Vite 7
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Icons**: lucide-react
- **State Management**: Custom store with localStorage persistence
- **TypeScript**: For type safety
- **Package Manager**: Bun

## Project Structure

```
src/
├── components/
│   ├── inspiration/     # Inspiration-specific components (Card, PreviewFrame, FilterPanel, PromptBlock)
│   ├── layout/          # Layout components (SiteHeader, etc.)
│   └── ui/              # Reusable shadcn/ui components (button, badge, etc.)
├── data/
│   ├── categories.ts    # 13 design aesthetic categories with characteristics and base prompt generator
│   └── inspirations.ts  # Seed data (10 inspirations) and type definitions
├── lib/
│   ├── search.ts        # Filtering and faceting logic for inspirations
│   ├── store.ts         # LocalStorage-backed inspiration store with React hook
│   ├── theme.tsx        # Light/dark theme context provider
│   ├── error-capture.ts # Error boundaries and reporting
│   ├── error-page.ts    # Error page component
│   ├── lovable-error-reporting.ts # Lovable-specific error handling
│   ├── utils.ts         # Utility functions
│   └── ...              # Other lib files
├── routes/
│   ├── index.tsx        # Collection page (searchable grid of inspirations)
│   ├── add.tsx          # Add inspiration form
│   ├── inspiration.$id.tsx # Detail page for a single inspiration
│   ├── __root.tsx       # Root layout (provides ThemeProvider, etc.)
│   └── README.md        # Route documentation
├── types/
│   └── inspiration.ts   # TypeScript types for Inspiration, Category, Filters
├── router.tsx           # TanStack Router configuration
├── start.ts             # TanStack Start entry point
├── server.ts            # Server-side logic (if any)
└── routeTree.gen.ts     # Generated route tree (do not edit)
```

## Development Commands

- **Install dependencies**: `bun install`
- **Start development server**: `bun run dev` (runs at http://localhost:8080)
- **Preview production build**: `bun run preview`
- **Build for production**: `bun run build`
- **Run ESLint**: `bun run lint`
- **Format code**: `bun run format`

## Data Flow

1. Inspirations are seeded in `src/data/inspirations.ts` and loaded via `src/lib/store.ts`.
2. The store provides `getAllInspirations()` (seeded + user-added from localStorage) and `useInspirations()` React hook.
3. Filtering happens in `src/lib/search.ts` using `filterInspirations()` and `facets()`.
4. The collection page (`src/routes/index.tsx`) displays filtered results in a grid.
5. Detail pages (`src/routes/inspiration.$id.tsx`) show a single inspiration with its metadata and base prompt.
6. The add inspiration form (`src/routes/add.tsx`) saves new entries to localStorage via the store.

## Styling and Theme

- Tailwind CSS v4 is configured via `vite.config.ts` and `tailwindcss` preset.
- The theme context (`src/lib/theme.tsx`) provides a `mode` (light/dark) and `toggle` function.
- The theme persists in localStorage under `adai-theme` and respects the system prefers-color-scheme.
- The `ThemeProvider` wraps the app in `__root.tsx`.
- Dark mode is applied by adding the `dark` class to the `document.documentElement`.

## Adding New Features

- **New Components**: Place in `src/components/` (e.g., `src/components/feature/FeatureComponent.tsx`).
- **New Routes**: Create a file in `src/routes/` (e.g., `src/routes/new-feature.tsx` for `/new-feature`).
- **New Data Types**: Add to `src/types/` if shared, or co-locate with the feature.
- **Styling**: Use Tailwind utility classes; follow the existing design system (shadcn/ui components where applicable).
- **State**: For inspiration-related state, consider extending the store in `src/lib/store.ts`. For UI state, use React hooks.

## Notes

- The app uses Bun as the package manager; avoid npm/yarn commands unless necessary.
- All data is stored client-side; no backend is required for basic functionality.
- TypeScript is strictly typed; ensure new code adheres to the existing type definitions.
- The seed data is meant for demonstration; user-added inspirations persist in localStorage until cleared.
- When adding new filters, update the `Filters` type in `src/types/inspiration.ts` and the filtering logic in `src/lib/search.ts`.