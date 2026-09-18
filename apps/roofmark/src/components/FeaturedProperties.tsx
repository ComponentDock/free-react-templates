import { ListingCard } from './ListingCard'

const properties = [
  {
    image: 'https://picsum.photos/seed/roofmark-4/600/400',
    tags: ['House', 'For Sale'],
    price: '$1,200',
    location: '123 Street, New York, USA',
    sqft: 1200,
    beds: 3,
    baths: 2,
    garage: 1,
  },
  {
    image: 'https://picsum.photos/seed/roofmark-5/600/400',
    tags: ['Apartment', 'For Rent'],
    price: '$2,500',
    location: '456 Avenue, Los Angeles, USA',
    sqft: 950,
    beds: 2,
    baths: 2,
    garage: 1,
  },
  {
    image: 'https://picsum.photos/seed/roofmark-6/600/400',
    tags: ['Villa', 'For Sale'],
    price: '$3,800',
    location: '789 Boulevard, Chicago, USA',
    sqft: 2400,
    beds: 4,
    baths: 3,
    garage: 2,
  },
]

export function FeaturedProperties() {
  return (
    <section className="py-20 bg-brand-light">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-brand-secondary text-sm uppercase tracking-widest mb-2">
            The best deals
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-body">Featured Properties</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((prop) => (
            <ListingCard key={prop.location} {...prop} />
          ))}
        </div>
      </div>
    </section>
  )
}
