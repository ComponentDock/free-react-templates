import { prices, pricesFootnote } from '../data'
import { HairlineGrid } from './HairlineGrid'

/** The published price band: eyebrow, h2, lede, six hairline cells, footnote. */
export function PriceList() {
  return (
    <section id="pricing" className="section-band scroll-mt-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-bold tracking-wide text-primary-700 uppercase">Pricing</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink-800 sm:text-4xl">
            The price is on the website, which should not be unusual
          </h2>
          <p className="mt-4 text-lg text-ink-500">
            Six prices cover almost every letter. Filing is included in all of them; there is no
            separate charge for sending the certificate.
          </p>
        </div>

        <HairlineGrid cells={prices} label="Published prices" />

        <p className="mt-6 text-sm text-ink-400">{pricesFootnote}</p>
      </div>
    </section>
  )
}
