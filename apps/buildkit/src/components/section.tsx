import type { ReactNode } from 'react'
import { cn } from '@free-react-templates/ui'

export interface ShowcaseSectionProps {
  id?: string
  title: string
  className?: string
  children: ReactNode
}

/**
 * A kit showcase band: light-weight slate heading over white (or `bg-light`)
 * with 4em vertical rhythm (`py-16`), the catalog's repeating container.
 */
export function ShowcaseSection({ id, title, className, children }: ShowcaseSectionProps) {
  return (
    <section id={id} className={cn('px-4 py-16 sm:px-6', className)}>
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl text-heading md:text-4xl">{title}</h2>
        <div className="mt-8 space-y-10">{children}</div>
      </div>
    </section>
  )
}

/** Sub-group label inside a showcase band (e.g. "Pick your style"). */
export function SubHeading({ children, className }: { children: ReactNode; className?: string }) {
  return <h3 className={cn('text-xl text-heading', className)}>{children}</h3>
}
