import { Bed, Bath, Maximize, MapPin } from 'lucide-react'

interface PropertyCard {
  image: string
  price: string
  name: string
  location: string
  beds: number
  baths: number
  sqft: number
  agent: string
  agentAvatar: string
}

const properties: PropertyCard[] = [
  {
    image: 'https://picsum.photos/seed/havenridge-property-1/400/300',
    price: '$245,000',
    name: 'Sunset Villa',
    location: 'Los Angeles, CA',
    beds: 3,
    baths: 2,
    sqft: 1850,
    agent: 'James Wilson',
    agentAvatar: 'https://picsum.photos/seed/havenridge-agent-1/80/80',
  },
  {
    image: 'https://picsum.photos/seed/havenridge-property-2/400/300',
    price: '$189,000',
    name: 'Maple Residence',
    location: 'Portland, OR',
    beds: 2,
    baths: 1,
    sqft: 1200,
    agent: 'Sarah Thompson',
    agentAvatar: 'https://picsum.photos/seed/havenridge-agent-2/80/80',
  },
  {
    image: 'https://picsum.photos/seed/havenridge-property-3/400/300',
    price: '$420,000',
    name: 'Riverside Mansion',
    location: 'Austin, TX',
    beds: 5,
    baths: 4,
    sqft: 3200,
    agent: 'Michael Brown',
    agentAvatar: 'https://picsum.photos/seed/havenridge-agent-3/80/80',
  },
  {
    image: 'https://picsum.photos/seed/havenridge-property-4/400/300',
    price: '$312,000',
    name: 'Greenfield Estate',
    location: 'Denver, CO',
    beds: 4,
    baths: 3,
    sqft: 2400,
    agent: 'Emily Davis',
    agentAvatar: 'https://picsum.photos/seed/havenridge-agent-4/80/80',
  },
]

export function FeaturedProperties() {
  return (
    <section id="agent" className="bg-mist py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-10 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary-500">
            Featured
          </p>
          <h2 className="text-3xl font-extrabold text-ink">Featured Properties</h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {properties.map((prop) => (
            <div
              key={prop.name}
              className="overflow-hidden rounded-lg bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="relative">
                <img src={prop.image} alt={prop.name} className="h-48 w-full object-cover" />
                <span className="absolute left-3 top-3 rounded bg-primary-500 px-3 py-1 text-xs font-bold text-white">
                  {prop.price}
                </span>
              </div>

              <div className="p-4">
                <div className="mb-3 flex items-center gap-2">
                  <img
                    src={prop.agentAvatar}
                    alt={prop.agent}
                    className="h-8 w-8 rounded-full object-cover"
                  />
                  <span className="text-xs font-semibold text-ink">{prop.agent}</span>
                </div>

                <h3 className="mb-1 text-lg font-bold text-ink">{prop.name}</h3>
                <p className="mb-3 flex items-center gap-1 text-sm text-smoke">
                  <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                  {prop.location}
                </p>

                <div className="flex items-center gap-4 border-t border-gray-100 pt-3 text-sm text-smoke">
                  <span className="flex items-center gap-1">
                    <Bed className="h-4 w-4" aria-hidden="true" />
                    {prop.beds} Beds
                  </span>
                  <span className="flex items-center gap-1">
                    <Bath className="h-4 w-4" aria-hidden="true" />
                    {prop.baths} Baths
                  </span>
                  <span className="flex items-center gap-1">
                    <Maximize className="h-4 w-4" aria-hidden="true" />
                    {prop.sqft} Sqft
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
