const dishes = [
  {
    price: '$11.50',
    name: 'Organic tomato salad, gorgonzola cheese, capers',
    image: 'foodnest-dish-a',
  },
  { price: '$12.00', name: 'Baked broccoli', image: 'foodnest-dish-b' },
  { price: '$11.00', name: 'Spicy meatballs', image: 'foodnest-dish-c' },
  { price: '$12.00', name: 'Eggplant parmigiana', image: 'foodnest-dish-d' },
  { price: '$14.50', name: 'Grilled salmon fillet', image: 'foodnest-dish-e' },
  { price: '$13.00', name: 'Truffle mushroom risotto', image: 'foodnest-dish-f' },
] as const

export function SpecialMenu() {
  return (
    <section className="py-16">
      <div className="mb-12 text-center">
        <h2 className="mb-4 text-3xl font-bold text-heading">Special Menu</h2>
      </div>
      <div className="mx-auto max-w-6xl overflow-x-auto px-4 sm:px-6">
        <div className="flex gap-6 pb-4" style={{ minWidth: 'max-content' }}>
          {dishes.map((dish) => (
            <a
              key={dish.name}
              href="#"
              className="group relative block w-64 shrink-0 overflow-hidden"
            >
              <img
                src={`https://picsum.photos/seed/${dish.image}/400/500`}
                alt={dish.name}
                className="h-80 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/70 to-transparent p-4">
                <p className="mb-1 text-lg font-bold text-brand">{dish.price}</p>
                <h3 className="text-sm font-semibold text-white">{dish.name}</h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
