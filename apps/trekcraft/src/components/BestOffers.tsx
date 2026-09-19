import { Star, Wifi, Coffee, Car } from 'lucide-react'

const OFFERS = [
  {
    image: 'https://picsum.photos/seed/trekcraft-offer1/600/400',
    name: 'Luxury Suite',
    price: '$70',
    period: 'per night',
    rating: 5,
    description: 'Spacious suite with ocean view, king bed, and private balcony.',
    amenities: ['wifi', 'coffee', 'car'],
  },
  {
    image: 'https://picsum.photos/seed/trekcraft-offer2/600/400',
    name: 'Deluxe Room',
    price: '$55',
    period: 'per night',
    rating: 4,
    description: 'Comfortable room with modern amenities and city skyline view.',
    amenities: ['wifi', 'coffee'],
  },
  {
    image: 'https://picsum.photos/seed/trekcraft-offer3/600/400',
    name: 'Standard Twin',
    price: '$45',
    period: 'per night',
    rating: 4,
    description: 'Cozy twin room perfect for friends or colleagues traveling together.',
    amenities: ['wifi'],
  },
  {
    image: 'https://picsum.photos/seed/trekcraft-offer4/600/400',
    name: 'Family Cabin',
    price: '$95',
    period: 'per night',
    rating: 5,
    description: 'Large cabin with bunk beds, kitchenette, and garden access.',
    amenities: ['wifi', 'coffee', 'car'],
  },
]

const AMENITY_ICONS: Record<string, typeof Wifi> = { wifi: Wifi, coffee: Coffee, car: Car }

export function BestOffers() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-trek-text mb-4">
            The best offers with rooms
          </h2>
          <p className="text-trek-muted max-w-xl mx-auto">
            Handpicked accommodations to suit every traveler's taste and budget.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {OFFERS.map((offer) => (
            <div
              key={offer.name}
              className="flex flex-col sm:flex-row bg-gray-50 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="sm:w-2/5 relative">
                <img
                  src={offer.image}
                  alt={offer.name}
                  className="w-full h-48 sm:h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20" />
              </div>
              <div className="sm:w-3/5 p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-display text-lg font-bold text-trek-text">{offer.name}</h3>
                  <div className="flex items-center gap-1">
                    {Array.from({ length: offer.rating }).map((_, i) => (
                      <Star key={i} size={12} className="fill-trek-star text-trek-star" />
                    ))}
                  </div>
                </div>
                <p className="text-trek-muted text-sm mb-3">{offer.description}</p>
                <div className="flex items-center gap-2 mb-3">
                  {offer.amenities.map((a) => {
                    const Icon = AMENITY_ICONS[a]
                    return Icon && <Icon key={a} size={16} className="text-trek-orange" />
                  })}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-trek-orange font-bold text-lg">
                    {offer.price}{' '}
                    <span className="text-xs text-trek-muted font-normal">{offer.period}</span>
                  </span>
                  <a href="#" className="text-trek-purple text-sm font-semibold hover:underline">
                    read more
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
