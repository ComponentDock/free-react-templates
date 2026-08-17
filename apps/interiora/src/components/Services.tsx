import { Building2, House, PartyPopper } from 'lucide-react'
import { SERVICES, type Service } from '../data'

const SERVICE_ICONS: Record<Service['icon'], typeof House> = {
  home: House,
  party: PartyPopper,
  office: Building2,
}

/* Services — three interior service cards with icon, title, and blurb. */
export function Services() {
  return (
    <section aria-label="Services" id="services" className="bg-white py-24 lg:py-[120px]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-brand">
            What We Do
          </p>
          <h2 className="font-display text-[34px] font-medium leading-tight text-ink">
            Interior design is for everyone.
          </h2>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {SERVICES.map((service) => {
            const Icon = SERVICE_ICONS[service.icon]
            return (
              <article
                key={service.title}
                className="group border border-transparent bg-paper p-10 text-center shadow-sm transition-all hover:-translate-y-1 hover:border-brand/40 hover:shadow-lg"
              >
                <span
                  aria-label={`${service.title} service icon`}
                  className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-peach/50 text-brand transition-colors group-hover:bg-brand group-hover:text-white"
                >
                  <Icon className="h-8 w-8" strokeWidth={1.6} aria-hidden="true" />
                </span>
                <h3 className="mt-6 font-display text-2xl font-medium text-ink">
                  <a href="#gallery" className="transition-colors hover:text-brand">
                    {service.title}
                  </a>
                </h3>
                <p className="mt-4 text-base leading-relaxed text-body">{service.text}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
