const menuItems = [
  {
    title: 'Grilled Beef with Potatoes',
    category: 'Main Course',
    price: '$29',
    image: 'https://picsum.photos/seed/solace-food1/400/300',
  },
  {
    title: 'Ultimate Overload',
    category: 'Specialty',
    price: '$45',
    image: 'https://picsum.photos/seed/solace-food2/400/300',
  },
  {
    title: 'Ham & Pineapple',
    category: 'Pizza',
    price: '$22',
    image: 'https://picsum.photos/seed/solace-food3/400/300',
  },
  {
    title: 'Fresh Seafood Platter',
    category: 'Seafood',
    price: '$55',
    image: 'https://picsum.photos/seed/solace-food4/400/300',
  },
]

export function RestaurantBar() {
  return (
    <section id="resto-bar" className="py-20">
      <div className="mx-auto max-w-6xl px-4 text-center">
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-brand">
          Delicacies
        </p>
        <h2 className="font-heading text-3xl font-bold text-ink md:text-4xl">Restaurant & Bar</h2>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {menuItems.map(({ title, category, price, image }) => (
            <div key={title} className="text-left">
              <div className="h-48 overflow-hidden rounded-lg">
                <img
                  src={image}
                  alt={title}
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                />
              </div>
              <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-brand">
                {category}
              </p>
              <h3 className="mt-1 font-heading text-lg font-bold text-ink">{title}</h3>
              <p className="mt-1 text-sm font-bold text-brand">{price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
