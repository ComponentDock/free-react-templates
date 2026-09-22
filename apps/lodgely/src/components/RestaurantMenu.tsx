import { useState } from 'react'

type Tab = 'mains' | 'desserts' | 'drinks'

interface MenuItem {
  name: string
  price: string
  description: string
}

const menuData: Record<Tab, MenuItem[]> = {
  mains: [
    {
      name: 'Grilled Salmon',
      price: '$24',
      description: 'Fresh Atlantic salmon with seasonal vegetables',
    },
    { name: 'Filet Mignon', price: '$38', description: 'Prime beef tenderloin with truffle sauce' },
    {
      name: 'Chicken Parmesan',
      price: '$18',
      description: 'Breaded chicken with marinara and mozzarella',
    },
    { name: 'Lobster Risotto', price: '$32', description: 'Creamy arborio rice with lobster tail' },
  ],
  desserts: [
    { name: 'Tiramisu', price: '$12', description: 'Classic Italian coffee-flavored dessert' },
    { name: 'Crème Brûlée', price: '$10', description: 'Vanilla custard with caramelized sugar' },
    {
      name: 'Chocolate Lava Cake',
      price: '$14',
      description: 'Warm chocolate cake with molten center',
    },
    { name: 'Panna Cotta', price: '$11', description: 'Creamy vanilla with berry compote' },
  ],
  drinks: [
    { name: 'Signature Cocktail', price: '$16', description: 'House special with premium spirits' },
    { name: 'Red Wine', price: '$14', description: 'Selected cabernet sauvignon by the glass' },
    { name: 'Craft Beer', price: '$8', description: 'Local artisan brewed selection' },
    { name: 'Sparkling Water', price: '$4', description: 'San Pellegrino or Perrier' },
  ],
}

const tabs: { key: Tab; label: string }[] = [
  { key: 'mains', label: 'Mains' },
  { key: 'desserts', label: 'Desserts' },
  { key: 'drinks', label: 'Drinks' },
]

export function RestaurantMenu() {
  const [activeTab, setActiveTab] = useState<Tab>('mains')

  return (
    <section id="restaurant" className="relative py-20">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: 'url(https://picsum.photos/seed/lodgely-restaurant/1600/900)' }}
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-primary-400">
            Our Restaurant
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-ink sm:text-4xl">
            Our Restaurant Menu
          </h2>
        </div>

        <div className="mt-8 flex justify-center gap-4">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              type="button"
              onClick={() => setActiveTab(tab.key)}
              className={`rounded-full px-6 py-2 text-sm font-semibold transition-colors ${
                activeTab === tab.key
                  ? 'bg-primary-500 text-white'
                  : 'bg-white text-body hover:bg-gray-100'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {menuData[activeTab].map((item) => (
            <div
              key={item.name}
              className="flex items-start justify-between rounded-lg bg-white p-5 shadow-sm"
            >
              <div>
                <h3 className="font-display text-lg font-semibold text-ink">{item.name}</h3>
                <p className="mt-1 text-sm text-body">{item.description}</p>
              </div>
              <span className="ml-4 shrink-0 text-lg font-bold text-primary-400">{item.price}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
