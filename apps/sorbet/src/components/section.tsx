import type { ReactNode } from 'react'
import { cn } from '@free-react-templates/ui'

export interface ShowcaseSectionProps {
  id?: string
  title?: string
  className?: string
  children: ReactNode
}

/**
 * One catalog band: a 28px/500 section heading (when the reference has one)
 * over the 3em vertical rhythm, alternating white / `bg-light` surfaces.
 */
export function ShowcaseSection({ id, title, className, children }: ShowcaseSectionProps) {
  return (
    <section id={id} className={cn('px-4 py-12 sm:px-6', className)}>
      <div className="mx-auto max-w-6xl">
        {title !== undefined && (
          <h2 className="mb-8 text-[28px] font-medium text-heading">{title}</h2>
        )}
        <div className="space-y-10">{children}</div>
      </div>
    </section>
  )
}

/** Sub-group label inside a band (e.g. "Sliders" beside "Badges"). */
export function SubHeading({ children, className }: { children: ReactNode; className?: string }) {
  return <h3 className={cn('mb-3 text-xl text-heading', className)}>{children}</h3>
}
