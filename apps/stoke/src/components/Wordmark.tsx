import { cn } from '@free-react-templates/ui'

interface WordmarkProps {
  readonly tone?: 'dark' | 'light'
  readonly className?: string
}

/**
 * The wordmark: a drawn flame inside a rounded red plate plus the name. Drawn
 * here rather than copied, so the template ships no third-party logo file.
 */
export function Wordmark({ tone = 'dark', className }: WordmarkProps) {
  return (
    <span className={cn('flex items-center gap-2', className)}>
      <span
        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary-600 lg:h-9 lg:w-9"
        aria-hidden="true"
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
          <path
            d="M12 3c2.2 3 4.5 4.5 4.5 7.5a4.5 4.5 0 0 1-9 0C7.5 7.5 9.8 6 12 3Z"
            fill="#ffffff"
          />
          <path d="M12 11.5c1 1.4 2 2.2 2 3.5a2 2 0 0 1-4 0c0-1.3 1-2.1 2-3.5Z" fill="#fb6363" />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            'text-base font-extrabold tracking-tight lg:text-lg',
            tone === 'dark' ? 'text-ink-900' : 'text-white',
          )}
        >
          STOKE
        </span>
        <span
          className={cn(
            'mt-0.5 text-[9px] font-semibold uppercase tracking-[0.18em]',
            tone === 'dark' ? 'text-ink-500' : 'text-gray-400',
          )}
        >
          Heating &amp; Cooling
        </span>
      </span>
    </span>
  )
}
