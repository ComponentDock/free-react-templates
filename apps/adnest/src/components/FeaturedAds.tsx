import { Badge } from '@free-react-templates/ui'

interface AdCard {
  id: number
  title: string
  price: string
  location: string
  image: string
  badge?: string
}

const ads: AdCard[] = [
  {
    id: 1,
    title: 'Modern Apartment Downtown',
    price: '$250,000',
    location: 'New York, NY',
    image: 'https://picsum.photos/seed/adnest-ad1/400/300',
    badge: 'Featured',
  },
  {
    id: 2,
    title: 'Vintage Leather Sofa',
    price: '$450',
    location: 'Los Angeles, CA',
    image: 'https://picsum.photos/seed/adnest-ad2/400/300',
  },
  {
    id: 3,
    title: 'iPhone 15 Pro Max',
    price: '$999',
    location: 'Chicago, IL',
    image: 'https://picsum.photos/seed/adnest-ad3/400/300',
    badge: 'New',
  },
  {
    id: 4,
    title: '2022 Toyota Camry',
    price: '$28,500',
    location: 'Houston, TX',
    image: 'https://picsum.photos/seed/adnest-ad4/400/300',
  },
  {
    id: 5,
    title: 'Designer Dining Table',
    price: '$1,200',
    location: 'Miami, FL',
    image: 'https://picsum.photos/seed/adnest-ad5/400/300',
  },
  {
    id: 6,
    title: 'Complete Book Collection',
    price: '$350',
    location: 'Seattle, WA',
    image: 'https://picsum.photos/seed/adnest-ad6/400/300',
  },
  {
    id: 7,
    title: 'MacBook Pro 16"',
    price: '$2,100',
    location: 'San Francisco, CA',
    image: 'https://picsum.photos/seed/adnest-ad7/400/300',
    badge: 'Featured',
  },
  {
    id: 8,
    title: 'Cozy Studio Apartment',
    price: '$180,000',
    location: 'Denver, CO',
    image: 'https://picsum.photos/seed/adnest-ad8/400/300',
  },
]

export function FeaturedAds() {
  return (
    <section className="bg-body-bg py-16">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="mb-8 text-2xl font-semibold text-nav-text">Featured Ads</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {ads.map((ad) => (
            <div
              key={ad.id}
              className="overflow-hidden rounded bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="relative">
                <img src={ad.image} alt={ad.title} className="h-48 w-full object-cover" />
                {ad.badge && (
                  <Badge className="absolute left-2 top-2 bg-brand text-xs text-white">
                    {ad.badge}
                  </Badge>
                )}
              </div>
              <div className="p-4">
                <h3 className="mb-1 text-sm font-semibold text-nav-text line-clamp-1">
                  {ad.title}
                </h3>
                <p className="mb-2 text-lg font-bold text-brand">{ad.price}</p>
                <p className="text-xs text-muted-text">{ad.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
