import { ArrowRight } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

export interface SubmitLaneProps {
  className?: string
}

/**
 * The submit affordance: an invisible 90×80 lane anchored at the well's
 * top-right corner — no fill, no border, no radius — holding a 30px near-black
 * arrow that nudges 10px to the right while the lane is hovered. The design's
 * own lane has no text, so the button carries its own accessible name.
 */
export function SubmitLane({ className }: SubmitLaneProps) {
  return (
    <button
      type="submit"
      aria-label="Submit email"
      data-testid="submit-lane"
      className={cn(
        'group/submit absolute top-0 right-0 flex h-[80px] w-[90px] cursor-pointer',
        'items-center justify-center border-0 bg-transparent',
        'focus-visible:ring-2 focus-visible:ring-ink/40 focus-visible:outline-none',
        className,
      )}
    >
      <ArrowRight
        aria-hidden="true"
        className="size-[30px] text-ink transition-transform duration-[400ms] group-hover/submit:translate-x-[10px]"
      />
    </button>
  )
}
