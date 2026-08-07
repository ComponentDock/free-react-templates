const services = [
  {
    title: 'Body Shrub',
    text: 'A gentle exfoliating scrub that polishes the skin and boosts circulation.',
    img: 'halcyon-service-1',
  },
  {
    title: 'Relax Massage',
    text: 'Slow kneading massage to melt away tension and quiet the mind.',
    img: 'halcyon-service-2',
  },
  {
    title: 'Facial Spa',
    text: 'Deep-cleansing facial rituals that leave your skin glowing.',
    img: 'halcyon-service-3',
  },
  {
    title: 'Body Shrub',
    text: 'A warm stone exfoliation finish for silky, renewed skin.',
    img: 'halcyon-service-4',
  },
] as const

export function Services() {
  return (
    <section id="services" className="bg-white py-24 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="font-serif text-3xl font-bold text-ink dark:text-white sm:text-4xl">
            Our Services
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded bg-brand" />
        </div>
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div key={service.img}>
              <img
                src={`https://picsum.photos/seed/${service.img}/600/400`}
                alt={service.title}
                className="h-56 w-full rounded-lg object-cover"
              />
              <h3 className="mt-5 text-center font-serif text-xl font-bold text-ink dark:text-white">
                {service.title}
              </h3>
              <p className="mt-3 text-center text-sm leading-relaxed text-mist dark:text-gray-400">
                {service.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
