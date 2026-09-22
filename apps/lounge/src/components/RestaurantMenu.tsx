import { useState } from 'react'
import { cn } from '@free-react-templates/ui'

const categories = ['Main', 'Dessert', 'Drinks'] as const
type Category = (typeof categories)[number]

interface MenuItem {
  name: string
  ingredients: string[]
  price: string
  image: string
}

const menuItems: Record<Category, MenuItem[]> = {
  Main: [
    {
      name: 'Grilled Beef with Potatoes',
      ingredients: ['Beef', 'Potatoes', 'Herbs'],
      price: '$29',
      image: 'https://picsum.photos/seed/lounge-dish-1/80/80',
    },
    {
      name: 'Fruit Vanilla Ice Cream',
      ingredients: ['Vanilla', 'Fresh Fruit'],
      price: '$29',
      image: 'https://picsum.photos/seed/lounge-dish-2/80/80',
    },
    {
      name: 'Asian Hoisin Pork',
      ingredients: ['Pork', 'Hoisin Sauce', 'Vegetables'],
      price: '$29',
      image: 'https://picsum.photos/seed/lounge-dish-3/80/80',
    },
    {
      name: 'Spicy Fried Rice & Bacon',
      ingredients: ['Rice', 'Bacon', 'Chili'],
      price: '$29',
      image: 'https://picsum.photos/seed/lounge-dish-4/80/80',
    },
    {
      name: 'Mango Chili Chutney',
      ingredients: ['Mango', 'Chili', 'Spices'],
      price: '$29',
      image: 'https://picsum.photos/seed/lounge-dish-5/80/80',
    },
    {
      name: 'Savory Watercress Pancakes',
      ingredients: ['Watercress', 'Pancake', 'Cheese'],
      price: '$29',
      image: 'https://picsum.photos/seed/lounge-dish-6/80/80',
    },
    {
      name: 'Soup With Vegetables',
      ingredients: ['Seasonal Vegetables', 'Broth'],
      price: '$29',
      image: 'https://picsum.photos/seed/lounge-dish-7/80/80',
    },
    {
      name: 'Udon Noodles',
      ingredients: ['Udon', 'Mushroom', 'Soy'],
      price: '$29',
      image: 'https://picsum.photos/seed/lounge-dish-8/80/80',
    },
  ],
  Dessert: [
    {
      name: 'Chocolate Lava Cake',
      ingredients: ['Chocolate', 'Cream'],
      price: '$29',
      image: 'https://picsum.photos/seed/lounge-dessert-1/80/80',
    },
    {
      name: 'Tropical Fruit Platter',
      ingredients: ['Pineapple', 'Mango', 'Papaya'],
      price: '$29',
      image: 'https://picsum.photos/seed/lounge-dessert-2/80/80',
    },
    {
      name: 'Crème Brûlée',
      ingredients: ['Cream', 'Vanilla', 'Caramel'],
      price: '$29',
      image: 'https://picsum.photos/seed/lounge-dessert-3/80/80',
    },
    {
      name: 'Panna Cotta',
      ingredients: ['Cream', 'Berry Compote'],
      price: '$29',
      image: 'https://picsum.photos/seed/lounge-dessert-4/80/80',
    },
  ],
  Drinks: [
    {
      name: 'Signature Cocktail',
      ingredients: ['Rum', 'Lime', 'Mint'],
      price: '$29',
      image: 'https://picsum.photos/seed/lounge-drink-1/80/80',
    },
    {
      name: 'Fresh Coconut Water',
      ingredients: ['Coconut', 'Ice'],
      price: '$29',
      image: 'https://picsum.photos/seed/lounge-drink-2/80/80',
    },
    {
      name: 'Espresso Martini',
      ingredients: ['Vodka', 'Espresso', 'Coffee Liqueur'],
      price: '$29',
      image: 'https://picsum.photos/seed/lounge-drink-3/80/80',
    },
    {
      name: 'Tropical Smoothie',
      ingredients: ['Mango', 'Pineapple', 'Yogurt'],
      price: '$29',
      image: 'https://picsum.photos/seed/lounge-drink-4/80/80',
    },
  ],
}

export function RestaurantMenu() {
  const [activeTab, setActiveTab] = useState<Category>('Main')

  return (
    <section id="menu" className="bg-lounge-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-brand">Our Menu</p>
          <h2 className="font-heading text-3xl font-bold text-lounge-900 md:text-4xl">
            Restaurant & Bar
          </h2>
        </div>

        {/* Tabs */}
        <div className="mb-10 flex justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={cn(
                'rounded-full px-6 py-2 text-sm font-medium transition-all',
                activeTab === cat
                  ? 'bg-brand text-white shadow-md'
                  : 'bg-white text-lounge-600 hover:bg-lounge-100',
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Menu grid */}
        <div className="grid gap-6 sm:grid-cols-2">
          {menuItems[activeTab].map((item) => (
            <div
              key={item.name}
              className="flex items-center gap-4 rounded-lg bg-white p-4 shadow-sm"
            >
              <img
                src={item.image}
                alt={item.name}
                className="h-20 w-20 flex-shrink-0 rounded object-cover"
              />
              <div className="flex-1">
                <h4 className="font-heading text-base font-bold text-lounge-900">{item.name}</h4>
                <div className="mt-1 flex flex-wrap gap-1">
                  {item.ingredients.map((ing) => (
                    <span
                      key={ing}
                      className="rounded-full bg-lounge-100 px-2 py-0.5 text-xs text-lounge-500"
                    >
                      {ing}
                    </span>
                  ))}
                </div>
              </div>
              <span className="text-lg font-bold text-brand">{item.price}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
