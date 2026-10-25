import { cn } from '@free-react-templates/ui'

export interface WordmarkProps {
  /** `light` is for the dark footer ground. */
  tone?: 'dark' | 'light'
}

/**
 * The mark is drawn here, not imported: two stacked arcs (a warm and a cool
 * sweep) inside a rounded square, in the brand teal. Next to it the wordmark is
 * set as `Therm` + `ly` so the second half carries the brand colour.
 */
export function Wordmark({ tone = 'dark' }: WordmarkProps) {
  return (
    <span className="inline-flex items-center gap-2">
      <svg
        aria-hidden="true"
        viewBox="0 0 32 32"
        className={cn(
          'h-8 w-8 lg:h-9 lg:w-9',
          tone === 'dark' ? 'text-primary-600' : 'text-primary-400',
        )}
      >
        <rect width="32" height="32" rx="9" fill="currentColor" opacity="0.12" />
        <path
          d="M8 18a8 8 0 0 1 16 0"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M11 24a5 5 0 0 1 10 0"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
      <span
        className={cn(
          'text-lg font-extrabold tracking-tight',
          tone === 'dark' ? 'text-ink-800' : 'text-white',
        )}
      >
        Therm<span className="text-primary-600">ly</span>
      </span>
    </span>
  )
}
