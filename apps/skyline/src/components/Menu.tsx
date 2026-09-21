const categories = [
  {
    name: 'Appetizer',
    items: [
      { name: 'Bruschetta al Pomodoro', price: '$12' },
      { name: 'Calamari Fritti', price: '$14' },
      { name: 'Caprese Salad', price: '$11' },
    ],
  },
  {
    name: 'Main Courses',
    items: [
      { name: 'Grilled Salmon Fillet', price: '$28' },
      { name: 'Filet Mignon', price: '$36' },
      { name: 'Truffle Risotto', price: '$24' },
    ],
  },
  {
    name: 'Drinks & Juices',
    items: [
      { name: 'Fresh Squeezed OJ', price: '$6' },
      { name: 'Craft Lemonade', price: '$5' },
      { name: 'Espresso Martini', price: '$14' },
    ],
  },
] as const

export function Menu() {
  return (
    <section id="menu" className="bg-paper py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <h2 className="font-display text-4xl font-bold text-ink">Our Menu</h2>
            <p className="mt-4 text-mist">
              Discover our carefully crafted dishes made with the freshest ingredients, prepared by
              our expert chefs.
            </p>
            <a
              href="#menu"
              className="mt-6 inline-block rounded border border-brand bg-brand px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-transparent hover:text-brand"
            >
              See Full Menu
            </a>
          </div>

          <div className="lg:col-span-3">
            {categories.map((category) => (
              <div key={category.name} className="mb-8">
                <h3 className="font-display text-xl font-bold text-ink">{category.name}</h3>
                <div className="mt-3 border-t border-dotted border-gray-300">
                  {category.items.map((item) => (
                    <div
                      key={item.name}
                      className="flex items-baseline justify-between border-b border-dotted border-gray-200 py-3"
                    >
                      <span className="text-mist">{item.name}</span>
                      <span className="ml-4 shrink-0 font-display font-bold text-brand">
                        {item.price}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
