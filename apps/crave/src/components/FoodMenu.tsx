const menuItems = [
  { name: 'Roasted Marrow', price: 32, desc: 'Rich and savory bone marrow' },
  { name: 'Grilled Salmon', price: 38, desc: 'Atlantic salmon, herb crust' },
  { name: 'Truffle Risotto', price: 28, desc: 'Creamy arborio, black truffle' },
  { name: 'Wagyu Steak', price: 52, desc: 'A5 Japanese wagyu, seared' },
  { name: 'Lobster Ravioli', price: 34, desc: 'Handmade pasta, butter sauce' },
  { name: 'Mushroom Soup', price: 16, desc: 'Wild porcini, truffle oil' },
  { name: 'Caesar Salad', price: 18, desc: 'Romaine, parmesan, croutons' },
  { name: 'Tiramisu', price: 14, desc: 'Classic Italian coffee dessert' },
]

export function FoodMenu() {
  return (
    <section id="menu" className="py-16 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <h4 className="mb-3 font-heading text-2xl font-semibold text-brand">Food Menu</h4>
        <h2 className="mb-12 font-heading text-3xl font-bold text-heading sm:text-4xl lg:text-5xl">
          Delicious food
        </h2>

        <div className="grid gap-4 sm:grid-cols-2">
          {menuItems.map((item) => (
            <div
              key={item.name}
              className="flex items-center gap-4 rounded-lg bg-cream px-5 py-4 transition-colors hover:bg-white hover:shadow-lg"
            >
              <img
                src={`https://picsum.photos/seed/crave-menu-${item.name.replace(/\s/g, '')}/80/80`}
                alt={item.name}
                className="h-16 w-16 flex-shrink-0 rounded-full object-cover"
                loading="lazy"
              />
              <div className="flex-1">
                <div className="flex items-baseline justify-between">
                  <h4 className="font-heading text-base font-bold text-heading">{item.name}</h4>
                  <span className="ml-2 flex-shrink-0 font-sans text-base font-bold text-brand">
                    ${item.price}
                  </span>
                </div>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
