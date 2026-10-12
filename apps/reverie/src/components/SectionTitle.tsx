import { Waves } from 'lucide-react'
import { bandLeadClass, bandOrnamentClass, bandTitleClass } from '../lib/styles'

interface SectionTitleProps {
  title: string
  lead: string
  /** The squiggle the design rules under its card-grid headings; the text-only bands omit it. */
  ornament?: boolean
}

/** The centred band heading: the title, the ornament where the design sets one, and the lead line. */
export function SectionTitle({ title, lead, ornament = false }: SectionTitleProps) {
  return (
    <div>
      <h2 className={bandTitleClass}>{title}</h2>
      {ornament ? <Waves className={bandOrnamentClass} aria-hidden="true" /> : null}
      <p className={bandLeadClass}>{lead}</p>
    </div>
  )
}
