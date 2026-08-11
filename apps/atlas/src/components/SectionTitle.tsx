import type { ReactNode } from 'react'
import { cn } from '@free-react-templates/ui'

interface SectionTitleProps {
  children: ReactNode
  className?: string
}

/* Section/widget heading (reference `p.title` / `h5.title`): Ubuntu 700
   18px black with a 2px #f1f1f1 bottom border. */
export function SectionTitle({ children, className }: SectionTitleProps) {
  return (
    <h5
      className={cn(
        'border-b-2 border-divider py-[10px] font-heading text-lg font-bold text-ink',
        className,
      )}
    >
      {children}
    </h5>
  )
}
