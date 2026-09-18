const PROPERTIES = [
  {
    id: 1,
    name: 'Harborview\nResidence',
    price: '$285,000',
    location: 'Miami',
    beds: 3,
    baths: 2,
    tag: 'Sale',
    image: 'https://picsum.photos/seed/nestwell-prop1/600/400',
  },
  {
    id: 2,
    name: 'Skyline\nTower',
    price: '$420,000',
    location: 'New York',
    beds: 4,
    baths: 3,
    tag: 'Sale',
    image: 'https://picsum.photos/seed/nestwell-prop2/600/400',
  },
  {
    id: 3,
    name: 'Palm Court\nVilla',
    price: '$3,500/mo',
    location: 'Los Angeles',
    beds: 2,
    baths: 1,
    tag: 'Rent',
    image: 'https://picsum.photos/seed/nestwell-prop3/600/400',
  },
  {
    id: 4,
    name: 'Riverside\nLoft',
    price: '$550,000',
    location: 'Chicago',
    beds: 2,
    baths: 2,
    tag: 'Sale',
    image: 'https://picsum.photos/seed/nestwell-prop4/600/400',
  },
  {
    id: 5,
    name: 'Coastal\nCottage',
    price: '$2,800/mo',
    location: 'San Diego',
    beds: 3,
    baths: 2,
    tag: 'Rent',
    image: 'https://picsum.photos/seed/nestwell-prop5/600/400',
  },
]

export function FeaturedProperties() {
  return (
    <section className="py-16 bg-bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-10 max-w-xl">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-3">Featured Properties</h2>
          <p className="text-text-secondary">
            Explore our handpicked selection of premium properties available for sale and rent.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {PROPERTIES.map((prop) => (
            <div key={prop.id} className="group">
              <div className="relative overflow-hidden rounded-lg mb-3">
                <img
                  src={prop.image}
                  alt={prop.name.replace('\n', ' ')}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute top-3 left-3 bg-brand text-dark text-xs font-bold px-3 py-1 rounded">
                  {prop.tag}
                </span>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                  <h3 className="text-white font-bold text-sm whitespace-pre-line">{prop.name}</h3>
                </div>
              </div>
              <div className="px-1">
                <h4 className="text-lg font-bold text-brand mb-1">{prop.price}</h4>
                <p className="text-text-secondary text-sm">
                  {prop.location} — {prop.beds}bds, {prop.baths}bath
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
