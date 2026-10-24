import type { ReactNode } from 'react'
import { cn } from '@free-react-templates/ui'

interface SectionTitleProps {
  children: ReactNode
  /** Center the rule-marked title (the "Most Rated" band). */
  centered?: boolean
}

/** Uppercase section title with the brand's 4px left rule. */
export function SectionTitle({ children, centered = false }: SectionTitleProps) {
  return (
    <div className={cn('mb-10 md:mb-14', centered && 'text-center')}>
      <h2 className="inline-block border-l-4 border-brand pl-[30px] text-2xl leading-tight font-normal uppercase text-black md:text-[30px]">
        {children}
      </h2>
    </div>
  )
}
