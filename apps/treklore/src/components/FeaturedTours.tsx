import { MapPin, Star } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const tours = [
  {
    title: 'Bali Adventure Explorer',
    description:
      'Discover hidden waterfalls, sacred temples, and lush rice terraces on this immersive 10-day journey through Bali.',
    image: 'https://picsum.photos/seed/treklore-tour1/600/400',
    price: 1299,
    duration: '10 Days',
    location: 'Bali, Indonesia',
    rating: 4.8,
    badge: 'Best Seller',
  },
  {
    title: 'Paris Art & Culture',
    description:
      'Immerse yourself in world-class museums, charming cafés, and the timeless beauty of the City of Lights.',
    image: 'https://picsum.photos/seed/treklore-tour2/600/400',
    price: 1599,
    duration: '7 Days',
    location: 'Paris, France',
    rating: 4.9,
    badge: 'Special Offer',
  },
  {
    title: 'Thailand Island Hopping',
    description:
      'Hop between stunning islands with crystal waters, vibrant nightlife, and authentic Thai cuisine.',
    image: 'https://picsum.photos/seed/treklore-tour3/600/400',
    price: 2199,
    duration: '12 Days',
    location: 'Thailand',
    rating: 4.7,
    badge: null,
  },
  {
    title: 'Greek Islands Discovery',
    description:
      'Sail through the Aegean, explore whitewashed villages, and experience legendary Greek hospitality.',
    image: 'https://picsum.photos/seed/treklore-tour4/600/400',
    price: 2499,
    duration: '14 Days',
    location: 'Greek Islands',
    rating: 4.9,
    badge: 'New',
  },
]

export function FeaturedTours() {
  return (
    <section aria-label="Featured tours" className="py-20 bg-gray-50">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-12 text-center">
          <span className="font-display text-sm font-semibold uppercase tracking-widest text-brand-blue">
            curated experiences
          </span>
          <h2 className="mt-2 font-display text-4xl font-bold uppercase tracking-wide text-navy">
            Featured Tours
          </h2>
        </div>

        <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory">
          {tours.map((tour) => (
            <article
              key={tour.title}
              className="min-w-[300px] flex-1 snap-start overflow-hidden rounded bg-white shadow-md transition hover:shadow-xl"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={tour.image}
                  alt={`${tour.title} tour`}
                  className="h-full w-full object-cover"
                />
                {tour.badge && (
                  <span
                    className={cn(
                      'absolute left-3 top-3 rounded px-3 py-1 font-display text-xs font-semibold uppercase text-white',
                      tour.badge === 'Best Seller'
                        ? 'bg-green-500'
                        : tour.badge === 'Special Offer'
                          ? 'bg-brand-blue'
                          : 'bg-warm-brown',
                    )}
                  >
                    {tour.badge}
                  </span>
                )}
                <span className="absolute bottom-3 right-3 rounded bg-navy/80 px-3 py-1 font-display text-xs font-semibold text-white">
                  {tour.duration}
                </span>
              </div>

              <div className="p-5">
                <div className="mb-2 flex items-center gap-1 text-sm text-muted">
                  <MapPin className="h-3.5 w-3.5" />
                  {tour.location}
                </div>

                <div className="mb-2 flex items-center gap-0.5 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3 w-3 fill-current" />
                  ))}
                  <span className="ml-1 text-xs text-muted">({tour.rating})</span>
                </div>

                <h3 className="mb-2 font-display text-lg font-bold text-navy">{tour.title}</h3>
                <p className="mb-4 text-sm leading-relaxed text-muted line-clamp-2">
                  {tour.description}
                </p>

                <div className="flex items-center justify-between">
                  <span className="font-display text-xl font-bold text-brand-blue">
                    ${tour.price.toLocaleString()}
                  </span>
                  <button
                    type="button"
                    className="rounded bg-navy px-5 py-2 font-display text-xs font-semibold uppercase tracking-wide text-white transition hover:bg-brand-blue"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
