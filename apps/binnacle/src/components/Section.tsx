import type { Section as SectionModel } from '../lib/site'
import {
  bodyClass,
  containerClass,
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
 * lists, each with its own placeholder picture where the block is a grid. A card that something
 * else points at carries that anchor itself, so a row, a menu item, a tile or the phone link
 * always lands on a real card rather than on a dead one. Every block is a landmark in its own
 * right (`aria-labelledby` its own heading) and keeps the chrome's own height of scroll margin, so
 * a row never lands its heading under the bar it arrived from.
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
      <div className={containerClass}>
        <p className={eyebrowClass}>{section.eyebrow}</p>
        <h2 id={headingId} className={sectionHeadingClass}>
          {section.heading}
        </h2>
        <p className={bodyClass}>{section.body}</p>

        <ul className={itemGridClass}>
          {section.items.map((item) => (
            <li key={item.title} id={item.id} className={itemClass}>
              {item.image && <img src={item.image} alt="" className={itemImageClass} />}
              <h3 className={itemTitleClass}>{item.title}</h3>
              <p className={itemBodyClass}>{item.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
