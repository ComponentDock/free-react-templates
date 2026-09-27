const PLACES = [
  {
    name: 'New York',
    image: 'https://picsum.photos/seed/new-york-place/600/400',
    count: 120,
    span: 'col-span-1 row-span-2',
  },
  {
    name: 'Florida',
    image: 'https://picsum.photos/seed/florida-place/600/300',
    count: 85,
    span: 'col-span-1',
  },
  {
    name: 'San Jose',
    image: 'https://picsum.photos/seed/san-jose-place/600/300',
    count: 42,
    span: 'col-span-1',
  },
  {
    name: 'St Louis',
    image: 'https://picsum.photos/seed/st-louis-place/600/300',
    count: 64,
    span: 'col-span-2',
  },
]

export function PopularPlaces() {
  return (
    <section className="py-16 bg-white" aria-label="Popular places">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-text-dark">Popular Places</h2>
          <p className="mt-2 text-text-gray">Explore properties in popular locations</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[200px]">
          {PLACES.map((place) => (
            <a
              key={place.name}
              href={`#${place.name.toLowerCase().replace(/\s/g, '-')}`}
              className={`group relative overflow-hidden bg-cover bg-center ${place.span}`}
              style={{ backgroundImage: `url(${place.image})` }}
            >
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-xl font-bold text-white">{place.name}</h3>
                <p className="text-sm text-white/80">{place.count} Properties</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
