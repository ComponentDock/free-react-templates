import { MapPin, BedDouble, Bath } from 'lucide-react'

interface Property {
  id: number
  title: string
  location: string
  beds: number
  baths: number
  price: string
  image: string
}

const PROPERTIES: Property[] = [
  {
    id: 1,
    title: 'Place perfect for nature lovers',
    location: 'London, England',
    beds: 3,
    baths: 2,
    price: '$76,367',
    image: 'https://picsum.photos/seed/prop1/600/400',
  },
  {
    id: 2,
    title: 'Place perfect for nature lovers',
    location: 'London, England',
    beds: 3,
    baths: 2,
    price: '$76,367',
    image: 'https://picsum.photos/seed/prop2/600/400',
  },
  {
    id: 3,
    title: 'Place perfect for nature lovers',
    location: 'London, England',
    beds: 3,
    baths: 2,
    price: '$76,367',
    image: 'https://picsum.photos/seed/prop3/600/400',
  },
  {
    id: 4,
    title: 'Place perfect for nature lovers',
    location: 'London, England',
    beds: 3,
    baths: 2,
    price: '$76,367',
    image: 'https://picsum.photos/seed/prop4/600/400',
  },
  {
    id: 5,
    title: 'Place perfect for nature lovers',
    location: 'London, England',
    beds: 3,
    baths: 2,
    price: '$76,367',
    image: 'https://picsum.photos/seed/prop5/600/400',
  },
  {
    id: 6,
    title: 'Place perfect for nature lovers',
    location: 'London, England',
    beds: 3,
    baths: 2,
    price: '$76,367',
    image: 'https://picsum.photos/seed/prop6/600/400',
  },
]

export function PropertyListings() {
  return (
    <section id="property" className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <h2 className="mb-12 text-3xl font-bold text-heading">Searching for the Best Places?</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {PROPERTIES.map((prop) => (
            <div
              key={prop.id}
              className="group overflow-hidden rounded-lg bg-white shadow-md transition-shadow hover:shadow-lg"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={prop.image}
                  alt={prop.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <h3 className="mb-2 text-lg font-semibold text-heading">{prop.title}</h3>
                <p className="mb-3 flex items-center gap-1 text-sm text-body">
                  <MapPin size={14} className="text-primary" />
                  {prop.location}
                </p>
                <div className="flex items-center justify-between border-t border-gray-100 pt-3">
                  <div className="flex items-center gap-4 text-sm text-body">
                    <span className="flex items-center gap-1">
                      <BedDouble size={14} />
                      {prop.beds} Bed
                    </span>
                    <span className="flex items-center gap-1">
                      <Bath size={14} />
                      {prop.baths} Bath
                    </span>
                  </div>
                  <span className="text-lg font-bold text-primary">{prop.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
