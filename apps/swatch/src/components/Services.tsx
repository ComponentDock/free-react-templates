import { ArrowRight } from 'lucide-react'
import { services, servicesCta } from '../data'

export function Services() {
  return (
    <section id="services" className="bg-paper py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="mb-2 block text-[13px] font-bold uppercase tracking-wide text-brand">
            Services
          </span>
          <h2 className="text-3xl font-bold leading-snug text-ink md:text-4xl">
            This is My Expertise, The Services I&apos;ll Provide My Clients
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="rounded-[4px] bg-paper p-10 shadow-[0_5px_25px_-2px_rgba(0,0,0,0.08)]"
            >
              <div className="mb-6 flex size-[70px] items-center justify-center bg-brand text-white">
                <service.icon aria-hidden="true" className="size-8" />
              </div>
              <h3 className="mb-3 text-xl font-medium text-ink">{service.title}</h3>
              <p className="mb-4 leading-relaxed text-body">{service.blurb}</p>
              <a
                href="#portfolio"
                className="inline-flex items-center gap-1 text-sm font-medium text-brand"
              >
                Read more <ArrowRight aria-hidden="true" className="size-4" />
              </a>
            </article>
          ))}
        </div>

        <div className="mt-14 text-center">
          <p className="font-semibold text-ink">
            {servicesCta.line}{' '}
            <a href="#contactme" className="text-brand">
              {servicesCta.link}
            </a>
          </p>
          <p className="mt-2 text-body">
            Far far away, behind the word mountains, far from the countries Vokalia.
          </p>
        </div>
      </div>
    </section>
  )
}
