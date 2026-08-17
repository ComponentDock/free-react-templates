import { MapPin } from 'lucide-react'
import { OFFERS } from '../data'

/* Special Offers — section header row (title + intro paragraph) followed
   by a 3-column grid of destination cards with a blue price badge. */
export function SpecialOffers() {
  return (
    <section aria-label="Special Offers" id="special-offers" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="h-1.5 w-20 bg-brand" aria-hidden="true" />
            <h2 className="mt-4 text-4xl font-extrabold text-ink lg:text-5xl">Special Offers</h2>
          </div>
          <p className="max-w-xl text-lg leading-relaxed text-ink/60">
            The point of using Lorem Ipsum is that it has a more-or-less normal distribution of
            letters, as opposed to using, making it look like readable English.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {OFFERS.map((offer) => (
            <article key={offer.title} className="bg-white shadow-[0_20px_30px_rgba(29,42,59,0.1)]">
              <img
                src={offer.image}
                alt={offer.title}
                className="aspect-[10/7] w-full object-cover"
              />
              <div className="relative p-6 pb-10">
                <h3 className="text-lg font-extrabold leading-snug text-ink">
                  <a href="#special-offers" className="transition-colors hover:text-brand">
                    {offer.title}
                  </a>
                </h3>
                <p className="mt-2 flex items-center gap-1.5 text-[13px] font-bold text-ink/60">
                  <MapPin className="h-4 w-4 text-brand" aria-hidden="true" />
                  {offer.location}
                </p>
                <span className="absolute bottom-6 right-6 bg-brand/10 px-3 pb-1 pt-1.5 text-[13px] font-extrabold text-brand">
                  {offer.price}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
