import { useState } from 'react'

type MenuCategory = 'Breakfast' | 'Lunch' | 'Dinner'

const categories: MenuCategory[] = ['Breakfast', 'Lunch', 'Dinner']

const menuItems: Record<
  MenuCategory,
  Array<{ name: string; description: string; price: string; image: string }>
> = {
  Breakfast: [
    {
      name: 'Grilled Sausage',
      description: 'Premium pork sausage with herbs',
      price: '$12.99',
      image: 'https://picsum.photos/seed/sausage/100/100',
    },
    {
      name: 'Eggs Benedict',
      description: 'Poached eggs on English muffin',
      price: '$14.99',
      image: 'https://picsum.photos/seed/eggs/100/100',
    },
    {
      name: 'Pancake Stack',
      description: 'Fluffy buttermilk pancakes',
      price: '$10.99',
      image: 'https://picsum.photos/seed/pancake/100/100',
    },
    {
      name: 'Avocado Toast',
      description: 'Sourdough with smashed avocado',
      price: '$11.99',
      image: 'https://picsum.photos/seed/avocado/100/100',
    },
    {
      name: 'French Toast',
      description: 'Cinnamon brioche French toast',
      price: '$13.99',
      image: 'https://picsum.photos/seed/frenchtoast/100/100',
    },
    {
      name: 'Omelette',
      description: 'Three-egg omelette with cheese',
      price: '$12.99',
      image: 'https://picsum.photos/seed/omelette/100/100',
    },
  ],
  Lunch: [
    {
      name: 'Caesar Salad',
      description: 'Romaine with parmesan dressing',
      price: '$13.99',
      image: 'https://picsum.photos/seed/caesar/100/100',
    },
    {
      name: 'Club Sandwich',
      description: 'Triple-decker with turkey',
      price: '$14.99',
      image: 'https://picsum.photos/seed/sandwich/100/100',
    },
    {
      name: 'Fish Tacos',
      description: 'Grilled fish in corn tortillas',
      price: '$15.99',
      image: 'https://picsum.photos/seed/tacos/100/100',
    },
    {
      name: 'Burger Deluxe',
      description: 'Angus beef with cheddar',
      price: '$16.99',
      image: 'https://picsum.photos/seed/burger/100/100',
    },
    {
      name: 'Pasta Primavera',
      description: 'Seasonal vegetables in cream',
      price: '$14.99',
      image: 'https://picsum.photos/seed/pasta/100/100',
    },
    {
      name: 'Chicken Wrap',
      description: 'Grilled chicken Caesar wrap',
      price: '$13.99',
      image: 'https://picsum.photos/seed/wrap/100/100',
    },
  ],
  Dinner: [
    {
      name: 'Ribeye Steak',
      description: '12oz aged ribeye with sides',
      price: '$32.99',
      image: 'https://picsum.photos/seed/ribeye/100/100',
    },
    {
      name: 'Grilled Salmon',
      description: 'Atlantic salmon with lemon',
      price: '$26.99',
      image: 'https://picsum.photos/seed/salmon/100/100',
    },
    {
      name: 'Lamb Chops',
      description: 'Herb-crusted New Zealand lamb',
      price: '$29.99',
      image: 'https://picsum.photos/seed/lamb/100/100',
    },
    {
      name: 'Lobster Tail',
      description: 'Butter-poached lobster tail',
      price: '$38.99',
      image: 'https://picsum.photos/seed/lobster/100/100',
    },
    {
      name: 'Filet Mignon',
      description: '8oz center-cut tenderloin',
      price: '$34.99',
      image: 'https://picsum.photos/seed/filet/100/100',
    },
    {
      name: 'Duck Confit',
      description: 'Slow-cooked duck leg',
      price: '$27.99',
      image: 'https://picsum.photos/seed/duck/100/100',
    },
  ],
}

export function MenuSection() {
  const [activeTab, setActiveTab] = useState<MenuCategory>('Breakfast')

  return (
    <section id="menu" className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-12 text-center text-3xl font-bold text-heading md:text-4xl">Our Menu</h2>

        <div className="mb-12 flex justify-center gap-0">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`border-b-2 px-6 py-3 text-sm font-semibold uppercase tracking-widest transition-colors ${
                activeTab === cat
                  ? 'border-heading text-heading'
                  : 'border-border-gray text-text-muted hover:text-heading'
              }`}
              aria-pressed={activeTab === cat}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {menuItems[activeTab].map((item) => (
            <div
              key={item.name}
              className="flex items-start gap-4 rounded-sm border border-gray-100 p-4"
            >
              <img
                src={item.image}
                alt={item.name}
                className="h-[100px] w-[100px] flex-shrink-0 rounded-full object-cover"
              />
              <div className="flex-1">
                <div className="flex items-baseline justify-between">
                  <h3 className="text-lg font-semibold text-heading">{item.name}</h3>
                  <span className="text-lg font-bold text-brand">{item.price}</span>
                </div>
                <p className="mt-1 text-sm text-text-muted">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
