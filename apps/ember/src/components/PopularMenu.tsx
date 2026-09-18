import { useState } from 'react'

const tabs = ['Special', 'Breakfast', 'Lunch', 'Dinner', 'Snacks'] as const

type TabName = (typeof tabs)[number]

const menuItems: Record<
  TabName,
  ReadonlyArray<{ name: string; description: string; price: string; image: string }>
> = {
  Special: [
    {
      name: 'Pork Sandwich',
      description: "They're wherein heaven seed hath nothing",
      price: '$40.00',
      image: 'https://picsum.photos/seed/ember-m1/100/100',
    },
    {
      name: 'Roasted Marrow',
      description: "They're wherein heaven seed hath nothing",
      price: '$40.00',
      image: 'https://picsum.photos/seed/ember-m2/100/100',
    },
    {
      name: 'Summer Cooking',
      description: "They're wherein heaven seed hath nothing",
      price: '$40.00',
      image: 'https://picsum.photos/seed/ember-m3/100/100',
    },
    {
      name: 'Easter Delight',
      description: "They're wherein heaven seed hath nothing",
      price: '$40.00',
      image: 'https://picsum.photos/seed/ember-m4/100/100',
    },
    {
      name: 'Tiener Schnitze',
      description: "They're wherein heaven seed hath nothing",
      price: '$40.00',
      image: 'https://picsum.photos/seed/ember-m5/100/100',
    },
    {
      name: 'Chicken Roast',
      description: "They're wherein heaven seed hath nothing",
      price: '$40.00',
      image: 'https://picsum.photos/seed/ember-m6/100/100',
    },
  ],
  Breakfast: [
    {
      name: 'Easter Delight',
      description: "They're wherein heaven seed hath nothing",
      price: '$40.00',
      image: 'https://picsum.photos/seed/ember-b1/100/100',
    },
    {
      name: 'Tiener Schnitze',
      description: "They're wherein heaven seed hath nothing",
      price: '$40.00',
      image: 'https://picsum.photos/seed/ember-b2/100/100',
    },
    {
      name: 'Chicken Roast',
      description: "They're wherein heaven seed hath nothing",
      price: '$40.00',
      image: 'https://picsum.photos/seed/ember-b3/100/100',
    },
    {
      name: 'Pork Sandwich',
      description: "They're wherein heaven seed hath nothing",
      price: '$40.00',
      image: 'https://picsum.photos/seed/ember-b4/100/100',
    },
    {
      name: 'Roasted Marrow',
      description: "They're wherein heaven seed hath nothing",
      price: '$40.00',
      image: 'https://picsum.photos/seed/ember-b5/100/100',
    },
    {
      name: 'Summer Cooking',
      description: "They're wherein heaven seed hath nothing",
      price: '$40.00',
      image: 'https://picsum.photos/seed/ember-b6/100/100',
    },
  ],
  Lunch: [
    {
      name: 'Pork Sandwich',
      description: "They're wherein heaven seed hath nothing",
      price: '$40.00',
      image: 'https://picsum.photos/seed/ember-l1/100/100',
    },
    {
      name: 'Roasted Marrow',
      description: "They're wherein heaven seed hath nothing",
      price: '$40.00',
      image: 'https://picsum.photos/seed/ember-l2/100/100',
    },
    {
      name: 'Summer Cooking',
      description: "They're wherein heaven seed hath nothing",
      price: '$40.00',
      image: 'https://picsum.photos/seed/ember-l3/100/100',
    },
    {
      name: 'Easter Delight',
      description: "They're wherein heaven seed hath nothing",
      price: '$40.00',
      image: 'https://picsum.photos/seed/ember-l4/100/100',
    },
    {
      name: 'Tiener Schnitze',
      description: "They're wherein heaven seed hath nothing",
      price: '$40.00',
      image: 'https://picsum.photos/seed/ember-l5/100/100',
    },
    {
      name: 'Chicken Roast',
      description: "They're wherein heaven seed hath nothing",
      price: '$40.00',
      image: 'https://picsum.photos/seed/ember-l6/100/100',
    },
  ],
  Dinner: [
    {
      name: 'Easter Delight',
      description: "They're wherein heaven seed hath nothing",
      price: '$40.00',
      image: 'https://picsum.photos/seed/ember-d1/100/100',
    },
    {
      name: 'Tiener Schnitze',
      description: "They're wherein heaven seed hath nothing",
      price: '$40.00',
      image: 'https://picsum.photos/seed/ember-d2/100/100',
    },
    {
      name: 'Chicken Roast',
      description: "They're wherein heaven seed hath nothing",
      price: '$40.00',
      image: 'https://picsum.photos/seed/ember-d3/100/100',
    },
    {
      name: 'Pork Sandwich',
      description: "They're wherein heaven seed hath nothing",
      price: '$40.00',
      image: 'https://picsum.photos/seed/ember-d4/100/100',
    },
    {
      name: 'Roasted Marrow',
      description: "They're wherein heaven seed hath nothing",
      price: '$40.00',
      image: 'https://picsum.photos/seed/ember-d5/100/100',
    },
    {
      name: 'Summer Cooking',
      description: "They're wherein heaven seed hath nothing",
      price: '$40.00',
      image: 'https://picsum.photos/seed/ember-d6/100/100',
    },
  ],
  Snacks: [
    {
      name: 'Pork Sandwich',
      description: "They're wherein heaven seed hath nothing",
      price: '$40.00',
      image: 'https://picsum.photos/seed/ember-s1/100/100',
    },
    {
      name: 'Roasted Marrow',
      description: "They're wherein heaven seed hath nothing",
      price: '$40.00',
      image: 'https://picsum.photos/seed/ember-s2/100/100',
    },
    {
      name: 'Summer Cooking',
      description: "They're wherein heaven seed hath nothing",
      price: '$40.00',
      image: 'https://picsum.photos/seed/ember-s3/100/100',
    },
    {
      name: 'Easter Delight',
      description: "They're wherein heaven seed hath nothing",
      price: '$40.00',
      image: 'https://picsum.photos/seed/ember-s4/100/100',
    },
    {
      name: 'Tiener Schnitze',
      description: "They're wherein heaven seed hath nothing",
      price: '$40.00',
      image: 'https://picsum.photos/seed/ember-s5/100/100',
    },
    {
      name: 'Chicken Roast',
      description: "They're wherein heaven seed hath nothing",
      price: '$40.00',
      image: 'https://picsum.photos/seed/ember-s6/100/100',
    },
  ],
}

export function PopularMenu() {
  const [activeTab, setActiveTab] = useState<TabName>('Special')

  return (
    <section id="menu" className="bg-cream py-20 transition-colors dark:bg-gray-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <span className="font-display text-sm font-semibold uppercase tracking-[0.25em] text-brand">
            Popular Menu
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-ink dark:text-white">
            Delicious Food Menu
          </h2>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {tabs.map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              aria-pressed={activeTab === tab}
              className={`rounded-full px-6 py-2 text-sm font-semibold uppercase tracking-wide transition-colors ${
                activeTab === tab
                  ? 'bg-brand text-white'
                  : 'bg-white text-mist hover:text-brand dark:bg-gray-800 dark:text-gray-400'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {menuItems[activeTab].map((item) => (
            <div
              key={item.name}
              className="flex items-center gap-4 rounded-xl bg-white p-4 shadow-sm transition-shadow hover:shadow-md dark:bg-gray-800"
            >
              <img
                src={item.image}
                alt={item.name}
                className="h-16 w-16 shrink-0 rounded-full object-cover"
              />
              <div className="flex-1">
                <h3 className="font-display text-base font-bold text-ink dark:text-white">
                  {item.name}
                </h3>
                <p className="mt-1 text-sm text-mist dark:text-gray-400">{item.description}</p>
              </div>
              <span className="shrink-0 font-display text-lg font-bold text-brand">
                {item.price}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
