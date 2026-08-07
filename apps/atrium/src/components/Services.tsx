const services = [
  {
    title: 'Interior',
    blurb:
      'Warm, layered interiors planned around natural light, material, and the daily rhythms of the people inside.',
    image: 'https://picsum.photos/seed/atrium-service-1/600/400',
  },
  {
    title: 'Exterior',
    blurb:
      'Facades and envelopes that give buildings a clear identity and stand up to sun, rain, and time.',
    image: 'https://picsum.photos/seed/atrium-service-2/600/400',
  },
  {
    title: 'Bridge',
    blurb:
      'Connecting structures and landscapes — seamless transitions between inside, outside, and everything between.',
    image: 'https://picsum.photos/seed/atrium-service-3/600/400',
  },
] as const

export function Services() {
  return (
    <section id="services" className="bg-white py-24 dark:bg-gray-950 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center">
          <span className="text-xs font-medium uppercase tracking-[0.3em] text-line dark:text-white/50">
            About Us
          </span>
          <h2 className="mt-4 text-4xl font-medium leading-tight text-ink sm:text-5xl dark:text-white">
            Make Your Dream with Us
          </h2>
          <div className="mx-auto mt-8 h-0.5 w-[90px] bg-ink dark:bg-white" aria-hidden="true" />
        </div>

        <div className="mt-16 grid gap-12 md:grid-cols-3">
          {services.map((service) => (
            <article key={service.title}>
              <img
                src={service.image}
                alt={`${service.title} service`}
                className="h-56 w-full object-cover"
              />
              <h3 className="mt-8 text-2xl font-medium text-ink dark:text-white">
                {service.title}
              </h3>
              <p className="mt-4 leading-relaxed text-mist dark:text-white/70">{service.blurb}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
