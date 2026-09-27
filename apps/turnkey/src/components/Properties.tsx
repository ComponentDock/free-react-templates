import { Bed, Bath, Maximize } from 'lucide-react'

const properties = [
  {
    image: 'https://picsum.photos/seed/turnkey-p1/400/300',
    badge: 'For Sale',
    title: '04 Bed Duplex',
    price: '$3.5M',
    beds: 4,
    baths: 3,
    area: '750sqm',
  },
  {
    image: 'https://picsum.photos/seed/turnkey-p2/400/300',
    badge: 'For Rent',
    title: '03 Bed Apartment',
    price: '$2.1M',
    beds: 3,
    baths: 2,
    area: '520sqm',
  },
  {
    image: 'https://picsum.photos/seed/turnkey-p3/400/300',
    badge: 'For Sale',
    title: '02 Bed Studio',
    price: '$1.8M',
    beds: 2,
    baths: 1,
    area: '350sqm',
  },
]

export function Properties() {
  return (
    <section id="properties" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-heading mb-3">Properties in Various Cities</h2>
          <p className="text-body max-w-xl mx-auto">
            Who are in extremely love with eco friendly system.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((p) => (
            <div key={p.title} className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="relative">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-56 object-cover"
                  loading="lazy"
                />
                <span className="absolute top-4 left-4 bg-brand text-white text-xs px-3 py-1 rounded">
                  {p.badge}
                </span>
              </div>
              <div className="p-5">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-lg font-medium text-heading">{p.title}</h3>
                  <span className="text-brand font-semibold">{p.price}</span>
                </div>
                <div className="flex gap-4 text-sm text-body">
                  <span className="flex items-center gap-1">
                    <Bed size={14} /> Bed: {p.beds}
                  </span>
                  <span className="flex items-center gap-1">
                    <Bath size={14} /> Bath: {p.baths}
                  </span>
                  <span className="flex items-center gap-1">
                    <Maximize size={14} /> Area: {p.area}
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
