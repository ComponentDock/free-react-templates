const services = [
  {
    title: 'Design Solutions',
    description: 'Custom woodworking designs tailored to your vision and space.',
    seed: 'graincraft-service-1',
    alt: 'Custom wood design blueprint',
  },
  {
    title: 'Exterior Design',
    description: 'Decking, siding, and exterior woodwork that transforms curb appeal.',
    seed: 'graincraft-service-2',
    alt: 'Exterior deck construction',
  },
  {
    title: 'Moldings & Trim',
    description: 'Precision-cut crown moldings, baseboards, and architectural trim.',
    seed: 'graincraft-service-3',
    alt: 'Intricate wood trim installation',
  },
  {
    title: 'Office Furniture',
    description: 'Handcrafted desks, shelving, and conference tables for modern offices.',
    seed: 'graincraft-service-4',
    alt: 'Handcrafted office desk',
  },
] as const

export function Services() {
  return (
    <section
      id="services"
      className="bg-ink py-20 transition-colors dark:bg-gray-900 lg:py-[120px]"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-brand">
            What We Offer
          </span>
          <h2 className="mt-4 text-3xl font-bold uppercase text-white sm:text-4xl">Our Services</h2>
        </div>
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative overflow-hidden rounded-2xl bg-gray-800"
            >
              <img
                src={`https://picsum.photos/seed/${service.seed}/400/300`}
                alt={service.alt}
                loading="lazy"
                className="h-48 w-full object-cover opacity-60 transition-transform group-hover:scale-105"
              />
              <div className="p-6">
                <h3 className="text-lg font-bold uppercase text-brand">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-400">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
