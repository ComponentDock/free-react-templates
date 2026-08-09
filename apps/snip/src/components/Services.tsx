import { Palette, Scissors, SprayCan } from 'lucide-react'

const services = [
  {
    name: 'Stylish hair cut',
    blurb: 'Precision cuts shaped to your face, your lifestyle, and your look.',
    icon: Scissors,
  },
  {
    name: 'Cut & hair style',
    blurb: 'A cut plus a style that stays sharp from morning to night.',
    icon: SprayCan,
  },
  {
    name: 'Color & hair wash',
    blurb: 'Rich color, healthy shine, and a relaxing wash to finish.',
    icon: Palette,
  },
] as const

export function Services() {
  return (
    <section
      id="services"
      className="bg-lavender py-20 transition-colors dark:bg-gray-950 lg:py-[120px]"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold uppercase text-navy dark:text-white sm:text-4xl">
            Our Services
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-mist dark:text-gray-400">
            Seed spirit replenish cattle one moved air created — classic grooming, delivered with
            modern care.
          </p>
        </div>
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.name}
              className="rounded-2xl border border-gray-100 bg-white p-8 text-center shadow-sm transition-shadow hover:shadow-lg dark:border-gray-800 dark:bg-gray-950"
            >
              <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand/10 text-brand">
                <service.icon className="h-8 w-8" aria-hidden="true" />
              </span>
              <h3 className="mt-6 font-display text-xl font-semibold uppercase text-navy dark:text-white">
                {service.name}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-mist dark:text-gray-400">
                {service.blurb}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
