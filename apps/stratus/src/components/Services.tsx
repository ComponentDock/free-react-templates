import { Cloud, Database, Gift, Repeat, Server, Users, type LucideIcon } from 'lucide-react'
import {
  SERVICES,
  SERVICES_CIRCLE,
  SERVICES_HEADING,
  SERVICES_IMAGE,
  SERVICES_SUB,
  type ServiceIcon,
} from '../data'

/* Services section recreated from the ColorLib "Cloud83" services: a dark
   image-backed band with the white "The only ones / Our Best Services"
   title, a central circular graphic, and six hosting offerings (3 left /
   3 right on desktop, stacked on mobile). */

const serviceIcons: Record<ServiceIcon, LucideIcon> = {
  gift: Gift,
  users: Users,
  repeat: Repeat,
  server: Server,
  database: Database,
  cloud: Cloud,
}

const left = SERVICES.slice(0, 3)
const right = SERVICES.slice(3)

export function Services() {
  return (
    <section
      id="services-section"
      className="relative bg-black bg-cover bg-center py-24"
      style={{ backgroundImage: `url(${SERVICES_IMAGE})` }}
    >
      <div aria-hidden="true" className="absolute inset-0 bg-black/70" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-[87px] text-center">
          <p className="text-[16px] text-white/80">{SERVICES_SUB}</p>
          <h2 className="mt-2 text-[40px] font-bold text-white">{SERVICES_HEADING}</h2>
        </div>

        <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto_1fr]">
          {/* Left column */}
          <ul className="space-y-8">
            {left.map((service) => {
              const Icon = serviceIcons[service.icon]
              return (
                <li key={service.title} className="flex items-start gap-4 text-white">
                  <Icon
                    className="mt-1 h-9 w-9 shrink-0 text-brand"
                    aria-hidden="true"
                    strokeWidth={1.4}
                  />
                  <div>
                    <h4 className="text-[18px] font-semibold">{service.title}</h4>
                    <p className="mt-1 text-[14px] text-white/70">{service.blurb}</p>
                  </div>
                </li>
              )
            })}
          </ul>

          {/* Central circular graphic (desktop) */}
          <div className="hidden lg:block">
            <img
              src={SERVICES_CIRCLE}
              alt="Hosting services at a glance"
              className="h-[380px] w-[380px] rounded-full object-cover"
              loading="lazy"
            />
          </div>

          {/* Right column */}
          <ul className="space-y-8">
            {right.map((service) => {
              const Icon = serviceIcons[service.icon]
              return (
                <li key={service.title} className="flex items-start gap-4 text-white">
                  <Icon
                    className="mt-1 h-9 w-9 shrink-0 text-brand"
                    aria-hidden="true"
                    strokeWidth={1.4}
                  />
                  <div>
                    <h4 className="text-[18px] font-semibold">{service.title}</h4>
                    <p className="mt-1 text-[14px] text-white/70">{service.blurb}</p>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}
