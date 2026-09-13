import { createFileRoute, Link, useParams } from "@tanstack/react-router";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { PreviewFrame } from "@/components/inspiration/PreviewFrame";
import { PromptBlock } from "@/components/inspiration/PromptBlock";
import { Badge } from "@/components/ui/badge";
import { getInspiration } from "@/lib/store";
import { categoryById } from "@/data/categories";

export const Route = createFileRoute("/inspiration/$id")({
  head: () => ({
    meta: [
      { title: "Design reference — ADAI" },
      {
        name: "description",
        content:
          "Full design metadata, screenshots, links and the reusable AI prompt for this website design reference.",
      },
      { property: "og:title", content: "Design reference — ADAI" },
      {
        property: "og:description",
        content: "Design metadata, links and a reusable AI prompt for this website reference.",
      },
    ],
  }),
  component: Detail,
});

function Row({ label, value }: { label: string; value: React.ReactNode }) {
  if (!value) return null;
  return (
    <div className="grid grid-cols-[120px_minmax(0,1fr)] gap-3 border-b border-border py-2.5 text-sm last:border-0">
      <dt className="text-[11px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
        {label}
      </dt>
      <dd className="text-foreground">{value}</dd>
    </div>
  );
}

function Detail() {
  const { id } = useParams({ from: "/inspiration/$id" });
  const item = getInspiration(id);

  if (!item) {
    return (
      <div className="min-h-screen bg-background">
        <SiteHeader />
        <main className="mx-auto max-w-2xl px-4 py-24 text-center">
          <h1 className="text-xl font-semibold text-foreground">Reference not found</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            This entry may have been saved in another browser.
          </p>
          <Link to="/" className="mt-6 inline-flex text-sm text-primary underline">
            Back to the collection
          </Link>
        </main>
      </div>
    );
  }

  const category = categoryById(item.categoryId);
  const links = [
    { label: "Live website", url: item.websiteUrl },
    { label: "Code", url: item.codeUrl },
    { label: "Figma", url: item.figmaUrl },
    { label: "Documentation", url: item.documentationUrl },
  ].filter((l) => !!l.url);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main className="mx-auto max-w-[1100px] px-4 py-8 sm:px-6">
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft aria-hidden className="size-4" />
          Collection
        </Link>

        <header className="mt-4">
          <h1 className="text-3xl font-semibold tracking-tight text-foreground">{item.name}</h1>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            {item.description}
          </p>
        </header>

        <div className="mt-6 overflow-hidden rounded-md border border-border">
          <PreviewFrame item={item} />
        </div>

        {links.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.url}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-1.5 rounded-sm border border-border bg-card px-3 py-1.5 text-[13px] text-foreground hover:border-foreground/25"
              >
                {l.label}
                <ExternalLink aria-hidden className="size-3.5 text-muted-foreground" />
              </a>
            ))}
          </div>
        )}

        <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px]">
          <div className="space-y-8">
            <PromptBlock prompt={item.basePrompt} />

            <section>
              <h2 className="text-sm font-semibold tracking-tight text-foreground">
                Why it's worth studying
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {item.inspirationNotes}
              </p>
            </section>

            {category && (
              <section>
                <h2 className="text-sm font-semibold tracking-tight text-foreground">
                  {category.name}
                </h2>
                <dl className="mt-2">
                  <Row label="Visual" value={category.visualCharacteristics} />
                  <Row label="Typography" value={category.typographyCharacteristics} />
                  <Row label="Colour" value={category.colorCharacteristics} />
                  <Row label="Layout" value={category.layoutCharacteristics} />
                  <Row label="Motion" value={category.motionCharacteristics} />
                  <Row label="Avoid" value={category.thingsToAvoid.join(", ")} />
                </dl>
              </section>
            )}
          </div>

          <aside>
            <dl className="rounded-md border border-border bg-card px-4 py-1">
              <Row label="Category" value={item.categoryName} />
              <Row label="Purpose" value={item.purpose.join(", ")} />
              <Row label="Theme" value={item.theme === "both" ? "Light & dark" : item.theme} />
              <Row label="Primary" value={item.primaryColor} />
              <Row
                label="Palette"
                value={
                  item.secondaryColors.length ? (
                    <span className="flex flex-wrap gap-1.5">
                      {item.secondaryColors.map((c) => (
                        <span key={c} className="flex items-center gap-1 text-xs">
                          <span
                            className="size-3 rounded-sm border border-border"
                            style={{ backgroundColor: c }}
                            aria-hidden
                          />
                          {c}
                        </span>
                      ))}
                    </span>
                  ) : null
                }
              />
              <Row label="Fonts" value={item.fonts.join(", ")} />
              <Row label="Layout" value={item.layoutStyle} />
              <Row label="Motion" value={item.animationStyle} />
              <Row label="Tech" value={item.technologies.join(", ")} />
              <Row
                label="Tags"
                value={
                  <span className="flex flex-wrap gap-1.5">
                    {item.tags.map((t) => (
                      <Badge key={t} variant="secondary" className="rounded-sm font-normal">
                        {t}
                      </Badge>
                    ))}
                  </span>
                }
              />
            </dl>
          </aside>
        </div>
      </main>
    </div>
  );
}
