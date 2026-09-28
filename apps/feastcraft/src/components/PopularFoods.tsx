import { useState } from 'react'

interface FoodItem {
  name: string
  price: string
  imageSeed: string
}

const CATEGORIES = ['Breakfast', 'Lunch', 'Dinner', 'Drinks'] as const

const FOODS: Record<string, FoodItem[]> = {
  Breakfast: [
    { name: 'Pancake Stack', price: '$12.99', imageSeed: 'fc-pancake' },
    { name: 'Avocado Toast', price: '$14.50', imageSeed: 'fc-avotoast' },
    { name: 'Eggs Benedict', price: '$16.00', imageSeed: 'fc-eggs' },
    { name: 'French Toast', price: '$13.50', imageSeed: 'fc-french' },
  ],
  Lunch: [
    { name: 'Grilled Chicken Salad', price: '$18.99', imageSeed: 'fc-salad' },
    { name: 'Beef Burger', price: '$16.50', imageSeed: 'fc-burger' },
    { name: 'Caesar Wrap', price: '$14.00', imageSeed: 'fc-wrap' },
    { name: 'Pasta Primavera', price: '$17.99', imageSeed: 'fc-pasta' },
  ],
  Dinner: [
    { name: 'Grilled Salmon', price: '$24.99', imageSeed: 'fc-salmon' },
    { name: 'Filet Mignon', price: '$32.00', imageSeed: 'fc-filet' },
    { name: 'Lobster Risotto', price: '$28.50', imageSeed: 'fc-lobster' },
    { name: 'Herb Roasted Chicken', price: '$22.00', imageSeed: 'fc-chicken' },
  ],
  Drinks: [
    { name: 'Mango Smoothie', price: '$8.99', imageSeed: 'fc-mango' },
    { name: 'Berry Lemonade', price: '$7.50', imageSeed: 'fc-lemon' },
    { name: 'Iced Espresso', price: '$6.00', imageSeed: 'fc-espresso' },
    { name: 'Tropical Punch', price: '$9.00', imageSeed: 'fc-punch' },
  ],
}

export function PopularFoods() {
  const [active, setActive] = useState(0)
  const category = CATEGORIES[active]!
  const items = FOODS[category]!

  return (
    <section id="menu" className="bg-peach py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm uppercase tracking-wider text-orange">Select your Meal</p>
          <h2
            className="text-3xl font-bold text-heading"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Popular Foods
          </h2>
        </div>

        {/* Category tabs */}
        <div className="mb-10 flex justify-center gap-8">
          {CATEGORIES.map((cat, i) => (
            <button
              key={cat}
              onClick={() => setActive(i)}
              className={`flex flex-col items-center gap-2 text-sm transition-colors ${
                i === active ? 'text-orange' : 'text-charcoal hover:text-orange'
              }`}
            >
              <div
                className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-lg"
                aria-hidden="true"
              >
                {cat === 'Breakfast' && '🍳'}
                {cat === 'Lunch' && '🥗'}
                {cat === 'Dinner' && '🥩'}
                {cat === 'Drinks' && '🍹'}
              </div>
              {cat}
            </button>
          ))}
        </div>

        {/* Food items 2x2 grid */}
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {items.map((item) => (
            <div key={item.name} className="text-center">
              <div className="mx-auto mb-3 h-40 w-40 overflow-hidden rounded-full bg-white">
                <img
                  src={`https://picsum.photos/seed/${item.imageSeed}/400/400`}
                  alt={item.name}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <h3 className="text-sm font-bold text-heading">{item.name}</h3>
              <p className="text-sm font-semibold text-orange">{item.price}</p>
            </div>
          ))}
        </div>

        <p className="mt-6 text-center text-sm text-muted">
          {active + 1} / {CATEGORIES.length}
        </p>
      </div>
    </section>
  )
}
