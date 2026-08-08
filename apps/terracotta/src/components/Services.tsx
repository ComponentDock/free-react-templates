import { Armchair, Home, Lamp, Palette, Ruler, Sofa } from 'lucide-react'

const services = [
  {
    title: 'Home Decor',
    blurb:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    Icon: Home,
  },
  {
    title: 'Landscape Design',
    blurb:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    Icon: Ruler,
  },
  {
    title: 'Interior Styling',
    blurb:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    Icon: Palette,
  },
  {
    title: 'Furniture Layout',
    blurb:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    Icon: Sofa,
  },
  {
    title: 'Lighting Setup',
    blurb:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    Icon: Lamp,
  },
  {
    title: 'Space Remodel',
    blurb:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    Icon: Armchair,
  },
] as const

export function Services() {
  return (
    <section
      id="service"
      className="relative overflow-hidden bg-white py-20 dark:bg-gray-950 sm:py-28"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-8 text-center font-display text-7xl font-extrabold uppercase tracking-widest text-black/5 sm:text-9xl dark:text-white/5"
        aria-hidden="true"
      >
        Our Service
      </div>
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center font-display text-4xl font-extrabold uppercase text-ink dark:text-white">
          Our Service
        </h2>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ title, blurb, Icon }) => (
            <div
              key={title}
              className="rounded-[5px] border border-black/5 bg-paper p-8 transition-colors hover:border-brand/40 dark:border-white/10 dark:bg-gray-900"
            >
              <Icon className="h-11 w-11 text-brand" aria-hidden="true" />
              <h3 className="mt-5 font-display text-lg font-bold uppercase text-ink dark:text-white">
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
