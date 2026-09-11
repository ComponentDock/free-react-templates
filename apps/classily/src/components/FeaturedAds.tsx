import { MapPin, DollarSign } from 'lucide-react'

interface Ad {
  id: number
  title: string
  description: string
  price: string
  location: string
  imageSeed: string
}

const ads: Ad[] = [
  {
    id: 1,
    title: 'Modern Apartment in Downtown',
    description: 'Spacious 2-bedroom apartment with city views and modern amenities.',
    price: '$1,200/mo',
    location: 'New York, NY',
    imageSeed: 'classily-ad-1',
  },
  {
    id: 2,
    title: 'Vintage Leather Sofa',
    description: 'Genuine leather three-seater in excellent condition.',
    price: '$450',
    location: 'Los Angeles, CA',
    imageSeed: 'classily-ad-2',
  },
  {
    id: 3,
    title: 'Senior Developer Position',
    description: 'Full-stack role at a fast-growing startup. Remote-friendly.',
    price: '$120k/yr',
    location: 'San Francisco, CA',
    imageSeed: 'classily-ad-3',
  },
  {
    id: 4,
    title: '2022 Electric Sedan',
    description: 'Low mileage, single owner, fully serviced with warranty.',
    price: '$28,500',
    location: 'Austin, TX',
    imageSeed: 'classily-ad-4',
  },
]

export function FeaturedAds() {
  return (
    <section id="ads" className="bg-paper py-16 transition-colors dark:bg-gray-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-2xl font-bold text-ink dark:text-white">Featured Ads</h2>
        <p className="mt-2 text-sm text-mist">Handpicked listings from top categories</p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {ads.map((ad) => (
            <article
              key={ad.id}
              className="overflow-hidden rounded-lg border border-gray-200 bg-white transition-colors hover:shadow-md dark:border-gray-800 dark:bg-gray-950"
            >
              <img
                src={`https://picsum.photos/seed/${ad.imageSeed}/400/250`}
                alt={ad.title}
                className="h-40 w-full object-cover"
              />
              <div className="p-4">
                <h3 className="text-sm font-semibold text-ink dark:text-white">{ad.title}</h3>
                <p className="mt-2 line-clamp-2 text-xs text-mist">{ad.description}</p>
                <div className="mt-4 flex items-center justify-between text-xs text-mist">
                  <span className="flex items-center gap-1 font-semibold text-brand">
                    <DollarSign className="h-3 w-3" aria-hidden="true" />
                    {ad.price}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="h-3 w-3" aria-hidden="true" />
                    {ad.location}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
