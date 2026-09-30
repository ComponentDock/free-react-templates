import type { ReactNode } from 'react'
import { cn } from '@free-react-templates/ui'

/** Section heading with the 10px brand-red vertical bar on its left
 *  (reference `.heading:before`). */
export function SectionHeading({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <h2 className={cn('flex items-center gap-4 text-xl font-bold text-white', className)}>
      <span className="h-6 w-2.5 bg-brand" aria-hidden="true" />
      {children}
    </h2>
  )
}
