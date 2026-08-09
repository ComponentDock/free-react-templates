const services = [
  { name: 'Stylish Hair Cutting', seed: 'dapper-service-1' },
  { name: 'Quality Gel Shave', seed: 'dapper-service-2' },
  { name: 'Beard Trimming', seed: 'dapper-service-3' },
  { name: 'Executive Wash', seed: 'dapper-service-4' },
] as const

export function Services() {
  return (
    <section
      id="services"
      className="bg-paper py-20 transition-colors dark:bg-gray-900 lg:py-[120px]"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold uppercase text-ink dark:text-white sm:text-4xl">
            What We Can Do for You
          </h2>
          <p className="mt-4 text-mist dark:text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua ad minim veniam.
          </p>
        </div>
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <article
              key={service.name}
              className="group relative overflow-hidden rounded-xl shadow-sm transition-shadow hover:shadow-lg"
            >
              <img
                src={`https://picsum.photos/seed/${service.seed}/600/700`}
                alt={service.name}
                className="aspect-[6/7] w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div
                className="absolute inset-x-0 bottom-0 bg-black/60 px-5 py-4 backdrop-blur-sm"
                aria-hidden="true"
              />
              <h3 className="absolute inset-x-0 bottom-0 px-5 py-4 font-display text-lg font-bold uppercase tracking-wide text-white">
                {service.name}
              </h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
