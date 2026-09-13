import { Link } from "@tanstack/react-router";
import { Moon, Plus, Search, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useTheme } from "@/lib/theme";

interface Props {
  query?: string;
  onQueryChange?: (v: string) => void;
}

export function SiteHeader({ query, onQueryChange }: Props) {
  const { mode, toggle } = useTheme();
  const showSearch = typeof onQueryChange === "function";

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="mx-auto flex max-w-[1400px] flex-wrap items-center gap-3 px-4 py-3 sm:px-6 lg:gap-6">
        <Link to="/" className="group flex min-w-0 items-baseline gap-2 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
          <span className="text-base font-semibold tracking-tight text-foreground">ADAI</span>
          <span className="hidden text-sm text-muted-foreground sm:inline">
            AI Design Aesthetic Inspiration
          </span>
        </Link>

        {showSearch && (
          <div className="order-3 w-full lg:order-none lg:ml-4 lg:max-w-md lg:flex-1">
            <label htmlFor="collection-search" className="sr-only">
              Search the collection
            </label>
            <div className="relative">
              <Search
                aria-hidden
                className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
              />
              <Input
                id="collection-search"
                type="search"
                value={query}
                onChange={(e) => onQueryChange?.(e.target.value)}
                placeholder="Search names, tags, tech, colours…"
                className="h-9 rounded-md pl-9"
              />
            </div>
          </div>
        )}

        <div className="ml-auto flex items-center gap-2">
          <Button asChild size="sm" className="h-9">
            <Link to="/add">
              <Plus aria-hidden className="size-4" />
              <span className="hidden sm:inline">Add inspiration</span>
              <span className="sm:hidden">Add</span>
            </Link>
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="size-9"
            onClick={toggle}
            aria-label={mode === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          >
            {mode === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
          </Button>
        </div>
      </div>
    </header>
  );
}
