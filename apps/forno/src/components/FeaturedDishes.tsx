const featuredDishes = [
  {
    name: 'Roasted Coffee Beef',
    ingredients: 'Beef, Potatoes, Rice, Tomato',
    image: 'https://picsum.photos/id/425/500/500',
    alt: 'Roasted beef with potatoes and rice',
  },
  {
    name: 'Honey Glazed Duck',
    ingredients: 'Duck, Honey, Thyme, Pepper',
    image: 'https://picsum.photos/id/312/500/500',
    alt: 'Honey glazed duck with herbs',
  },
  {
    name: 'Berry Compote Tart',
    ingredients: 'Berries, Cream, Butter, Sugar',
    image: 'https://picsum.photos/id/429/500/500',
    alt: 'Berry compote tart with cream',
  },
  {
    name: 'Herbal Tea Pairing',
    ingredients: 'Tea, Mint, Citrus, Honey',
    image: 'https://picsum.photos/id/225/500/500',
    alt: 'Herbal tea pairing with citrus',
  },
] as const

/**
 * FeaturedDishes — the four-card strip right below the hero (source
 * `.featured-menus` row): square food photo + dish name + ingredient tags.
 * The demo repeats one dish ×4; the recreation shows four distinct dishes.
 */
export function FeaturedDishes() {
  return (
    <section aria-label="Featured dishes" className="bg-white py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredDishes.map((dish) => (
            <article
              key={dish.name}
              className="group rounded-md bg-white text-center shadow-sm transition-shadow hover:shadow-lg"
            >
              <img
                src={dish.image}
                alt={dish.alt}
                loading="lazy"
                className="aspect-square w-full rounded-md object-cover"
              />
              <h3 className="mt-5 text-lg font-semibold text-gray-900">{dish.name}</h3>
              <p className="mt-2 pb-5 text-sm text-gray-600">
                {dish.ingredients.split(', ').map((ingredient, index) => (
                  <span key={ingredient} className={index === 0 ? 'text-primary-500' : undefined}>
                    {ingredient}
                    {index < dish.ingredients.split(', ').length - 1 ? ', ' : ''}
                  </span>
                ))}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
