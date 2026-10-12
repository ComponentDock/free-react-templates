import type { ReactNode } from 'react'
import { cn } from '@free-react-templates/ui'

export interface HeadingProps {
  children?: ReactNode
  className?: string
}

/**
 * The largest type on the page: a black-italic serif at 90px (65px on the
 * smallest screens) — bigger than the clock digits, unlike the rest of the
 * family where the clock outranks the heading.
 */
export function Heading({ children = 'Almost Here', className }: HeadingProps) {
  return (
    <h3
      data-testid="heading"
      className={cn(
        'pb-[30px] font-heading text-[90px] leading-[1.1] font-black text-white italic',
        'max-[576px]:text-[65px] max-[992px]:text-center',
        className,
      )}
    >
      {children}
    </h3>
  )
}
