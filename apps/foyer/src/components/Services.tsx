import { Compass, Home, PenTool } from 'lucide-react'

const services = [
  {
    icon: Home,
    title: 'Interior Design',
    blurb:
      'Sony laptops are among the most well known laptops on today’s market. Sony is a name that over time has established itself as creating a solid product.',
  },
  {
    icon: Compass,
    title: 'Architecture Design',
    blurb:
      'Computer users and programmers have become so accustomed to using Windows, even for the changing capabilities and the appearances of the graphical.',
  },
  {
    icon: PenTool,
    title: 'Concept Design',
    blurb:
      'Can you imagine what we will be downloading in another twenty years? I mean who would have ever thought that you could record sound.',
  },
] as const

export function Services() {
  return (
    <section id="services" className="bg-paper py-16 dark:bg-gray-900 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-[3px] text-brand">Our services</p>
          <h2 className="mt-2 font-display text-3xl font-bold text-ink dark:text-white sm:text-4xl">
            What we offer to our clients
          </h2>
          <p className="mt-4 leading-relaxed text-ink/60 dark:text-white/60">
            Who are in extremely love with eco friendly system..
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="rounded-lg bg-white p-8 text-center shadow-sm transition-colors hover:border-brand dark:bg-gray-950"
            >
              <service.icon className="mx-auto h-10 w-10 text-brand" aria-hidden="true" />
              <h3 className="mt-4 font-display text-xl font-bold text-ink dark:text-white">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/60 dark:text-white/60">
                {service.blurb}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
