import {
  Camera,
  Code2,
  FlaskConical,
  PenTool,
  Presentation,
  Smartphone,
  type LucideIcon,
} from 'lucide-react'
import { SERVICES, SERVICES_BLURB, type ServiceIcon } from '../data'

/* Services section recreated from the ColorLib "Clark" services: six cards
   in a three-column grid, each with a 60px amber icon and an uppercase
   letter-spaced title; on hover the card background flips to the amber
   brand color, the icon turns white and the title turns black. */

const serviceIcons: Record<ServiceIcon, LucideIcon> = {
  design: PenTool,
  photography: Camera,
  developer: Code2,
  app: Smartphone,
  branding: FlaskConical,
  strategy: Presentation,
}

export function Services() {
  return (
    <section id="services-section" className="relative overflow-hidden bg-black py-24 lg:py-28">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 select-none text-[7vw] font-black text-watermark"
      >
        Services
      </span>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="mb-2 text-[13px] font-medium uppercase tracking-[3px] text-brand">
            Services
          </p>
          <h2 className="text-[50px] font-bold text-white">Services</h2>
          <p className="mx-auto mt-4 max-w-lg text-[16px] text-muted">{SERVICES_BLURB}</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => {
            const Icon = serviceIcons[service.icon]
            return (
              <article
                key={service.title}
                className="group rounded-[5px] bg-card p-8 text-center shadow-[0px_20px_69px_-27px_rgba(0,0,0,0.17)] transition-colors duration-300 hover:bg-brand"
              >
                <Icon
                  className="mx-auto h-[60px] w-[60px] text-brand transition-colors duration-300 group-hover:text-white"
                  aria-hidden="true"
                  strokeWidth={1.2}
                />
                <h3 className="mt-4 text-[13px] font-medium uppercase tracking-[3px] text-white transition-colors duration-300 group-hover:text-black">
                  {service.title}
                </h3>
                <p className="mt-3 text-[16px] text-muted transition-colors duration-300 group-hover:text-black/70">
                  {service.blurb}
                </p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
