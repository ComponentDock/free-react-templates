import { offers } from '../data'

export function Offer() {
  return (
    <section id="services" className="bg-white py-30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-17.5 max-w-[740px] text-center">
          <h2 className="text-sm font-medium uppercase tracking-[2.1px] text-ink-900">
            What we offer for you
          </h2>
          <p className="mt-4 text-2xl leading-9 text-ink-600">
            From planning to execution, we help businesses combine smart
            <strong className="font-semibold text-ink-900"> finance</strong> with clear
            <strong className="font-semibold text-ink-900"> strategy</strong> — so every step
            compounds toward measurable results.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {offers.map((offer) => (
            <article key={offer.title} className="group">
              <img src={offer.image} alt="" className="w-full object-cover" />
              <div className="relative overflow-hidden rounded-b-[5px] border border-t-0 border-line-100 px-[30px] py-[50px] text-center">
                <div
                  className="absolute inset-0 bg-brand-gradient opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  aria-hidden="true"
                />
                <div className="relative">
                  <h3 className="text-lg font-medium text-ink-900 transition-colors duration-300 group-hover:text-white">
                    {offer.title}
                  </h3>
                  <p className="mt-4 text-sm leading-6 text-ink-600 transition-colors duration-300 group-hover:text-white/80">
                    {offer.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
