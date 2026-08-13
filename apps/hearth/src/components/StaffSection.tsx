import { STAFF } from '../data'
import { SectionHeading } from './SectionHeading'

/**
 * StaffSection — "Chef / Our Master Chef" (source typo "Mater Chef"
 * corrected): four staff cards, each with a 320px chef photo and a white text
 * block holding the name, the role and the "ambitious workaholic" quote.
 */
export function StaffSection() {
  return (
    <section className="bg-paper py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading script="Chef" title="Our Master Chef" />
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {STAFF.map((member) => (
            <article
              key={member.name}
              className="overflow-hidden rounded bg-white shadow-md transition-shadow hover:shadow-xl"
            >
              <img
                src={member.src}
                alt={`Portrait of ${member.name}`}
                loading="lazy"
                className="h-[320px] w-full object-cover object-top"
              />
              <div className="px-4 pb-8 pt-4 text-center">
                <h3 className="text-lg font-semibold text-ink">{member.name}</h3>
                <span className="mt-1 block text-sm text-brand">{member.role}</span>
                <p className="mt-4 text-sm leading-relaxed text-muted">{member.quote}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
