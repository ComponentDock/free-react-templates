import { cn } from '@free-react-templates/ui'
import { BRAND, BRAND_SUBLABEL } from '../content'

interface WordmarkProps {
  readonly tone?: 'dark' | 'light'
}

/**
 * The mark is drawn, not imported: a brand-green rounded square with three
 * field-line strokes beside the name, and the letterspaced mono sub-label that
 * the reference uses to say what the trade is.
 */
export function Wordmark({ tone = 'dark' }: WordmarkProps) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <svg viewBox="0 0 32 32" className="h-8 w-8 shrink-0 lg:h-9 lg:w-9" aria-hidden="true">
        <rect width="32" height="32" rx="7" fill="var(--color-primary-600)" />
        <path
          d="M8 22h16M10 22V12m6 10V9m6 13v-7"
          stroke="var(--color-primary-100)"
          strokeWidth="2.4"
          strokeLinecap="round"
        />
      </svg>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            'text-lg font-bold tracking-tight',
            tone === 'light' ? 'text-white' : 'text-ink-800',
          )}
        >
          {BRAND}
        </span>
        <span
          className={cn(
            'mt-1 font-mono text-[9px] font-bold uppercase tracking-[0.28em]',
            tone === 'light' ? 'text-primary-300' : 'text-ink-400',
          )}
        >
          {BRAND_SUBLABEL}
        </span>
      </span>
    </span>
  )
}
