import { ArrowRight, Cog, Factory, Fuel, HardHat } from 'lucide-react'

const services = [
  {
    icon: Cog,
    title: 'Automative Manufacturing',
    blurb:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. In ipsum error perspiciatis odit ullam officia.',
  },
  {
    icon: Fuel,
    title: 'Mechanical Engineering',
    blurb:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. In ipsum error perspiciatis odit ullam officia.',
  },
  {
    icon: Factory,
    title: 'Oil & Gas Energy',
    blurb:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. In ipsum error perspiciatis odit ullam officia.',
  },
  {
    icon: HardHat,
    title: 'Industrial Construction',
    blurb:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. In ipsum error perspiciatis odit ullam officia.',
  },
] as const

export function Services() {
  return (
    <section id="services" className="bg-white py-16 dark:bg-gray-950 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-mono text-sm font-medium uppercase tracking-[3px] text-brand">
            What we do
          </p>
          <h2 className="mt-2 font-display text-3xl font-extrabold uppercase text-ink dark:text-white sm:text-4xl">
            Our Specialty
          </h2>
          <p className="mt-4 leading-relaxed text-ink/60 dark:text-white/60">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum iusto eaque qui illo cumque
            officia nobis assumenda odit perferendis ipsam dolore.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <article
              key={service.title}
              className="rounded-lg border border-black/5 bg-paper p-6 transition-colors hover:border-brand dark:border-white/10 dark:bg-gray-900"
            >
              <service.icon className="h-10 w-10 text-brand" aria-hidden="true" />
              <h3 className="mt-4 font-display text-lg font-bold text-ink dark:text-white">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/60 dark:text-white/60">
                {service.blurb}
              </p>
              <a
                href="#contact"
                className="mt-5 inline-flex items-center gap-2 font-sans text-sm font-semibold uppercase text-brand transition-colors hover:text-brand-dark"
              >
                Read More <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
