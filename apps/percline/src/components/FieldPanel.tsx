/**
 * The page's only illustration, drawn from scratch: a cutaway of the two parts
 * that matter — the tank that separates and the field that disposes — plus the
 * d-box that splits the flow between them.
 */
export function FieldPanel() {
  return (
    <svg
      viewBox="0 0 800 600"
      role="img"
      aria-label="Cutaway diagram of a septic system: a tank that separates solids, a distribution box that splits the flow, and a drain field that disposes of the liquid"
      className="w-full rounded-2xl"
    >
      <rect width="800" height="600" fill="var(--color-ink-900)" />
      <rect x="32" y="32" width="736" height="536" rx="24" fill="var(--color-ink-800)" />

      <text
        x="72"
        y="96"
        fill="#ffffff"
        fontFamily="DM Sans, system-ui, sans-serif"
        fontSize="24"
        fontWeight="700"
      >
        Two parts, one of them expensive
      </text>

      <rect x="72" y="128" width="656" height="26" rx="4" fill="var(--color-primary-600)" />
      <text
        x="728"
        y="146"
        textAnchor="end"
        fill="var(--color-ink-400)"
        fontFamily="DM Sans, system-ui, sans-serif"
        fontSize="13"
      >
        Lawn
      </text>

      <rect x="72" y="198" width="220" height="120" rx="8" fill="var(--color-ink-600)" />
      <rect x="96" y="222" width="172" height="72" rx="4" fill="var(--color-ink-700)" />
      <text
        x="72"
        y="348"
        fill="var(--color-primary-100)"
        fontFamily="DM Sans, system-ui, sans-serif"
        fontSize="15"
        fontWeight="700"
      >
        Tank
      </text>
      <text
        x="72"
        y="370"
        fill="var(--color-ink-400)"
        fontFamily="DM Sans, system-ui, sans-serif"
        fontSize="13"
      >
        separates. Pumped every 3-5 yr.
      </text>

      <path
        d="M292 258h128"
        stroke="var(--color-primary-400)"
        strokeWidth="9"
        strokeLinecap="round"
      />
      <rect x="420" y="234" width="62" height="48" rx="4" fill="var(--color-primary-400)" />
      <text
        x="420"
        y="348"
        fill="var(--color-primary-100)"
        fontFamily="DM Sans, system-ui, sans-serif"
        fontSize="15"
        fontWeight="700"
      >
        D-box
      </text>
      <text
        x="420"
        y="370"
        fill="var(--color-ink-400)"
        fontFamily="DM Sans, system-ui, sans-serif"
        fontSize="13"
      >
        splits the flow evenly.
      </text>

      <path
        d="M520 232h208M520 258h208M520 284h208"
        stroke="var(--color-primary-400)"
        strokeWidth="9"
        strokeLinecap="round"
      />
      <text
        x="560"
        y="348"
        fill="var(--color-primary-100)"
        fontFamily="DM Sans, system-ui, sans-serif"
        fontSize="15"
        fontWeight="700"
      >
        Drain field
      </text>
      <text
        x="560"
        y="370"
        fill="var(--color-ink-400)"
        fontFamily="DM Sans, system-ui, sans-serif"
        fontSize="13"
      >
        disposes. Cannot be pumped.
      </text>

      <rect x="72" y="412" width="656" height="124" rx="12" fill="var(--color-ink-700)" />
      <text
        x="100"
        y="452"
        fill="var(--color-ink-300)"
        fontFamily="DM Sans, system-ui, sans-serif"
        fontSize="13"
      >
        Water leaves the tank carrying almost nothing, and the soil does the rest
      </text>
      <text
        x="100"
        y="478"
        fill="var(--color-ink-300)"
        fontFamily="DM Sans, system-ui, sans-serif"
        fontSize="13"
      >
        over the length of the field.
      </text>
      <text
        x="100"
        y="508"
        fill="var(--color-primary-300)"
        fontFamily="DM Sans, system-ui, sans-serif"
        fontSize="13"
        fontWeight="700"
      >
        Which is why the tank gets pumped, and why pumping a dead field buys a fortnight.
      </text>
    </svg>
  )
}
