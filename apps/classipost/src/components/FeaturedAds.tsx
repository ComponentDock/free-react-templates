import { MapPin, Heart } from 'lucide-react'

const ads = [
  {
    id: 1,
    title: 'Modern Apartment in Downtown',
    price: '$1,200',
    location: 'New York, NY',
    image: 'https://picsum.photos/seed/classipost-ad1/400/260',
    category: 'Real Estate',
  },
  {
    id: 2,
    title: 'Vintage Wooden Bookshelf',
    price: '$250',
    location: 'Los Angeles, CA',
    image: 'https://picsum.photos/seed/classipost-ad2/400/260',
    category: 'Furniture',
  },
  {
    id: 3,
    title: 'Latest Smartphone Pro Max',
    price: '$899',
    location: 'Chicago, IL',
    image: 'https://picsum.photos/seed/classipost-ad3/400/260',
    category: 'Electronics',
  },
  {
    id: 4,
    title: 'Sedan 2024 Low Mileage',
    price: '$24,500',
    location: 'Houston, TX',
    image: 'https://picsum.photos/seed/classipost-ad4/400/260',
    category: 'Cars & Vehicles',
  },
]

export function FeaturedAds() {
  return (
    <section id="ads" className="bg-gray-50 py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="mb-8 text-2xl font-bold text-gray-900">Featured Ads</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {ads.map((ad) => (
            <div
              key={ad.id}
              className="group overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="relative overflow-hidden">
                <img
                  src={ad.image}
                  alt={ad.title}
                  className="h-44 w-full object-cover transition-transform group-hover:scale-105"
                />
                <span className="absolute left-3 top-3 rounded bg-brand/90 px-2 py-0.5 text-xs font-medium text-white">
                  {ad.category}
                </span>
                <button
                  className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/80 text-gray-400 transition-colors hover:bg-white hover:text-red-500"
                  aria-label={`Save ${ad.title}`}
                >
                  <Heart size={16} />
                </button>
              </div>
              <div className="p-4">
                <h3 className="mb-1 text-sm font-semibold text-gray-900 line-clamp-1">
                  {ad.title}
                </h3>
                <p className="mb-2 text-lg font-bold text-brand">{ad.price}</p>
                <div className="flex items-center gap-1 text-xs text-gray-500">
                  <MapPin size={12} />
                  <span>{ad.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
