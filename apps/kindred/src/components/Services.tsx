import { Baby, BookOpen, HeartHandshake, Users, type LucideIcon } from 'lucide-react'
import { services } from '../data'

const icons: LucideIcon[] = [HeartHandshake, Baby, Users, BookOpen]

export function Services() {
  return (
    <section id="services" className="bg-white py-20 dark:bg-gray-950">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-4">
        {services.map((service, index) => {
          const Icon = icons[index]!
          return (
            <article
              key={service.title}
              className="group rounded-sm border border-gray-100 p-8 text-center transition-colors hover:border-brand hover:bg-brand dark:border-gray-800"
            >
              <Icon
                className="mx-auto h-14 w-14 text-brand transition-colors group-hover:text-white"
                aria-hidden="true"
              />
              <h3 className="mt-5 font-display text-lg font-bold uppercase tracking-wide text-gray-900 transition-colors group-hover:text-white dark:text-white">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-500 transition-colors group-hover:text-white/85 dark:text-gray-400">
                {service.blurb}
              </p>
            </article>
          )
        })}
      </div>
    </section>
  )
}
