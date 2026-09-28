import { useState } from 'react'

type TabName = 'Main' | 'Dessert' | 'Drinks'

interface MenuItem {
  name: string
  ingredients: string
  price: string
  image: string
}

const menuData: Record<TabName, MenuItem[]> = {
  Main: [
    {
      name: 'Grilled Beef with Potatoes',
      ingredients: 'Beef, Potatoes, Herbs',
      price: '$29',
      image: 'https://picsum.photos/seed/dish-beef/200/200',
    },
    {
      name: 'Asian Hoisin Pork',
      ingredients: 'Pork, Hoisin Sauce, Rice',
      price: '$29',
      image: 'https://picsum.photos/seed/dish-pork/200/200',
    },
    {
      name: 'Soup With Vegetables',
      ingredients: 'Seasonal Vegetables, Broth',
      price: '$29',
      image: 'https://picsum.photos/seed/dish-soup/200/200',
    },
    {
      name: 'Baked Lobster',
      ingredients: 'Lobster, Butter, Garlic',
      price: '$29',
      image: 'https://picsum.photos/seed/dish-lobster/200/200',
    },
  ],
  Dessert: [
    {
      name: 'Fruit Vanilla Ice Cream',
      ingredients: 'Fresh Fruit, Vanilla',
      price: '$29',
      image: 'https://picsum.photos/seed/dish-icecream/200/200',
    },
    {
      name: 'Spicy Fried Rice & Bacon',
      ingredients: 'Rice, Bacon, Chili',
      price: '$29',
      image: 'https://picsum.photos/seed/dish-rice/200/200',
    },
    {
      name: 'Mango Chili Chutney',
      ingredients: 'Mango, Chili, Spices',
      price: '$29',
      image: 'https://picsum.photos/seed/dish-mango/200/200',
    },
    {
      name: 'Savory Watercress Chinese Pancakes',
      ingredients: 'Watercress, Flour, Herbs',
      price: '$29',
      image: 'https://picsum.photos/seed/dish-pancake/200/200',
    },
  ],
  Drinks: [
    {
      name: 'Udon Noodles',
      ingredients: 'Udon, Soy, Vegetables',
      price: '$29',
      image: 'https://picsum.photos/seed/dish-udon/200/200',
    },
    {
      name: 'Baked Lobster',
      ingredients: 'Lobster, Butter, Garlic',
      price: '$29',
      image: 'https://picsum.photos/seed/dish-lobster2/200/200',
    },
    {
      name: 'Octopus',
      ingredients: 'Octopus, Olive Oil, Lemon',
      price: '$29',
      image: 'https://picsum.photos/seed/dish-octopus/200/200',
    },
    {
      name: 'Grilled Beef with Potatoes',
      ingredients: 'Beef, Potatoes, Herbs',
      price: '$29',
      image: 'https://picsum.photos/seed/dish-beef2/200/200',
    },
  ],
}

const tabs: TabName[] = ['Main', 'Dessert', 'Drinks']

export function MenuSection() {
  const [activeTab, setActiveTab] = useState<TabName>('Main')

  return (
    <section id="menu" className="py-16 bg-bg-light">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <p className="text-brand font-semibold text-sm uppercase tracking-wider mb-2">Our Menu</p>
          <h2 className="text-3xl md:text-4xl font-bold text-text-dark font-heading">
            Bistrox Menu
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-colors ${
                activeTab === tab
                  ? 'bg-brand text-white'
                  : 'bg-white text-text-dark hover:bg-gray-200'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Menu grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {menuData[activeTab].map((item) => (
            <div key={item.name} className="flex items-center bg-white rounded-lg p-4 shadow-sm">
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 rounded-lg object-cover mr-4 flex-shrink-0"
              />
              <div className="flex-1">
                <h3 className="font-semibold text-text-dark">{item.name}</h3>
                <p className="text-text-muted text-sm">{item.ingredients}</p>
              </div>
              <span className="text-brand font-bold text-lg ml-4">{item.price}</span>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="#reservation"
            className="inline-block bg-brand hover:bg-brand-hover text-white font-semibold py-3 px-8 rounded transition-colors"
          >
            Make a Reservation
          </a>
        </div>
      </div>
    </section>
  )
}
