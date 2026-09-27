const PROPERTIES = [
  {
    id: 1,
    image: 'https://picsum.photos/seed/prop1/600/400',
    badge: 'Sale',
    address: '24 Fifth Ave, New York',
    price: '$450,000',
  },
  {
    id: 2,
    image: 'https://picsum.photos/seed/prop2/600/400',
    badge: 'Rent',
    address: '101 St. John St, New York',
    price: '$2,500/mo',
  },
  {
    id: 3,
    image: 'https://picsum.photos/seed/prop3/600/400',
    badge: 'Sale',
    address: '856 Main Street, Chicago',
    price: '$320,000',
  },
  {
    id: 4,
    image: 'https://picsum.photos/seed/prop4/600/400',
    badge: 'Rent',
    address: '34 Oak Avenue, Houston',
    price: '$1,800/mo',
  },
]

export function RecentProperties() {
  return (
    <section className="py-16 bg-gray-50" aria-label="Recent properties">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-text-dark">Recent Properties</h2>
          <p className="mt-2 text-text-gray">Latest properties available in your area</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {PROPERTIES.map((prop) => (
            <div
              key={prop.id}
              className="group relative overflow-hidden bg-cover bg-center h-64"
              style={{ backgroundImage: `url(${prop.image})` }}
            >
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition" />
              <div className="absolute top-4 left-4">
                <span className="bg-primary text-white text-xs font-bold uppercase px-3 py-1">
                  {prop.badge}
                </span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="text-sm text-white/80">{prop.address}</p>
                <p className="text-xl font-bold text-white mt-1">{prop.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
