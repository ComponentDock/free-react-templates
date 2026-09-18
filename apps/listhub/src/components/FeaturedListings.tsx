import { Heart, MapPin } from 'lucide-react'

interface Listing {
  id: number
  title: string
  description: string
  image: string
  price: string
  isOpen: boolean
  category: string
}

const listings: Listing[] = [
  {
    id: 1,
    title: 'Urban Lounge',
    description: 'Discover the best places to eat, drink, and socialize.',
    image: 'https://picsum.photos/seed/listhub-list1/400/280',
    price: '$$$',
    isOpen: false,
    category: 'Food & Restaurant',
  },
  {
    id: 2,
    title: 'Skyline Cafe',
    description: 'Cozy atmosphere with artisan coffee and pastries.',
    image: 'https://picsum.photos/seed/listhub-list2/400/280',
    price: '$$',
    isOpen: false,
    category: 'Cafe & Pastry',
  },
  {
    id: 3,
    title: 'Golden Spa',
    description: 'Relax and rejuvenate with premium spa treatments.',
    image: 'https://picsum.photos/seed/listhub-list3/400/280',
    price: '$$$',
    isOpen: true,
    category: 'Beauty & Spa',
  },
  {
    id: 4,
    title: 'City Mart',
    description: 'One-stop shopping for all your daily needs.',
    image: 'https://picsum.photos/seed/listhub-list4/400/280',
    price: '$$',
    isOpen: false,
    category: 'Shopping Mall',
  },
  {
    id: 5,
    title: 'Fitness Hub',
    description: 'State-of-the-art equipment and expert trainers.',
    image: 'https://picsum.photos/seed/listhub-list5/400/280',
    price: '$$',
    isOpen: false,
    category: 'Fitness Center',
  },
  {
    id: 6,
    title: 'The Grand Hotel',
    description: 'Luxury accommodation in the heart of the city.',
    image: 'https://picsum.photos/seed/listhub-list6/400/280',
    price: '$$$',
    isOpen: true,
    category: 'Hotel & Resort',
  },
]

export function FeaturedListings() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-12 text-center">
          <h2
            className="text-3xl font-bold text-heading"
            style={{ fontFamily: 'var(--font-family-heading)' }}
          >
            Featured Listing
          </h2>
          <p className="mt-2 text-text-muted">Explore Categories</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {listings.map((listing) => (
            <article
              key={listing.id}
              className="group overflow-hidden rounded-lg border border-border-light bg-white shadow-sm transition hover:shadow-md"
            >
              {/* Image */}
              <div className="relative">
                <img
                  src={listing.image}
                  alt={listing.title}
                  className="h-48 w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute left-3 top-3 flex gap-2">
                  <span className="rounded-full bg-white/90 px-2.5 py-0.5 text-xs font-semibold text-heading shadow-sm">
                    {listing.price}
                  </span>
                  <span
                    className={`rounded-full px-2.5 py-0.5 text-xs font-semibold shadow-sm ${listing.isOpen ? 'bg-green-500 text-white' : 'bg-white/90 text-text-muted'}`}
                  >
                    {listing.isOpen ? 'Open Now' : 'Closed'}
                  </span>
                </div>
                <div className="absolute bottom-3 right-3">
                  <button
                    type="button"
                    aria-label={`Save ${listing.title}`}
                    className="rounded-full bg-white/90 p-2 text-text-muted transition hover:text-brand"
                  >
                    <Heart className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="text-lg font-semibold text-heading group-hover:text-brand">
                  <a href="#">{listing.title}</a>
                </h3>
                <p className="mt-1 text-sm text-text-muted">{listing.description}</p>
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between border-t border-border-light px-4 py-3">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-brand" aria-hidden="true" />
                  <span className="text-xs font-medium text-heading">{listing.category}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="#"
            className="inline-block rounded-md border-2 border-brand px-8 py-3 text-sm font-semibold text-brand transition hover:bg-brand hover:text-white"
          >
            Explore More
          </a>
        </div>
      </div>
    </section>
  )
}
