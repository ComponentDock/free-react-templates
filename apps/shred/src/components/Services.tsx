import { Activity, Salad, Scale, UserCheck, Users, type LucideIcon } from 'lucide-react'
import { SERVICES } from '../data'

const SERVICE_ICONS: Record<string, LucideIcon> = {
  activity: Activity,
  scale: Scale,
  users: Users,
  salad: Salad,
  'user-check': UserCheck,
}

/* Services — white "Get a Perfect Body" block with five icon services. */
export function Services() {
  return (
    <section id="services-section" aria-label="Services" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-xl text-center">
          <span className="text-[13px] font-bold uppercase tracking-[3px] text-brand">
            Sexy &amp; Healthy
          </span>
          <h2 className="mt-2 text-4xl font-semibold text-black">Get a Perfect Body</h2>
          <p className="mt-4 text-mist">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
            there live the blind texts.
          </p>
        </div>

        <ul className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {SERVICES.map((service) => {
            const Icon = SERVICE_ICONS[service.icon]!
            return (
              <li key={service.title} className="text-center">
                <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-brand/10 text-brand">
                  <Icon className="h-8 w-8" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-lg font-bold text-black">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-mist">{service.text}</p>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
