import { ArrowRight, Compass, Hammer, KeyRound, PencilRuler } from 'lucide-react'

const services = [
  {
    title: 'House Planning',
    blurb:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
    Icon: Compass,
  },
  {
    title: 'House Building',
    blurb:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
    Icon: Hammer,
  },
  {
    title: 'Design & Build',
    blurb:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
    Icon: PencilRuler,
  },
  {
    title: 'Property Consultancy',
    blurb:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
    Icon: KeyRound,
  },
] as const

export function Services() {
  return (
    <section id="services" className="bg-lavender py-20 dark:bg-gray-950 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[2.4px] text-brand">Our Services</p>
          <h2 className="mt-2 font-display text-4xl font-extrabold uppercase text-ink dark:text-white">
            Hello City, We Are Leaders In Services
          </h2>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ title, blurb, Icon }) => (
            <div
              key={title}
              className="group rounded-[5px] bg-white p-8 shadow-sm dark:bg-gray-900"
            >
              <Icon
                className="h-12 w-12 text-brand transition-transform duration-300 group-hover:-translate-y-1"
                aria-hidden="true"
              />
              <h3 className="mt-5 font-display text-lg font-bold uppercase text-ink dark:text-white">
                {title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-mist dark:text-gray-400">{blurb}</p>
              <a
                href="#contact"
                className="mt-4 inline-flex items-center gap-1 text-sm font-bold uppercase text-brand transition-colors hover:text-secondary"
              >
                Learn more
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
