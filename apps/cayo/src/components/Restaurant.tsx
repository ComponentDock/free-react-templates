import { useState } from 'react'
import { cn } from '@free-react-templates/ui'

type MenuItem = {
  name: string
  price: string
  description: string
  image: string
  stars: number
}

const menuData: Record<string, MenuItem[]> = {
  'Main Dish': [
    {
      name: 'Grilled Salmon',
      price: '$32',
      description: 'Fresh Atlantic salmon with herb butter and seasonal vegetables.',
      image: 'cayo-salmon',
      stars: 5,
    },
    {
      name: 'Filet Mignon',
      price: '$45',
      description: 'Premium beef tenderloin with truffle mash and red wine jus.',
      image: 'cayo-steak',
      stars: 5,
    },
    {
      name: 'Pasta Primavera',
      price: '$22',
      description: 'Hand-made pasta tossed with fresh garden vegetables and olive oil.',
      image: 'cayo-pasta',
      stars: 4,
    },
  ],
  Drinks: [
    {
      name: 'Tropical Sunset',
      price: '$14',
      description: 'A refreshing blend of passion fruit, rum, and coconut cream.',
      image: 'cayo-cocktail',
      stars: 4,
    },
    {
      name: 'Cayo Signature',
      price: '$16',
      description: 'Our house special with aged bourbon, honey, and fresh mint.',
      image: 'cayo-signature',
      stars: 5,
    },
    {
      name: 'Berry Smoothie',
      price: '$10',
      description: 'Mixed berries blended with yogurt and a touch of honey.',
      image: 'cayo-smoothie',
      stars: 4,
    },
  ],
  Desserts: [
    {
      name: 'Chocolate Lava',
      price: '$18',
      description: 'Rich dark chocolate cake with a molten center and vanilla ice cream.',
      image: 'cayo-chocolate',
      stars: 5,
    },
    {
      name: 'Crème Brûlée',
      price: '$16',
      description: 'Classic French custard with a caramelized sugar crust.',
      image: 'cayo-creme',
      stars: 4,
    },
    {
      name: 'Tropical Fruit Platter',
      price: '$14',
      description: 'Seasonal tropical fruits with a lime and mint dressing.',
      image: 'cayo-fruit',
      stars: 4,
    },
  ],
}

const tabs = Object.keys(menuData)

export function Restaurant({ className }: { className?: string }) {
  const [activeTab, setActiveTab] = useState(tabs[0]!)
  const items = menuData[activeTab]!

  return (
    <section id="restaurant" className={cn('py-24 bg-paper', className)}>
      <div className="mx-auto max-w-7xl px-4">
        <p className="mb-2 text-center font-heading text-sm font-semibold uppercase tracking-[4px] text-brand">
          Dining
        </p>
        <h2 className="mb-8 text-center font-heading text-3xl font-bold text-ink sm:text-4xl">
          Our Restaurants
        </h2>

        {/* Tabs */}
        <div className="mb-12 flex justify-center gap-4">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={cn(
                'px-6 py-2 font-heading text-sm font-semibold uppercase tracking-wider transition',
                activeTab === tab ? 'bg-accent text-white' : 'bg-white text-ink hover:bg-accent/10',
              )}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Menu items */}
        <div className="grid gap-8 md:grid-cols-3">
          {items.map((item) => (
            <div key={item.name} className="flex items-start gap-4">
              <img
                src={`https://picsum.photos/seed/${item.image}/100/100`}
                alt={item.name}
                className="h-20 w-20 shrink-0 rounded-full object-cover"
                loading="lazy"
              />
              <div>
                <div className="mb-1 flex items-center gap-2">
                  <h3 className="font-heading text-lg font-bold text-ink">{item.name}</h3>
                  <span className="text-accent">{item.price}</span>
                </div>
                <div className="mb-2 flex gap-1">
                  {Array.from({ length: item.stars }).map((_, i) => (
                    <span key={i} className="text-brand">
                      &#9733;
                    </span>
                  ))}
                </div>
                <p className="mb-2 text-sm text-mist">{item.description}</p>
                <button className="text-xs font-semibold uppercase tracking-wider text-accent transition hover:text-accent/80">
                  Add to cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
