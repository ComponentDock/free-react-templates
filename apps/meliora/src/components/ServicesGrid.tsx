import { Apple, HeartPulse, GraduationCap, Home, ShieldCheck, Users } from 'lucide-react'
import { services } from '../data'

const iconMap = {
  food: Apple,
  health: HeartPulse,
  education: GraduationCap,
  shelter: Home,
  protection: ShieldCheck,
  community: Users,
} as const

export function ServicesGrid() {
  return (
    <section id="services" aria-label="Services" className="bg-mist py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-medium uppercase tracking-[0.2em] text-kicker">
            What we do
          </span>
          <h2 className="mt-3 font-serif text-4xl font-bold text-plum md:text-[46px]">
            We serve for peoples
          </h2>
          <p className="mt-4 text-muted">
            From meals to medicine, our programs meet urgent needs today while building long-term
            resilience for tomorrow.
          </p>
        </div>
        <ul className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = iconMap[service.icon]
            return (
              <li
                key={service.title}
                className="rounded-[10px] border border-cardline bg-white p-8 text-center shadow-sm transition-shadow hover:shadow-lg"
              >
                <span className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-lilac">
                  <Icon
                    aria-label={`${service.title} service icon`}
                    className="h-9 w-9 text-primary"
                  />
                </span>
                <h3 className="mt-6 font-serif text-xl font-bold text-plum">{service.title}</h3>
                <p className="mt-3 text-sm text-muted">{service.copy}</p>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
