export interface WordmarkProps {
  /** Renders the label in white for the dark footer ground. */
  light?: boolean
}

/**
 * The wordmark: a plum paw pad with three rose toes and one amber toe beside the
 * practice name. Redrawn from the documented geometry — nothing is fetched at
 * runtime and no source file is copied.
 */
export function Wordmark({ light = false }: WordmarkProps) {
  const pad = light ? '#fbe8f1' : '#a83a6f'
  const rose = light ? '#f6d0e3' : '#df77a9'
  const toe = '#d4a24c'
  const ink = light ? '#ffffff' : '#111827'
  const sub = light ? '#9ca3af' : '#6b7280'

  return (
    <svg
      viewBox="0 0 176 40"
      width="176"
      height="40"
      role="img"
      aria-label="Smallpaw — small animal practice"
      className="h-8 w-auto lg:h-10"
    >
      <ellipse cx="18" cy="25" rx="9" ry="7.5" fill={pad} />
      <circle cx="8.5" cy="14" r="4" fill={rose} />
      <circle cx="16.5" cy="10" r="4" fill={rose} />
      <circle cx="25.5" cy="11" r="4" fill={rose} />
      <circle cx="32" cy="18" r="4" fill={toe} />
      <text
        x="44"
        y="20"
        fill={ink}
        fontFamily="'Plus Jakarta Sans', system-ui, sans-serif"
        fontSize="17"
        fontWeight="700"
        letterSpacing="-0.4"
      >
        Smallpaw
      </text>
      <text
        x="44"
        y="32"
        fill={sub}
        fontFamily="'Plus Jakarta Sans', system-ui, sans-serif"
        fontSize="7.5"
        fontWeight="600"
        letterSpacing="1.6"
      >
        SMALL ANIMAL PRACTICE
      </text>
    </svg>
  )
}
