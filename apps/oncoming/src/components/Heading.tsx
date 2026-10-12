import type { ReactNode } from 'react'
import { cn } from '@free-react-templates/ui'

export interface HeadingProps {
  children?: ReactNode
  className?: string
}

/**
 * The page's heading: a weight-100 (hairline) cut of the sans face at 72px in
 * white uppercase — the softest type in the family — dropping to 55px on the
 * smallest screens. No `letter-spacing` is declared; the wide tracking visible
 * in the design is the face's own sidebearings at this size.
 */
export function Heading({ children = 'Arriving Soon', className }: HeadingProps) {
  return (
    <h3
      data-testid="heading"
      className={cn(
        'pb-[35px] text-center font-sans text-[72px] leading-[1.1] font-thin text-white uppercase',
        'max-[576px]:text-[55px]',
        className,
      )}
    >
      {children}
    </h3>
  )
}
