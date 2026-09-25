const OFFERS = [
  {
    title: 'Tasty Burgers',
    price: '$49.95',
    description:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.',
    image: 'https://picsum.photos/seed/tastory-offer1/600/400',
  },
  {
    title: 'Pizza Pasta',
    price: '$39.95',
    description:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.',
    image: 'https://picsum.photos/seed/tastory-offer2/600/400',
  },
  {
    title: 'Sushi Rolls',
    price: '$55.95',
    description:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.',
    image: 'https://picsum.photos/seed/tastory-offer3/600/400',
  },
]

export function Offers() {
  return (
    <section id="offer" className="bg-paper py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-amber-brand">
            Our Offers
          </p>
          <h2 className="mb-4 font-heading text-4xl font-bold text-black">Our Offer This Summer</h2>
          <p className="mx-auto max-w-2xl text-lg text-body-text">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
            there live the blind texts.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {OFFERS.map((offer) => (
            <div key={offer.title} className="overflow-hidden rounded bg-white shadow-sm">
              <img
                src={offer.image}
                alt={offer.title}
                className="h-56 w-full object-cover"
                loading="lazy"
              />
              <div className="p-6 text-center">
                <h3 className="mb-2 font-heading text-xl font-bold text-black">{offer.title}</h3>
                <p className="mb-3 text-sm text-body-text">{offer.description}</p>
                <span className="text-lg font-bold text-amber-brand">{offer.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
