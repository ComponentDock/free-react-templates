import { Gift } from 'lucide-react'
import { discountItems, discountSection } from '../data'

/* Light blue-grey CTA band with a discount headline, six FREE
   mini-features and a Get Started button
   (reference: .hami-call-to-action.bg-gray). */
export function DiscountCta() {
  return (
    <section aria-label="Discount" className="bg-mist py-24">
      <div className="mx-auto max-w-5xl px-4 text-center">
        <h2 className="mx-auto max-w-3xl text-3xl font-bold text-ink lg:text-[48px]">
          {discountSection.title}
        </h2>
        <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {discountItems.map((item) => (
            <li
              key={item}
              className="flex items-center justify-center gap-3 rounded-lg bg-white py-5"
            >
              <Gift aria-hidden="true" className="h-6 w-6 text-primary" />
              <span className="font-semibold text-ink">{item}</span>
            </li>
          ))}
        </ul>
        <a
          href="#plans"
          className="mt-12 inline-flex h-[50px] min-w-[150px] items-center justify-center rounded-full bg-primary px-10 font-semibold text-white transition-colors hover:bg-ink"
        >
          {discountSection.button}
        </a>
      </div>
    </section>
  )
}
