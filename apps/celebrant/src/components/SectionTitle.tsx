import type { ReactNode } from 'react'
import { cn } from '@free-react-templates/ui'
import { sectionTitleClass, sectionTitleHeadingClass, sectionTitleSpacing } from '../lib/styles'

/**
 * The italic serif band heading the design repeats over its services, couples and question bands.
 * `roomy` is the design's own `mb-5` step, which only the question band takes.
 */
export function SectionTitle({ children, roomy }: { children: ReactNode; roomy: boolean }) {
  return (
    <div className={cn(sectionTitleClass, sectionTitleSpacing(roomy))}>
      <h2 className={sectionTitleHeadingClass}>{children}</h2>
    </div>
  )
}
