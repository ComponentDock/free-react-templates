import { useState } from 'react'
import { Star } from './Star'

const TABS = ['Mains', 'Desserts', 'Drinks'] as const
type Tab = (typeof TABS)[number]

const MENU: Record<Tab, { name: string; category: string; price: string; image: string }[]> = {
  Mains: [
    {
      name: 'Grilled Salmon',
      category: 'Seafood',
      price: '$32',
      image: 'https://picsum.photos/seed/luxstay-food-1/80/80',
    },
    {
      name: 'Wagyu Steak',
      category: 'Beef',
      price: '$48',
      image: 'https://picsum.photos/seed/luxstay-food-2/80/80',
    },
    {
      name: 'Truffle Risotto',
      category: 'Pasta',
      price: '$28',
      image: 'https://picsum.photos/seed/luxstay-food-3/80/80',
    },
    {
      name: 'Lobster Thermidor',
      category: 'Seafood',
      price: '$55',
      image: 'https://picsum.photos/seed/luxstay-food-4/80/80',
    },
  ],
  Desserts: [
    {
      name: 'Crème Brûlée',
      category: 'Classic',
      price: '$14',
      image: 'https://picsum.photos/seed/luxstay-dessert-1/80/80',
    },
    {
      name: 'Chocolate Fondant',
      category: 'Chocolate',
      price: '$16',
      image: 'https://picsum.photos/seed/luxstay-dessert-2/80/80',
    },
    {
      name: 'Tiramisu',
      category: 'Italian',
      price: '$15',
      image: 'https://picsum.photos/seed/luxstay-dessert-3/80/80',
    },
    {
      name: 'Cheese Board',
      category: 'Selection',
      price: '$22',
      image: 'https://picsum.photos/seed/luxstay-dessert-4/80/80',
    },
  ],
  Drinks: [
    {
      name: 'Signature Cocktail',
      category: 'Cocktail',
      price: '$18',
      image: 'https://picsum.photos/seed/luxstay-drink-1/80/80',
    },
    {
      name: 'Château Margaux',
      category: 'Red Wine',
      price: '$35',
      image: 'https://picsum.photos/seed/luxstay-drink-2/80/80',
    },
    {
      name: 'Espresso Martini',
      category: 'Cocktail',
      price: '$16',
      image: 'https://picsum.photos/seed/luxstay-drink-3/80/80',
    },
    {
      name: 'Craft Beer Flight',
      category: 'Beer',
      price: '$20',
      image: 'https://picsum.photos/seed/luxstay-drink-4/80/80',
    },
  ],
}

export function DiningBar() {
  const [activeTab, setActiveTab] = useState<Tab>('Mains')

  return (
    <section id="dining-bar" className="bg-white py-20" aria-labelledby="dining-heading">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12 text-center">
          <div className="mb-2 flex justify-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} filled />
            ))}
          </div>
          <h2 id="dining-heading" className="mb-3 font-heading text-3xl text-black">
            Dining &amp; Bar
          </h2>
          <p className="mx-auto max-w-md text-sm text-text-body">
            Savor exquisite dishes prepared by our world-renowned chefs
          </p>
        </div>

        <div className="overflow-hidden rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Tabbed menu */}
            <div className="bg-accent-orange p-8">
              <div className="mb-6 flex gap-4">
                {TABS.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`border-b-2 pb-1 text-sm font-medium transition-colors ${
                      activeTab === tab
                        ? 'border-white text-white'
                        : 'border-transparent text-orange-200 hover:text-white'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              <div className="space-y-4">
                {MENU[activeTab].map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center gap-4 rounded-lg px-2 py-2 transition-colors hover:bg-white/10"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-[60px] w-[60px] rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <p className="font-heading text-base text-white">{item.name}</p>
                      <p className="text-xs text-orange-200">{item.category}</p>
                    </div>
                    <span className="font-heading text-lg text-white">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Cover image */}
            <div className="hidden md:block">
              <img
                src="https://picsum.photos/seed/luxstay-dining-cover/800/600"
                alt="Dining ambiance"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
