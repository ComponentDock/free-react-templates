const dishes = [
  {
    name: 'Main Course',
    description: 'Chicken steak with garlic bread & fries',
    seed: 'skyline-dish-1',
  },
  {
    name: 'Signature Pasta',
    description: 'Lobster ravioli in saffron cream sauce',
    seed: 'skyline-dish-2',
  },
  {
    name: 'Dessert Platter',
    description: 'Chocolate fondant with vanilla gelato',
    seed: 'skyline-dish-3',
  },
] as const

export function FeaturedDishes() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="mb-12 text-center font-display text-4xl font-bold text-ink">
          Featured Dishes
        </h2>
        <div className="grid gap-6 sm:grid-cols-3">
          {dishes.map((dish) => (
            <div key={dish.name} className="group relative overflow-hidden rounded-lg">
              <img
                src={`https://picsum.photos/seed/${dish.seed}/400/300`}
                alt={dish.name}
                loading="lazy"
                className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 text-center text-white transition-colors duration-300 group-hover:bg-black/60">
                <h3 className="font-display text-xl font-bold">{dish.name}</h3>
                <p className="mt-2 text-sm text-gray-300">{dish.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
