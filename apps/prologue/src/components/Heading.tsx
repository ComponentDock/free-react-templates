import type { ReactNode } from 'react'
import { cn } from '@free-react-templates/ui'

export interface HeadingProps {
  children?: ReactNode
  className?: string
}

/**
 * The page's largest type: an upright serif at 60px in near-black, upper case,
 * set tight at 1.1 with no letter-spacing and 34px of air beneath it. The size
 * is fixed — it never changes at any breakpoint.
 */
export function Heading({ children = 'Nearly There', className }: HeadingProps) {
  return (
    <h3
      data-testid="heading"
      className={cn(
        'pb-[34px] font-heading text-[60px] leading-[1.1] font-medium text-ink uppercase',
        className,
      )}
    >
      {children}
    </h3>
  )
}
