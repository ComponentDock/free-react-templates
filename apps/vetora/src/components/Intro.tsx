import { HeartPulse, Scissors, Sofa } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

type Service = {
  title: string
  copy: string
  icon: LucideIcon
}

const services: Service[] = [
  {
    title: 'Veterinary Service',
    copy: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.',
    icon: HeartPulse,
  },
  {
    title: 'Pet Grooming',
    copy: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.',
    icon: Scissors,
  },
  {
    title: 'Pet Setting',
    copy: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.',
    icon: Sofa,
  },
]

export function Intro() {
  return (
    <section id="about" className="bg-paper py-16 dark:bg-gray-900 md:py-24">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 md:grid-cols-3">
        {services.map((service) => (
          <article
            key={service.title}
            className="rounded-2xl bg-white p-8 text-center shadow-sm transition-shadow hover:shadow-md dark:bg-gray-800"
          >
            <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand/10 text-brand">
              <service.icon className="h-8 w-8" aria-hidden="true" />
            </span>
            <h2 className="mt-6 text-xl font-bold text-gray-900 dark:text-white">
              {service.title}
            </h2>
            <p className="mt-4 text-sm font-medium leading-relaxed text-gray-500 dark:text-gray-400">
              {service.copy}
            </p>
            <a
              href="#services"
              className="mt-6 inline-block text-sm font-bold text-brand transition-colors hover:text-brand-strong"
            >
              Read more
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}
