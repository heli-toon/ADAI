import { Link } from "@tanstack/react-router";
import type { Inspiration } from "@/types/inspiration";
import { Badge } from "@/components/ui/badge";
import { PreviewFrame } from "./PreviewFrame";

const themeLabel: Record<Inspiration["theme"], string> = {
  light: "Light",
  dark: "Dark",
  both: "Light & dark",
};

export function InspirationCard({ item }: { item: Inspiration }) {
  return (
    <Link
      to="/inspiration/$id"
      params={{ id: item.id }}
      className="group flex flex-col overflow-hidden rounded-md border border-border bg-card transition-colors hover:border-foreground/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
    >
      <PreviewFrame item={item} allowIframe={false} />

      <div className="flex flex-1 flex-col gap-2.5 p-4">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-sm font-semibold leading-snug tracking-tight text-foreground group-hover:text-primary">
            {item.name}
          </h3>
          <span className="shrink-0 text-[11px] text-muted-foreground">{themeLabel[item.theme]}</span>
        </div>

        <p className="text-[13px] leading-relaxed text-muted-foreground line-clamp-2">
          {item.description}
        </p>

        <div className="mt-auto flex flex-wrap items-center gap-1.5 pt-1">
          <Badge variant="secondary" className="rounded-sm font-normal">
            {item.categoryName}
          </Badge>
          <Badge variant="outline" className="rounded-sm font-normal">
            {item.primaryColor}
          </Badge>
          {item.purpose.slice(0, 1).map((p) => (
            <Badge key={p} variant="outline" className="rounded-sm font-normal">
              {p}
            </Badge>
          ))}
          {item.technologies.slice(0, 1).map((t) => (
            <span key={t} className="text-[11px] text-muted-foreground">
              {t}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
