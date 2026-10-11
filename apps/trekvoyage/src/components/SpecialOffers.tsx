import { MapPin } from 'lucide-react'
import { SectionTitle } from './SectionTitle'

const BLURB =
  'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.'

const OFFERS = [
  { seed: 'trekvoyage-offer-1', title: 'Kaafu Atoll', price: 520, location: 'Maldives' },
  { seed: 'trekvoyage-offer-2', title: 'The White City', price: 520, location: 'Greece' },
  { seed: 'trekvoyage-offer-3', title: 'Byodo-In Temple', price: 750, location: 'United States' },
  { seed: 'trekvoyage-offer-4', title: 'Arabische Emiraten', price: 520, location: 'Dubai' },
] as const

/* Four-up offer grid: rounded photo, black title on the left with the
   turquoise price on the right, and the location line beneath. */
export function SpecialOffers() {
  return (
    <section id="offers" className="py-[70px]">
      <div className="mx-auto max-w-[1140px] px-4">
        <SectionTitle title="Special offers & Discounts" subtitle={BLURB} />

        <div className="grid gap-[30px] sm:grid-cols-2 lg:grid-cols-4">
          {OFFERS.map((offer) => (
            <article key={offer.title}>
              <a href="#offers" className="block overflow-hidden">
                <img
                  alt=""
                  aria-hidden="true"
                  src={`https://picsum.photos/seed/${offer.seed}/600/450`}
                  className="w-full rounded-[4px] object-cover transition-transform duration-500 hover:scale-[1.05]"
                />
              </a>
              <div className="mt-[15px] flex items-start justify-between gap-[10px]">
                <h3 className="text-[20px]">
                  <a
                    href="#offers"
                    className="text-black transition-colors duration-300 hover:text-brand"
                  >
                    {offer.title}
                  </a>
                </h3>
                <p className="text-[18px] font-bold text-brand">
                  <sup className="text-[16px] font-normal">$</sup>
                  {offer.price}
                </p>
              </div>
              <p className="mt-[6px] flex items-center gap-[6px] text-[13px] text-loc/80">
                <MapPin className="h-[14px] w-[14px]" aria-hidden="true" />
                {offer.location}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
