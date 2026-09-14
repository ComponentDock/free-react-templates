const PROPERTIES = [
  {
    image: 'https://picsum.photos/seed/prop1/600/400',
    price: '$3,400,000',
    beds: 6,
    baths: 4,
    sqft: '4,250',
    address: '480 12th, Unit 14, San Francisco, CA',
  },
  {
    image: 'https://picsum.photos/seed/prop2/600/400',
    price: '$2,150,000',
    beds: 4,
    baths: 3,
    sqft: '3,100',
    address: '1221 Ashbury St, San Francisco, CA',
  },
  {
    image: 'https://picsum.photos/seed/prop3/600/400',
    price: '$1,890,000',
    beds: 3,
    baths: 2,
    sqft: '2,400',
    address: '750 Market St, Apt 22, San Francisco, CA',
  },
  {
    image: 'https://picsum.photos/seed/prop4/600/400',
    price: '$4,200,000',
    beds: 5,
    baths: 5,
    sqft: '5,800',
    address: '3400 Lake Shore Blvd, Oakland, CA',
  },
]

export function Properties() {
  return (
    <section id="properties" className="py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-8 flex items-end justify-between">
          <h2 className="text-3xl font-bold text-gray-900">Properties</h2>
          <div className="flex gap-2 text-sm text-gray-500">
            <span>Previous</span>
            <span>/</span>
            <span>Next</span>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PROPERTIES.map((prop) => (
            <div key={prop.address} className="overflow-hidden rounded-lg border border-gray-100">
              <img
                src={prop.image}
                alt={`Property at ${prop.address}`}
                className="h-48 w-full object-cover"
              />
              <div className="p-4">
                <div className="mb-2 text-lg font-bold text-primary">{prop.price}</div>
                <div className="mb-2 flex justify-between text-sm text-gray-500">
                  <span>{prop.beds} beds</span>
                  <span>{prop.baths} baths</span>
                  <span>{prop.sqft} sqft.</span>
                </div>
                <div className="text-sm text-gray-400">{prop.address}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <a
            href="#listings"
            className="inline-block rounded-full bg-primary px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
          >
            View All Property Listings
          </a>
        </div>
      </div>
    </section>
  )
}
