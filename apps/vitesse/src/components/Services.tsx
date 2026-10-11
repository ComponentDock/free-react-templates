import { ArrowRight } from 'lucide-react'
import { SERVICES } from '../data/content'
import { SectionHeading } from './SectionHeading'

export function Services() {
  return (
    <section id="services" className="section-pad bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading eyebrow="Our Services" title="What We Can Do For You" />
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {SERVICES.map(({ icon: Icon, title, blurb }) => (
            <article
              key={title}
              className="rounded-md border border-cardborder px-6 py-16 text-center transition-all duration-500 hover:-translate-y-1 hover:border-accent md:py-20"
            >
              <Icon aria-hidden="true" className="mx-auto h-12 w-12 text-accent" />
              <h5 className="mt-6 font-display text-2xl font-medium text-dark">{title}</h5>
              <p className="mt-4 text-muted">{blurb}</p>
              <a
                href="#quote"
                className="mt-6 inline-flex items-center gap-2 text-sm uppercase tracking-widest text-accent hover:text-primary"
              >
                Read More
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
