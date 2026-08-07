import { DraftingCompass, Map, Sofa } from 'lucide-react'

const services = [
  {
    title: 'Architecture',
    icon: DraftingCompass,
    blurb:
      'We craft bold structural concepts that balance form, function, and the way people move through a space.',
  },
  {
    title: 'Interior Design',
    icon: Sofa,
    blurb:
      'From lighting to furniture, we compose interiors that feel calm, purposeful, and unmistakably yours.',
  },
  {
    title: 'Urban Design',
    icon: Map,
    blurb:
      'We plan districts and public spaces at the city scale, connecting buildings with the life around them.',
  },
] as const

export function Services() {
  return (
    <section id="services" className="bg-lilac py-20 dark:bg-gray-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand">Our Services</p>
        <span aria-hidden="true" className="mt-3 block h-1 w-14 bg-brand" />
        <h2 className="mt-6 max-w-2xl font-display text-4xl font-bold uppercase leading-tight text-navy dark:text-white">
          We Provide the Best Interior Solution for You
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="bg-white p-8 shadow-sm transition-shadow hover:shadow-md dark:bg-gray-950"
            >
              <span className="inline-flex h-14 w-14 items-center justify-center bg-brand text-white">
                <service.icon className="h-7 w-7" aria-hidden="true" />
              </span>
              <h3 className="mt-6 font-display text-2xl font-bold uppercase text-navy dark:text-white">
                {service.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-mist dark:text-gray-300">
                {service.blurb}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
