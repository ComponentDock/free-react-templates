import { SERVICES } from '../data/content'
import { SectionHeading } from './SectionHeading'

export function Services() {
  return (
    <section id="services" className="bg-light py-20">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          title="Our Services"
          align="center"
          tone="primary"
          blurb="End-to-end freight solutions, from first mile to final delivery."
        />
        <div className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map(({ title, blurb, Icon }) => (
            <article key={title} className="flex gap-5">
              <Icon aria-hidden="true" className="h-12 w-12 shrink-0 text-primary" />
              <div>
                <h3 className="text-xl text-black">{title}</h3>
                <p className="mt-2">{blurb}</p>
                <a
                  href="#contact"
                  className="mt-3 inline-block text-sm uppercase tracking-[0.2em] text-primary hover:underline"
                >
                  Learn More
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
