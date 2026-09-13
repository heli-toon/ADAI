import type { Filters, Inspiration } from "@/types/inspiration";

function haystack(i: Inspiration) {
  return [
    i.name,
    i.description,
    i.categoryName,
    i.layoutStyle,
    i.animationStyle,
    i.primaryColor,
    i.inspirationNotes,
    ...i.tags,
    ...i.purpose,
    ...i.technologies,
    ...i.fonts,
    ...i.secondaryColors,
  ]
    .join(" ")
    .toLowerCase();
}

export function filterInspirations(items: Inspiration[], f: Filters): Inspiration[] {
  const q = f.query.trim().toLowerCase();
  const terms = q ? q.split(/\s+/) : [];

  return items.filter((i) => {
    if (f.categoryId && i.categoryId !== f.categoryId) return false;
    if (f.primaryColor && i.primaryColor !== f.primaryColor) return false;
    if (f.purpose && !i.purpose.includes(f.purpose)) return false;
    if (f.technology && !i.technologies.includes(f.technology)) return false;
    if (f.theme) {
      if (f.theme === "both") {
        // When filtering for "both", only show items that work in both modes
        if (i.theme !== "both") return false;
      } else {
        // When filtering for "light" or "dark", show items that match that theme OR work in both modes
        if (i.theme !== f.theme && i.theme !== "both") return false;
      }
    }
    if (terms.length) {
      const hay = haystack(i);
      if (!terms.every((t) => hay.includes(t))) return false;
    }
    return true;
  });
}

export function facets(items: Inspiration[]) {
  const colors = new Set<string>();
  const purposes = new Set<string>();
  const technologies = new Set<string>();
  items.forEach((i) => {
    colors.add(i.primaryColor);
    i.purpose.forEach((p) => purposes.add(p));
    i.technologies.forEach((t) => technologies.add(t));
  });
  const sorted = (s: Set<string>) => [...s].sort((a, b) => a.localeCompare(b));
  return { colors: sorted(colors), purposes: sorted(purposes), technologies: sorted(technologies) };
}

export const activeFilterCount = (f: Filters) =>
  [f.categoryId, f.primaryColor, f.purpose, f.theme, f.technology].filter(Boolean).length;
