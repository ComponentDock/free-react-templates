const offers = [
  {
    image: 'https://picsum.photos/seed/highland-offer-1/400/300',
    title: 'Up to 35% savings on Club rooms and Suites',
    bullets: ['Luxurious accommodation', '3 Adults & 2 Children size', 'Sea view side'],
  },
  {
    image: 'https://picsum.photos/seed/highland-offer-2/400/300',
    title: 'Up to 35% savings on Club rooms and Suites',
    bullets: ['Luxurious accommodation', '3 Adults & 2 Children size', 'Sea view side'],
  },
  {
    image: 'https://picsum.photos/seed/highland-offer-3/400/300',
    title: 'Up to 35% savings on Club rooms and Suites',
    bullets: ['Luxurious accommodation', '3 Adults & 2 Children size', 'Sea view side'],
  },
]

export function OffersSection() {
  return (
    <section data-testid="offers-section" className="py-20 bg-white" id="offers">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-brand text-sm font-normal uppercase tracking-widest">
            Our Offers
          </span>
          <h2 className="text-heading text-4xl lg:text-5xl font-normal mt-3">Ongoing Offers</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offers.map((offer, i) => (
            <div key={i} className="bg-white border border-gray-100 shadow-sm">
              <img src={offer.image} alt="Offer" className="w-full h-56 object-cover" />
              <div className="p-6">
                <h3 className="text-heading text-lg font-semibold mb-4">{offer.title}</h3>
                <ul className="space-y-2 mb-6">
                  {offer.bullets.map((bullet, j) => (
                    <li key={j} className="flex items-center text-body text-sm">
                      <span className="w-2 h-2 rounded-full bg-gray-400 mr-3 shrink-0" />
                      {bullet}
                    </li>
                  ))}
                </ul>
                <a
                  href="#offers"
                  className="inline-block border border-brand text-brand px-6 py-3 text-sm font-medium uppercase tracking-wider hover:bg-brand hover:text-white transition-colors"
                >
                  Book Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
