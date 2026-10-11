import type { ReactNode } from 'react'
import { cn } from '@free-react-templates/ui'

export interface HeadingProps {
  children?: ReactNode
  className?: string
}

/**
 * The thinnest type on the page: 72px at weight 100, half-transparent white,
 * uppercase and widely letterspaced, so the photography reads through it.
 */
export function Heading({ children = 'Launching Soon', className }: HeadingProps) {
  return (
    <h3
      data-testid="heading"
      className={cn(
        'pb-[40px] text-center text-[72px] leading-[1.1] font-thin uppercase',
        'tracking-[15px] text-heading max-[576px]:text-[45px]',
        className,
      )}
    >
      {children}
    </h3>
  )
}
