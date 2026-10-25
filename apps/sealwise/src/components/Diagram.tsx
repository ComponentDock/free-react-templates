/**
 * The design's only image, and an original drawing: a dark plot, a dashed lime
 * perimeter, a simplified house, two sealed entry points and four markers. No
 * reference art is copied — the caption's instruction (replace with your own
 * photograph) is the content worth keeping.
 */
export function Diagram() {
  return (
    <svg
      viewBox="0 0 800 600"
      role="img"
      aria-label="Diagram of a treated perimeter: a sealed outline around a house, with four treatment markers"
      className="h-auto w-full rounded-2xl"
    >
      <rect width="800" height="600" fill="#0e120e" />
      <rect x="40" y="40" width="720" height="520" rx="16" fill="#1a201a" />
      <rect
        x="90"
        y="90"
        width="620"
        height="420"
        fill="none"
        stroke="#84cc3c"
        strokeWidth="3"
        strokeDasharray="14 10"
      />
      <path d="M250 420V300l150-110 150 110v120z" fill="#2b332a" />
      <path d="M220 305L400 168l180 137" fill="none" stroke="#3d473a" strokeWidth="10" />
      <rect x="372" y="360" width="56" height="60" fill="#0e120e" stroke="#3d473a" strokeWidth="3" />
      <rect x="300" y="330" width="42" height="34" fill="#3d473a" />
      <rect x="458" y="330" width="42" height="34" fill="#3d473a" />
      <path d="M548 355h44" stroke="#84cc3c" strokeWidth="4" />
      <path d="M208 355h-44" stroke="#84cc3c" strokeWidth="4" />
      <circle cx="120" cy="120" r="9" fill="#84cc3c" />
      <circle cx="680" cy="120" r="9" fill="#84cc3c" />
      <circle cx="120" cy="480" r="9" fill="#84cc3c" />
      <circle cx="680" cy="480" r="9" fill="#84cc3c" />
      <text
        x="400"
        y="545"
        textAnchor="middle"
        fill="#a4ae9f"
        fontFamily="Outfit, system-ui, sans-serif"
        fontSize="14"
        letterSpacing="2"
      >
        SEALED PERIMETER · FOUR VISITS A YEAR
      </text>
    </svg>
  )
}
