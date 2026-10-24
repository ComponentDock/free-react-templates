import { services } from '../data'

export function Services() {
  return (
    <section id="services" className="bg-service px-4 py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-normal text-navy sm:text-[46px] sm:leading-[52px]">
            Services We Offer
          </h2>
          <p className="mt-4 text-muted">
            Steady freight, tracked end to end, on the water, on the road and in the air.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {services.map((service, index) => (
            <article key={`${service.title}-${index}`} className="bg-white">
              <img
                src={service.image}
                alt={`${service.title} operations`}
                className="h-60 w-full object-cover"
                loading="lazy"
              />
              <div className="px-7 py-8">
                <h3 className="text-2xl font-normal text-navy">{service.title}</h3>
                <p className="mt-3 text-body">{service.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
