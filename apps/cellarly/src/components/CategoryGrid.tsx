const categories = [
  { name: 'Brandy', seed: 'brandy' },
  { name: 'Gin', seed: 'gin' },
  { name: 'Rum', seed: 'rum' },
  { name: 'Tequila', seed: 'tequila' },
  { name: 'Vodka', seed: 'vodka' },
  { name: 'Whiskey', seed: 'whiskey' },
]

export function CategoryGrid() {
  return (
    <section className="py-12">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-6">
          {categories.map((cat) => (
            <a
              key={cat.name}
              href="#products"
              className="group flex flex-col items-center text-center transition-transform hover:scale-105"
            >
              <div className="mb-3 h-24 w-24 overflow-hidden rounded-full bg-bg-light dark:bg-gray-800">
                <img
                  src={`https://picsum.photos/seed/${cat.seed}/200/200`}
                  alt={cat.name}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <h3 className="font-heading text-sm font-semibold text-heading dark:text-white">
                {cat.name}
              </h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
