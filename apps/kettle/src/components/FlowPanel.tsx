/**
 * The only illustration on the page, redrawn rather than copied: three fixtures
 * drawn as bars scaled to their flow rate, with the total underneath. It is the
 * argument of the whole design in one picture — the bars are what "at the same
 * time" looks like.
 */
export function FlowPanel() {
  return (
    <svg
      viewBox="0 0 800 600"
      role="img"
      aria-label="Flow panel: two showers at two gallons a minute each and a dishwasher at one and a half, totalling five and a half gallons a minute"
      data-testid="flow-panel"
      className="w-full rounded-2xl"
    >
      <rect width="800" height="600" rx="16" fill="#161616" />
      <rect x="32" y="32" width="736" height="536" rx="24" fill="#242424" />

      <text
        x="72"
        y="112"
        fill="#f7f7f7"
        fontFamily="Manrope, system-ui, sans-serif"
        fontSize="30"
        fontWeight="800"
      >
        What runs at the same time
      </text>

      <g fontFamily="Manrope, system-ui, sans-serif" fontSize="20" fill="#b4b4b4">
        <text x="72" y="216">
          Shower
        </text>
        <text x="72" y="306">
          Second shower
        </text>
        <text x="72" y="396">
          Dishwasher
        </text>
      </g>

      <g fill="#e99c31">
        <rect x="248" y="192" width="160" height="26" rx="6" />
        <rect x="248" y="282" width="160" height="26" rx="6" />
        <rect x="248" y="372" width="120" height="26" rx="6" />
      </g>

      <g
        fontFamily="JetBrains Mono, Consolas, monospace"
        fontSize="15"
        fontWeight="500"
        fill="#f7f7f7"
      >
        <text x="424" y="212">
          2.0 gpm
        </text>
        <text x="424" y="302">
          2.0 gpm
        </text>
        <text x="384" y="392">
          1.5 gpm
        </text>
      </g>

      <rect x="72" y="452" width="656" height="2" fill="#373737" />

      <text
        x="72"
        y="504"
        fill="#b4b4b4"
        fontFamily="Manrope, system-ui, sans-serif"
        fontSize="20"
      >
        Sum at the worst minute
      </text>
      <text
        x="72"
        y="540"
        fill="#f6bb63"
        fontFamily="JetBrains Mono, Consolas, monospace"
        fontSize="24"
        fontWeight="700"
      >
        5.5 gpm
      </text>
    </svg>
  )
}
