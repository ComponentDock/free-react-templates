import { useState } from 'react'
import { Button } from '@free-react-templates/ui'

const TABS = ['Breakfast', 'Lunches', 'Dinner', 'Drinks', 'Fastfood'] as const

type Tab = (typeof TABS)[number]

interface Dish {
  name: string
  price: string
  image: string
}

const DISHES: Record<Tab, Dish[]> = {
  Breakfast: [
    { name: 'Hamburger', price: '$25.00', image: 'https://picsum.photos/seed/bonquet-b1/300/200' },
    { name: 'Sandwich', price: '$18.00', image: 'https://picsum.photos/seed/bonquet-b2/300/200' },
    { name: 'Pancakes', price: '$15.00', image: 'https://picsum.photos/seed/bonquet-b3/300/200' },
  ],
  Lunches: [
    { name: 'Tuna Steak', price: '$32.00', image: 'https://picsum.photos/seed/bonquet-l1/300/200' },
    {
      name: 'Caesar Salad',
      price: '$22.00',
      image: 'https://picsum.photos/seed/bonquet-l2/300/200',
    },
    {
      name: 'Pasta Primavera',
      price: '$26.00',
      image: 'https://picsum.photos/seed/bonquet-l3/300/200',
    },
  ],
  Dinner: [
    {
      name: 'Grilled Salmon',
      price: '$38.00',
      image: 'https://picsum.photos/seed/bonquet-d1/300/200',
    },
    {
      name: 'Filet Mignon',
      price: '$45.00',
      image: 'https://picsum.photos/seed/bonquet-d2/300/200',
    },
    {
      name: 'Lobster Bisque',
      price: '$28.00',
      image: 'https://picsum.photos/seed/bonquet-d3/300/200',
    },
  ],
  Drinks: [
    {
      name: 'Craft Mojito',
      price: '$12.00',
      image: 'https://picsum.photos/seed/bonquet-dr1/300/200',
    },
    {
      name: 'Berry Smoothie',
      price: '$9.00',
      image: 'https://picsum.photos/seed/bonquet-dr2/300/200',
    },
    { name: 'Espresso', price: '$5.00', image: 'https://picsum.photos/seed/bonquet-dr3/300/200' },
  ],
  Fastfood: [
    {
      name: 'Classic Burger',
      price: '$14.00',
      image: 'https://picsum.photos/seed/bonquet-f1/300/200',
    },
    {
      name: 'Crispy Fries',
      price: '$8.00',
      image: 'https://picsum.photos/seed/bonquet-f2/300/200',
    },
    {
      name: 'Chicken Wings',
      price: '$16.00',
      image: 'https://picsum.photos/seed/bonquet-f3/300/200',
    },
  ],
}

export function Menu() {
  const [activeTab, setActiveTab] = useState<Tab>('Breakfast')

  return (
    <section id="menu" className="bg-warm-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-display text-3xl font-bold text-warm-900 md:text-4xl">
            Most Popular Dishes
          </h2>
          <p className="mx-auto max-w-xl text-base text-warm-900/60">
            Making a reservation at Bonquet restaurant is easy and takes just a couple of minutes.
          </p>
        </div>

        {/* Tabs */}
        <div className="mb-12 flex flex-wrap justify-center gap-2" role="tablist">
          {TABS.map((tab) => (
            <button
              key={tab}
              role="tab"
              aria-selected={activeTab === tab}
              onClick={() => setActiveTab(tab)}
              className={`rounded-full px-6 py-2 font-display text-sm font-medium transition-colors ${
                activeTab === tab
                  ? 'bg-brand-400 text-white'
                  : 'bg-white text-warm-900 hover:bg-brand-100'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Dishes grid */}
        <div className="grid gap-8 md:grid-cols-3" role="tabpanel">
          {DISHES[activeTab].map((dish) => (
            <div key={dish.name} className="overflow-hidden rounded-2xl bg-white shadow-sm">
              <img src={dish.image} alt={dish.name} className="h-48 w-full object-cover" />
              <div className="p-6">
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="font-display text-lg font-medium text-warm-900">{dish.name}</h3>
                  <span className="font-display text-lg font-bold text-brand-400">
                    {dish.price}
                  </span>
                </div>
                <Button className="mt-2 rounded-full bg-brand-400 px-6 py-2 text-sm font-medium text-white hover:bg-brand-500">
                  Order Now
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#menu"
            className="font-display text-sm font-medium text-brand-400 underline underline-offset-4 hover:text-brand-500"
          >
            Full Menu
          </a>
        </div>
      </div>
    </section>
  )
}
