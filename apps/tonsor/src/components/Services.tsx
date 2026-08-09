const services = [
  {
    title: 'Stylish Hair Cutting',
    src: 'https://picsum.photos/seed/tonsor-svc-1/600/420',
    alt: 'Stylish hair cutting',
  },
  {
    title: 'Quality Gel Shave',
    src: 'https://picsum.photos/seed/tonsor-svc-2/600/420',
    alt: 'Quality gel shave',
  },
  {
    title: 'Beard Trimming',
    src: 'https://picsum.photos/seed/tonsor-svc-3/600/420',
    alt: 'Beard trimming',
  },
  {
    title: 'Executive Wash',
    src: 'https://picsum.photos/seed/tonsor-svc-4/600/420',
    alt: 'Executive wash',
  },
] as const

export function Services() {
  return (
    <section id="services" className="bg-white py-24 dark:bg-gray-950 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold text-ink dark:text-white sm:text-4xl">
            What We Can Do for You
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm font-light leading-relaxed text-mist">
            From classic cuts to hot-towel shaves, every service is delivered with precision, the
            finest products, and old-school hospitality.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <figure key={service.title} className="group relative overflow-hidden rounded-md">
              <img
                src={service.src}
                alt={service.alt}
                className="aspect-[4/5] w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-black/30 px-4 py-4 text-center text-sm font-semibold uppercase tracking-wider text-white transition-colors duration-300 group-hover:bg-brand">
                {service.title}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
