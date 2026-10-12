import { sectionHeadingClass, sectionSprigClass, sectionTitleClass } from '../lib/styles'
import { Sprig } from './Sprig'

/** The centred title block the story-free bands open with: a sprig over an uppercase H2. */
export function SectionTitle({ heading }: { heading: string }) {
  return (
    <div className={sectionTitleClass}>
      <Sprig className={sectionSprigClass} />
      <h2 className={sectionHeadingClass}>{heading}</h2>
    </div>
  )
}
