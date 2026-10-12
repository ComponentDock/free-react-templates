import { cn } from '@free-react-templates/ui'

export interface SubLineProps {
  children?: string
  className?: string
}

/**
 * The one soft type token on the page: 24px Poppins in a mid grey, sitting
 * between the heading and the subscribe bar with 46px of air beneath it.
 */
export function SubLine({
  children = "Leave your email and we'll write the day it goes live.",
  className,
}: SubLineProps) {
  return (
    <p
      data-testid="sub-line"
      className={cn('pb-[46px] font-sans text-[24px] leading-[1.2] text-subline', className)}
    >
      {children}
    </p>
  )
}
