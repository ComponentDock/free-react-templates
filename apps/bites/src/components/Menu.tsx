const menuItems = [
  {
    name: 'Wonton with French Fries',
    price: '$5.00',
    description: 'Wonton / Potato / Fries / Sauce',
  },
  {
    name: 'Roasted Red Potatoes with Rosemary',
    price: '$5.00',
    description: 'Potato / Rosemary / Olive Oil',
  },
  {
    name: 'Bacon-Wrapped Shrimp with Garlic',
    price: '$7.50',
    description: 'Shrimp / Bacon / Garlic Butter',
  },
  {
    name: 'Apple Smoked Chicken with White Sauce',
    price: '$8.00',
    description: 'Chicken / Apple Smoke / Cream',
  },
  {
    name: 'Imported Oysters Grill (5 Pieces)',
    price: '$12.00',
    description: 'Oysters / Lemon / Herb Butter',
  },
  { name: 'Grilled Lamb Chops with Mint', price: '$14.00', description: 'Lamb / Mint / Garlic' },
]

export function Menu() {
  return (
    <section id="menu" className="bg-light-bg py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="font-heading text-4xl font-bold text-ink">Our Favourite Menu</h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded bg-brand" />
        </div>
        <div className="grid grid-cols-1 gap-x-12 gap-y-6 md:grid-cols-2">
          {menuItems.map((item) => (
            <div
              key={item.name}
              className="flex items-start justify-between border-b border-border pb-4"
            >
              <div className="pr-4">
                <h3 className="font-heading text-lg font-semibold text-ink">{item.name}</h3>
                <p className="mt-1 text-sm text-body">{item.description}</p>
              </div>
              <span className="shrink-0 font-heading text-lg font-semibold text-brand">
                {item.price}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
