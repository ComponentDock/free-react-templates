export interface WordmarkProps {
  /** Renders the label pair in white for the dark footer ground. */
  light?: boolean
}

/**
 * The wordmark: a dark rounded square holding a brand-blue bar under two pale
 * dots, with the name in Inter 700 and the discipline in letterspaced mono.
 * Drawn from the design's own geometry — nothing is downloaded at runtime.
 */
export function Wordmark({ light = false }: WordmarkProps) {
  const ink = light ? '#ffffff' : '#1f252a'
  const sub = light ? '#9ca3af' : '#57626c'
  const tile = light ? '#ffffff' : '#1f252a'
  const bar = light ? '#1963b4' : '#247edc'
  const dots = light ? '#7bbcfb' : '#7bbcfb'

  return (
    <svg
      viewBox="0 0 210 40"
      width="210"
      height="40"
      role="img"
      aria-label="Plantroom Mechanical"
      className="h-10 w-auto"
    >
      <rect x="5" y="9" width="28" height="22" rx="4" fill={tile} />
      <rect x="9" y="19" width="20" height="8" rx="2" fill={bar} />
      <circle cx="14" cy="15" r="2.6" fill={dots} />
      <circle cx="24" cy="15" r="2.6" fill={dots} />
      <text
        x="44"
        y="21"
        fill={ink}
        fontFamily="Inter, system-ui, sans-serif"
        fontSize="16"
        fontWeight="700"
      >
        Plantroom
      </text>
      <text
        x="44"
        y="33"
        fill={sub}
        fontFamily="'JetBrains Mono', Consolas, monospace"
        fontSize="8"
        fontWeight="500"
        letterSpacing="1.8"
      >
        MECHANICAL
      </text>
    </svg>
  )
}
