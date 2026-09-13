import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { SlidersHorizontal } from "lucide-react";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { InspirationCard } from "@/components/inspiration/InspirationCard";
import { FilterPanel } from "@/components/inspiration/FilterPanel";
import { useInspirations } from "@/lib/store";
import { filterInspirations } from "@/lib/search";
import { emptyFilters, type Filters } from "@/types/inspiration";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ADAI — Searchable Website Design Inspiration Library" },
      {
        name: "description",
        content:
          "Browse and search a curated collection of website design references with aesthetic categories, metadata and reusable AI design prompts.",
      },
      { property: "og:title", content: "ADAI — Website Design Inspiration Library" },
      {
        property: "og:description",
        content:
          "A searchable visual collection of website design references, design metadata and reusable AI prompts.",
      },
    ],
  }),
  component: Collection,
});

function Collection() {
  const { items, isLoading } = useInspirations();
  const [filters, setFilters] = useState<Filters>(emptyFilters);
  const [showFilters, setShowFilters] = useState(false);

  const results = useMemo(() => filterInspirations(items, filters), [items, filters]);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader query={filters.query} onQueryChange={(query) => setFilters({ ...filters, query })} />

      <main className="mx-auto max-w-[1400px] px-4 py-8 sm:px-6">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-foreground">
              Design aesthetic inspiration
            </h1>
            <p className="mt-1 text-sm text-muted-foreground">
              {results.length} of {items.length} references
            </p>
          </div>
          <Button
            variant="outline"
            size="sm"
            className="lg:hidden"
            onClick={() => setShowFilters((s) => !s)}
          >
            <SlidersHorizontal aria-hidden className="size-4" />
            {showFilters ? "Hide filters" : "Filters"}
          </Button>
        </div>

        {isLoading ? (
          <div className="flex min-h-[calc(100vh-64px)] items-center justify-center">
            <p className="text-sm text-muted-foreground">Loading inspirations...</p>
          </div>
        ) : (
          <div className="grid gap-8 lg:grid-cols-[240px_minmax(0,1fr)]">
            <div className={showFilters ? "block" : "hidden lg:block"}>
              <FilterPanel items={items} filters={filters} onChange={setFilters} />
            </div>

            <div>
              {results.length === 0 ? (
                <div className="rounded-md border border-dashed border-border px-6 py-16 text-center">
                  <p className="text-sm font-medium text-foreground">Nothing matches those filters</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Try a different search term or clear a filter.
                  </p>
                </div>
              ) : (
                <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                  {results.map((item) => (
                    <InspirationCard key={item.id} item={item} />
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
