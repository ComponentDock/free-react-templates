import type { ReactNode } from 'react'
import { cn } from '@free-react-templates/ui'

/** Section title (reference `.section-title`): 28px/300 heading with a
 *  70px×3px brand-red bar on its left and a full-width tint rule after it;
 *  optional `actions` slot sits at the far right (filter pills). */
export function SectionTitle({
  children,
  actions,
  light,
}: {
  children: ReactNode
  actions?: ReactNode
  light?: boolean
}) {
  return (
    <div className="mb-10 flex flex-wrap items-center gap-4">
      <h3 className={cn('text-[28px] font-light', light ? 'text-white' : 'text-ink')}>
        {children}
      </h3>
      <span className="h-[3px] w-[70px] bg-brand" aria-hidden="true" />
      <span className="h-[3px] flex-1 bg-tint" aria-hidden="true" />
      {actions}
    </div>
  )
}
