import { Wrench } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

export interface WordmarkProps {
  /** The footer sits on graphite, so its name is always white. */
  tone?: 'auto' | 'light'
}

/** Brand lockup: a clay tile with the trade's own tool, then the name. */
export function Wordmark({ tone = 'auto' }: WordmarkProps) {
  return (
    <span className="inline-flex items-center gap-2">
      <span className="grid h-9 w-9 place-items-center rounded-lg bg-primary-600 text-white">
        <Wrench aria-hidden="true" className="h-5 w-5" />
      </span>
      <span
        className={cn(
          'text-xl font-semibold tracking-tight',
          tone === 'light' ? 'text-white' : 'text-ink-800 dark:text-white',
        )}
      >
        Brassworks
      </span>
    </span>
  )
}
