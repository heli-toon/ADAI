import { useEffect, useRef, useState } from "react";
import { ImageOff } from "lucide-react";
import type { Inspiration } from "@/types/inspiration";
import { cn } from "@/lib/utils";

/**
 * 16:9 preview area. Images are the default. An iframe is only mounted once the
 * card is on screen, and any failure falls back to the stored image or a
 * generated placeholder so a blocked embed never leaves a blank card.
 */
export function PreviewFrame({
  item,
  className,
  allowIframe = true,
}: {
  item: Inspiration;
  className?: string;
  allowIframe?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [imageFailed, setImageFailed] = useState(false);
  const [iframeFailed, setIframeFailed] = useState(false);

  const wantsIframe = allowIframe && item.previewType === "iframe" && !!item.previewUrl && !iframeFailed;

  useEffect(() => {
    if (!wantsIframe || !ref.current) return;
    const el = ref.current;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setVisible(true)),
      { rootMargin: "200px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [wantsIframe]);

  useEffect(() => {
    if (!wantsIframe || !visible) return;
    const t = setTimeout(() => setIframeFailed(true), 6000);
    return () => clearTimeout(t);
  }, [wantsIframe, visible]);

  const showImage = !!item.imageUrl && !imageFailed && !(wantsIframe && visible);

  return (
    <div
      ref={ref}
      className={cn("relative aspect-video w-full overflow-hidden bg-muted", className)}
    >
      {wantsIframe && visible && (
        <iframe
          src={item.previewUrl}
          title={`${item.name} live preview`}
          loading="lazy"
          sandbox="allow-scripts allow-same-origin"
          className="absolute inset-0 size-full border-0"
          onLoad={() => setIframeFailed(false)}
          onError={() => setIframeFailed(true)}
        />
      )}

      {showImage && (
        <img
          src={item.imageUrl}
          alt={`${item.name} screenshot`}
          loading="lazy"
          decoding="async"
          onError={() => setImageFailed(true)}
          className="absolute inset-0 size-full object-cover"
        />
      )}

      {!showImage && !(wantsIframe && visible) && <Placeholder item={item} failed={imageFailed} />}
    </div>
  );
}

function Placeholder({ item, failed }: { item: Inspiration; failed: boolean }) {
  const accent = item.secondaryColors[1] ?? item.secondaryColors[0] ?? "#64748b";
  return (
    <div className="absolute inset-0 flex flex-col justify-between border-b border-border bg-card p-4">
      <div className="flex items-center justify-between">
        <span className="text-[10px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
          {item.categoryName}
        </span>
        <span className="size-3 rounded-full" style={{ backgroundColor: accent }} aria-hidden />
      </div>
      <div className="space-y-1.5">
        <p className="line-clamp-2 text-lg font-semibold leading-tight tracking-tight text-foreground">
          {item.name}
        </p>
        <div className="h-px w-16" style={{ backgroundColor: accent }} aria-hidden />
      </div>
      <div className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
        {failed ? <ImageOff aria-hidden className="size-3" /> : null}
        <span>{failed ? "Image unavailable" : item.layoutStyle}</span>
      </div>
    </div>
  );
}
