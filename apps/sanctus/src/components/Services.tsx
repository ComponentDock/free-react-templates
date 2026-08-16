import { BookOpen, Church, Wheat } from 'lucide-react'
import { services } from '../data'

const icons = {
  wheat: Wheat,
  church: Church,
  bible: BookOpen,
} as const

export function Services() {
  return (
    <section className="bg-mist py-28">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <span className="mb-4 block text-xs font-bold uppercase tracking-[0.1em] text-brand">
          {services.subheading}
        </span>
        <h2 className="text-3xl font-bold text-black sm:text-4xl">{services.heading}</h2>
      </div>
      <div className="mx-auto mt-14 grid max-w-7xl gap-8 px-6 md:grid-cols-3">
        {services.items.map((item) => {
          const Icon = icons[item.icon]
          return (
            <article key={item.title} className="bg-white px-8 py-12 text-center">
              <Icon className="mx-auto mb-6 h-14 w-14 text-brand" aria-hidden="true" />
              <h3 className="text-lg font-bold text-black">{item.title}</h3>
              <p className="mt-4 text-gray-600">{item.copy}</p>
              <a
                href="#services"
                className="mt-6 inline-block text-sm font-medium text-black transition-colors hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
              >
                {services.moreLabel}
              </a>
            </article>
          )
        })}
      </div>
    </section>
  )
}
