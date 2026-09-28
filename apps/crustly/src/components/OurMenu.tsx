import { useState } from 'react'

type MenuCategory = 'Starter' | 'Main Courses' | 'Desserts'

interface MenuItem {
  name: string
  price: string
  description: string
}

const menuData: Record<MenuCategory, MenuItem[]> = {
  Starter: [
    {
      name: 'Bruschetta',
      price: '$8.99',
      description: 'Toasted bread topped with fresh tomatoes, basil, and olive oil',
    },
    {
      name: 'Calamari',
      price: '$10.99',
      description: 'Crispy fried squid served with marinara dipping sauce',
    },
    {
      name: 'Caesar Salad',
      price: '$9.49',
      description: 'Romaine lettuce, croutons, parmesan with classic Caesar dressing',
    },
    {
      name: 'Garlic Shrimp',
      price: '$11.99',
      description: 'Sautéed shrimp in garlic butter with crusty bread',
    },
  ],
  'Main Courses': [
    {
      name: 'Margherita Pizza',
      price: '$14.99',
      description: 'Classic tomato sauce, mozzarella, and fresh basil on wood-fired dough',
    },
    {
      name: 'Grilled Salmon',
      price: '$18.99',
      description: 'Atlantic salmon fillet with lemon herb butter and seasonal vegetables',
    },
    {
      name: 'Pasta Carbonara',
      price: '$15.99',
      description: 'Spaghetti with pancetta, egg, pecorino, and black pepper',
    },
    {
      name: 'Ribeye Steak',
      price: '$24.99',
      description: 'Prime cut ribeye, seared to perfection with rosemary jus',
    },
  ],
  Desserts: [
    {
      name: 'Honey Chocolate Pie',
      price: '$7.99',
      description: 'Our signature dessert with Belgian chocolate and local honey',
    },
    {
      name: 'Tiramisu',
      price: '$8.49',
      description: 'Layers of espresso-soaked ladyfingers and mascarpone cream',
    },
    {
      name: 'Crème Brûlée',
      price: '$7.49',
      description: 'Classic vanilla custard with caramelized sugar crust',
    },
    {
      name: 'Fruit Tart',
      price: '$6.99',
      description: 'Buttery crust filled with pastry cream and fresh seasonal fruits',
    },
  ],
}

const categories: MenuCategory[] = ['Starter', 'Main Courses', 'Desserts']

export function OurMenu() {
  const [activeTab, setActiveTab] = useState<MenuCategory>('Starter')

  return (
    <section id="menu" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-brand">Explore</p>
          <h2 className="font-display text-4xl font-bold text-ink">Our Menu</h2>
        </div>

        {/* Tabs */}
        <div className="mb-10 flex justify-center gap-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`rounded-[3px] px-6 py-2 text-sm font-bold uppercase tracking-wider transition-colors ${
                activeTab === cat ? 'bg-brand text-white' : 'bg-input text-ink hover:bg-border'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Menu items grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {menuData[activeTab].map((item) => (
            <div key={item.name} className="rounded-lg border border-border bg-white p-6 shadow-sm">
              <div className="mb-3 flex items-start justify-between">
                <h3 className="font-display text-lg font-bold text-ink">{item.name}</h3>
                <span className="whitespace-nowrap text-lg font-bold text-brand">{item.price}</span>
              </div>
              <p className="text-sm leading-relaxed text-mist">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
