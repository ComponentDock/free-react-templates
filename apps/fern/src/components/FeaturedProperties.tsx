import { MapPin } from 'lucide-react'
import { Badge } from '@free-react-templates/ui'

interface Property {
  id: number
  title: string
  location: string
  price: string
  badge: 'Sale' | 'Rent'
  sqft: string
  agent: string
  image: string
}

const PROPERTIES: Property[] = [
  {
    id: 1,
    title: 'Greenview Villa',
    location: 'Miami',
    price: '$320,000',
    badge: 'Sale',
    sqft: '1,878 sqft',
    agent: 'Carlos Henderson',
    image: 'https://picsum.photos/seed/fern-prop1/600/400',
  },
  {
    id: 2,
    title: 'Skyline Apartment',
    location: 'Chicago',
    price: '$3,050/mo',
    badge: 'Rent',
    sqft: '1,200 sqft',
    agent: 'Mike Bochs',
    image: 'https://picsum.photos/seed/fern-prop2/600/400',
  },
  {
    id: 3,
    title: 'Lakefront Cottage',
    location: 'Illinois',
    price: '$275,000',
    badge: 'Sale',
    sqft: '2,100 sqft',
    agent: 'Jessica Moore',
    image: 'https://picsum.photos/seed/fern-prop3/600/400',
  },
]

export function FeaturedProperties() {
  return (
    <section id="properties" className="bg-paper py-16">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="mb-4 text-center text-3xl font-bold text-ink">Featured Properties</h2>
        <p className="mb-12 text-center text-mist">What we offer — handpicked properties for you</p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROPERTIES.map((p) => (
            <div
              key={p.id}
              className="overflow-hidden rounded-lg bg-white shadow-md transition-shadow hover:shadow-lg"
            >
              <div className="relative h-52">
                <img src={p.image} alt={p.title} className="h-full w-full object-cover" />
                <Badge
                  variant={p.badge === 'Sale' ? 'success' : 'warning'}
                  className="absolute left-3 top-3"
                >
                  {p.badge}
                </Badge>
              </div>
              <div className="p-5">
                <div className="mb-2 flex items-baseline gap-2">
                  <span className="text-xl font-bold text-brand">{p.price}</span>
                </div>
                <p className="mb-1 text-sm text-mist">{p.sqft}</p>
                <h3 className="mb-1 text-lg font-bold text-ink">{p.title}</h3>
                <p className="mb-3 flex items-center gap-1 text-sm text-mist">
                  <MapPin size={14} />
                  {p.location}
                </p>
                <div className="flex items-center justify-between border-t pt-3">
                  <span className="text-xs text-mist">{p.agent}</span>
                  <a
                    href="#"
                    className="text-sm font-semibold text-brand transition-colors hover:text-brand-dark"
                  >
                    View Details
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
