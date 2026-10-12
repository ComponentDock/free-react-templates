import { sectionHeadingClass, sectionIntroClass, sectionTitleClass } from '../lib/styles'

/**
 * The centred title block every band after the hero opens with: a display-serif heading over a
 * light muted paragraph.
 */
export function SectionTitle({ heading, intro }: { heading: string; intro: string }) {
  return (
    <div className={sectionTitleClass}>
      <h2 className={sectionHeadingClass}>{heading}</h2>
      <p className={sectionIntroClass}>{intro}</p>
    </div>
  )
}
