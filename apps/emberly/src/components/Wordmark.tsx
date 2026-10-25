import { cn } from '@free-react-templates/ui'
import { BRAND } from '../content'

interface WordmarkProps {
  readonly tone?: 'dark' | 'light'
}

/**
 * The mark is drawn, not imported: an ember flame beside a short blue rule,
 * with the wordmark in the page face. The two colours are the whole brand.
 */
export function Wordmark({ tone = 'dark' }: WordmarkProps) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <svg
        viewBox="0 0 42 32"
        className="h-8 w-[2.625rem] shrink-0 lg:h-9"
        aria-hidden="true"
        data-brand-mark
      >
        <path
          d="M14 4c3.9 5.2 6.4 8.1 6.4 12.3A6.4 6.4 0 0 1 7.6 16c0-2.1 1-3.7 2.5-5.6C11.7 8.2 13 6.4 14 4Z"
          fill="var(--color-heat-400)"
        />
        <path
          d="M26 10h12"
          stroke="var(--color-primary-600)"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M26 16h9"
          stroke="var(--color-primary-600)"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
      <span
        className={cn(
          'text-lg font-medium leading-none tracking-tight',
          tone === 'light' ? 'text-white' : 'text-ink-800',
        )}
      >
        {BRAND}
      </span>
    </span>
  )
}
