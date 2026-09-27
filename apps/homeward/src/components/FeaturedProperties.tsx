import { Bed, Bath, Car, Maximize } from 'lucide-react'

const properties = [
  {
    id: 1,
    image: 'https://picsum.photos/seed/homeward-prop1/600/400',
    tag: 'For Sale',
    price: '$1,250,000',
    address: '198 West 21th Street, Suite 721',
    sqft: '1,200',
    beds: 3,
    baths: 2,
    garages: 1,
  },
  {
    id: 2,
    image: 'https://picsum.photos/seed/homeward-prop2/600/400',
    tag: 'For Rent',
    price: '$3,500/mo',
    address: '42 Rosewood Avenue, Brooklyn',
    sqft: '950',
    beds: 2,
    baths: 1,
    garages: 1,
  },
  {
    id: 3,
    image: 'https://picsum.photos/seed/homeward-prop3/600/400',
    tag: 'For Sale',
    price: '$890,000',
    address: '77 Sunset Blvd, Apt 14',
    sqft: '1,400',
    beds: 4,
    baths: 3,
    garages: 2,
  },
]

export function FeaturedProperties() {
  return (
    <section id="listings" className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-accent">
            The Best Deals
          </p>
          <h2 className="text-3xl font-bold text-heading sm:text-4xl">Featured Properties</h2>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {properties.map((prop) => (
            <article
              key={prop.id}
              className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="relative">
                <img
                  src={prop.image}
                  alt={`Property at ${prop.address}`}
                  className="h-52 w-full object-cover"
                />
                <span className="absolute left-3 top-3 rounded bg-accent px-3 py-1 text-xs font-bold uppercase text-white">
                  {prop.tag}
                </span>
              </div>
              <div className="p-5">
                <p className="text-lg font-bold text-price">{prop.price}</p>
                <p className="mt-1 text-sm text-body">{prop.address}</p>
                <div className="mt-4 flex items-center gap-4 border-t border-gray-100 pt-4 text-xs text-body">
                  <span className="flex items-center gap-1">
                    <Maximize className="h-3.5 w-3.5" aria-hidden="true" />
                    {prop.sqft} sqft
                  </span>
                  <span className="flex items-center gap-1">
                    <Bed className="h-3.5 w-3.5" aria-hidden="true" />
                    {prop.beds} Beds
                  </span>
                  <span className="flex items-center gap-1">
                    <Bath className="h-3.5 w-3.5" aria-hidden="true" />
                    {prop.baths} Baths
                  </span>
                  <span className="flex items-center gap-1">
                    <Car className="h-3.5 w-3.5" aria-hidden="true" />
                    {prop.garages} Garages
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
