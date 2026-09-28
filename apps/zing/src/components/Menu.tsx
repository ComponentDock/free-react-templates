import { useState } from 'react'

interface MenuItemProps {
  name: string
  description: string
  price: string
}

interface MenuCategory {
  label: string
  items: MenuItemProps[]
}

const MENU_DATA: MenuCategory[] = [
  {
    label: 'Breakfast',
    items: [
      { name: 'Beef Roast Source', description: 'Meat, Potatoes, Rice, Tomato', price: '$29.00' },
      { name: 'Butterfly Brioche', description: 'Bread, Butter, Jam, Honey', price: '$18.00' },
      {
        name: 'Smoked Salmon Platter',
        description: 'Salmon, Cream Cheese, Capers',
        price: '$24.00',
      },
    ],
  },
  {
    label: 'Lunch',
    items: [
      {
        name: 'Grilled Chicken Salad',
        description: 'Chicken, Greens, Vinaigrette',
        price: '$22.00',
      },
      { name: 'Beef Roast Source', description: 'Meat, Potatoes, Rice, Tomato', price: '$29.00' },
      { name: 'Pasta Primavera', description: 'Pasta, Vegetables, Olive Oil', price: '$20.00' },
    ],
  },
  {
    label: 'Dinner',
    items: [
      { name: 'Filet Mignon', description: 'Steak, Truffle, Asparagus', price: '$45.00' },
      { name: 'Beef Roast Source', description: 'Meat, Potatoes, Rice, Tomato', price: '$29.00' },
      { name: 'Lobster Thermidor', description: 'Lobster, Cream Sauce, Herbs', price: '$52.00' },
    ],
  },
  {
    label: 'Desserts',
    items: [
      { name: 'Chocolate Lava Cake', description: 'Chocolate, Vanilla Ice Cream', price: '$14.00' },
      { name: 'Tiramisu', description: 'Coffee, Mascarpone, Cocoa', price: '$12.00' },
      { name: 'Crème Brûlée', description: 'Custard, Vanilla, Caramel', price: '$11.00' },
    ],
  },
]

function MenuItem({ name, description, price }: MenuItemProps) {
  return (
    <div className="flex items-start justify-between py-4 border-b border-gray-100 last:border-b-0">
      <div>
        <h4 className="text-base font-bold text-brand-dark">{name}</h4>
        <p className="text-sm text-muted-text">{description}</p>
      </div>
      <span className="text-base font-bold text-brand-red">{price}</span>
    </div>
  )
}

export function Menu() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section id="menu" className="bg-white py-20">
      <div className="mx-auto max-w-4xl px-4">
        <div className="mb-12 text-center">
          <h2
            className="mb-3 text-3xl font-bold text-brand-dark"
            style={{ fontFamily: 'var(--font-dancing)' }}
          >
            Our Menu
          </h2>
        </div>
        <div className="mb-8 flex justify-center gap-2">
          {MENU_DATA.map((cat, i) => (
            <button
              key={cat.label}
              onClick={() => setActiveTab(i)}
              className={`rounded px-6 py-2 text-sm font-semibold transition-colors ${
                activeTab === i
                  ? 'bg-brand-red text-white'
                  : 'bg-brand-light text-brand-dark hover:bg-gray-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
        <div className="grid gap-x-12 gap-y-2 md:grid-cols-2">
          {MENU_DATA[activeTab]!.items.map((item) => (
            <MenuItem key={item.name} {...item} />
          ))}
        </div>
      </div>
    </section>
  )
}
