import { useState } from 'react'
import { cn } from '@free-react-templates/ui'

type Tab = 'Pizza' | 'Drinks' | 'Burgers' | 'Pasta'

interface MenuItem {
  name: string
  desc: string
  price: string
  image: string
}

const menuData: Record<Tab, MenuItem[]> = {
  Pizza: [
    {
      name: 'Italian Pizza',
      desc: 'Far far away, behind the word mountains.',
      price: '$2.90',
      image: 'pepperoni-pizza1',
    },
    {
      name: 'Greek Pizza',
      desc: 'Far far away, behind the word mountains.',
      price: '$2.90',
      image: 'pepperoni-pizza2',
    },
    {
      name: 'Caucasian Pizza',
      desc: 'Far far away, behind the word mountains.',
      price: '$2.90',
      image: 'pepperoni-pizza3',
    },
  ],
  Drinks: [
    {
      name: 'Fresh Lemonade',
      desc: 'Refreshing homemade lemonade.',
      price: '$1.50',
      image: 'pepperoni-drink1',
    },
    {
      name: 'Iced Tea',
      desc: 'Chilled tea with a hint of mint.',
      price: '$1.80',
      image: 'pepperoni-drink2',
    },
    {
      name: 'Craft Cola',
      desc: 'Artisan cola with natural flavors.',
      price: '$2.00',
      image: 'pepperoni-drink3',
    },
  ],
  Burgers: [
    {
      name: 'Classic Burger',
      desc: 'Beef patty with fresh toppings.',
      price: '$5.90',
      image: 'pepperoni-burger1',
    },
    {
      name: 'Cheese Burger',
      desc: 'Loaded with melted cheddar.',
      price: '$6.50',
      image: 'pepperoni-burger2',
    },
    {
      name: 'Veggie Burger',
      desc: 'Plant-based patty with avocado.',
      price: '$5.50',
      image: 'pepperoni-burger3',
    },
  ],
  Pasta: [
    {
      name: 'Spaghetti Carbonara',
      desc: 'Classic Italian pasta dish.',
      price: '$4.90',
      image: 'pepperoni-pasta1',
    },
    {
      name: 'Penne Arrabbiata',
      desc: 'Spicy tomato sauce with penne.',
      price: '$4.50',
      image: 'pepperoni-pasta2',
    },
    {
      name: 'Fettuccine Alfredo',
      desc: 'Creamy white sauce with fettuccine.',
      price: '$5.20',
      image: 'pepperoni-pasta3',
    },
  ],
}

const tabs: Tab[] = ['Pizza', 'Drinks', 'Burgers', 'Pasta']

export function Menu() {
  const [activeTab, setActiveTab] = useState<Tab>('Pizza')

  return (
    <section id="menu" className="py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-8 text-center">
          <h2 className="mb-3 font-display text-3xl font-bold text-ink">Hot Pizza Meals</h2>
        </div>

        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {tabs.map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={cn(
                'rounded-lg px-6 py-2 text-sm font-medium transition-colors',
                activeTab === tab
                  ? 'bg-brand text-surface'
                  : 'bg-gray-100 text-ink-light hover:bg-gray-200',
              )}
              aria-pressed={activeTab === tab}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
          {menuData[activeTab].map((item) => (
            <div key={item.name} className="text-center">
              <img
                src={`https://picsum.photos/seed/${item.image}/400/300`}
                alt={item.name}
                className="mb-4 h-48 w-full rounded-lg object-cover"
                loading="lazy"
              />
              <h3 className="mb-1 text-lg font-semibold text-ink">{item.name}</h3>
              <p className="mb-2 text-sm text-mist">{item.desc}</p>
              <p className="mb-3 text-lg font-bold text-brand">{item.price}</p>
              <button
                type="button"
                className="rounded-lg border border-brand px-4 py-2 text-sm font-medium text-brand transition-colors hover:bg-brand hover:text-white"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
