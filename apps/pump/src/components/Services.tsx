import { Dumbbell, Target, TrendingUp, Trophy } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

interface Service {
  title: string
  copy: string
  icon: LucideIcon
}

const services: Service[] = [
  {
    title: 'Analyze Your Goal',
    copy: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
    icon: Target,
  },
  {
    title: 'Work Hard On It',
    copy: 'It is a paradisematic country, in which roasted parts of sentences fly into your mouth.',
    icon: Dumbbell,
  },
  {
    title: 'Improve Your Performance',
    copy: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life.',
    icon: TrendingUp,
  },
  {
    title: 'Achieve Your Perfect Body',
    copy: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.',
    icon: Trophy,
  },
] as const

export function Services() {
  return (
    <section id="program" className="bg-white py-20 transition-colors dark:bg-gray-950">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 lg:grid-cols-2 lg:px-8">
        <div className="relative overflow-hidden rounded-lg">
          <img
            src="https://picsum.photos/seed/pump-services/640/560"
            alt="Gym member training"
            className="h-full w-full object-cover"
          />
        </div>
        <div>
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.35em] text-brand">
            Shape Your Body
          </p>
          <h2 className="font-display text-4xl font-black uppercase text-ink dark:text-white">
            What We Do?
          </h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-2">
            {services.map((service) => (
              <div key={service.title}>
                <span className="flex h-12 w-12 items-center justify-center rounded bg-gradient-to-br from-brand to-brand-orange text-white">
                  <service.icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-display text-lg font-bold uppercase text-ink dark:text-white">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-mist dark:text-gray-400">
                  {service.copy}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
