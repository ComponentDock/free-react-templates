const services = [
  {
    title: 'Hair Styles',
    seed: 'razor-service-1',
    blurb: 'Modern cuts and classic styles tailored to your face, taste, and routine.',
  },
  {
    title: 'Beard Trim',
    seed: 'razor-service-2',
    blurb: 'Precision beard shaping and line-up for a sharp, tidy look every time.',
  },
  {
    title: 'Hot Shave',
    seed: 'razor-service-3',
    blurb: 'Traditional hot-towel shaves with soothing products for a smooth finish.',
  },
  {
    title: 'Hair Shampoo',
    seed: 'razor-service-4',
    blurb: 'Relaxing scalp massage and cleansing care to round off your visit.',
  },
] as const

export function Services() {
  return (
    <section
      id="services"
      className="bg-paper py-20 transition-colors dark:bg-gray-900 lg:py-[120px]"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="font-display text-4xl font-bold uppercase text-ink dark:text-white lg:text-5xl">
            Our Services
          </h2>
          <p className="mt-4 text-mist dark:text-gray-400">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.
          </p>
        </div>
        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <article key={service.title} className="text-center">
              <img
                src={`https://picsum.photos/seed/${service.seed}/300/300`}
                alt={service.title}
                className="mx-auto h-40 w-40 rounded-full object-cover ring-4 ring-brand/60"
              />
              <h3 className="mt-6 font-display text-2xl font-semibold uppercase text-ink dark:text-white">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-mist dark:text-gray-400">
                {service.blurb}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
