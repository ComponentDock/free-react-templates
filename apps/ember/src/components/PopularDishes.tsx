const dishes = [
  {
    name: 'Indian Burger',
    description: 'A flavorful blend of spiced patty with fresh toppings on a toasted bun.',
    image: 'https://picsum.photos/seed/ember-dish1/400/300',
  },
  {
    name: 'Creamy Noodles',
    description: 'Rich and creamy pasta tossed with herbs and a touch of parmesan.',
    image: 'https://picsum.photos/seed/ember-dish2/400/300',
  },
  {
    name: 'Honey Meat',
    description: 'Tender glazed meat with a sweet honey finish and aromatic spices.',
    image: 'https://picsum.photos/seed/ember-dish3/400/300',
  },
  {
    name: 'Garden Fresh Salad',
    description: 'Crisp seasonal vegetables with a light vinaigrette dressing.',
    image: 'https://picsum.photos/seed/ember-dish4/400/300',
  },
] as const

export function PopularDishes() {
  return (
    <section id="about" className="bg-paper py-20 transition-colors dark:bg-gray-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <span className="font-display text-sm font-semibold uppercase tracking-[0.25em] text-brand">
            Popular Dishes
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-ink dark:text-white">
            Our Exclusive Items
          </h2>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {dishes.map((dish) => (
            <article
              key={dish.name}
              className="group overflow-hidden rounded-2xl bg-white shadow-md transition-shadow hover:shadow-xl dark:bg-gray-800"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg font-bold text-ink dark:text-white">
                  {dish.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-mist dark:text-gray-400">
                  {dish.description}
                </p>
                <a
                  href="#menu"
                  className="mt-4 inline-block text-sm font-semibold uppercase tracking-wide text-brand hover:text-brand-dark"
                >
                  Read More →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
