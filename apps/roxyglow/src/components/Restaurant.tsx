const menuItems = [
  {
    name: 'Grilled Salmon',
    price: '$28',
    description: 'Fresh Atlantic salmon with seasonal vegetables and lemon butter sauce.',
    image: 'roxyglow-food1',
  },
  {
    name: 'Filet Mignon',
    price: '$45',
    description: 'Prime beef tenderloin with truffle mashed potatoes and red wine reduction.',
    image: 'roxyglow-food2',
  },
  {
    name: 'Lobster Risotto',
    price: '$38',
    description: 'Creamy arborio rice with succulent lobster and parmesan shavings.',
    image: 'roxyglow-food3',
  },
  {
    name: 'Tiramisu',
    price: '$14',
    description: 'Classic Italian dessert with espresso-soaked ladyfingers and mascarpone cream.',
    image: 'roxyglow-food4',
  },
]

export function Restaurant() {
  return (
    <section id="restaurant" className="py-20">
      <div className="mx-auto max-w-7xl px-4">
        {/* Title */}
        <div className="mb-12 text-center">
          <p className="mb-2 text-xs font-medium uppercase tracking-widest text-brand">Our Menu</p>
          <h2 className="font-heading text-3xl font-bold text-ink md:text-4xl">Restaurant</h2>
        </div>

        {/* Menu grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {menuItems.map((item) => (
            <div key={item.name} className="flex gap-4">
              <img
                src={`https://picsum.photos/seed/${item.image}/200/200`}
                alt={item.name}
                className="h-24 w-24 flex-shrink-0 object-cover"
                loading="lazy"
              />
              <div>
                <div className="mb-1 flex items-baseline justify-between">
                  <h4 className="font-heading text-lg font-semibold text-ink">{item.name}</h4>
                  <span className="font-heading text-lg font-bold text-brand">{item.price}</span>
                </div>
                <p className="text-sm text-body">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
