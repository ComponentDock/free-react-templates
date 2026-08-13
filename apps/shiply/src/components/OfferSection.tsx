import { offers } from '../data'

/** White "What We Offer" section: three icon-and-text service rows with
 *  a brand-orange heading, underline bar, and Learn More links. */
export function OfferSection() {
  return (
    <section id="offer" aria-label="What We Offer" className="py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto mb-20 max-w-xl text-center">
          <h2 className="text-4xl font-bold uppercase text-brand">What We Offer</h2>
          <span aria-hidden="true" className="mx-auto mt-3 block h-[3px] w-20 bg-brand" />
          <p className="mt-4 text-body-grey">
            Global freight solutions for every load, every route, every deadline.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {offers.map((offer) => (
            <div key={offer.title} className="flex items-start gap-4">
              <span aria-hidden="true" className="mt-1 text-5xl text-brand">
                <offer.icon strokeWidth={1.5} />
              </span>
              <div>
                <h3 className="text-xl font-medium text-ink">{offer.title}</h3>
                <p className="mt-2 text-body-grey">{offer.body}</p>
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
