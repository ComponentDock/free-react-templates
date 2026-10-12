import { ArrowRight } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

export interface SubmitArrowProps {
  className?: string
}

/**
 * The bar's right end: an invisible square lane anchored at the top-right
 * corner — no fill, no border, no radius — holding a 30px near-black arrow that
 * nudges 10px to the right while the lane is hovered, and narrows a little on
 * the smallest screens. The design's own lane has no text, so the button
 * carries its own accessible name.
 */
export function SubmitArrow({ className }: SubmitArrowProps) {
  return (
    <button
      type="submit"
      aria-label="Subscribe to the launch note"
      data-testid="submit-arrow"
      className={cn(
        'group/arrow absolute top-0 right-0 flex h-[80px] w-[80px] cursor-pointer',
        'items-center justify-center rounded-none border-0 bg-transparent',
        'max-[576px]:w-[60px]',
        'focus-visible:ring-2 focus-visible:ring-ink/40 focus-visible:outline-none',
        className,
      )}
    >
      <ArrowRight
        aria-hidden="true"
        className="size-[30px] text-ink transition-all duration-[400ms] group-hover/arrow:translate-x-[10px]"
      />
    </button>
  )
}
