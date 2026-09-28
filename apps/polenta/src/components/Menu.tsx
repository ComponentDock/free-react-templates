import { useState } from 'react'

interface Dish {
  name: string
  price: string
  description: string
}

const menuTabs = ['Dinner', 'Drinks', 'Lunch', 'Dessert'] as const

const menuData: Record<string, Dish[]> = {
  Dinner: [
    {
      name: 'Basted Rhubarb Mussels',
      price: '£57',
      description: 'Delicately prepared with fresh rhubarb reduction and aromatic herbs.',
    },
    {
      name: 'Steamed Chili Moussaka',
      price: '£145',
      description: 'Layers of eggplant, spiced meat, and creamy béchamel sauce.',
    },
    {
      name: 'Blanched Fennel & Orange Lasagna',
      price: '£79',
      description: 'A unique twist on the classic with fennel and citrus notes.',
    },
    {
      name: 'Slow-Cooked Basil & Lime Ostrich',
      price: '£57',
      description: 'Tender ostrich slow-cooked with fragrant basil and lime.',
    },
    {
      name: 'Stuffed Oregano Chicken',
      price: '£145',
      description: 'Free-range chicken stuffed with oregano and seasonal vegetables.',
    },
    {
      name: 'Pressure-Fried Asparagus Chicken',
      price: '£57',
      description: 'Crispy chicken served with fresh asparagus and herb butter.',
    },
  ],
  Drinks: [
    {
      name: 'Chianti Classico',
      price: '£12',
      description: 'Full-bodied Tuscan red with cherry and spice notes.',
    },
    {
      name: 'Prosecco Sparkling',
      price: '£10',
      description: 'Light and refreshing Italian sparkling wine.',
    },
    {
      name: 'Aperol Spritz',
      price: '£9',
      description: 'Classic Italian aperitif with prosecco and soda.',
    },
    {
      name: 'Limoncello Fizz',
      price: '£8',
      description: 'Zesty limoncello mixed with sparkling water and mint.',
    },
  ],
  Lunch: [
    {
      name: 'Tenderized Egg & Coconut Duck',
      price: '£87',
      description: 'Duck breast with coconut-infused egg and herb garnish.',
    },
    {
      name: 'Milk Chocolate Gingerbread',
      price: '£155',
      description: 'Rich chocolate cake with warm gingerbread spices.',
    },
    {
      name: 'Simmered Mango & Pine Rabbit',
      price: '£57',
      description: 'Rabbit braised with tropical mango and pine nuts.',
    },
    {
      name: 'Red Wine Surprise',
      price: '£87',
      description: 'Beef medallions in a velvety red wine reduction.',
    },
  ],
  Dessert: [
    {
      name: 'Tiramisu Classico',
      price: '£14',
      description: 'Traditional Italian dessert with mascarpone and espresso.',
    },
    { name: 'Panna Cotta', price: '£12', description: 'Silky vanilla cream with berry compote.' },
    {
      name: 'Cannoli Siciliani',
      price: '£10',
      description: 'Crispy shells filled with sweet ricotta and chocolate chips.',
    },
    {
      name: 'Affogato al Caffè',
      price: '£8',
      description: 'Vanilla gelato drowned in hot espresso.',
    },
  ],
}

export function Menu() {
  const [activeTab, setActiveTab] = useState<string>(menuTabs[0])

  return (
    <section id="menu" className="relative overflow-hidden py-20">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(https://picsum.photos/seed/polenta-menu/1920/1080)' }}
      />
      <div className="absolute inset-0 bg-black/70" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center">
          <h4 className="font-sans text-base font-normal text-brand">Discover</h4>
          <h2 className="mt-2 font-display text-4xl text-white">Our Menu</h2>
          <div className="mx-auto mt-4 h-0.5 w-4 bg-brand" />
        </div>

        {/* Tab navigation */}
        <div className="mt-10 flex justify-center">
          <ul className="flex gap-2" role="tablist">
            {menuTabs.map((tab) => (
              <li key={tab} role="presentation">
                <button
                  role="tab"
                  aria-selected={activeTab === tab}
                  onClick={() => setActiveTab(tab)}
                  className={`rounded-full px-6 py-2 text-sm font-bold uppercase transition-colors ${
                    activeTab === tab
                      ? 'bg-brand text-white'
                      : 'bg-transparent text-white/70 hover:text-white'
                  }`}
                >
                  {tab}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Menu items */}
        <div className="mt-10 grid gap-6 md:grid-cols-2" role="tabpanel">
          {menuData[activeTab]?.map((dish) => (
            <div key={dish.name} className="rounded-lg bg-white/10 p-6 backdrop-blur-sm">
              <div className="flex items-baseline justify-between">
                <h3 className="font-heading text-lg font-bold text-white">{dish.name}</h3>
                <span className="ml-4 whitespace-nowrap font-heading text-lg font-bold text-brand">
                  {dish.price}
                </span>
              </div>
              <p className="mt-2 text-sm text-white/70">{dish.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
