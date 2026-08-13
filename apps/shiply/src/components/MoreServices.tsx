import { moreServices } from '../data'

/** Light-grey "More Services" section: six icon-and-text service rows. */
export function MoreServices() {
  return (
    <section id="more-services" aria-label="More Services" className="bg-light py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto mb-20 max-w-xl text-center">
          <h2 className="text-4xl font-bold uppercase text-brand">More Services</h2>
          <span aria-hidden="true" className="mx-auto mt-3 block h-[3px] w-20 bg-brand" />
          <p className="mt-4 text-body-grey">We Offer The Following Services</p>
        </div>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {moreServices.map((service) => (
            <div key={service.title} className="flex items-start gap-4">
              <span aria-hidden="true" className="mt-1 text-5xl text-brand">
                <service.icon strokeWidth={1.5} />
              </span>
              <div>
                <h3 className="text-xl font-medium text-ink">{service.title}</h3>
                <p className="mt-2 text-body-grey">{service.body}</p>
                <p className="mt-3">
                  <a href="#services" className="text-brand hover:underline">
                    Learn More
                  </a>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
