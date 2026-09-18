import { Star, Share2 } from 'lucide-react'

interface PlaceCardProps {
  image: string
  category: string
  name: string
  location: string
  rating: number
  reviews: number
}

function PlaceCard({ image, category, name, location, rating, reviews }: PlaceCardProps) {
  return (
    <div className="relative group overflow-hidden rounded-lg">
      <img
        src={image}
        alt={name}
        className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
        <div className="flex items-center justify-between">
          <div>
            <span className="inline-block bg-primary-500 text-white text-xs px-3 py-1 rounded-full mb-2">
              {category}
            </span>
            <h3 className="text-white text-xl font-bold">{name}</h3>
            <p className="text-gray-300 text-sm">{location}</p>
            <div className="flex items-center gap-1 mt-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={14}
                  className={i < rating ? 'fill-gold text-gold' : 'text-gray-400'}
                />
              ))}
              <span className="text-gray-300 text-xs ml-1">({reviews} reviews)</span>
            </div>
          </div>
          <button aria-label="Share" className="text-white hover:text-gold transition-colors">
            <Share2 size={20} />
          </button>
        </div>
      </div>
    </div>
  )
}

const places = [
  {
    image: 'https://picsum.photos/seed/wanderly-place1/600/400',
    category: 'Travel',
    name: 'Santorini, Greece',
    location: 'Cyclades Islands',
    rating: 5,
    reviews: 210,
  },
  {
    image: 'https://picsum.photos/seed/wanderly-place2/600/400',
    category: 'Travel',
    name: 'Kyoto, Japan',
    location: 'Kansai Region',
    rating: 5,
    reviews: 185,
  },
  {
    image: 'https://picsum.photos/seed/wanderly-place3/600/400',
    category: 'Travel',
    name: 'Patagonia, Chile',
    location: 'South America',
    rating: 4,
    reviews: 142,
  },
  {
    image: 'https://picsum.photos/seed/wanderly-place4/600/400',
    category: 'Travel',
    name: 'Banff, Canada',
    location: 'Alberta',
    rating: 5,
    reviews: 267,
  },
]

export function TopPlaces() {
  return (
    <section id="places" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-3">Top Places to visit</h2>
          <p className="text-smoke max-w-xl mx-auto">
            Discover breathtaking destinations around the world. From tropical beaches to mountain
            retreats, your next adventure awaits.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {places.map((place) => (
            <PlaceCard key={place.name} {...place} />
          ))}
        </div>
      </div>
    </section>
  )
}
