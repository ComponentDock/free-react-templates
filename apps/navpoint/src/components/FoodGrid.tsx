const FOOD_ITEMS = [
  { tag: 'Fusion', seed: 'navpoint-food1', span: 'col-span-2 row-span-2' },
  { tag: 'Asian', seed: 'navpoint-food2', span: 'col-span-1 row-span-1' },
  { tag: 'Breakfast', seed: 'navpoint-food3', span: 'col-span-1 row-span-1' },
  { tag: 'Pizza', seed: 'navpoint-food4', span: 'col-span-1 row-span-1' },
  { tag: 'Vine & Dine', seed: 'navpoint-food5', span: 'col-span-2 row-span-1' },
  { tag: 'Coffee', seed: 'navpoint-food6', span: 'col-span-1 row-span-1' },
  { tag: 'Fine Dine', seed: 'navpoint-food7', span: 'col-span-2 row-span-2' },
] as const

export function FoodGrid() {
  return (
    <section className="py-20 max-w-6xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-semibold text-text-primary text-center mb-12">
        Find the best food near you
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
        {FOOD_ITEMS.map((item) => (
          <a
            key={item.tag}
            href="#"
            className={`relative group overflow-hidden rounded-lg ${item.span}`}
          >
            <img
              src={`https://picsum.photos/seed/${item.seed}/600/400`}
              alt={item.tag}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
            <div className="absolute top-4 left-4">
              <span className="bg-white/90 text-text-primary text-xs font-semibold px-3 py-1 rounded">
                {item.tag}
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
