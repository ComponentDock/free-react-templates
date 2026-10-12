import { cn } from '@free-react-templates/ui'

export interface MonogramProps {
  className?: string
}

/**
 * The poster's own two-letter white monogram on an inert block lockup, at most
 * 44px tall. It is a static brand mark, never a link.
 */
export function Monogram({ className }: MonogramProps) {
  return (
    <div data-testid="monogram" className={cn('block grow', className)}>
      <svg
        viewBox="0 0 101 44"
        role="img"
        aria-label="Foretaste"
        className="h-11 w-auto max-w-full"
      >
        <text
          x="50.5"
          y="32"
          textAnchor="middle"
          fontFamily="Montserrat, Arial, sans-serif"
          fontSize="30"
          fontWeight="700"
          letterSpacing="3"
          fill="#ffffff"
        >
          FT
        </text>
      </svg>
    </div>
  )
}
