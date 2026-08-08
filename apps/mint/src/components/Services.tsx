import { Armchair, Ruler, Sofa } from 'lucide-react'

const services = [
  {
    title: 'Interior Architecture',
    blurb:
      'Magnam iure fugit recusandae nobis a amet, officiis laboriosam repudiandae? Quis nostrum numquam ducimus quo ab laboriosam.',
    Icon: Ruler,
  },
  {
    title: 'Interior Design',
    blurb:
      'Magnam iure fugit recusandae nobis a amet, officiis laboriosam repudiandae? Quis nostrum numquam ducimus quo ab laboriosam.',
    Icon: Sofa,
  },
  {
    title: 'Furniture',
    blurb:
      'Magnam iure fugit recusandae nobis a amet, officiis laboriosam repudiandae? Quis nostrum numquam ducimus quo ab laboriosam.',
    Icon: Armchair,
  },
] as const

export function Services() {
  return (
    <section id="service" className="bg-white py-20 dark:bg-gray-950 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-center text-sm font-bold uppercase tracking-[3px] text-brand-dark">
          Our services
        </p>
        <h2 className="mt-3 text-center font-display text-4xl font-black uppercase text-ink dark:text-white">
          What we offer
        </h2>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ title, blurb, Icon }) => (
            <div
              key={title}
              className="group rounded-2xl border border-black/5 bg-paper p-8 transition-colors hover:border-brand-dark/50 dark:border-white/10 dark:bg-gray-900"
            >
              <Icon
                className="h-11 w-11 text-brand-dark transition-transform group-hover:scale-110"
                aria-hidden="true"
              />
              <h3 className="mt-5 font-display text-lg font-bold uppercase leading-snug text-ink dark:text-white">
                {title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-mist dark:text-gray-400">{blurb}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
