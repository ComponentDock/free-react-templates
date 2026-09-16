import { MapPin } from 'lucide-react'

interface Property {
  id: number
  title: string
  location: string
  seller: string
  sqft: string
  garage: string
  baths: string
  beds: string
  price: string
  type: 'rent' | 'sale'
  image: string
}

const properties: Property[] = [
  {
    id: 1,
    title: '7660 Nikolaus Burg',
    location: 'GA 125, New York',
    seller: 'Alex Cross',
    sqft: '1420 m2',
    garage: '2',
    baths: '5',
    beds: '6',
    price: '$1,599/month',
    type: 'rent',
    image: 'https://picsum.photos/seed/dwellix-prop1/600/400',
  },
  {
    id: 2,
    title: '736 Hauck Alley',
    location: 'GA 125, New York',
    seller: 'Alex Cross',
    sqft: '1420 m2',
    garage: '2',
    baths: '5',
    beds: '6',
    price: '$2,120,000',
    type: 'sale',
    image: 'https://picsum.photos/seed/dwellix-prop2/600/400',
  },
  {
    id: 3,
    title: '170 Center Park',
    location: 'GA 125, New York',
    seller: 'Alex Cross',
    sqft: '1420 m2',
    garage: '2',
    baths: '5',
    beds: '6',
    price: '$1,599/month',
    type: 'rent',
    image: 'https://picsum.photos/seed/dwellix-prop3/600/400',
  },
  {
    id: 4,
    title: '58 Treutel Shores',
    location: 'GA 125, New York',
    seller: 'Alex Cross',
    sqft: '1420 m2',
    garage: '2',
    baths: '5',
    beds: '6',
    price: '$2,120,000',
    type: 'sale',
    image: 'https://picsum.photos/seed/dwellix-prop4/600/400',
  },
  {
    id: 5,
    title: '8332 Ramiro Village',
    location: 'GA 125, New York',
    seller: 'Alex Cross',
    sqft: '1420 m2',
    garage: '2',
    baths: '5',
    beds: '6',
    price: '$1,599/month',
    type: 'rent',
    image: 'https://picsum.photos/seed/dwellix-prop5/600/400',
  },
  {
    id: 6,
    title: '221 Leann Suite 473',
    location: 'GA 125, New York',
    seller: 'Alex Cross',
    sqft: '1420 m2',
    garage: '2',
    baths: '5',
    beds: '6',
    price: '$2,120,000',
    type: 'sale',
    image: 'https://picsum.photos/seed/dwellix-prop6/600/400',
  },
]

function PropertyCard({ property }: { property: Property }) {
  return (
    <div className="overflow-hidden rounded-lg bg-white shadow-md transition-shadow hover:shadow-lg">
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={property.image}
          alt={property.title}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>

      {/* Description */}
      <div className="p-5">
        <div className="mb-3 flex items-start justify-between">
          <div>
            <h4 className="text-base font-bold text-heading">{property.title}</h4>
            <p className="flex items-center gap-1 text-sm text-body-text">
              <MapPin className="h-3 w-3" />
              {property.location}
            </p>
          </div>
          <div className="text-right">
            <p className="text-xs text-body-text">Seller:</p>
            <p className="text-sm font-semibold text-heading">{property.seller}</p>
          </div>
        </div>

        {/* Info row */}
        <div className="mb-4 flex flex-wrap gap-4 border-t border-border pt-3 text-xs text-body-text">
          <span>
            Sqft: <strong className="text-heading">{property.sqft}</strong>
          </span>
          <span>
            Garage: <strong className="text-heading">{property.garage}</strong>
          </span>
          <span>
            Baths: <strong className="text-heading">{property.baths}</strong>
          </span>
          <span>
            Beds: <strong className="text-heading">{property.beds}</strong>
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between">
          <span
            className={`rounded px-3 py-1 text-xs font-semibold text-white ${
              property.type === 'rent' ? 'bg-brand' : 'bg-heading'
            }`}
          >
            {property.type === 'rent' ? 'For Rent' : 'For Sale'}
          </span>
          <span className="text-lg font-bold text-heading">{property.price}</span>
        </div>
      </div>
    </div>
  )
}

export function FeaturedProperties() {
  return (
    <section className="bg-body-bg py-16">
      <div className="mx-auto max-w-6xl px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-heading">
            Top New In <span className="text-brand">NewYork</span>
          </h2>
          <p className="mt-2 text-body-text">
            These are the best deals and offers. All in New York City and nearby area.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </section>
  )
}
