import { Camera, Clapperboard, Landmark, Users } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

interface Service {
  title: string
  copy: string
  icon: LucideIcon
}

const services: Service[] = [
  {
    title: 'Fashion Shows',
    copy: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life.',
    icon: Clapperboard,
  },
  {
    title: 'Corporate Events',
    copy: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.',
    icon: Landmark,
  },
  {
    title: 'Commercial Photo Shots',
    copy: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
    icon: Camera,
  },
  {
    title: 'Exhibitions/Trade Shows',
    copy: 'It is a paradisematic country, in which roasted parts of sentences fly into your mouth.',
    icon: Users,
  },
] as const

export function Services() {
  return (
    <section id="services" className="bg-dark py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.35em] text-brand">
            What We Do
          </p>
          <h2 className="font-display text-4xl font-bold text-white">Services</h2>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div key={service.title} className="text-center">
              <span className="icon-circle mx-auto flex h-25 w-25 items-center justify-center rounded-full bg-brand text-white">
                <service.icon className="h-10 w-10" aria-hidden="true" />
              </span>
              <h3 className="mt-5 font-display text-lg font-bold text-white">{service.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-400">{service.copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
