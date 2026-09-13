# Product

<!-- impeccable:product-schema 1 -->

## Platform
web

## Stack
[TanStack Start (React 19 + TanStack Router), Vite 7, Tailwind CSS v4, shadcn/ui, lucide-react, Bun package manager]

## Users
Developers building websites/apps who need design guidance; Product managers planning new digital products

## Product Purpose
Help users find and save website design inspiration through searchable design metadata and categorized aesthetic systems

## Positioning
Combines visual design references with AI-generatable prompts and detailed aesthetic categorization (visual, typography, color, layout, motion characteristics) in a browsable collection that enables users to discover, save, and reuse design ideas

## Operating Context
Web-based tool used during website planning, design exploration, and early development phases; user-saved data currently persists in browser localStorage with planned migration to Firebase backend and Cloudinary image storage

## Capabilities and Constraints
Currently client-side only (data stored in browser localStorage); planned Firebase backend and Cloudinary image storage for persistent cross-device storage; curated high-quality design references (13 aesthetic categories with seed data); MIT licensed open source; responsive design with semantic markup; WCAG AA accessibility target

## Brand Commitments
ADAI name and branding; MIT licensing commitment

## Evidence on Hand
Existing codebase featuring:
- 13 documented design aesthetic categories with comprehensive characteristics
- Seed inspiration dataset (10 references) demonstrating the categorization system
- Search functionality across names, descriptions, tags, technologies, fonts, and colors
- Faceted filtering by category, primary color, purpose, and theme
- Local persistence mechanism for user-added inspirations
- Light/dark theme support with system preference detection
- Responsive grid layout with detailed inspiration cards and preview frames
- Add inspiration form for user contributions

## Product Principles
1. **Curated Quality**: Maintain focus on exceptional, instructive design examples over sheer quantity
2. **Actionable Inspiration**: Provide not just visual references but reusable design prompts and implementation guidance
3. **Accessible Exploration**: Ensure the collection is usable by everyone regardless of ability or device
4. **User Ownership**: Respect user data ownership through client-side storage or transparent backend practices
5. **Design Education**: Teach design principles through detailed categorization and characteristic breakdowns

## Accessibility & Inclusion
WCAG AA compliance target; semantic HTML structure; keyboard navigable interface; responsive design for mobile and desktop; color contrast adherence; focus visibility; prefers-reduced-motion respect