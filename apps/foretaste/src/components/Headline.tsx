import type { ReactNode } from 'react'
import { cn } from '@free-react-templates/ui'

export interface HeadlineProps {
  children?: ReactNode
  className?: string
}

/**
 * The page's only headline: the thinnest cut of the sans at 50px, uppercase
 * with 10px of tracking, white and centred, held between 30px and 100px of
 * vertical padding. Its size never changes at any breakpoint.
 */
export function Headline({ children = 'Almost Here', className }: HeadlineProps) {
  return (
    <h3
      data-testid="headline"
      className={cn(
        'pt-[30px] pb-[100px] text-center font-heading text-[50px] leading-[1.1]',
        'font-thin tracking-[10px] text-white uppercase',
        className,
      )}
    >
      {children}
    </h3>
  )
}
