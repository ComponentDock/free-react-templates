import { services, servicesTitle } from '../data'

export function Services() {
  return (
    <section id="services" aria-label="Services" className="py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-[120px] text-center">
          <div aria-hidden="true" className="mx-auto mb-4 h-[2px] w-[50px] bg-brand" />
          <h2 className="font-serif text-[40px] font-bold text-ink">{servicesTitle}</h2>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div key={service.title} className="text-center">
              <span className="relative mx-auto flex h-[90px] w-[90px] items-center justify-center">
                <span
                  aria-hidden="true"
                  className="absolute left-1/2 top-1/2 h-[60px] w-[60px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-soft-strong"
                />
                <service.icon
                  aria-hidden="true"
                  className="relative h-[52px] w-[52px] text-brand"
                />
              </span>
              <h3 className="mt-5 font-serif text-lg font-bold text-ink">{service.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{service.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
