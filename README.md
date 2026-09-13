# ADAI Landing Pages

**AI Design Aesthetic Inspiration** — a searchable visual collection of website design
references, design metadata, and reusable AI design prompts.

## Features

- **Collection page** with full-text search across names, descriptions, tags, technologies,
  fonts and colours, plus combinable filters (category, primary colour, purpose, theme,
  technology).
- **13 design aesthetic categories**, each with documented visual, typography, colour, layout
  and motion characteristics, suggested technologies, use cases and things to avoid.
- **Auto-generated base prompts** — every category produces a complete, reusable prompt that
  can be copied into any AI builder with one click.
- **Detail pages** with a 16:9 preview, external links (site, code, Figma, docs), the full
  design metadata sheet, and the copyable prompt.
- **Add Inspiration form** to save your own references (stored in your browser).
- **Light and dark mode** with a remembered preference.
- **Graceful fallbacks** for broken screenshots and blocked embeds.
- Fully responsive, keyboard accessible, semantic markup and per-page SEO metadata.

## Tech stack

TanStack Start (React 19 + TanStack Router), Vite 7, Tailwind CSS v4, shadcn/ui, lucide-react.

## Getting started

```bash
bun install
bun run dev
```

The app runs at http://localhost:8080.

## Project structure

```
src/
  data/categories.ts       13 aesthetic categories + base prompt generator
  data/inspirations.ts     seeded sample references
  lib/search.ts            filtering + facet extraction
  lib/store.ts             local persistence for user-added entries
  lib/theme.tsx            light/dark mode provider
  components/inspiration/  card, preview frame, filter panel, prompt block
  routes/index.tsx         collection
  routes/add.tsx           add inspiration
  routes/inspiration.$id.tsx  detail page
```

## Configuration

No secrets are required to run the app — entries are stored locally in the browser.
If you later connect a backend or an image host, keep keys out of the repo and read them
from environment variables (see `.env.example`).

## License

MIT.
