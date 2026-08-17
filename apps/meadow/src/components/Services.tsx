import { services, servicesHighlight } from '../data'

export function Services() {
  return (
    <section id="services" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-[13px] font-medium uppercase tracking-[1px] text-brand">
            Services
          </span>
          <h2 className="mt-2 text-4xl font-medium text-ink">
            Over <span className="text-brand">{servicesHighlight}</span> People Working with us
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <article
                key={service.title}
                className="group rounded-sm bg-white p-7 transition-shadow hover:shadow-lg"
              >
                <div className="services-icon flex h-[70px] w-[70px] items-center justify-center rounded-tr-full rounded-br-full rounded-bl-full bg-brand transition-colors group-hover:bg-white">
                  <Icon
                    aria-hidden="true"
                    className="h-[50px] w-[50px] text-white transition-colors group-hover:text-brand"
                  />
                </div>
                <h3 className="mt-6 text-[22px] font-medium text-ink">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-body">{service.text}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
