import type { Section as SectionModel } from '../lib/site'
import {
  bodyClass,
  cardBodyClass,
  cardClass,
  cardGridClass,
  cardImageClass,
  cardTitleClass,
  containerClass,
  eyebrowClass,
  sectionAnchorStyle,
  sectionClass,
  sectionHeadingClass,
} from '../lib/styles'

export interface SectionProps {
  section: SectionModel
}

/**
 * One materialised destination: a kicker, its own heading, an opening paragraph and the
 * rows of things it lists, each with its own placeholder picture where the section is a
 * grid. Every section is a landmark in its own right (`aria-labelledby` its own heading)
 * and keeps 80px of scroll margin, so a row on the bar never lands its heading under the
 * bar it arrived from.
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

        <ul className={cardGridClass}>
          {section.items.map((item) => (
            <li key={item.title} className={cardClass}>
              {item.image && <img src={item.image} alt="" className={cardImageClass} />}
              <h3 className={cardTitleClass}>{item.title}</h3>
              <p className={cardBodyClass}>{item.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
