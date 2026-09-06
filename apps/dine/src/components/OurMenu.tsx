const menuItems = [
  {
    name: 'Bruschetta',
    description: 'Toasted bread with fresh tomatoes, basil, and olive oil.',
    price: 12,
  },
  {
    name: 'Caesar Salad',
    description: 'Crisp romaine lettuce with parmesan and croutons.',
    price: 14,
  },
  {
    name: 'Mushroom Soup',
    description: 'Creamy mushroom soup with truffle oil drizzle.',
    price: 11,
  },
  {
    name: 'Chicken Parmesan',
    description: 'Breaded chicken topped with marinara and melted cheese.',
    price: 22,
  },
  {
    name: 'Pasta Carbonara',
    description: 'Classic Italian pasta with pancetta and egg sauce.',
    price: 20,
  },
  {
    name: 'Tiramisu',
    description: 'Traditional Italian dessert with espresso-soaked ladyfingers.',
    price: 10,
  },
]

export function OurMenu() {
  return (
    <section id="our-menu" className="bg-gray-50 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center text-3xl font-bold uppercase tracking-wide text-gray-900">
          Our Menu
        </h2>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {menuItems.map((item) => (
            <article key={item.name} className="rounded-xl bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
                <span className="text-primary font-bold">${item.price}</span>
              </div>
              <p className="mt-2 text-sm text-gray-600">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
