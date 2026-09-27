const CATEGORIES = [
  { name: 'Apartment', image: 'https://picsum.photos/seed/apartment/400/300', count: 120 },
  { name: 'Family Home', image: 'https://picsum.photos/seed/family-home/400/300', count: 85 },
  { name: 'Resort Villas', image: 'https://picsum.photos/seed/resort-villas/400/300', count: 42 },
  { name: 'Office', image: 'https://picsum.photos/seed/office-space/400/300', count: 64 },
]

export function LookingProperty() {
  return (
    <section className="py-16 bg-gray-50" aria-label="Property categories">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-text-dark">Looking Property</h2>
          <p className="mt-2 text-text-gray">Find the type of property you are looking for</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {CATEGORIES.map((cat) => (
            <a
              key={cat.name}
              href={`#${cat.name.toLowerCase().replace(/\s/g, '-')}`}
              className="group relative overflow-hidden h-48 bg-cover bg-center"
              style={{ backgroundImage: `url(${cat.image})` }}
            >
              <div className="absolute inset-0 bg-black/40 group-hover:bg-primary/70 transition duration-300" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                <h3 className="text-lg font-bold">{cat.name}</h3>
                <p className="text-sm text-white/80">{cat.count} Properties</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
