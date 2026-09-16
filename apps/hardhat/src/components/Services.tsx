import { Building2, Wrench, HardHat } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'

const services = [
  {
    icon: Building2,
    title: 'Engineering techniques & implementation',
    description:
      'Heaven fruitful third over lesser days appear creeping seasons so behold bearing days open.',
    image: 'https://picsum.photos/seed/hardhat-svc1/400/250',
  },
  {
    icon: Wrench,
    title: 'Engineering techniques & implementation',
    description:
      'Heaven fruitful third over lesser days appear creeping seasons so behold bearing days open.',
    image: 'https://picsum.photos/seed/hardhat-svc2/400/250',
  },
  {
    icon: HardHat,
    title: 'Engineering techniques & implementation',
    description:
      'Heaven fruitful third over lesser days appear creeping seasons so behold bearing days open.',
    image: 'https://picsum.photos/seed/hardhat-svc3/400/250',
  },
] as const

const bottomIcons = [
  { label: 'Bridge' },
  { label: 'Building' },
  { label: 'Road' },
  { label: 'Warehouse' },
  { label: 'Tower' },
] as const

export function Services() {
  return (
    <section id="services" aria-label="Services" className="bg-mist py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative mb-12 text-center">
          <span className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-6xl font-bold uppercase tracking-wide text-gray-200 sm:text-8xl select-none">
            Services
          </span>
          <h2 className="relative font-display text-3xl font-bold uppercase tracking-wide text-navy sm:text-4xl">
            Our Services
          </h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <article
                key={index}
                className="group overflow-hidden rounded-lg bg-white shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-cover transition-transform group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded bg-brand/10 text-brand">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-navy">{service.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-smoke">{service.description}</p>
                  <ButtonLink
                    href="#services"
                    className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand transition-colors hover:text-brand-dark"
                  >
                    Read More +
                  </ButtonLink>
                </div>
              </article>
            )
          })}
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 border-t border-gray-200 pt-8 sm:gap-10">
          {bottomIcons.map((item) => (
            <div key={item.label} className="flex flex-col items-center gap-2 text-sm text-smoke">
              <Building2 className="h-8 w-8 text-brand/40" aria-hidden="true" />
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
