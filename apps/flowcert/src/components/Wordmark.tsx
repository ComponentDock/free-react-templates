import { cn } from '@free-react-templates/ui'

export interface WordmarkProps {
  /** `light` is for the dark footer ground. */
  tone?: 'dark' | 'light'
}

/**
 * The mark is drawn here, not imported: a rounded plate with two pipe strokes
 * and a lighter divider, which is the geometry of a test cock on a backflow
 * assembly. Beside it the wordmark is set as `Flow` + `cert`, so the second
 * half carries the brand colour.
 */
export function Wordmark({ tone = 'dark' }: WordmarkProps) {
  return (
    <span className="inline-flex items-center gap-2">
      <svg
        aria-hidden="true"
        viewBox="0 0 32 32"
        className={cn('h-8 w-8 lg:h-9 lg:w-9', tone === 'dark' ? 'text-ink-800' : 'text-white')}
      >
        <rect width="32" height="32" rx="9" fill="currentColor" opacity="0.08" />
        <path
          d="M9 11h14"
          stroke="#628ef3"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M9 16h9"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M9 21h14"
          stroke="#94b5f9"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            'text-lg font-extrabold tracking-tight',
            tone === 'dark' ? 'text-ink-800' : 'text-white',
          )}
        >
          Flow<span className="text-primary-600">cert</span>
        </span>
        <span
          className={cn(
            'mt-1 font-mono text-[9px] font-medium tracking-[0.18em] uppercase',
            tone === 'dark' ? 'text-ink-400' : 'text-gray-400',
          )}
        >
          Certified
        </span>
      </span>
    </span>
  )
}
