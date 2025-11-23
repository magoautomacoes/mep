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
  const m = u.match(/[A-Za-z0-9_-]{11}/);
  return m ? m[0] : undefined;
}

export const YouTubePlayer: React.FC<Props> = ({ url, videoId, className = "", title = "", style }) => {
  const id = videoId || extractId(url);
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
  return (
    <div className={`relative w-full aspect-video ${className}`} style={style}>
      {src && (
        <iframe
          src={src}
          title={title}
          className="absolute inset-0 w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          referrerPolicy="origin-when-cross-origin"
          loading="lazy"
          allowFullScreen
        />
      )}
    </div>
  );
};