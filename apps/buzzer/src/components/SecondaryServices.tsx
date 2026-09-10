const secondaryServices = [
  {
    image: 'https://picsum.photos/seed/buzzer-sec1/600/350',
    title: 'Financial Advisory',
  },
  {
    image: 'https://picsum.photos/seed/buzzer-sec2/600/350',
    title: 'Operational Excellence',
  },
] as const

export function SecondaryServices() {
  return (
    <section className="bg-paper py-20 dark:bg-gray-950">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 md:grid-cols-2">
        {secondaryServices.map((service) => (
          <div
            key={service.title}
            className="group relative overflow-hidden rounded-xl bg-white shadow-sm dark:bg-gray-800"
          >
            <div className="relative h-64 overflow-hidden">
              <img
                src={service.image}
                alt={service.title}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                width={600}
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
    </section>
  )
}
