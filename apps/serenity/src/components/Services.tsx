import { Droplets, Flower2, HandHeart, Leaf } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

interface Service {
  icon: LucideIcon
  title: string
  copy: string
}

const services: Service[] = [
  {
    icon: Flower2,
    title: 'Aromatherapy',
    copy: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
  },
  {
    icon: Droplets,
    title: 'Skin Care',
    copy: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
  },
  {
    icon: Leaf,
    title: 'Herbal Spa',
    copy: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
  },
  {
    icon: HandHeart,
    title: 'Body Massage',
    copy: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
  },
] as const

export function Services() {
  return (
    <section id="services" className="bg-fog transition-colors dark:bg-gray-900">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-brand">
            Services
          </span>
          <h2 className="mt-3 text-3xl font-light text-ink dark:text-white sm:text-4xl">
            Spa & Wellness Services
          </h2>
          <p className="mt-4 text-sm font-light leading-relaxed text-mist dark:text-white/60">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
            there live the blind texts.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <article
                key={service.title}
                className="bg-white p-8 text-center transition-shadow hover:shadow-lg dark:bg-gray-800"
              >
                <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand/10 text-brand">
                  <Icon className="h-7 w-7" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-ink dark:text-white">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm font-light leading-relaxed text-mist dark:text-white/60">
                  {service.copy}
                </p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
