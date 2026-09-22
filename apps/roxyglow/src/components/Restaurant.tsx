const menuItems = [
  {
    name: 'Grilled Salmon',
    price: '$32',
    description: 'Fresh Atlantic salmon with herbs and lemon butter sauce.',
    image: 'https://picsum.photos/seed/roxyglow-food1/400/300',
  },
  {
    name: 'Filet Mignon',
    price: '$45',
    description: 'Premium beef tenderloin with truffle mashed potatoes.',
    image: 'https://picsum.photos/seed/roxyglow-food2/400/300',
  },
  {
    name: 'Lobster Risotto',
    price: '$38',
    description: 'Creamy arborio rice with butter-poached lobster tail.',
    image: 'https://picsum.photos/seed/roxyglow-food3/400/300',
  },
  {
    name: 'Mediterranean Salad',
    price: '$18',
    description: 'Mixed greens with feta, olives, and sun-dried tomatoes.',
    image: 'https://picsum.photos/seed/roxyglow-food4/400/300',
  },
] as const

export function Restaurant() {
  return (
    <section id="restaurant" className="bg-paper-alt py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <h2 className="font-display text-3xl font-bold text-ink md:text-4xl">Restaurant</h2>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {menuItems.map((item) => (
            <div key={item.name} className="flex gap-4">
              <img
                src={item.image}
                alt={item.name}
                className="h-24 w-24 flex-shrink-0 object-cover"
              />
              <div>
                <div className="flex items-baseline justify-between">
                  <h3 className="font-display text-lg font-semibold text-ink">{item.name}</h3>
                  <span className="text-brand font-semibold">{item.price}</span>
                </div>
                <p className="mt-1 text-sm text-mist">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
