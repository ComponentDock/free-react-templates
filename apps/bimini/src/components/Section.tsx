import type { SectionModel } from '../lib/site'
import {
  bodyClass,
  eyebrowClass,
  itemBodyClass,
  itemClass,
  itemGridClass,
  itemImageClass,
  itemTitleClass,
  sectionAnchorStyle,
  sectionClass,
  sectionHeadingClass,
} from '../lib/styles'

export interface SectionProps {
  section: SectionModel
}

/**
 * One materialised destination: a kicker, its own heading, an opening paragraph and the cards it
 * lists, each with its own placeholder picture where the block is a grid. The block carries the
 * anchor the sheet's label points at, is its own landmark (`aria-labelledby` its own heading), and
 * keeps `120px` of scroll margin so a label never lands its heading under the header.
 */
export function Section({ section }: SectionProps) {
  const headingId = `${section.id}-heading`

  return (
    <section
      id={section.id}
      aria-labelledby={headingId}
      style={sectionAnchorStyle}
      className={sectionClass}
      data-testid={`section-${section.id}`}
    >
      <p className={eyebrowClass}>{section.eyebrow}</p>
      <h2 id={headingId} className={sectionHeadingClass}>
        {section.heading}
      </h2>
      <p className={bodyClass}>{section.body}</p>

      <ul className={itemGridClass}>
        {section.items.map((item) => (
          <li key={item.title} className={itemClass}>
            {item.image && <img src={item.image} alt="" className={itemImageClass} />}
            <h3 className={itemTitleClass}>{item.title}</h3>
            <p className={itemBodyClass}>{item.body}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
