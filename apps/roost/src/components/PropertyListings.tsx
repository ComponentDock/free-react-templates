import { MapPin, BedDouble, Bath } from 'lucide-react'

const properties = [
  {
    image: 'https://picsum.photos/seed/roost-prop1/400/300',
    title: 'Fatima Subdivision',
    price: '$120,000',
    location: 'New York',
    beds: 3,
    baths: 2,
    type: 'sale',
  },
  {
    image: 'https://picsum.photos/seed/roost-prop2/400/300',
    title: 'Fatima Subdivision',
    price: '$120/mo',
    location: 'New York',
    beds: 3,
    baths: 2,
    type: 'rent',
  },
  {
    image: 'https://picsum.photos/seed/roost-prop3/400/300',
    title: 'Fatima Subdivision',
    price: '$230,000',
    location: 'New York',
    beds: 3,
    baths: 2,
    type: 'sale',
  },
  {
    image: 'https://picsum.photos/seed/roost-prop4/400/300',
    title: 'Fatima Subdivision',
    price: '$120,000',
    location: 'New York',
    beds: 3,
    baths: 2,
    type: 'sale',
  },
]

export function PropertyListings() {
  return (
    <section id="listing" className="bg-light-100 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-3xl font-bold text-gray-900">Our Property</h2>
          <p className="text-gray-500">Explore our latest property listings</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {properties.map((prop, i) => (
            <div
              key={`${prop.title}-${i}`}
              className="overflow-hidden rounded-lg bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <img src={prop.image} alt={prop.title} className="h-48 w-full object-cover" />
              <div className="p-4">
                <h3 className="mb-1 font-semibold text-gray-900">{prop.title}</h3>
                <p className="mb-2 text-xl font-bold text-primary-600">{prop.price}</p>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {prop.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <BedDouble className="h-4 w-4" />
                    {prop.beds} beds
                  </span>
                  <span className="flex items-center gap-1">
                    <Bath className="h-4 w-4" />
                    {prop.baths} bath
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
