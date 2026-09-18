import { Heart, Bookmark, MapPin, Phone, ExternalLink } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

interface FeaturedPlacesProps {
  className?: string
}

interface Place {
  name: string
  type: string
  reviews: number
  price: string
  address: string
  phone: string
  website: string
  rating: number
  ratingColor: 'green' | 'orange' | 'pink'
  image: string
  openNow: boolean
}

const places: Place[] = [
  {
    name: 'Burger & Lobster',
    type: 'Restaurant',
    reviews: 3,
    price: '$$$',
    address: '1301 Avenue, Brooklyn, NY 11230',
    phone: '+44 20 7336 8898',
    website: 'https://example.com',
    rating: 6.5,
    ratingColor: 'orange',
    image: 'https://picsum.photos/seed/listnest-place1/600/400',
    openNow: false,
  },
  {
    name: "Joe's Shanghai",
    type: 'Restaurant',
    reviews: 3,
    price: '$$$',
    address: '1301 Avenue, Brooklyn, NY 11230',
    phone: '+44 20 7336 8898',
    website: 'https://example.com',
    rating: 9.5,
    ratingColor: 'green',
    image: 'https://picsum.photos/seed/listnest-place2/600/400',
    openNow: false,
  },
  {
    name: 'Tasty Hand-Pulled Noodles',
    type: 'Restaurant',
    reviews: 3,
    price: '$$$',
    address: '1301 Avenue, Brooklyn, NY 11230',
    phone: '+44 20 7336 8898',
    website: 'https://example.com',
    rating: 3.2,
    ratingColor: 'pink',
    image: 'https://picsum.photos/seed/listnest-place3/600/400',
    openNow: true,
  },
]

const ratingColors: Record<string, string> = {
  green: 'bg-green-rating',
  orange: 'bg-orange-rating',
  pink: 'bg-primary',
}

export function FeaturedPlaces({ className }: FeaturedPlacesProps) {
  return (
    <section className={cn('py-[90px] max-md:py-[45px] bg-light-bg', className)}>
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <h3 className="text-heading text-[35px] max-lg:text-[30px] relative inline-block pb-[23px] after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-[60px] after:h-[3px] after:bg-primary">
            Featured Places
          </h3>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {places.map((place) => (
            <div key={place.name} className="bg-white shadow-sm hover:shadow-md transition-shadow">
              <a href="#" className="block no-underline text-inherit">
                {/* Image */}
                <div className="relative">
                  <img
                    src={place.image}
                    alt={place.name}
                    className="w-full h-[220px] object-cover"
                    loading="lazy"
                  />
                  {/* Rating badge */}
                  <span
                    className={cn(
                      'absolute top-4 right-4 text-white text-sm font-bold w-10 h-10 rounded-full flex items-center justify-center',
                      ratingColors[place.ratingColor],
                    )}
                  >
                    {place.rating}
                  </span>
                </div>

                {/* Info */}
                <div className="p-5">
                  <h6 className="text-heading text-[21px] font-normal mb-1">{place.name}</h6>
                  <div className="flex items-center gap-1 text-body text-[15px] mb-3">
                    <span>{place.type}</span>
                    <span>•</span>
                    <span>{place.reviews} Reviews</span>
                    <span>•</span>
                    <span>
                      <span className="font-bold">{place.price.slice(0, 3)}</span>
                      {place.price.slice(3)}
                    </span>
                  </div>

                  <ul className="space-y-2 list-none p-0 m-0">
                    <li className="flex items-start gap-2 text-body text-[15px]">
                      <MapPin size={16} className="mt-0.5 shrink-0" />
                      <span>{place.address}</span>
                    </li>
                    <li className="flex items-start gap-2 text-body text-[15px]">
                      <Phone size={16} className="mt-0.5 shrink-0" />
                      <span>{place.phone}</span>
                    </li>
                    <li className="flex items-start gap-2 text-body text-[15px]">
                      <ExternalLink size={16} className="mt-0.5 shrink-0" />
                      <span>{place.website}</span>
                    </li>
                  </ul>

                  {/* Bottom icons */}
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
                    <span
                      className={cn(
                        'text-xs font-bold uppercase tracking-wide',
                        place.openNow ? 'text-green-rating' : 'text-primary',
                      )}
                    >
                      {place.openNow ? 'OPEN NOW' : 'CLOSED NOW'}
                    </span>
                    <div className="flex items-center gap-3">
                      <button
                        className="text-muted hover:text-primary transition-colors bg-transparent border-none cursor-pointer"
                        aria-label="Favorite"
                      >
                        <Heart size={16} />
                      </button>
                      <button
                        className="text-muted hover:text-primary transition-colors bg-transparent border-none cursor-pointer"
                        aria-label="Bookmark"
                      >
                        <Bookmark size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
