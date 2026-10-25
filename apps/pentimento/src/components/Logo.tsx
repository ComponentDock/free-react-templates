import { cn } from '@free-react-templates/ui'
import { site } from '../content'

export interface WordmarkProps {
  /** `dark` ink on the light header, `light` ink in the dark footer. */
  tone?: 'light' | 'dark'
  className?: string
}

/**
 * The mark is drawn, not loaded: a canvas rectangle with the one rose triangle
 * that appears nowhere else in the page, and the studio's name as live type.
 */
export function Wordmark({ tone = 'dark', className }: WordmarkProps) {
  return (
    <a
      href="#top"
      aria-label={`${site.artist} — home`}
      className={cn('inline-flex shrink-0 items-center gap-2', className)}
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 40 40"
        className={
          tone === 'dark'
            ? 'h-9 w-9 text-gray-900 lg:h-10 lg:w-10 dark:text-primary-50'
            : 'h-9 w-9 text-primary-50 lg:h-10 lg:w-10'
        }
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="1"
          y="1"
          width="38"
          height="38"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path d="M12 30 20 10l8 20z" stroke="#df7484" strokeWidth="1.5" />
        <circle cx="20" cy="23" r="1.6" fill="#df7484" />
      </svg>
      <span
        className={cn(
          'font-serif text-lg leading-6',
          tone === 'dark' ? 'text-gray-900 dark:text-primary-50' : 'text-primary-50',
        )}
      >
        {site.artist}
      </span>
    </a>
  )
}
