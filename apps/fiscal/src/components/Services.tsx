import {
  BarChart3,
  Briefcase,
  PiggyBank,
  ShieldCheck,
  Target,
  Users,
  type LucideIcon,
} from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'
import { SERVICES, type ServiceIcon } from '../data'

const SERVICE_ICONS: Record<ServiceIcon, LucideIcon> = {
  'trending-up': BarChart3,
  'shield-check': ShieldCheck,
  'piggy-bank': PiggyBank,
  target: Target,
  users: Users,
  briefcase: Briefcase,
}

/* Services — centered "Our Services" heading, lead paragraph, and six
   white cards with a gradient icon circle, heading, copy, and a pill
   Read more link. */
export function Services() {
  return (
    <section id="services-section" aria-label="Services" className="bg-white px-4 py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold uppercase text-brand">Our Services</h2>
          <p className="mt-4 leading-relaxed text-muted">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
            there live the blind texts.
          </p>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, index) => {
            const Icon = SERVICE_ICONS[service.icon]
            return (
              <article
                key={`${service.heading}-${index}`}
                className="bg-white p-10 text-center shadow-[0_10px_30px_rgba(0,0,0,0.05)]"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-gradient-from to-gradient-to">
                  <Icon className="h-7 w-7 text-white" aria-hidden="true" />
                </div>
                <h3 className="mt-6 font-display text-lg font-semibold text-ink">
                  {service.heading}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{service.text}</p>
                <ButtonLink
                  href="#contact-section"
                  className="mt-6 inline-block rounded-full border border-brand px-6 py-2 text-sm font-medium text-brand transition-colors hover:bg-brand hover:text-white"
                >
                  Read more
                </ButtonLink>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
