import type { ReactNode } from 'react'
import { cn } from '@free-react-templates/ui'

interface SectionTitleProps {
  children: ReactNode
  align?: 'left' | 'center'
}

/**
 * Uppercase Jost section title with the brand highlight bar behind the
 * bottom 40% of the text (`.section-title::before` in the original).
 */
export function SectionTitle({ children, align = 'left' }: SectionTitleProps) {
  return (
    <h2
      className={cn(
        'mb-8 font-sans text-[18px] font-bold tracking-[0.1rem] text-ink uppercase',
        align === 'center' && 'text-center',
      )}
    >
      <span className="relative isolate inline-block">
        {children}
        <span
          aria-hidden="true"
          className="absolute right-[-10px] bottom-0 left-0 z-[-1] h-[40%] bg-brand"
        />
      </span>
    </h2>
  )
}
