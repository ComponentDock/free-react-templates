import { cn } from '@free-react-templates/ui'

export interface WordmarkProps {
  className?: string
}

/**
 * Skyport wordmark: an own azure tile carrying a white cloud glyph beside the
 * brand name, so the header and footer carry a logo the app owns rather than any
 * borrowed artwork.
 */
export function Wordmark({ className }: WordmarkProps) {
  return (
    <span className={cn('inline-flex items-center gap-2', className)}>
      <svg
        viewBox="0 0 32 32"
        aria-hidden="true"
        className="h-8 w-8 shrink-0"
        fill="none"
        stroke="none"
      >
        <rect width="32" height="32" rx="7" fill="#3898f8" />
        <path
          d="M9.5 20.5a3.9 3.9 0 0 1 .6-7.8 5.4 5.4 0 0 1 10.3 1.3 3.5 3.5 0 0 1-.4 6.5Z"
          fill="#FFFFFF"
        />
        <circle cx="12.6" cy="16.6" r="1.4" fill="#3898f8" />
      </svg>
      <span className={cn('font-heading text-xl font-bold tracking-tight text-ink', className)}>
        Skyport
      </span>
    </span>
  )
}
