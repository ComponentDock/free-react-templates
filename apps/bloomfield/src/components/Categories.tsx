const categories = [
  { name: 'Fresh Flower', count: 25, image: 'https://picsum.photos/seed/bloomfield-cat1/400/300' },
  {
    name: 'Succulent plants',
    count: 162,
    image: 'https://picsum.photos/seed/bloomfield-cat2/400/300',
  },
  { name: 'Cactus plants', count: 58, image: 'https://picsum.photos/seed/bloomfield-cat3/400/300' },
  {
    name: 'Furniture tree',
    count: 25,
    image: 'https://picsum.photos/seed/bloomfield-cat4/400/300',
  },
]

export function Categories() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 sm:grid-cols-2 lg:grid-cols-4 sm:px-6">
        {categories.map(({ name, count, image }) => (
          <a
            key={name}
            href="#shop"
            className="group relative block h-64 overflow-hidden rounded-xl"
          >
            <img
              src={image}
              alt={name}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-4 left-4 text-white">
              <h4 className="text-xl font-bold" style={{ fontFamily: 'var(--font-heading)' }}>
                {name}
              </h4>
              <span className="text-sm opacity-80">( {count} items )</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
