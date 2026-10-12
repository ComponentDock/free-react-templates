import { cn } from '@free-react-templates/ui'

export interface WordmarkProps {
  className?: string
}

/**
 * The brand mark: the app's own name set in white uppercase with wide tracking —
 * no image asset is used anywhere in this template. Its container grows so the
 * call to action is pushed to the right edge of the top bar.
 */
export function Wordmark({ className }: WordmarkProps) {
  return (
    <div className={cn('my-[10px] mr-[30px] grow', className)}>
      <a
        href="#"
        aria-label="Oncoming"
        className="inline-block text-white transition-opacity duration-[400ms] hover:opacity-80"
      >
        <span
          data-testid="wordmark"
          aria-hidden="true"
          className="text-[20px] leading-none font-normal tracking-[0.34em] uppercase"
        >
          Oncoming
        </span>
      </a>
    </div>
  )
}
