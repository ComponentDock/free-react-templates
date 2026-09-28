const dishes = [
  {
    name: 'Grilled Beef',
    price: '$20.00',
    description: 'Far far away, behind the word mountains, far from the countries.',
    image: 'forkful-menu-1',
  },
  {
    name: 'Grilled Chicken',
    price: '$15.00',
    description: 'Far far away, behind the word mountains, far from the countries.',
    image: 'forkful-menu-2',
  },
  {
    name: 'Seafood Platter',
    price: '$30.00',
    description: 'Far far away, behind the word mountains, far from the countries.',
    image: 'forkful-menu-3',
  },
  {
    name: 'Pasta Carbonara',
    price: '$18.00',
    description: 'Far far away, behind the word mountains, far from the countries.',
    image: 'forkful-menu-4',
  },
  {
    name: 'Fresh Salad',
    price: '$12.00',
    description: 'Far far away, behind the word mountains, far from the countries.',
    image: 'forkful-menu-5',
  },
  {
    name: 'Chocolate Cake',
    price: '$10.00',
    description: 'Far far away, behind the word mountains, far from the countries.',
    image: 'forkful-menu-6',
  },
] as const

export function FoodMenu() {
  return (
    <section id="menu" className="bg-white py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-16 text-center">
          <h2 className="font-display text-3xl font-bold italic text-heading sm:text-4xl">
            We serve <span className="text-brand">delicious</span> food
          </h2>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {dishes.map((dish) => (
            <article
              key={dish.name}
              className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:border-brand hover:bg-brand"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={`https://picsum.photos/seed/${dish.image}/400/300`}
                  alt={dish.name}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-xl font-bold text-heading group-hover:text-white">
                    {dish.name}
                  </h3>
                  <span className="font-display text-lg font-bold text-brand group-hover:text-white">
                    {dish.price}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-mist group-hover:text-white/80">
                  {dish.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
