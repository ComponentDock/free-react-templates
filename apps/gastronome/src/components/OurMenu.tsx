const categories = [
  { label: 'Lunch', image: 'https://picsum.photos/seed/gastro-lunch/600/400' },
  { label: 'Dinner', image: 'https://picsum.photos/seed/gastro-dinner/600/400' },
  { label: 'Happy Hour', image: 'https://picsum.photos/seed/gastro-happy/600/400' },
  { label: 'Drink', image: 'https://picsum.photos/seed/gastro-drink/600/400' },
  { label: 'Starters', image: 'https://picsum.photos/seed/gastro-starters/600/400' },
  { label: 'Dessert', image: 'https://picsum.photos/seed/gastro-dessert/600/400' },
]

export function OurMenu() {
  return (
    <section id="menu" className="pattern-bg py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <p className="font-accent text-lg text-brand">Discover</p>
          <h2 className="mt-2 text-4xl font-bold text-white">Our Menu</h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3">
          {/* Large featured image */}
          <div className="group relative overflow-hidden rounded-[10px] md:col-span-2 md:row-span-2">
            <img
              src={categories[0]!.image}
              alt={categories[0]!.label}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/30 transition-colors group-hover:bg-black/50" />
            <button className="absolute bottom-6 left-6 rounded-[10px] bg-brand px-6 py-2 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-text-dark">
              {categories[0]!.label}
            </button>
          </div>

          {/* 2x2 grid of smaller items */}
          {categories.slice(1).map((cat) => (
            <div key={cat.label} className="group relative overflow-hidden rounded-[10px]">
              <img
                src={cat.image}
                alt={cat.label}
                className="h-[200px] w-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/30 transition-colors group-hover:bg-black/50" />
              <button className="absolute bottom-4 left-4 rounded-[10px] bg-brand px-5 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-white hover:text-text-dark">
                {cat.label}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
