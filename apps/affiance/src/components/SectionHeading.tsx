import { sectionHeadingClass, sectionTitleClass, subheadingClass } from '../lib/styles'

/**
 * The centred title block every band after the hero opens with: the dashed brand-pink eyebrow pill
 * over the big script heading.
 */
export function SectionHeading({ subheading, title }: { subheading: string; title: string }) {
  return (
    <div className={sectionTitleClass}>
      <span className={subheadingClass}>{subheading}</span>
      <h2 className={sectionHeadingClass}>{title}</h2>
    </div>
  )
}
