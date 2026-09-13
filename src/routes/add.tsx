import { useState } from "react";
import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { toast } from "sonner";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { categories, buildBasePrompt, categoryById } from "@/data/categories";
import { addInspiration } from "@/lib/store";
import type { Inspiration, PreviewType, ThemeMode } from "@/types/inspiration";

export const Route = createFileRoute("/add")({
  head: () => ({
    meta: [
      { title: "Add a design reference — ADAI" },
      {
        name: "description",
        content:
          "Save a website design reference with links, screenshot, aesthetic category and design metadata to your ADAI collection.",
      },
      { property: "og:title", content: "Add a design reference — ADAI" },
      {
        property: "og:description",
        content: "Save a website design reference with links, screenshot and design metadata.",
      },
    ],
  }),
  component: AddPage,
});

const slugify = (s: string) =>
  s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

const list = (s: string) =>
  s.split(",").map((v) => v.trim()).filter(Boolean);

function Field({
  label,
  hint,
  children,
  htmlFor,
}: {
  label: string;
  hint?: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-1.5">
      <Label htmlFor={htmlFor} className="text-[13px]">
        {label}
      </Label>
      {children}
      {hint && <p className="text-[11px] text-muted-foreground">{hint}</p>}
    </div>
  );
}

function AddPage() {
  const navigate = useNavigate();
  const [f, setF] = useState({
    name: "",
    description: "",
    websiteUrl: "",
    codeUrl: "",
    figmaUrl: "",
    documentationUrl: "",
    imageUrl: "",
    previewUrl: "",
    previewType: "image" as PreviewType,
    categoryId: categories[0]?.id ?? "",
    purpose: "",
    tags: "",
    technologies: "",
    primaryColor: "Neutral",
    secondaryColors: "",
    theme: "light" as ThemeMode,
    fonts: "",
    layoutStyle: "",
    animationStyle: "",
    inspirationNotes: "",
  });

  const upd = (k: keyof typeof f, v: string) => setF((p) => ({ ...p, [k]: v }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!f.name.trim() || !f.description.trim()) {
      toast.error("A name and a short description are required.");
      return;
    }
    const category = categoryById(f.categoryId);
    const now = Date.now();
    const entry: Inspiration = {
      id: `${slugify(f.name)}-${now}`,
      slug: slugify(f.name),
      name: f.name.trim(),
      description: f.description.trim(),
      ...(f.websiteUrl ? { websiteUrl: f.websiteUrl } : {}),
      ...(f.codeUrl ? { codeUrl: f.codeUrl } : {}),
      ...(f.figmaUrl ? { figmaUrl: f.figmaUrl } : {}),
      ...(f.documentationUrl ? { documentationUrl: f.documentationUrl } : {}),
      previewType: f.previewType,
      ...(f.previewUrl ? { previewUrl: f.previewUrl } : {}),
      ...(f.imageUrl ? { imageUrl: f.imageUrl } : {}),
      categoryId: f.categoryId,
      categoryName: category?.name ?? f.categoryId,
      purpose: list(f.purpose),
      tags: list(f.tags),
      technologies: list(f.technologies),
      primaryColor: f.primaryColor.trim() || "Neutral",
      secondaryColors: list(f.secondaryColors),
      theme: f.theme,
      fonts: list(f.fonts),
      layoutStyle: f.layoutStyle.trim(),
      animationStyle: f.animationStyle.trim(),
      inspirationNotes: f.inspirationNotes.trim(),
      basePrompt: category ? buildBasePrompt(category) : "",
      createdAt: now,
      updatedAt: now,
    };
    addInspiration(entry);
    toast.success("Saved to your collection");
    navigate({ to: "/inspiration/$id", params: { id: entry.id } });
  };

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft aria-hidden className="size-4" />
          Collection
        </Link>

        <h1 className="mt-4 text-2xl font-semibold tracking-tight text-foreground">
          Add an inspiration
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Saved in this browser. Comma-separate list fields.
        </p>

        <form onSubmit={submit} className="mt-8 space-y-8">
          <section className="space-y-4">
            <h2 className="text-[11px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
              Basics
            </h2>
            <Field label="Name" htmlFor="name">
              <Input id="name" value={f.name} onChange={(e) => upd("name", e.target.value)} required />
            </Field>
            <Field label="Description" htmlFor="description">
              <Textarea
                id="description"
                rows={3}
                value={f.description}
                onChange={(e) => upd("description", e.target.value)}
                required
              />
            </Field>
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Website URL" htmlFor="websiteUrl">
                <Input id="websiteUrl" type="url" value={f.websiteUrl} onChange={(e) => upd("websiteUrl", e.target.value)} />
              </Field>
              <Field label="Code URL" htmlFor="codeUrl">
                <Input id="codeUrl" type="url" value={f.codeUrl} onChange={(e) => upd("codeUrl", e.target.value)} />
              </Field>
              <Field label="Figma URL" htmlFor="figmaUrl">
                <Input id="figmaUrl" type="url" value={f.figmaUrl} onChange={(e) => upd("figmaUrl", e.target.value)} />
              </Field>
              <Field label="Documentation URL" htmlFor="documentationUrl">
                <Input id="documentationUrl" type="url" value={f.documentationUrl} onChange={(e) => upd("documentationUrl", e.target.value)} />
              </Field>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-[11px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
              Preview
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Preview type" htmlFor="previewType">
                <select
                  id="previewType"
                  value={f.previewType}
                  onChange={(e) => upd("previewType", e.target.value)}
                  className="h-9 w-full rounded-md border border-input bg-background px-3 text-sm text-foreground"
                >
                  <option value="image">Screenshot image</option>
                  <option value="iframe">Live embed</option>
                  <option value="external">External link only</option>
                </select>
              </Field>
              <Field label="Theme" htmlFor="theme">
                <select
                  id="theme"
                  value={f.theme}
                  onChange={(e) => upd("theme", e.target.value)}
                  className="h-9 w-full rounded-md border border-input bg-background px-3 text-sm text-foreground"
                >
                  <option value="light">Light</option>
                  <option value="dark">Dark</option>
                  <option value="both">Light &amp; dark</option>
                </select>
              </Field>
              <Field label="Screenshot image URL" htmlFor="imageUrl" hint="Used on cards and detail pages.">
                <Input id="imageUrl" type="url" value={f.imageUrl} onChange={(e) => upd("imageUrl", e.target.value)} />
              </Field>
              <Field label="Embed URL" htmlFor="previewUrl" hint="Only used for live embeds.">
                <Input id="previewUrl" type="url" value={f.previewUrl} onChange={(e) => upd("previewUrl", e.target.value)} />
              </Field>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-[11px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
              Design metadata
            </h2>
            <Field label="Aesthetic category" htmlFor="categoryId">
              <select
                id="categoryId"
                value={f.categoryId}
                onChange={(e) => upd("categoryId", e.target.value)}
                className="h-9 w-full rounded-md border border-input bg-background px-3 text-sm text-foreground"
              >
                {categories.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.name}
                  </option>
                ))}
              </select>
            </Field>
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Purpose" htmlFor="purpose" hint="e.g. SaaS, Portfolio">
                <Input id="purpose" value={f.purpose} onChange={(e) => upd("purpose", e.target.value)} />
              </Field>
              <Field label="Tags" htmlFor="tags">
                <Input id="tags" value={f.tags} onChange={(e) => upd("tags", e.target.value)} />
              </Field>
              <Field label="Technologies" htmlFor="technologies">
                <Input id="technologies" value={f.technologies} onChange={(e) => upd("technologies", e.target.value)} />
              </Field>
              <Field label="Primary colour" htmlFor="primaryColor" hint="e.g. Blue, Neutral">
                <Input id="primaryColor" value={f.primaryColor} onChange={(e) => upd("primaryColor", e.target.value)} />
              </Field>
              <Field label="Secondary colours" htmlFor="secondaryColors" hint="Hex values, comma separated">
                <Input id="secondaryColors" value={f.secondaryColors} onChange={(e) => upd("secondaryColors", e.target.value)} />
              </Field>
              <Field label="Fonts" htmlFor="fonts">
                <Input id="fonts" value={f.fonts} onChange={(e) => upd("fonts", e.target.value)} />
              </Field>
              <Field label="Layout style" htmlFor="layoutStyle">
                <Input id="layoutStyle" value={f.layoutStyle} onChange={(e) => upd("layoutStyle", e.target.value)} />
              </Field>
              <Field label="Animation style" htmlFor="animationStyle">
                <Input id="animationStyle" value={f.animationStyle} onChange={(e) => upd("animationStyle", e.target.value)} />
              </Field>
            </div>
            <Field label="Inspiration notes" htmlFor="inspirationNotes">
              <Textarea
                id="inspirationNotes"
                rows={3}
                value={f.inspirationNotes}
                onChange={(e) => upd("inspirationNotes", e.target.value)}
              />
            </Field>
          </section>

          <div className="flex gap-2">
            <Button type="submit">Save inspiration</Button>
            <Button type="button" variant="outline" onClick={() => navigate({ to: "/" })}>
              Cancel
            </Button>
          </div>
        </form>
      </main>
    </div>
  );
}
