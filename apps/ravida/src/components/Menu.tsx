interface FoodItem {
  name: string
  description: string
  price: string
  image: string
}

const FOOD_ITEMS: FoodItem[] = [
  {
    name: 'Pork Sandwich',
    description: "They're wherein heaven seed hath nothing",
    price: '$40.00',
    image: 'https://picsum.photos/seed/ravida-food-1/100/100',
  },
  {
    name: 'Roasted Marrow',
    description: "They're wherein heaven seed hath nothing",
    price: '$40.00',
    image: 'https://picsum.photos/seed/ravida-food-2/100/100',
  },
  {
    name: 'Summer Cooking',
    description: "They're wherein heaven seed hath nothing",
    price: '$40.00',
    image: 'https://picsum.photos/seed/ravida-food-3/100/100',
  },
  {
    name: 'Easter Delight',
    description: "They're wherein heaven seed hath nothing",
    price: '$40.00',
    image: 'https://picsum.photos/seed/ravida-food-4/100/100',
  },
  {
    name: 'Tiener Schnitze',
    description: "They're wherein heaven seed hath nothing",
    price: '$40.00',
    image: 'https://picsum.photos/seed/ravida-food-5/100/100',
  },
  {
    name: 'Chicken Roast',
    description: "They're wherein heaven seed hath nothing",
    price: '$40.00',
    image: 'https://picsum.photos/seed/ravida-food-6/100/100',
  },
]

export function Menu() {
  return (
    <section id="menu" className="bg-white py-24">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-brand">
            Popular Menu
          </p>
          <h2 className="font-display text-4xl font-bold text-ink">Delicious Food Menu</h2>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {FOOD_ITEMS.map((item) => (
            <div key={item.name} className="flex items-center gap-4">
              <img
                src={item.image}
                alt={item.name}
                className="h-20 w-20 flex-shrink-0 rounded object-cover"
                loading="lazy"
              />
              <div className="flex-1">
                <h3 className="text-lg font-bold text-ink">{item.name}</h3>
                <p className="text-sm text-mist">{item.description}</p>
              </div>
              <span className="flex-shrink-0 text-sm font-bold text-brand">From {item.price}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
