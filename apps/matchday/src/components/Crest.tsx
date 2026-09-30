interface CrestProps {
  className?: string
}

/** Club crest — original shield badge (navy shield, orange rim, ball core). */
export function Crest({ className = 'h-24 w-20' }: CrestProps) {
  return (
    <svg viewBox="0 0 100 120" className={className} fill="none" aria-hidden="true">
      <path
        d="M50 2 L96 16 V62 C96 92 76 110 50 118 C24 110 4 92 4 62 V16 Z"
        fill="#161d4a"
        stroke="#ffa54b"
        strokeWidth="5"
      />
      <circle cx="50" cy="56" r="24" fill="#ffa54b" />
      <path
        d="M50 32 L57 45 L71 47 L61 57 L64 71 L50 64 L36 71 L39 57 L29 47 L43 45 Z"
        fill="#161d4a"
      />
      <text
        x="50"
        y="100"
        textAnchor="middle"
        fill="#ffffff"
        fontSize="16"
        fontWeight="700"
        fontFamily="Roboto, sans-serif"
      >
        MFC
      </text>
    </svg>
  )
}
