import { Palette, PenTool, Sparkles, type LucideIcon } from 'lucide-react'
import { services, servicesTitle, type Service } from '../data'

const iconMap: Record<Service['icon'], LucideIcon> = {
  palette: Palette,
  pen: PenTool,
  sparkles: Sparkles,
}

/** Light services section: three cards (icon + title + blurb) covering the
 *  personal-branding offer — photographer / freelancer / creative / agency
 *  niches from the reference roundup article. */
export function Services() {
  return (
    <section id="services" aria-label={servicesTitle} className="bg-mist py-24 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        <h2 className="text-center text-3xl font-bold text-ink lg:text-4xl">{servicesTitle}</h2>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {services.map((service) => {
            const Icon = iconMap[service.icon]
            return (
              <article
                key={service.title}
                className="rounded-xl border border-gray-100 bg-white p-8 shadow-sm transition-shadow hover:shadow-md"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-frost text-accent">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-xl font-semibold text-ink">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-body">{service.description}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
