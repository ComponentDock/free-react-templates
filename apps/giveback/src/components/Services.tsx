import { Droplets, GraduationCap, BriefcaseMedical } from 'lucide-react'
import { services } from '../data'

const icons = {
  droplets: Droplets,
  'briefcase-medical': BriefcaseMedical,
  'graduation-cap': GraduationCap,
} as const

export function Services() {
  return (
    <section id="services" className="relative overflow-hidden bg-navy py-20 lg:py-28">
      <img
        src={services.image}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover opacity-40"
      />
      <div className="absolute inset-0 bg-navy/80" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-base font-medium uppercase tracking-widest text-teal">
            {services.kicker}
          </span>
          <h2 className="mt-3 font-display text-3xl font-medium leading-tight text-white sm:text-4xl">
            {services.title}
          </h2>
        </div>
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {services.items.map((item) => {
            const Icon = icons[item.icon]
            return (
              <article
                key={item.title}
                className="border border-white/15 bg-white/10 p-8 text-center backdrop-blur-sm transition-colors hover:bg-white/15"
              >
                <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-teal text-white">
                  <Icon className="h-8 w-8" aria-hidden="true" />
                </span>
                <h3 className="mt-6 font-display text-xl font-medium text-white">{item.title}</h3>
                <p className="mt-3 text-sm font-light leading-relaxed text-white/80">
                  {item.paragraph}
                </p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
