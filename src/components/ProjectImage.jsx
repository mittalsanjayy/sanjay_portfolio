import { useState } from "react";

/**
 * Shows the real screenshot when `src` is set and loads correctly.
 * Otherwise it shows a drawn placeholder you can replace later.
 */
export default function ProjectImage({ src, alt, variant = "store" }) {
  const [failed, setFailed] = useState(false);

  if (src && !failed) {
    return (
      <img
        className="project-image"
        src={src}
        alt={alt}
        width="640"
        height="360"
        loading="lazy"
        decoding="async"
        onError={() => setFailed(true)}
      />
    );
  }

  return (
    <div className="project-image project-image--placeholder" role="img" aria-label="Placeholder artwork. Replace with a real screenshot.">
      <svg viewBox="0 0 640 360" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false">
        <rect width="640" height="360" className="ph-bg" />
        <rect x="32" y="28" width="576" height="28" rx="8" className="ph-bar" />
        <circle cx="52" cy="42" r="4" className="ph-dot" />
        <circle cx="68" cy="42" r="4" className="ph-dot" />
        <circle cx="84" cy="42" r="4" className="ph-dot" />

        {variant === "store" && (
          <g>
            {[0, 1, 2].map((i) => (
              <g key={i} transform={`translate(${48 + i * 188} 84)`}>
                <rect width="168" height="132" rx="10" className="ph-card" />
                <rect x="14" y="14" width="140" height="70" rx="6" className="ph-block" />
                <rect x="14" y="96" width="84" height="8" rx="4" className="ph-line" />
                <rect x="14" y="112" width="48" height="8" rx="4" className="ph-accent" />
              </g>
            ))}
            <rect x="48" y="236" width="544" height="14" rx="7" className="ph-line" />
            <rect x="48" y="262" width="380" height="14" rx="7" className="ph-line" />
          </g>
        )}

        {variant === "calendar" && (
          <g>
            <rect x="48" y="84" width="330" height="236" rx="10" className="ph-card" />
            {Array.from({ length: 28 }).map((_, i) => (
              <rect
                key={i}
                x={64 + (i % 7) * 44}
                y={116 + Math.floor(i / 7) * 48}
                width="34"
                height="34"
                rx="8"
                className={i === 10 || i === 17 ? "ph-accent" : "ph-block"}
              />
            ))}
            <rect x="402" y="84" width="190" height="104" rx="10" className="ph-card" />
            <rect x="418" y="104" width="120" height="8" rx="4" className="ph-accent" />
            <rect x="418" y="126" width="150" height="8" rx="4" className="ph-line" />
            <rect x="418" y="146" width="100" height="8" rx="4" className="ph-line" />
            <rect x="402" y="204" width="190" height="116" rx="10" className="ph-card" />
            <rect x="418" y="224" width="130" height="8" rx="4" className="ph-line" />
            <rect x="418" y="244" width="150" height="8" rx="4" className="ph-line" />
          </g>
        )}

        {variant === "cloud" && (
          <g>
            <rect x="48" y="84" width="544" height="236" rx="10" className="ph-card" />
            <path d="M72 280 L140 236 L204 252 L272 190 L340 214 L412 150 L480 176 L568 118" className="ph-chart" fill="none" />
            <path d="M72 296 H568" className="ph-axis" />
            <rect x="72" y="104" width="96" height="8" rx="4" className="ph-accent" />
            <rect x="184" y="104" width="64" height="8" rx="4" className="ph-line" />
          </g>
        )}
      </svg>
      <span className="project-image__hint">Screenshot placeholder</span>
    </div>
  );
}
