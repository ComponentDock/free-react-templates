import { Star } from 'lucide-react'

const destinations = [
  {
    name: 'Bali',
    image: 'https://picsum.photos/seed/treklore-bali/600/400',
    description: 'A tropical paradise of temples, rice terraces, and vibrant culture.',
    price: 679,
    special: true,
  },
  {
    name: 'Indonesia',
    image: 'https://picsum.photos/seed/treklore-indonesia/600/400',
    description: 'Explore thousands of islands with diverse landscapes and wildlife.',
    price: 679,
    special: false,
  },
  {
    name: 'San Francisco',
    image: 'https://picsum.photos/seed/treklore-sf/600/400',
    description: 'Iconic bridges, cable cars, and a thriving food scene await you.',
    price: 679,
    special: false,
  },
  {
    name: 'Paris',
    image: 'https://picsum.photos/seed/treklore-paris/600/400',
    description: 'The city of love, art, and unmatched culinary experiences.',
    price: 679,
    special: false,
  },
  {
    name: 'Phi Phi Island',
    image: 'https://picsum.photos/seed/treklore-phiphi/600/400',
    description: 'Crystal-clear waters and pristine beaches in the Andaman Sea.',
    price: 679,
    special: false,
  },
  {
    name: 'Mykonos',
    image: 'https://picsum.photos/seed/treklore-mykonos/600/400',
    description: 'White-washed villages, turquoise waters, and legendary nightlife.',
    price: 679,
    special: false,
  },
]

export function PopularDestinations() {
  return (
    <section aria-label="Popular destinations" className="py-20 bg-gray-50">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-12 text-center">
          <span className="font-display text-sm font-semibold uppercase tracking-widest text-brand-blue">
            simply amazing places
          </span>
          <h2 className="mt-2 font-display text-4xl font-bold uppercase tracking-wide text-navy">
            Popular Destinations
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {destinations.map((dest) => (
            <div
              key={dest.name}
              className="group relative overflow-hidden rounded bg-white shadow-md transition hover:shadow-xl"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={dest.image}
                  alt={`${dest.name} destination`}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {dest.special && (
                  <span className="absolute left-3 top-3 rounded bg-brand-blue px-3 py-1 font-display text-xs font-semibold uppercase text-white">
                    Special Offer
                  </span>
                )}
              </div>
              <div className="p-5">
                <h3 className="mb-2 font-display text-xl font-bold uppercase text-navy">
                  {dest.name}
                </h3>
                <p className="mb-3 text-sm leading-relaxed text-muted">{dest.description}</p>
                <div className="flex items-center justify-between">
                  <span className="font-display text-lg font-bold text-brand-blue">
                    From ${dest.price}
                  </span>
                  <div className="flex gap-0.5 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
