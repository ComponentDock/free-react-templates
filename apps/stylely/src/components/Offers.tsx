const offers = [
  {
    name: 'Best Equipment',
    blurb: 'Top-grade clippers, razors, and products in every chair.',
    seed: 'stylely-offer-1',
    alt: 'Professional barber equipment on a counter',
  },
  {
    name: 'Best Price',
    blurb: 'Honest pricing with no hidden extras — every visit, every time.',
    seed: 'stylely-offer-2',
    alt: 'Price list board in a barber shop',
  },
  {
    name: 'Fitness Equipment',
    blurb: 'Keep your gym look sharp with cuts built around your training.',
    seed: 'stylely-offer-3',
    alt: 'Dumbbells in a gym corner',
  },
  {
    name: 'Fitness Training',
    blurb: 'Style advice from barbers who know what an active life demands.',
    seed: 'stylely-offer-4',
    alt: 'Barber consulting with a client',
  },
] as const

export function Offers() {
  return (
    <section id="offers" className="py-20 transition-colors lg:py-[120px]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold uppercase text-ink dark:text-white sm:text-4xl">
            What We Offer
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-mist dark:text-gray-400">
            More than a haircut — a complete grooming experience built around quality and value.
          </p>
        </div>
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {offers.map((offer) => (
            <article
              key={offer.name}
              className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-shadow hover:shadow-lg dark:border-gray-800 dark:bg-gray-950"
            >
              <img
                src={`https://picsum.photos/seed/${offer.seed}/600/400`}
                alt={offer.alt}
                loading="lazy"
                className="h-44 w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="p-6 text-center">
                <h3 className="font-display text-lg font-semibold text-ink dark:text-white">
                  {offer.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-mist dark:text-gray-400">
                  {offer.blurb}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
