import { Star, MapPin, Clock } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

interface Tour {
  id: number
  name: string
  price: string
  duration: string
  location: string
  rating: number
  image: string
}

const TOURS: Tour[] = [
  {
    id: 1,
    name: 'Greek Islands Tour',
    price: '$1,299',
    duration: '7 Days',
    location: 'Greece',
    rating: 5,
    image: 'https://picsum.photos/seed/goquest-tour1/400/300',
  },
  {
    id: 2,
    name: 'Swiss Alps Adventure',
    price: '$1,599',
    duration: '10 Days',
    location: 'Switzerland',
    rating: 4,
    image: 'https://picsum.photos/seed/goquest-tour2/400/300',
  },
  {
    id: 3,
    name: 'Tokyo Cultural Journey',
    price: '$2,199',
    duration: '12 Days',
    location: 'Japan',
    rating: 5,
    image: 'https://picsum.photos/seed/goquest-tour3/400/300',
  },
  {
    id: 4,
    name: 'Bali Beach Retreat',
    price: '$899',
    duration: '5 Days',
    location: 'Indonesia',
    rating: 4,
    image: 'https://picsum.photos/seed/goquest-tour4/400/300',
  },
  {
    id: 5,
    name: 'Safari Wildlife Quest',
    price: '$2,499',
    duration: '14 Days',
    location: 'Kenya',
    rating: 5,
    image: 'https://picsum.photos/seed/goquest-tour5/400/300',
  },
  {
    id: 6,
    name: 'Patagonia Trek',
    price: '$1,899',
    duration: '9 Days',
    location: 'Argentina',
    rating: 4,
    image: 'https://picsum.photos/seed/goquest-tour6/400/300',
  },
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={14}
          className={cn('fill-current', i < rating ? 'text-star' : 'text-gray-300')}
        />
      ))}
    </div>
  )
}

export function FavouritePlaces() {
  return (
    <section id="package" className="py-16 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-accent-warm text-xl font-semibold uppercase tracking-wider">
            FEATURED TOURS Packages
          </h2>
          <h3 className="font-heading text-heading text-4xl font-bold mt-2">Favourite Places</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {TOURS.map((tour) => (
            <div
              key={tour.id}
              className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow border border-card-border"
            >
              <div className="relative">
                <img src={tour.image} alt={tour.name} className="w-full h-56 object-cover" />
                <div className="absolute top-4 left-4 bg-brand text-white text-xs font-semibold px-3 py-1 rounded-full">
                  <StarRating rating={tour.rating} />
                </div>
              </div>
              <div className="p-5">
                <h4 className="font-heading text-xl font-semibold text-heading mb-2">
                  {tour.name}
                </h4>
                <p className="text-price font-semibold text-lg mb-3">{tour.price}</p>
                <div className="flex items-center gap-4 text-sm text-body">
                  <span className="flex items-center gap-1">
                    <Clock size={14} />
                    {tour.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin size={14} />
                    {tour.location}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
