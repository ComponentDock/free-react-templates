const services = [
  { name: 'Daily makeup', price: 'From $20.0' },
  { name: 'Wedding makeup', price: 'From $50.0' },
  { name: 'Event makeup', price: 'From $30.0' },
  { name: 'Creative Makeup', price: 'From $70.0' },
] as const

export function About() {
  return (
    <section id="about" className="bg-cream py-20 transition-colors dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand">
            Best makeup services
          </p>
          <h2 className="mt-4 font-display text-3xl text-ink sm:text-4xl dark:text-white">
            Professional makeup
          </h2>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <article
              key={service.name}
              className="group rounded-2xl bg-white p-8 text-center shadow-sm transition-shadow hover:shadow-md dark:bg-gray-900"
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand-soft text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                <span aria-hidden="true" className="font-display text-xl">
                  {service.name.charAt(0)}
                </span>
              </div>
              <h3 className="mt-6 font-display text-lg text-ink dark:text-white">{service.name}</h3>
              <p className="mt-2 text-sm font-semibold text-brand">{service.price}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
