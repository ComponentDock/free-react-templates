const dishes = [
  {
    name: 'Organic tomato salad, gorgonzola cheese, capers',
    price: '$11.50',
    image: 'https://picsum.photos/seed/tavern-dish1/600/400',
  },
  {
    name: 'Baked broccoli',
    price: '$12.00',
    image: 'https://picsum.photos/seed/tavern-dish2/600/400',
  },
  {
    name: 'Spicy meatballs',
    price: '$11.00',
    image: 'https://picsum.photos/seed/tavern-dish3/600/400',
  },
  {
    name: 'Eggplant parmigiana',
    price: '$12.00',
    image: 'https://picsum.photos/seed/tavern-dish4/600/400',
  },
]

export function SpecialDishes() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="mb-10 text-center text-3xl font-bold">Special Dishes</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {dishes.map((dish) => (
            <div
              key={dish.name}
              className="overflow-hidden border border-gray-100 bg-white shadow-sm"
            >
              <img
                src={dish.image}
                alt={dish.name}
                className="h-52 w-full object-cover"
                loading="lazy"
              />
              <div className="p-4">
                <h3 className="mb-1 text-base font-semibold">{dish.name}</h3>
                <p className="text-sm font-bold text-flame-600">{dish.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
