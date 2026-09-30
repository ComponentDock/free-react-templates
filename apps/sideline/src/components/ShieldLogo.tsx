interface ShieldLogoProps {
  className?: string
}

/** Club crest: original shield badge (design-token note: brand red #f23a2e). */
export function ShieldLogo({ className = 'h-12 w-10' }: ShieldLogoProps) {
  return (
    <svg viewBox="0 0 48 56" className={className} role="img" aria-label="Sideline crest">
      <path d="M24 0 L48 8 V30 C48 44 36 52 24 56 C12 52 0 44 0 30 V8 Z" fill="#f23a2e" />
      <path
        d="M24 6 L42 12 V30 C42 40 33 47 24 50 C15 47 6 40 6 30 V12 Z"
        fill="#ffffff"
        opacity="0.14"
      />
      <path
        d="M24 10 L38 14.5 V30 C38 37.5 31.5 43 24 45.8 C16.5 43 10 37.5 10 30 V14.5 Z"
        fill="none"
        stroke="#ffffff"
        strokeWidth="1.5"
        opacity="0.55"
      />
      <text
        x="24"
        y="33"
        textAnchor="middle"
        fill="#ffffff"
        fontSize="12"
        fontWeight="700"
        fontFamily="Mukta, sans-serif"
      >
        SL
      </text>
    </svg>
  )
}
