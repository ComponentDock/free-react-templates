import { Star, Share2 } from 'lucide-react'

function FacebookIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  )
}

function TwitterIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
    </svg>
  )
}

function LinkedinIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

interface HotelCardProps {
  image: string
  name: string
  location: string
  rating: number
  reviews: number
  price: number
}

function HotelCard({ image, name, location, rating, reviews, price }: HotelCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md group">
      <div className="relative">
        <img
          src={image}
          alt={name}
          className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          <a
            href="#"
            aria-label="Facebook"
            className="text-white hover:text-gold transition-colors"
          >
            <FacebookIcon />
          </a>
          <a href="#" aria-label="Twitter" className="text-white hover:text-gold transition-colors">
            <TwitterIcon />
          </a>
          <a
            href="#"
            aria-label="LinkedIn"
            className="text-white hover:text-gold transition-colors"
          >
            <LinkedinIcon />
          </a>
          <button aria-label="Share" className="text-white hover:text-gold transition-colors">
            <Share2 size={20} />
          </button>
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-lg font-bold text-navy mb-1">{name}</h3>
        <div className="flex items-center gap-1 mb-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={14}
              className={i < rating ? 'fill-gold text-gold' : 'text-gray-300'}
            />
          ))}
          <span className="text-smoke text-xs ml-1">({reviews} reviews)</span>
        </div>
        <p className="text-smoke text-sm mb-2">{location}</p>
        <p className="text-primary-500 font-bold">
          From <span className="text-navy">${price}</span>
        </p>
      </div>
    </div>
  )
}

const hotels = [
  {
    image: 'https://picsum.photos/seed/wanderly-hotel1/600/400',
    name: 'Grand Azure Resort',
    location: 'Santorini, Greece',
    rating: 5,
    reviews: 210,
    price: 500,
  },
  {
    image: 'https://picsum.photos/seed/wanderly-hotel2/600/400',
    name: 'Mountain Lodge',
    location: 'Banff, Canada',
    rating: 4,
    reviews: 145,
    price: 380,
  },
  {
    image: 'https://picsum.photos/seed/wanderly-hotel3/600/400',
    name: 'Tokyo Garden Inn',
    location: 'Tokyo, Japan',
    rating: 5,
    reviews: 198,
    price: 420,
  },
]

export function HotelList() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-3">
            Top Hotels &amp; Restaurants
          </h2>
          <p className="text-smoke max-w-xl mx-auto">
            Hand-picked accommodations and dining experiences for the discerning traveler.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {hotels.map((hotel) => (
            <HotelCard key={hotel.name} {...hotel} />
          ))}
        </div>
      </div>
    </section>
  )
}
