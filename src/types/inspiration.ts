export type ThemeMode = "light" | "dark" | "both";
export type PreviewType = "image" | "iframe" | "external";

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  visualCharacteristics: string;
  typographyCharacteristics: string;
  colorCharacteristics: string;
  layoutCharacteristics: string;
  motionCharacteristics: string;
  technologies: string[];
  useCases: string[];
  thingsToAvoid: string[];
  /** Optional override; otherwise generated from the fields above. */
  basePrompt?: string;
  referenceLinks?: { label: string; url: string }[];
  accent: string;
}

export interface Inspiration {
  id: string;
  name: string;
  slug: string;
  description: string;
  websiteUrl?: string;
  codeUrl?: string;
  figmaUrl?: string;
  documentationUrl?: string;

  previewType: PreviewType;
  previewUrl?: string;
  imageUrl?: string;
  cloudinaryPublicId?: string;

  categoryId: string;
  categoryName: string;

  purpose: string[];
  tags: string[];
  technologies: string[];

  primaryColor: string;
  secondaryColors: string[];

  theme: ThemeMode;
  fonts: string[];

  layoutStyle: string;
  animationStyle: string;

  inspirationNotes: string;
  basePrompt: string;

  createdAt: number;
  updatedAt: number;
}

export interface Filters {
  query: string;
  categoryId: string | null;
  primaryColor: string | null;
  purpose: string | null;
  theme: ThemeMode | null;
  technology: string | null;
}

export const emptyFilters: Filters = {
  query: "",
  categoryId: null,
  primaryColor: null,
  purpose: null,
  theme: null,
  technology: null,
};
