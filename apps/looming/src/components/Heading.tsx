import type { ReactNode } from 'react'
import { cn } from '@free-react-templates/ui'

export interface HeadingProps {
  children?: ReactNode
  className?: string
}

/**
 * The page's largest type: a 90px black-italic serif in near-black, sentence
 * case with no letter-spacing — the italic slant of the heaviest serif cut is
 * the whole signature of this design. Drops to 60px on the smallest screens.
 */
export function Heading({ children = 'On Its Way', className }: HeadingProps) {
  return (
    <h3
      data-testid="heading"
      className={cn(
        'pb-[34px] font-heading text-[90px] leading-[1.1] font-black text-ink italic',
        'max-[576px]:text-[60px]',
        className,
      )}
    >
      {children}
    </h3>
  )
}
