import { Clapperboard, Film, Music } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { SERVICES, SERVICES_CLOSING, SKILLS } from '../data'
import type { ServiceIcon } from '../data'

const SERVICE_ICONS: Record<ServiceIcon, LucideIcon> = {
  clapperboard: Clapperboard,
  music: Music,
  film: Film,
}

/* Services section: three production-service cards plus animated
   skill progress bars (Creation / Development / Production). */
export function ServicesSection() {
  return (
    <section id="services" className="bg-ink px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="text-base font-bold tracking-[0.2em] text-muted uppercase">
            Photography Services
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-white/90">
            A small river named Duden flows by their place and supplies it with the necessary
            regelialia. It is a paradisematic country.
          </p>
        </div>
        <div className="mb-20 grid gap-10 md:grid-cols-3">
          {SERVICES.map((service) => {
            const Icon = SERVICE_ICONS[service.icon]
            return (
              <article key={service.title} className="text-center">
                <span className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-panel text-brand">
                  <Icon aria-hidden="true" className="h-7 w-7" />
                </span>
                <h3 className="mb-4 text-lg font-bold text-white">{service.title}</h3>
                <p className="text-sm leading-relaxed text-white/90">{service.blurb}</p>
              </article>
            )
          })}
        </div>
        <div className="mx-auto max-w-3xl">
          {SKILLS.map((skill) => (
            <div key={skill.label} className="mb-8">
              <div className="mb-2 flex items-center justify-between">
                <span className="text-[10px] font-semibold tracking-[0.2em] text-white/70 uppercase">
                  {skill.label}
                </span>
                <span className="text-[10px] font-semibold tracking-[0.2em] text-white/70 uppercase">
                  {skill.value}%
                </span>
              </div>
              <div
                role="progressbar"
                aria-label={skill.label}
                aria-valuenow={skill.value}
                aria-valuemin={0}
                aria-valuemax={100}
                className="h-1.5 w-full bg-white/10"
              >
                <div className="h-full bg-brand" style={{ width: `${skill.value}%` }} />
              </div>
            </div>
          ))}
          <p className="mt-12 text-sm leading-relaxed text-white/90">{SERVICES_CLOSING}</p>
        </div>
      </div>
    </section>
  )
}
