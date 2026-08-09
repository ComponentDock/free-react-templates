import { MapPin, Scissors, Sparkles } from 'lucide-react'

const services = [
  {
    title: 'Barber Razor',
    blurb: 'Precision cuts and classic razor fades, finished to perfection.',
    Icon: Scissors,
  },
  {
    title: 'Location Pin',
    blurb: 'Conveniently located downtown with easy parking and transit access.',
    Icon: MapPin,
  },
  {
    title: 'Barber Shave',
    blurb: 'Classic hot towel shaves and beard sculpting by our master barbers.',
    Icon: Sparkles,
  },
] as const

export function Services() {
  return (
    <section id="services" className="bg-white py-20 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center font-display text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
          Featured Services
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-gray-600 dark:text-gray-400">
          Everything you need to look and feel your best, under one roof.
        </p>
        <ul className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ title, blurb, Icon }) => (
            <li
              key={title}
              className="rounded-2xl border border-gray-100 bg-mist-100 p-8 text-center transition-shadow hover:shadow-md dark:border-gray-800 dark:bg-gray-900"
            >
              <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-leaf-100 text-leaf-600 dark:bg-leaf-900/40 dark:text-leaf-400">
                <Icon className="h-7 w-7" aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{blurb}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
