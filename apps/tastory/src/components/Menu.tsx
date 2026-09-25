import { useState } from 'react'
import { cn } from '@free-react-templates/ui'

type MealTab = 'Breakfast' | 'Lunch' | 'Dinner'

interface MenuItem {
  name: string
  description: string
  price: string
  image: string
}

const MENU_DATA: Record<MealTab, MenuItem[]> = {
  Breakfast: [
    {
      name: 'Salted Fried Chicken',
      description: 'Far far away, behind the word mountains.',
      price: '$35.50',
      image: 'https://picsum.photos/seed/tastory-m1/120/120',
    },
    {
      name: 'Italian Sauce Mushroom',
      description: 'Far far away, behind the word mountains.',
      price: '$24.50',
      image: 'https://picsum.photos/seed/tastory-m2/120/120',
    },
    {
      name: 'Fried Potato w/ Garlic',
      description: 'Far far away, behind the word mountains.',
      price: '$14.50',
      image: 'https://picsum.photos/seed/tastory-m3/120/120',
    },
    {
      name: 'Roasted Beef',
      description: 'Far far away, behind the word mountains.',
      price: '$22.00',
      image: 'https://picsum.photos/seed/tastory-m4/120/120',
    },
    {
      name: 'Grilled Salmon',
      description: 'Far far away, behind the word mountains.',
      price: '$28.00',
      image: 'https://picsum.photos/seed/tastory-m5/120/120',
    },
    {
      name: 'Caesar Salad',
      description: 'Far far away, behind the word mountains.',
      price: '$12.00',
      image: 'https://picsum.photos/seed/tastory-m6/120/120',
    },
  ],
  Lunch: [
    {
      name: 'Grilled Chicken Wrap',
      description: 'Far far away, behind the word mountains.',
      price: '$18.50',
      image: 'https://picsum.photos/seed/tastory-l1/120/120',
    },
    {
      name: 'Beef Burger Deluxe',
      description: 'Far far away, behind the word mountains.',
      price: '$22.00',
      image: 'https://picsum.photos/seed/tastory-l2/120/120',
    },
    {
      name: 'Veggie Pasta Primavera',
      description: 'Far far away, behind the word mountains.',
      price: '$16.50',
      image: 'https://picsum.photos/seed/tastory-l3/120/120',
    },
    {
      name: 'Fish Tacos',
      description: 'Far far away, behind the word mountains.',
      price: '$19.00',
      image: 'https://picsum.photos/seed/tastory-l4/120/120',
    },
    {
      name: 'Soup of the Day',
      description: 'Far far away, behind the word mountains.',
      price: '$9.50',
      image: 'https://picsum.photos/seed/tastory-l5/120/120',
    },
    {
      name: 'Club Sandwich',
      description: 'Far far away, behind the word mountains.',
      price: '$15.00',
      image: 'https://picsum.photos/seed/tastory-l6/120/120',
    },
  ],
  Dinner: [
    {
      name: 'Ribeye Steak',
      description: 'Far far away, behind the word mountains.',
      price: '$45.00',
      image: 'https://picsum.photos/seed/tastory-d1/120/120',
    },
    {
      name: 'Lobster Thermidor',
      description: 'Far far away, behind the word mountains.',
      price: '$52.00',
      image: 'https://picsum.photos/seed/tastory-d2/120/120',
    },
    {
      name: 'Truffle Risotto',
      description: 'Far far away, behind the word mountains.',
      price: '$38.00',
      image: 'https://picsum.photos/seed/tastory-d3/120/120',
    },
    {
      name: 'Lamb Rack',
      description: 'Far far away, behind the word mountains.',
      price: '$42.00',
      image: 'https://picsum.photos/seed/tastory-d4/120/120',
    },
    {
      name: 'Duck Confit',
      description: 'Far far away, behind the word mountains.',
      price: '$36.00',
      image: 'https://picsum.photos/seed/tastory-d5/120/120',
    },
    {
      name: 'Chocolate Soufflé',
      description: 'Far far away, behind the word mountains.',
      price: '$14.00',
      image: 'https://picsum.photos/seed/tastory-d6/120/120',
    },
  ],
}

const TABS: MealTab[] = ['Breakfast', 'Lunch', 'Dinner']

export function Menu() {
  const [activeTab, setActiveTab] = useState<MealTab>('Breakfast')

  return (
    <section id="menu" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-heading text-4xl font-bold text-black">Delicious Menu</h2>
          <p className="mx-auto max-w-2xl text-lg text-body-text">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
            there live the blind texts.
          </p>
        </div>

        {/* Tabs */}
        <div className="mb-10 flex justify-center gap-4">
          {TABS.map((tab) => (
            <button
              key={tab}
              type="button"
              className={cn(
                'rounded-full px-6 py-2 text-sm font-semibold uppercase tracking-wider transition-colors',
                activeTab === tab
                  ? 'bg-amber-brand text-white'
                  : 'bg-transparent text-gray-500 hover:text-black',
              )}
              onClick={() => setActiveTab(tab)}
              aria-selected={activeTab === tab}
              role="tab"
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Menu items */}
        <div className="grid gap-8 md:grid-cols-2" role="tabpanel">
          {MENU_DATA[activeTab].map((item) => (
            <div key={item.name} className="flex gap-4">
              <img
                src={item.image}
                alt={item.name}
                className="h-20 w-20 flex-shrink-0 rounded object-cover"
                loading="lazy"
              />
              <div>
                <h5 className="font-heading text-lg font-bold text-black">{item.name}</h5>
                <p className="mb-1 text-sm text-body-text">{item.description}</p>
                <span className="text-sm font-bold text-amber-brand">{item.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
