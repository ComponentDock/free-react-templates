export interface WordmarkProps {
  /** Renders the label pair in white for the dark footer ground. */
  light?: boolean
}

/**
 * The wordmark: a teal droplet disc beside the name in Space Grotesk 700 with
 * the discipline in letterspaced mono underneath. Drawn from the design's own
 * geometry — nothing is downloaded at runtime.
 */
export function Wordmark({ light = false }: WordmarkProps) {
  const ink = light ? '#ffffff' : '#20243a'
  const sub = light ? '#9ca3af' : '#59628a'
  const disc = light ? '#0e6b90' : '#0886b2'
  const drop = light ? '#cff8fe' : '#ffffff'

  return (
    <svg
      viewBox="0 0 200 40"
      width="200"
      height="40"
      role="img"
      aria-label="Aquifer Leak Detection"
      className="h-10 w-auto"
    >
      <circle cx="19" cy="20" r="13" fill={disc} />
      <path d="M19 12c4 4.6 6 7.4 6 10a6 6 0 0 1-12 0c0-2.6 2-5.4 6-10z" fill={drop} />
      <text
        x="42"
        y="21"
        fill={ink}
        fontFamily="'Space Grotesk', system-ui, sans-serif"
        fontSize="17"
        fontWeight="700"
      >
        Aquifer
      </text>
      <text
        x="42"
        y="33"
        fill={sub}
        fontFamily="'JetBrains Mono', Consolas, monospace"
        fontSize="8"
        fontWeight="500"
        letterSpacing="1.8"
      >
        LEAK DETECTION
      </text>
    </svg>
  )
}
