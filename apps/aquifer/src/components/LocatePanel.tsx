/**
 * The page's only illustration, redrawn: a slab cross-section with one marked
 * point, a depth call-out and a machine label in mono. Drawn from the
 * documented geometry rather than downloaded — nothing is fetched at runtime.
 */
export function LocatePanel() {
  return (
    <svg
      viewBox="0 0 800 600"
      role="img"
      aria-label="Cross-section of a floor slab with the leak marked at one point and its depth noted"
      className="h-full w-full"
    >
      <rect width="800" height="600" fill="#f5f6fa" />

      {/* the room above the slab */}
      <rect x="60" y="60" width="680" height="250" fill="#ffffff" />
      <text
        x="84"
        y="96"
        fill="#7a84a8"
        fontFamily="'JetBrains Mono', Consolas, monospace"
        fontSize="15"
        letterSpacing="2"
      >
        FINISHED FLOOR
      </text>

      {/* the slab band */}
      <rect x="60" y="310" width="680" height="150" fill="#e9ebf3" />
      <line x1="60" y1="310" x2="740" y2="310" stroke="#d2d6e6" strokeWidth="2" />
      <text
        x="84"
        y="440"
        fill="#7a84a8"
        fontFamily="'JetBrains Mono', Consolas, monospace"
        fontSize="15"
        letterSpacing="2"
      >
        SLAB
      </text>

      {/* the pipe run and the break */}
      <line x1="60" y1="392" x2="740" y2="392" stroke="#a9b0cc" strokeWidth="6" />
      <circle cx="470" cy="392" r="16" fill="#0886b2" />
      <circle cx="470" cy="392" r="5" fill="#ffffff" />

      {/* the one mark on the floor, directly above it */}
      <line x1="470" y1="310" x2="470" y2="150" stroke="#0886b2" strokeWidth="2" strokeDasharray="8 8" />
      <rect x="410" y="112" width="120" height="38" rx="6" fill="#0886b2" />
      <text
        x="470"
        y="138"
        fill="#ffffff"
        textAnchor="middle"
        fontFamily="'JetBrains Mono', Consolas, monospace"
        fontSize="16"
        fontWeight="700"
      >
        ONE MARK
      </text>

      {/* the depth call-out */}
      <line x1="600" y1="310" x2="600" y2="392" stroke="#7a84a8" strokeWidth="2" />
      <line x1="592" y1="310" x2="608" y2="310" stroke="#7a84a8" strokeWidth="2" />
      <line x1="592" y1="392" x2="608" y2="392" stroke="#7a84a8" strokeWidth="2" />
      <text
        x="618"
        y="356"
        fill="#7a84a8"
        fontFamily="'JetBrains Mono', Consolas, monospace"
        fontSize="15"
      >
        410 mm
      </text>

      {/* the ground below */}
      <rect x="60" y="460" width="680" height="80" fill="#e9ebf3" />
      <text
        x="84"
        y="508"
        fill="#7a84a8"
        fontFamily="'JetBrains Mono', Consolas, monospace"
        fontSize="15"
        letterSpacing="2"
      >
        SUBGRADE
      </text>
    </svg>
  )
}
