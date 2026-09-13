import { X } from "lucide-react";
import type { Filters, Inspiration, ThemeMode } from "@/types/inspiration";
import { emptyFilters } from "@/types/inspiration";
import { categories } from "@/data/categories";
import { activeFilterCount, facets } from "@/lib/search";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Props {
  items: Inspiration[];
  filters: Filters;
  onChange: (f: Filters) => void;
}

function Group({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="space-y-2">
      <h3 className="text-[11px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
        {label}
      </h3>
      <div className="flex flex-wrap gap-1.5">{children}</div>
    </div>
  );
}

function Chip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        "rounded-sm border px-2.5 py-1 text-[12px] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        active
          ? "border-primary bg-primary text-primary-foreground"
          : "border-border bg-card text-muted-foreground hover:border-foreground/25 hover:text-foreground",
      )}
    >
      {children}
    </button>
  );
}

const themes: ThemeMode[] = ["light", "dark", "both"];

export function FilterPanel({ items, filters, onChange }: Props) {
  const { colors, purposes, technologies } = facets(items);
  const count = activeFilterCount(filters);
  const set = <K extends keyof Filters>(key: K, value: Filters[K]) =>
    onChange({ ...filters, [key]: filters[key] === value ? null : value } as Filters);

  return (
    <aside className="space-y-5">
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-semibold tracking-tight text-foreground">Filters</h2>
        {count > 0 && (
          <Button
            variant="ghost"
            size="sm"
            className="h-7 px-2 text-xs"
            onClick={() => onChange({ ...emptyFilters, query: filters.query })}
          >
            <X aria-hidden className="size-3" />
            Clear {count}
          </Button>
        )}
      </div>

      <Group label="Aesthetic category">
        {categories.map((c) => (
          <Chip
            key={c.id}
            active={filters.categoryId === c.id}
            onClick={() => set("categoryId", c.id)}
          >
            {c.name}
          </Chip>
        ))}
      </Group>

      <Group label="Primary colour">
        {colors.map((c) => (
          <Chip key={c} active={filters.primaryColor === c} onClick={() => set("primaryColor", c)}>
            {c}
          </Chip>
        ))}
      </Group>

      <Group label="Purpose">
        {purposes.map((p) => (
          <Chip key={p} active={filters.purpose === p} onClick={() => set("purpose", p)}>
            {p}
          </Chip>
        ))}
      </Group>

      <Group label="Theme">
        {themes.map((t) => (
          <Chip key={t} active={filters.theme === t} onClick={() => set("theme", t)}>
            {t === "both" ? "Light & dark" : t}
          </Chip>
        ))}
      </Group>

      <Group label="Technology">
        {technologies.map((t) => (
          <Chip key={t} active={filters.technology === t} onClick={() => set("technology", t)}>
            {t}
          </Chip>
        ))}
      </Group>
    </aside>
  );
}
