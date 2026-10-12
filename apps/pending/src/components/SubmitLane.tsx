import { ArrowRight } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

export interface SubmitLaneProps {
  className?: string
}

/**
 * The submit affordance: a 35px-wide invisible lane anchored at the field's
 * top-right corner — no fill, no border, no radius — centring a 16px muted arrow
 * that turns white while the lane is hovered. The design's own lane has no text,
 * so the button carries its own accessible name.
 */
export function SubmitLane({ className }: SubmitLaneProps) {
  return (
    <button
      type="submit"
      aria-label="Submit email"
      data-testid="submit-lane"
      className={cn(
        'group/submit absolute top-0 right-0 flex h-full w-[35px] cursor-pointer',
        'items-center justify-center border-0 bg-transparent',
        'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white',
        className,
      )}
    >
      <ArrowRight
        aria-hidden="true"
        className="size-[16px] text-muted transition-all duration-[400ms] group-hover/submit:text-white"
      />
    </button>
  )
}
