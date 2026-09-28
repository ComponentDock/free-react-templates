import { useState } from 'react'

const categories = ['Starters', 'Main Course', 'Desserts'] as const

type Category = (typeof categories)[number]

const menuItems: Record<Category, { name: string; description: string; price: string }[]> = {
  Starters: [
    {
      name: 'Samosa Platter',
      description: 'Crispy pastry filled with spiced potatoes and peas',
      price: '$8.99',
    },
    {
      name: 'Paneer Tikka',
      description: 'Marinated cottage cheese grilled in tandoor',
      price: '$10.99',
    },
    {
      name: 'Chicken Wings',
      description: 'Spicy tandoori chicken wings with mint chutney',
      price: '$11.99',
    },
  ],
  'Main Course': [
    {
      name: 'Butter Chicken',
      description: 'Tender chicken in rich tomato-cream sauce',
      price: '$15.99',
    },
    {
      name: 'Lamb Biryani',
      description: 'Fragrant basmati rice layered with spiced lamb',
      price: '$16.99',
    },
    {
      name: 'Palak Paneer',
      description: 'Cottage cheese cubes in creamy spinach gravy',
      price: '$13.99',
    },
  ],
  Desserts: [
    { name: 'Gulab Jamun', description: 'Deep-fried milk dumplings in rose syrup', price: '$6.99' },
    {
      name: 'Kheer',
      description: 'Creamy rice pudding with cardamom and pistachios',
      price: '$5.99',
    },
    {
      name: 'Mango Kulfi',
      description: 'Traditional Indian ice cream with ripe mango',
      price: '$7.99',
    },
  ],
}

export function Menu() {
  const [active, setActive] = useState<Category>('Starters')

  return (
    <section id="menu" className="bg-paper py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="mb-2 text-center font-display text-3xl font-bold text-ink">Our Menu</h2>
        <p className="mb-8 text-center text-mist">
          Explore our carefully curated selection of authentic Indian dishes
        </p>

        {/* Tabs */}
        <div className="mb-10 flex justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActive(cat)}
              className={`rounded px-6 py-2 text-sm font-medium transition-colors ${
                active === cat ? 'bg-brand text-white' : 'bg-gray-100 text-ink hover:bg-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Menu items */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {menuItems[active].map((item) => (
            <div
              key={item.name}
              className="rounded-lg border border-gray-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="mb-2 flex items-start justify-between">
                <h3 className="font-display text-lg font-semibold text-ink">{item.name}</h3>
                <span className="whitespace-nowrap text-lg font-bold text-brand">{item.price}</span>
              </div>
              <p className="text-sm text-mist">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
