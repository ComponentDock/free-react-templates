import { cn } from '@free-react-templates/ui'

export interface WordmarkProps {
  className?: string
}

/**
 * Presto wordmark: an own coral sun-over-wave glyph next to the brand name, so
 * the header and footer carry a logo the app owns rather than any borrowed
 * artwork.
 */
export function Wordmark({ className }: WordmarkProps) {
  return (
    <span className={cn('inline-flex items-center gap-2.5', className)}>
      <svg
        viewBox="0 0 32 32"
        aria-hidden="true"
        className="h-8 w-8 shrink-0"
        fill="none"
        stroke="none"
      >
        <circle cx="16" cy="16" r="15" fill="#FA8F77" />
        <circle cx="16" cy="12.5" r="4" fill="#FFFFFF" />
        <path
          d="M3.5 21.5c4-3 8-3 12 0s8 3 13 0v6.5a15 15 0 0 1-25 0Z"
          fill="#FFFFFF"
          opacity="0.85"
        />
      </svg>
      <span className="font-heading text-xl font-semibold text-white">Presto</span>
    </span>
  )
}
