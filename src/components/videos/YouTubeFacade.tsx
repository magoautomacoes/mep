import React from "react";

type Props = {
  url?: string;
  videoId?: string;
  className?: string;
  title?: string;
  style?: React.CSSProperties;
};

function extractId(u?: string) {
  if (!u) return undefined;
  try {
    const url = new URL(u);
    if (url.hostname.includes("youtu.be")) {
      return url.pathname.replace("/", "");
    }
    if (url.hostname.includes("youtube.com")) {
      if (url.pathname.startsWith("/watch")) return url.searchParams.get("v") || undefined;
      if (url.pathname.startsWith("/embed/")) return url.pathname.split("/")[2];
      if (url.pathname.startsWith("/shorts/")) return url.pathname.split("/")[2];
    }
  } catch {}
  const m = u?.match(/[A-Za-z0-9_-]{11}/);
  return m ? m[0] : undefined;
}

export const YouTubeFacade: React.FC<Props> = ({ url, videoId, className = "", title = "", style }) => {
  const id = videoId || extractId(url);
  const [active, setActive] = React.useState(false);
  const containerRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    const el = containerRef.current;
    if (!el || active) return;
    let io: IntersectionObserver | null = null;
    if ("IntersectionObserver" in window) {
      io = new IntersectionObserver((entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setActive(true);
          io && io.disconnect();
        }
      }, { rootMargin: "300px" });
      io.observe(el);
    } else {
      const idle = (window as any).requestIdleCallback as undefined | ((cb: () => void, opts?: { timeout?: number }) => number);
      if (idle) idle(() => setActive(true), { timeout: 3000 });
      else setTimeout(() => setActive(true), 1500);
    }
    return () => { io && io.disconnect(); };
  }, [active]);

  const params = new URLSearchParams({
    rel: "0",
    showinfo: "0",
    modestbranding: "1",
    controls: "1",
    fs: "1",
    iv_load_policy: "3",
    playsinline: "1",
    color: "white",
  });
  const src = id ? `https://www.youtube.com/embed/${id}?${params.toString()}` : undefined;
  const thumb = id ? `https://i.ytimg.com/vi_webp/${id}/hqdefault.webp` : undefined;

  return (
    <div ref={containerRef} className={`relative w-full aspect-video ${className}`} style={style}>
      {active && src ? (
        <iframe
          src={src}
          title={title}
          className="absolute inset-0 w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          referrerPolicy="origin-when-cross-origin"
          loading="lazy"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          aria-label="Reproduzir vídeo"
          onClick={() => setActive(true)}
          className="absolute inset-0 w-full h-full"
          style={{ background: thumb ? `url(${thumb}) center/cover no-repeat` : undefined }}
        >
          <span className="sr-only">Reproduzir</span>
        </button>
      )}
    </div>
  );
};