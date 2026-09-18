const categories = [
  { name: 'Fresh Flower', items: 25, seed: 'petal-cat1' },
  { name: 'Succulent plants', items: 162, seed: 'petal-cat2' },
  { name: 'Cactus plants', items: 58, seed: 'petal-cat3' },
  { name: 'Furniture tree', items: 25, seed: 'petal-cat4' },
]

export function Categories() {
  return (
    <section className="bg-white py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {categories.map(({ name, items, seed }) => (
            <a
              key={name}
              href="#shop"
              className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-200"
            >
              <img
                src={`https://picsum.photos/seed/${seed}/400/300`}
                alt={name}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="relative z-10 p-4">
                <h4 className="text-lg font-bold text-white">{name}</h4>
                <span className="text-sm text-gray-200">( {items} items )</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
