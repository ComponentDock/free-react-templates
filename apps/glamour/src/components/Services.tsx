import { services } from '../data'

/**
 * Split block "Our services": photo left, text right with four service
 * rows, each a 70px round pink icon with a title and blurb.
 */
export function Services() {
  return (
    <section className="bg-white">
      <div className="grid lg:grid-cols-2">
        <div className="order-2 lg:order-1">
          <img
            src="https://picsum.photos/seed/glamour-services-bg/1200/900"
            alt=""
            loading="lazy"
            className="h-full min-h-[420px] w-full object-cover"
          />
        </div>

        <div className="order-1 bg-black/[0.02] px-6 py-16 lg:order-2 lg:px-14">
          <h2 className="font-heading text-3xl font-bold tracking-wide text-ink uppercase">
            Our services
          </h2>
          <div className="mt-10 space-y-8">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <div key={service.title} className="flex items-start gap-4">
                  <span className="flex h-[70px] w-[70px] shrink-0 items-center justify-center rounded-full bg-brand text-white">
                    <Icon className="h-9 w-9" aria-hidden="true" />
                  </span>
                  <div className="ml-4">
                    <h3 className="font-heading text-xl font-bold text-ink">{service.title}</h3>
                    <p className="mt-2 leading-relaxed">{service.blurb}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
