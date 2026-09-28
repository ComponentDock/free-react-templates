const dishes = [
  {
    name: 'Bread Fruit Cheese Sandwich',
    description: 'Bread / Potato / Cheese',
    price: '$5.59',
    image: 'https://picsum.photos/seed/bites-dish1/400/300',
  },
  {
    name: 'Beef Cutlet with Spring Onion',
    description: 'Beef / Onion / Seasoning',
    price: '$8.99',
    image: 'https://picsum.photos/seed/bites-dish2/400/300',
  },
  {
    name: 'Meat with Sauce & Vegetables',
    description: 'Meat / Sauce / Fresh Greens',
    price: '$9.49',
    image: 'https://picsum.photos/seed/bites-dish3/400/300',
  },
]

export function TopDishes() {
  return (
    <section id="about" className="py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="font-heading text-4xl font-bold text-ink">Our Top Rated Dishes</h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded bg-brand" />
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {dishes.map((dish) => (
            <div key={dish.name} className="group text-center">
              <div className="overflow-hidden rounded-lg">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <h3 className="mt-4 font-heading text-xl font-semibold text-ink">{dish.name}</h3>
              <p className="mt-1 text-sm text-body">{dish.description}</p>
              <p className="mt-2 font-heading text-lg font-semibold text-brand">{dish.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
