import { cn } from '@free-react-templates/ui'
import { SITE_NAME } from '../lib/site'

export interface WordmarkProps {
  /** On the pinned white bar the wordmark swaps to the accent colour. */
  stuck: boolean
}

/**
 * The page's single h1: the wordmark at 24px in the body face (the global h1
 * scale is overridden here), white over the band and the accent colour once the
 * header pins, with its full stop always in the accent.
 */
export function Wordmark({ stuck }: WordmarkProps) {
  return (
    <h1 className="mb-0">
      <a
        href="#home"
        aria-label={`${SITE_NAME}, back to the top`}
        className={cn(
          'inline-block text-[24px] leading-[1.2] font-medium transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-4',
          stuck
            ? 'text-brand focus-visible:outline-brand'
            : 'text-white focus-visible:outline-white',
        )}
      >
        {SITE_NAME}
        <span className="text-brand">.</span>
      </a>
    </h1>
  )
}
