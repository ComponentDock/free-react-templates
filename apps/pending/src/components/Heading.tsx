import type { ReactNode } from 'react'
import { cn } from '@free-react-templates/ui'

export interface HeadingProps {
  children?: ReactNode
  className?: string
}

/**
 * The page's largest type: the family's only brush-script display line, at
 * 180px white sentence case with no letter-spacing. It steps down to 160px, then
 * 120px, then 80px as the viewport narrows.
 */
export function Heading({ children = 'Not Long', className }: HeadingProps) {
  return (
    <h3
      data-testid="heading"
      className={cn(
        'max-w-full pb-[55px] text-center font-script text-[180px] leading-[1.1] font-normal text-white',
        'max-[992px]:text-[160px] max-[768px]:text-[120px] max-[576px]:text-[80px]',
        className,
      )}
    >
      {children}
    </h3>
  )
}
