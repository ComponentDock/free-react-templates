import { MapPin, BedDouble, Bath } from 'lucide-react'

interface FeaturedProperty {
  id: number
  name: string
  price: string
  address: string
  beds: number
  baths: number
  image: string
}

const featured: FeaturedProperty[] = [
  {
    id: 1,
    name: 'Home in Merrick Way',
    price: '$ 289/month',
    address: '3 Middle Winchendon Rd, Rindge, NH',
    beds: 3,
    baths: 2,
    image: 'https://picsum.photos/seed/dwelling-feat-1/400/280',
  },
  {
    id: 2,
    name: 'Sunset Valley Villa',
    price: '$ 450/month',
    address: '12 Sunset Blvd, Los Angeles, CA',
    beds: 4,
    baths: 3,
    image: 'https://picsum.photos/seed/dwelling-feat-2/400/280',
  },
  {
    id: 3,
    name: 'Downtown Loft',
    price: '$ 195/month',
    address: '88 Congress Ave, Austin, TX',
    beds: 2,
    baths: 1,
    image: 'https://picsum.photos/seed/dwelling-feat-3/400/280',
  },
  {
    id: 4,
    name: 'Lakeside Retreat',
    price: '$ 520/month',
    address: '42 Lake Shore Dr, Chicago, IL',
    beds: 3,
    baths: 2,
    image: 'https://picsum.photos/seed/dwelling-feat-4/400/280',
  },
]

function FeaturedCard({ property }: { property: FeaturedProperty }) {
  return (
    <div className="group overflow-hidden rounded-lg bg-white shadow-md transition-shadow hover:shadow-lg">
      <div className="relative h-48 overflow-hidden">
        <img
          src={property.image}
          alt={property.name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <span className="absolute bottom-3 left-3 rounded bg-navy/80 px-3 py-1 font-heading text-sm font-bold text-white">
          {property.price}
        </span>
      </div>
      <div className="p-4">
        <h4 className="font-heading text-base font-bold text-text-dark">{property.name}</h4>
        <p className="mt-1 flex items-center gap-1 text-xs text-text-muted">
          <MapPin size={12} />
          {property.address}
        </p>
        <div className="mt-2 flex items-center gap-4 text-xs text-text-muted">
          <span className="flex items-center gap-1">
            <BedDouble size={14} /> {property.beds} Beds
          </span>
          <span className="flex items-center gap-1">
            <Bath size={14} /> {property.baths} Baths
          </span>
        </div>
      </div>
    </div>
  )
}

export function FeaturedProperties() {
  return (
    <section className="bg-bg-light py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="font-heading text-sm font-semibold uppercase tracking-widest text-brand">
            Featured
          </h2>
          <h3 className="mt-2 font-heading text-3xl font-bold text-text-dark">Property</h3>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((p) => (
            <FeaturedCard key={p.id} property={p} />
          ))}
        </div>
      </div>
    </section>
  )
}
