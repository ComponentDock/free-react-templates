import { cn } from '@free-react-templates/ui'

interface WordmarkProps {
  /** `light` inverts the wordmark for the dark footer. */
  tone?: 'dark' | 'light'
  className?: string
}

/**
 * Three overlapping circles drawn inline — brand, mid and accent — with the
 * wordmark beside them. The mark is drawn here rather than shipped as an
 * asset, so no source SVG is copied and the brand hexes live in one place.
 */
export function Wordmark({ tone = 'dark', className }: WordmarkProps) {
  return (
    <span className={cn('inline-flex items-center gap-2', className)}>
      <svg viewBox="0 0 40 24" aria-hidden="true" className="h-6 w-10 shrink-0">
        <circle cx="13" cy="12" r="9" fill="#0284c7" />
        <circle cx="24" cy="12" r="9" fill="#38bdf8" fillOpacity="0.75" />
        <circle cx="18.5" cy="6.5" r="6" fill="#c026d3" fillOpacity="0.85" />
      </svg>
      <span
        className={cn(
          'text-xl font-semibold tracking-tight',
          tone === 'light' ? 'text-white' : 'text-gray-900',
        )}
      >
        Closeknit
      </span>
    </span>
  )
}
