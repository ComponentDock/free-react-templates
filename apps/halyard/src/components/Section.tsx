import type { Section as SectionModel, SectionItem } from '../lib/site'
import { containerClass, sectionAnchorStyle } from '../lib/styles'

export interface SectionProps {
  section: SectionModel
}

/**
 * One destination the bar declares, materialised: its eyebrow, heading and body, then
 * the rows its data carries — a grid of cards, with a picture above the words where
 * the section is a log of things rather than a list of services. Every target is
 * scroll-anchored clear of the bar, so arriving from a row never leaves the heading
 * tucked underneath it.
 */
export function Section({ section }: SectionProps) {
  return (
    <section
      id={section.id}
      data-testid={`${section.id}-section`}
      aria-labelledby={`${section.id}-heading`}
      style={sectionAnchorStyle}
      className="border-t border-black/5 py-16"
    >
      <div className={containerClass}>
        <p className="text-[13px] font-bold tracking-[0.18em] text-brand uppercase">
          {section.eyebrow}
        </p>
        <h2 id={`${section.id}-heading`} className="mt-2 text-[28px] font-light text-ink">
          {section.heading}
        </h2>
        <p className="mt-3 max-w-[720px] text-[16px] text-ink/70">{section.body}</p>

        {section.items && <CardGrid id={section.id} items={section.items} />}
      </div>
    </section>
  )
}

interface CardGridProps {
  id: string
  items: SectionItem[]
}

/** A section's rows: a title and a line each, with a picture above them where it has one. */
function CardGrid({ id, items }: CardGridProps) {
  return (
    <ul
      data-testid={`${id}-items`}
      className="mt-8 grid list-none grid-cols-1 gap-6 p-0 sm:grid-cols-2 lg:grid-cols-3"
    >
      {items.map((item) => (
        <li key={item.title} className="border-l-2 border-brand bg-black/[0.03] p-5">
          {item.image && (
            <img
              src={item.image}
              alt={item.title}
              loading="lazy"
              className="mb-4 h-[180px] w-full object-cover"
            />
          )}
          <h3 className="text-[18px] font-semibold text-ink">{item.title}</h3>
          <p className="mt-2 text-[15px] text-ink/70">{item.body}</p>
        </li>
      ))}
    </ul>
  )
}
