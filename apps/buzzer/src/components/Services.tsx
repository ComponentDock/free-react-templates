const services = [
  {
    image: 'https://picsum.photos/seed/buzzer-svc1/400/300',
    title: 'Business Strategy',
  },
  {
    image: 'https://picsum.photos/seed/buzzer-svc2/400/300',
    title: 'Digital Marketing',
  },
  {
    image: 'https://picsum.photos/seed/buzzer-svc3/400/300',
    title: 'Brand Consulting',
  },
] as const

export function Services() {
  return (
    <section id="services" className="bg-paper py-20 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-accent">
            How we can help?
          </span>
          <h2 className="mt-3 text-3xl font-bold text-ink dark:text-white lg:text-4xl">
            We&apos;re helping employers get
          </h2>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative overflow-hidden rounded-xl bg-white shadow-sm dark:bg-gray-800"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  width={400}
                  height={256}
                />
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-brand/80 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="mb-6 w-full text-center text-sm font-bold uppercase tracking-wide text-white">
                    Read More
                  </span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-ink dark:text-white">{service.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
