import { useState } from 'react'
import { cn } from '@free-react-templates/ui'

const tabs = ['Breakfast', 'Brunch', 'Dinner'] as const

type TabName = (typeof tabs)[number]

interface MenuItem {
  name: string
  description: string
  price: string
  image: string
}

const menuData: Record<TabName, MenuItem[]> = {
  Breakfast: [
    {
      name: 'Warm Spinach Dip & Chips',
      description:
        'Spinach and artichokes in a creamy cheese dip with warm tortilla chips & salsa.',
      price: '$10.49',
      image: 'https://picsum.photos/seed/taster-m1/200/200',
    },
    {
      name: 'Key West Machos',
      description:
        'Crisp tortilla and plantain chips covered with lightly spiced ground beef, melted cheese.',
      price: '$11.99',
      image: 'https://picsum.photos/seed/taster-m2/200/200',
    },
    {
      name: 'Crispy Onions Rings',
      description:
        'A heaping mountain of rings, handmade with Panko breading and shredded coconut flakes.',
      price: '$11.99',
      image: 'https://picsum.photos/seed/taster-m3/200/200',
    },
    {
      name: 'Lobster & Shrimp Quesadilla',
      description:
        'Lobster and tender shrimp, with onions, sweet peppers, spinach and our three cheese blend.',
      price: '$13.99',
      image: 'https://picsum.photos/seed/taster-m4/200/200',
    },
  ],
  Brunch: [
    {
      name: 'Jumbo Lump Crab Stack',
      description:
        'Spinach and artichokes in a creamy cheese dip with warm tortilla chips & salsa.',
      price: '$12.49',
      image: 'https://picsum.photos/seed/taster-b1/200/200',
    },
    {
      name: 'Jamaican Chicken Wings',
      description:
        'Crisp tortilla and plantain chips covered with lightly spiced ground beef, melted cheese.',
      price: '$15.99',
      image: 'https://picsum.photos/seed/taster-b2/200/200',
    },
    {
      name: 'Bahamian Seafood Chowder',
      description:
        'A heaping mountain of rings, handmade with Panko breading and shredded coconut flakes.',
      price: '$10.99',
      image: 'https://picsum.photos/seed/taster-b3/200/200',
    },
    {
      name: 'Grilled Chicken & Broccoli',
      description:
        'Lobster and tender shrimp, with onions, sweet peppers, spinach and our three cheese blend.',
      price: '$12.99',
      image: 'https://picsum.photos/seed/taster-b4/200/200',
    },
  ],
  Dinner: [
    {
      name: 'Seared Ahi Tuna & Avocado',
      description:
        'Spinach and artichokes in a creamy cheese dip with warm tortilla chips & salsa.',
      price: '$16.99',
      image: 'https://picsum.photos/seed/taster-d1/200/200',
    },
    {
      name: 'Grilled Salmon',
      description:
        'Crisp tortilla and plantain chips covered with lightly spiced ground beef, melted cheese.',
      price: '$14.99',
      image: 'https://picsum.photos/seed/taster-d2/200/200',
    },
    {
      name: 'Filet Mignon',
      description:
        'A heaping mountain of rings, handmade with Panko breading and shredded coconut flakes.',
      price: '$19.99',
      image: 'https://picsum.photos/seed/taster-d3/200/200',
    },
    {
      name: 'Lobster Tail',
      description:
        'Lobster and tender shrimp, with onions, sweet peppers, spinach and our three cheese blend.',
      price: '$21.99',
      image: 'https://picsum.photos/seed/taster-d4/200/200',
    },
  ],
}

export function Menu() {
  const [activeTab, setActiveTab] = useState<TabName>('Breakfast')

  return (
    <section id="our-menu" className="bg-paper py-20">
      <div className="mx-auto max-w-4xl px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-display text-4xl font-bold text-ink md:text-5xl">Menu</h2>
          <p className="text-lg text-mist">Free Website Template For Restaurants</p>
        </div>

        {/* Tabs */}
        <div className="mb-10 flex justify-center">
          <div className="flex gap-1 border-b border-border">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={cn(
                  'px-6 py-3 text-sm font-bold uppercase tracking-[0.15em] transition-colors',
                  activeTab === tab
                    ? 'border-b-2 border-brand text-brand'
                    : 'text-mist hover:text-ink',
                )}
                aria-selected={activeTab === tab}
                role="tab"
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Menu items */}
        <div role="tabpanel" aria-label={`${activeTab} menu`}>
          {menuData[activeTab].map((item) => (
            <div
              key={item.name}
              className="mb-8 flex flex-col items-center gap-4 border-b border-border pb-8 last:border-0 md:flex-row md:items-start"
            >
              <img
                src={item.image}
                alt={item.name}
                className="h-20 w-20 rounded object-cover"
                loading="lazy"
              />
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-lg font-bold text-ink">{item.name}</h3>
                <p className="mt-1 text-sm text-mist">{item.description}</p>
              </div>
              <div className="text-lg font-bold text-ink">{item.price}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
