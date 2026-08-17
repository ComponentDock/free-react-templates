import { SERVICES } from '../data'

/* List Of Services — white text box and photo on top, two-column
   checklist with gold bullet marks below (source repeats filler — ship
   distinct practice-area items). */
export function Services() {
  return (
    <section id="services-section" aria-label="List Of Services" className="bg-surface px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center gap-12 lg:flex-row">
          <div className="relative z-10 bg-white p-10 shadow-sm lg:mt-10 lg:w-2/5">
            <h2 className="font-display text-4xl font-bold text-ink">{SERVICES.heading}</h2>
            {SERVICES.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 32)} className="mt-5 leading-relaxed text-muted">
                {paragraph}
              </p>
            ))}
          </div>
          <div className="lg:w-3/5">
            <img
              src={SERVICES.photo}
              alt="Legal services"
              loading="lazy"
              className="h-auto w-full object-cover"
            />
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-4xl bg-white px-10 py-10 shadow-sm">
          <ul className="grid gap-x-12 gap-y-3 md:grid-cols-2">
            {SERVICES.items.map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 border-b border-edge py-2 text-ink"
              >
                <span className="h-2 w-2 shrink-0 rounded-full bg-brand" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}