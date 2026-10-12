import { cn } from '@free-react-templates/ui'
import { Ornament } from './ornament'
import {
  eyebrowClass,
  leadClass,
  onDarkEyebrowClass,
  onDarkHeadingClass,
  rsvpEyebrowClass,
  sectionHeadingClass,
  titleBlockClass,
} from '../lib/styles'

/** Which surface the title block is standing on: the page, the gold-accented reply card, or a
 * photograph, where every line turns white. */
export type TitleTone = 'page' | 'brand' | 'dark'

export interface TitleBlockProps {
  eyebrow: string
  heading: string
  headingId: string
  lead?: string
  tone?: TitleTone
  className?: string
}

/** The centred eyebrow + heading + flourish every band of the page opens with. */
export function TitleBlock({
  eyebrow,
  heading,
  headingId,
  lead,
  tone = 'page',
  className,
}: TitleBlockProps) {
  return (
    <div className={cn(titleBlockClass, className)}>
      <span className={tone === 'brand' ? rsvpEyebrowClass : tone === 'dark' ? onDarkEyebrowClass : eyebrowClass}>
        {eyebrow}
      </span>
      <h2 id={headingId} className={tone === 'dark' ? onDarkHeadingClass : sectionHeadingClass}>
        {heading}
      </h2>
      <Ornament className="mx-auto mb-5 h-[18px] w-[120px] text-brand" />
      {lead ? <p className={cn(leadClass, tone === 'dark' && 'text-white')}>{lead}</p> : null}
    </div>
  )
}
