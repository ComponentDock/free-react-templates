import type { Column } from '../lib/site'
import { colBlockClass, colHeadingClass } from '../lib/styles'

export interface ColBlockProps {
  column: Column
}

/**
 * One sub-block beside the lead: half the row from 768px up and the whole of it below, holding a
 * 24px heading at weight 400 over its own grey paragraph. Nothing else decorates it — the design
 * gives these two columns no rule, no surface and no picture.
 */
export function ColBlock({ column }: ColBlockProps) {
  return (
    <div className={colBlockClass} data-testid={`column-${column.heading}`}>
      <h2 className={colHeadingClass}>{column.heading}</h2>
      <p>{column.body}</p>
    </div>
  )
}
