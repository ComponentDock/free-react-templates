import { REGISTER_ROWS } from '../data'

/**
 * The page's only illustration: the asset register as a dark panel. Redrawn as
 * an inline SVG from the design's own geometry — a header row, five assets and
 * a call-out — so nothing is downloaded at runtime and the text scales with the
 * card. `Replace` is the amber verdict; the other two are brand blue.
 */
export function AssetRegisterPanel() {
  return (
    <svg
      viewBox="0 0 800 600"
      role="img"
      aria-label="The Plantroom asset register: five rooftop and split units with age, refrigerant and condition, and a note that RTU-03 has passed half the cost of replacement."
      className="h-auto w-full"
    >
      <rect width="800" height="600" rx="24" fill="#13171a" />
      <rect x="32" y="32" width="736" height="536" rx="24" fill="#1f252a" />

      <text
        x="76"
        y="94"
        fill="#ffffff"
        fontFamily="Inter, system-ui, sans-serif"
        fontSize="22"
        fontWeight="700"
      >
        Asset register
      </text>
      <text x="76" y="122" fill="#78828c" fontFamily="Inter, system-ui, sans-serif" fontSize="14">
        Exported on request, and on the day you leave.
      </text>

      <g
        fontFamily="'JetBrains Mono', Consolas, monospace"
        fontSize="13"
        fontWeight="600"
        fill="#57626c"
      >
        <text x="76" y="176">
          ASSET
        </text>
        <text x="250" y="176">
          AGE
        </text>
        <text x="360" y="176">
          GAS
        </text>
        <text x="500" y="176">
          CONDITION
        </text>
      </g>
      <rect x="76" y="188" width="648" height="2" fill="#30383f" />

      {REGISTER_ROWS.map((row, index) => {
        const y = 228 + index * 44

        return (
          <g
            key={row.asset}
            fontFamily="'JetBrains Mono', Consolas, monospace"
            fontSize="14"
            fill="#d2d6da"
          >
            <text x="76" y={y}>
              {row.asset}
            </text>
            <text x="250" y={y} fill="#a9b0b7">
              {row.age}
            </text>
            <text x="360" y={y} fill="#a9b0b7">
              {row.gas}
            </text>
            <text x="500" y={y} fill={row.condition === 'Replace' ? '#f6bb63' : '#7bbcfb'}>
              {row.condition}
            </text>
          </g>
        )
      })}

      <rect x="76" y="446" width="648" height="82" rx="12" fill="#30383f" />
      <text x="108" y="480" fill="#a9b0b7" fontFamily="Inter, system-ui, sans-serif" fontSize="14">
        RTU-03: repair spend to date has passed half of replacement cost.
      </text>
      <text
        x="108"
        y="506"
        fill="#f6bb63"
        fontFamily="Inter, system-ui, sans-serif"
        fontSize="14"
        fontWeight="700"
      >
        We will tell you. Most contractors will keep repairing it.
      </text>
    </svg>
  )
}
