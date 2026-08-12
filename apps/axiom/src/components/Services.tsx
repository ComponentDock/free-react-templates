import { Code, PenTool, Search } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

interface Service {
  title: string
  description: string
  icon: LucideIcon
}

const SERVICES: Service[] = [
  {
    title: 'UX Research',
    description:
      'We dig into your users, market, and data to shape products people actually want to use.',
    icon: Search,
  },
  {
    title: 'UI Design',
    description:
      'Clean, modern interfaces built on solid design systems that scale from idea to launch.',
    icon: PenTool,
  },
  {
    title: 'Development',
    description:
      'Fast, accessible, production-grade code that turns every approved design into reality.',
    icon: Code,
  },
]

/* Services recreated from the source's black service_area: a white title
   block and three bordered icon cards (UX Research, UI Design,
   Development) with generous padding and a lighter border on hover. */

export function Services() {
  return (
    <section id="services" aria-label="Services" className="bg-black py-24 lg:py-40">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-accent">Services</p>
          <h2 className="mt-2 text-3xl font-semibold text-white lg:text-[46px] lg:leading-[58px]">
            We&rsquo;re a full-service UX design agency, We build digital products and brands
          </h2>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {SERVICES.map((service) => (
            <article
              key={service.title}
              className="border border-card p-[45px_40px_65px] text-center transition-colors hover:border-card-hover"
            >
              <service.icon className="mx-auto h-10 w-10 text-white" aria-hidden="true" />
              <h3 className="mt-6 text-[26px] font-medium text-white">{service.title}</h3>
              <p className="mt-4 text-base leading-7 text-white">{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
