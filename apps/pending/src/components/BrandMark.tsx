import { cn } from '@free-react-templates/ui'

export interface BrandMarkProps {
  className?: string
}

/**
 * The wordmark: the app's own bold white lettering, drawn as text so no image
 * asset ships anywhere in this template. Its wrapper grows to eat the top bar's
 * slack, which is what shoves the countdown and the pill to the right edge.
 */
export function BrandMark({ className }: BrandMarkProps) {
  return (
    <div data-testid="brand-mark-wrap" className={cn('my-[10px] mr-[30px] block grow', className)}>
      <a
        href="#"
        aria-label="Pending"
        className="inline-block max-w-full text-white transition-opacity duration-[400ms] hover:opacity-70"
      >
        <span
          data-testid="brand-mark"
          className="block font-sans text-[24px] leading-[24px] font-bold tracking-[0.5px]"
        >
          Pending.
        </span>
      </a>
    </div>
  )
}
