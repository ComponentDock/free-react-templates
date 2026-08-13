import { experience } from '../data'

/* Reference: section.bg-light-2 — #FAFAFA band with a #E0E0E0 top border,
   centered 32px heading + lead, then SIX feature cards in a 3-column grid
   (2 on tablet, 1 on mobile), each with a 70px flaticon-style icon, an
   Abril Fatface h3 and a short paragraph, all centered. */
export function Experience() {
  return (
    <section aria-label="Experience" className="border-t border-border-soft bg-light-bg py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <h2 className="text-center text-[32px] text-ink">{experience.heading}</h2>
        <p className="mx-auto mt-4 max-w-2xl text-center">{experience.lead}</p>
        <ul className="mt-16 grid gap-10 text-center md:grid-cols-2 lg:grid-cols-3">
          {experience.features.map((feature) => {
            const Icon = feature.icon
            return (
              <li key={feature.title} className="flex flex-col items-center">
                <Icon
                  className="h-[70px] w-[70px] text-brand"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
                <h3 className="mt-6 text-[22px] text-ink">{feature.title}</h3>
                <p className="mt-3 max-w-xs">{feature.text}</p>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
