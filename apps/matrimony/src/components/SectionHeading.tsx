import { sectionHeadingClass, sectionRuleClass, sectionSubtextClass, sectionTitleClass } from '../lib/styles'
import { Flourish } from './Flourish'

/**
 * The centred title block every band after the hero opens with: the heading in Playfair Display, the
 * red ornament rule beneath it and the muted paragraph under that.
 */
export function SectionHeading({ title, subtext }: { title: string; subtext: string }) {
  return (
    <div className={sectionTitleClass}>
      <h2 className={sectionHeadingClass}>{title}</h2>
      <Flourish variant="rule" className={sectionRuleClass} />
      <p className={sectionSubtextClass}>{subtext}</p>
    </div>
  )
}
