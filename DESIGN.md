---
name: ADAI Design System
description: A searchable visual collection of website design references with aesthetic categorization
colors:
  background: "oklch(1 0 0)"
  foreground: "oklch(0.129 0.042 264.695)"
  card: "oklch(1 0 0)"
  card-foreground: "oklch(0.129 0.042 264.695)"
  popover: "oklch(1 0 0)"
  popover-foreground: "oklch(0.129 0.042 264.695)"
  primary: "oklch(0.546 0.215 262.881)"
  primary-foreground: "oklch(0.985 0 0)"
  secondary: "oklch(0.968 0.007 247.896)"
  secondary-foreground: "oklch(0.208 0.042 265.755)"
  muted: "oklch(0.968 0.007 247.896)"
  muted-foreground: "oklch(0.554 0.046 257.417)"
  accent: "oklch(0.968 0.007 247.896)"
  accent-foreground: "oklch(0.208 0.042 265.755)"
  destructive: "oklch(0.577 0.245 27.325)"
  destructive-foreground: "oklch(0.984 0.003 247.858)"
  border: "oklch(0.929 0.013 255.508)"
  input: "oklch(0.929 0.013 255.508)"
  ring: "oklch(0.704 0.04 256.788)"
  chart-1: "oklch(0.646 0.222 41.116)"
  chart-2: "oklch(0.6 0.118 184.704)"
  chart-3: "oklch(0.398 0.07 227.392)"
  chart-4: "oklch(0.828 0.189 84.429)"
  chart-5: "oklch(0.769 0.188 70.08)"
  sidebar: "oklch(0.984 0.003 247.858)"
  sidebar-foreground: "oklch(0.129 0.042 264.695)"
  sidebar-primary: "oklch(0.208 0.042 265.755)"
  sidebar-primary-foreground: "oklch(0.984 0.003 247.858)"
  sidebar-accent: "oklch(0.968 0.007 247.896)"
  sidebar-accent-foreground: "oklch(0.208 0.042 265.755)"
  sidebar-border: "oklch(0.929 0.013 255.508)"
  sidebar-ring: "oklch(0.704 0.04 256.788)"
typography:
  display:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 7vw, 4.5rem)"
    fontWeight: 800
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "0"
  label:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0"
  mono:
    fontFamily: "JetBrains Mono, ui-monospace, SFMono-Regular, Menlo, monospace"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "0"
rounded:
  xs: "0.25rem"
  sm: "0.375rem"
  md: "0.5rem"
  lg: "0.75rem"
  xl: "1rem"
  "2xl": "1.5rem"
  "3xl": "2rem"
  "4xl": "2.5rem"
spacing:
  "1": "0.25rem"
  "2": "0.5rem"
  "3": "0.75rem"
  "4": "1rem"
  "5": "1.25rem"
  "6": "1.5rem"
  "7": "1.75rem"
  "8": "2rem"
  "9": "2.25rem"
  "10": "2.5rem"
  "11": "2.75rem"
  "12": "3rem"
  "14": "3.5rem"
  "16": "4rem"
  "20": "5rem"
  "24": "6rem"
  "28": "7rem"
  "32": "8rem"
  "36": "9rem"
  "40": "10rem"
  "44": "11rem"
  "48": "12rem"
  "52": "13rem"
  "56": "14rem"
  "60": "15rem"
  "64": "16rem"
  "72": "18rem"
  "80": "20rem"
  "96": "24rem"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.primary-foreground}"
    rounded: "{rounded.md}"
    padding: "0.75rem 1.5rem"
    height: "2.25rem"
  button-destructive:
    backgroundColor: "{colors.destructive}"
    textColor: "{colors.destructive-foreground}"
    rounded: "{rounded.md}"
    padding: "0.75rem 1.5rem"
    height: "2.25rem"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.foreground}"
    borderWidth: "1px"
    borderColor: "{colors.border}"
    rounded: "{rounded.md}"
    padding: "0.75rem 1.5rem"
    height: "2.25rem"
  button-secondary:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.secondary-foreground}"
    rounded: "{rounded.md}"
    padding: "0.75rem 1.5rem"
    height: "2.25rem"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.foreground}"
    rounded: "{rounded.md}"
    padding: "0.75rem 1.5rem"
    height: "2.25rem"
  button-link:
    backgroundColor: "transparent"
    textColor: "{colors.primary}"
    padding: "0.25rem 0.5rem"
    height: "auto"
  input:
    backgroundColor: "transparent"
    textColor: "{colors.foreground}"
    borderWidth: "1px"
    borderColor: "{colors.border}"
    rounded: "{rounded.md}"
    padding: "0.5rem 0.75rem"
    height: "2.25rem"
  card:
    backgroundColor: "{colors.card}"
    textColor: "{colors.card-foreground}"
    rounded: "{rounded.lg}"
    padding: "1.5rem"
---
# Design System: ADAI Design System

## Overview

**Creative North Star: "The Curated Designer's Companion"**

ADAI's design system balances professional utility with aesthetic exploration, providing designers and developers with a refined interface that emphasizes curated content discovery. The system uses a neutral foundation with strategic accent colors to highlight interactive elements and important information, creating an environment where the design inspirations themselves remain the visual focus.

**Key Characteristics:**
- Neutral background and foreground colors for maximum content readability
- Strategic use of oklch color space for perceptually uniform color relationships
- Consistent rounded-md radius (0.5rem) across interactive elements for visual harmony
- Inter typeface family for excellent readability and modern aesthetic
- Generous spacing system based on 0.25rem increments for flexible layout
- Shadow-free design relying on color, spacing, and typography for visual hierarchy

## Colors

ADAI employs a thoughtful color strategy centered around perceptual uniformity through the oklch color space, ensuring that color relationships feel natural and balanced across light and dark modes.

### Primary
- **Primary** (oklch(0.546 0.215 262.881) / #3b82f6-like): Used for primary actions, links, and interactive elements that require user attention. In dark mode shifts to slightly lighter oklch(0.623 0.214 259.815) for better contrast.

### Secondary
- **Secondary** (oklch(0.968 0.007 247.896) / near-white): Used for secondary actions, subtle highlights, and de-emphasized content. Provides contrast without competing with primary elements.

### Muted
- **Muted** (same as secondary): Used for auxiliary text, placeholder content, and disabled states requiring reduced visual weight.

### Accent
- **Accent** (same as secondary): Used for hover states, active indicators, and subtle interactive feedback.

### Destructive
- **Destructive** (oklch(0.577 0.245 27.325) / reddish-orange): Used for error states, destructive actions, and critical warnings requiring immediate attention.

### Neutral Background
- **Background** (oklch(1 0 0) / pure white): Foundation color for light mode interfaces.
- **Dark Background** (oklch(0.129 0.042 264.695) / dark blue): Foundation color for dark mode interfaces.

### Neutral Foreground
- **Foreground** (oklch(0.129 0.042 264.695) / dark blue): Primary text color for light mode.
- **Dark Foreground** (oklch(0.984 0.003 247.858) / near-white): Primary text color for dark mode.

### Card
- **Card Background** (oklch(1 0 0) / pure white): Container background for content cards in light mode.
- **Dark Card Background** (oklch(0.208 0.042 265.755) / slightly lighter blue): Container background for content cards in dark mode.

### Border
- **Border** (oklch(0.929 0.013 255.508) / light gray): Used for input fields, dividers, and subtle separators.
- **Dark Border** (oklch(1 0 0 / 10%) / transparent white): Used for input fields and separators in dark mode.

**The Neutral Canvas Rule.** The design system maintains a neutral background and foreground palette, reserving color exclusively for interactive elements, status indicators, and visual emphasis to ensure design inspirations remain the visual focus.

## Typography

ADAI utilizes the Inter typeface family for its exceptional readability, neutral character, and extensive language support. The system establishes a clear typographic hierarchy that supports both dense information scanning and comfortable reading.

### Display Font: Inter (with system-ui, sans-serif fallback)
Used for page titles, section headers, and prominent headings requiring visual impact.

### Body Font: Inter (with system-ui, sans-serif fallback)
Used for paragraphs, descriptive text, and bulk content requiring extended reading.

### Label/Mono Font: JetBrains Mono (with ui-monospace, SFMono-Regular, Menlo, monospace fallback)
Used for technical labels, code snippets, and data presentation requiring monospace clarity.

### Character: Functional and neutral. The Inter pairing provides excellent readability across sizes and weights while maintaining a modern, professional aesthetic that doesn't compete with the displayed design inspirations.

### Hierarchy
- **Display** (800 weight, clamp(2.5rem, 7vw, 4.5rem) size, 1.1 line-height): Page titles and major section headers
- **Body** (400 weight, 1rem size, 1.6 line-height): Paragraphs, descriptions, and extended content
- **Label** (500 weight, 0.875rem size, 1.4 line-height): Form labels, technical identifiers, and metadata
- **Mono** (400 weight, 0.875rem size, 1.4 line-height): Code samples, technical data, and precise measurements

**The Readable Hierarchy Rule.** Typography weights and sizes progress logically to create clear visual hierarchy without decorative excess, ensuring content readability remains paramount.

## Layout

ADAI employs a flexible, responsive layout system built around consistent spacing increments and content-first principles. The system prioritizes scannability and comfortable reading while adapting gracefully across viewport sizes.

The layout follows an 8-point grid system (0.25rem base unit) enabling consistent spacing and alignment. Containers use a max-width approach with padded edges to ensure optimal line lengths for readability. Content areas utilize flexible grids that collapse from multi-column layouts on desktop to single-column arrangements on mobile, maintaining reading order and accessibility.

Responsive breakpoints follow common mobile-first patterns:
- **sm**: 640px - Single column layouts begin
- **md**: 768px - Two column layouts become feasible
- **lg**: 1024px - Three column layouts supported
- **xl**: 1280px - Four column layouts possible

Internal component padding follows the spacing scale consistently, ensuring rhythmic vertical and horizontal spacing throughout the interface.

## Elevation & Depth

ADAI employs a flat design approach without relying on shadows for depth perception. Instead, the system uses color, spacing, typography, and layering to create visual hierarchy and interactive feedback.

**Flat-By-Default Rule.** Surfaces are flat at rest. Visual elevation is conveyed through strategic use of:
- Background color variations (card vs page background)
- Border definitions for input fields and containers
- Spacing and padding to create visual separation
- Typography weight and size for information hierarchy
- Interactive states (hover, focus, active) using color shifts rather than elevation

This approach ensures fast rendering, reduces visual complexity, and maintains focus on the content rather than interface chrome.

## Shapes

ADAI utilizes a consistent corner radius strategy to create visual harmony across interactive elements and containers. The system employs a scalable radius approach that maintains proportional relationships across different component sizes.

### Corner Strategy
- **Extra Small** (0.25rem / 4px): Hairline borders and subtle accents
- **Small** (0.375rem / 6px): Small buttons, chips, and tight spaces
- **Medium** (0.5rem / 8px): Standard buttons, inputs, and interactive elements (default)
- **Large** (0.75rem / 12px): Larger buttons, cards, and prominent containers
- **Extra Large** (1rem / 16px): Prominent cards, modals, and highlighted containers
- **2XL** (1.5rem / 24px): Feature cards, dialogs, and special containers
- **3XL** (2rem / 32px): Major sections, cards with significant padding
- **4XL** (2.5rem / 40px): Full-page containers, special highlights

**The Consistent Radius Rule.** Interactive elements of similar prominence use consistent radius values (primarily medium 0.5rem) to create visual harmony, with variations reserved for hierarchical emphasis or special container types.

## Components

ADAI's component library follows shadcn/ui principles with Tailwind CSS implementation, focusing on accessibility, flexibility, and visual consistency.

### Buttons
- **Shape:** Medium radius (0.5rem / 8px) - consistent across all interactive elements
- **Primary:** Blue background ({colors.primary}) with white foreground ({colors.primary-foreground}), 0.75rem vertical padding, 1.5rem horizontal padding
- **Hover / Focus:** Background shifts to 90% opacity ({colors.primary}/90) for subtle feedback
- **Destructive:** Reddish-orange background ({colors.destructive}) with white foreground ({colors.destructive-foreground})
- **Outline:** Transparent background with {colors.border} border, {colors.foreground} text, shifts to {colors.accent} background on hover
- **Secondary:** Gray background ({colors.secondary}) with {colors.secondary-foreground} text
- **Ghost:** Transparent background, shifts to {colors.accent} background on hover with {colors.accent-foreground} text
- **Link:** {colors.primary} text with underline offset, underlines on hover

### Cards / Containers
- **Corner Style:** Large radius (1rem / 16px) - prominent but not overwhelming
- **Background:** {colors.card} (white in light mode, darkened in dark mode)
- **Background Text Color:** {colors.card-foreground}
- **Border:** None by default (uses background color for separation)
- **Internal Padding:** 1.5rem on all sides for comfortable content spacing
- **Shadow Strategy:** None (follows flat design principle)

### Inputs / Fields
- **Style:** Transparent background, 1px border using {colors.border}, {rounded.md} radius (0.5rem / 8px)
- **Focus:** {colors.ring} ring (oklch(0.704 0.04 256.788)) with 1px width, no outline
- **Error / Disabled:** 
  - Error: Uses {colors.destructive} for border and text
  - Disabled: {colors.input} background with 50% opacity, {cursor-not-allowed}

### Navigation
- **Style:** Flex container with gap spacing, wrapped when necessary
- **Typography:** Uses {typography.label} for links (500 weight, 0.875rem size)
- **Default State:** {colors.foreground} text on transparent background
- **Hover State:** {colors.accent} background with {colors.accent-foreground} text
- **Active State:** {colors.primary} background with {colors.primary-foreground} text
- **Mobile Treatment:** Converts to vertical stack with increased touch targets (minimum 44px)

**The Interactive Feedback Rule.** All interactive elements provide clear visual feedback through background color shifts (typically to 90% opacity of base color) or accent color application on hover and focus states, never relying solely on cursor changes.

## Do's and Don'ts

### Do:
- **Do** use the neutral background/foreground canvas to let design inspirations remain the visual focus
- **Do** apply interactive states using background color shifts to 90% opacity or accent colors
- **Do** maintain consistent 0.5rem radius across primary interactive elements (buttons, inputs)
- **Do** utilize the 0.25rem spacing scale for consistent vertical and horizontal rhythm
- **Do** employ the Inter typeface family for all textual content with appropriate weights
- **Do** respect the flat design principle, avoiding shadows for depth perception
- **Do** ensure minimum 44px touch targets for mobile accessibility
- **Do** use oklch color space for perceptually uniform color relationships

### Don't:
- **Don't** use drop shadows or elevation to create visual hierarchy
- **Don't** vary border radii inconsistently across similar interactive elements
- **Don't** rely on color alone for conveying critical information (always pair with icons/text)
- **Don't** use fixed pixel values for spacing that break the 0.25rem rhythm
- **Don't** apply decorative typography that competes with content readability
- **Don't** use pure black (#000000) or pure white (#FFFFFF) in favor of oklch values
- **Don't** create color contrasts below WCAG AA ratios for text readability
- **Don't** animate layout changes that could trigger vestibular disorders