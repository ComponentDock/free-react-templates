import { useState } from 'react'

const tabs = [
  {
    label: 'Breakfast',
    items: [
      {
        img: 'https://picsum.photos/seed/seared-b1/200/150',
        title: 'Eggs Benedict',
        desc: 'Poached eggs on toasted English muffin with hollandaise.',
      },
      {
        img: 'https://picsum.photos/seed/seared-b2/200/150',
        title: 'Avocado Toast',
        desc: 'Smashed avocado on sourdough with poached egg and chili flakes.',
      },
      {
        img: 'https://picsum.photos/seed/seared-b3/200/150',
        title: 'Pancake Stack',
        desc: 'Fluffy buttermilk pancakes with maple syrup and fresh berries.',
      },
    ],
  },
  {
    label: 'Lunch',
    items: [
      {
        img: 'https://picsum.photos/seed/seared-l1/200/150',
        title: 'Caesar Salad',
        desc: 'Crisp romaine with parmesan, croutons, and house-made dressing.',
      },
      {
        img: 'https://picsum.photos/seed/seared-l2/200/150',
        title: 'Grilled Chicken',
        desc: 'Herb-marinated chicken breast with seasonal vegetables.',
      },
      {
        img: 'https://picsum.photos/seed/seared-l3/200/150',
        title: 'Mushroom Risotto',
        desc: 'Creamy arborio rice with wild mushrooms and truffle oil.',
      },
    ],
  },
  {
    label: 'Dinner',
    items: [
      {
        img: 'https://picsum.photos/seed/seared-d1/200/150',
        title: 'Filet Mignon',
        desc: '8oz center-cut tenderloin with red wine jus and asparagus.',
      },
      {
        img: 'https://picsum.photos/seed/seared-d2/200/150',
        title: 'Pan-Seared Salmon',
        desc: 'Atlantic salmon with lemon butter and roasted vegetables.',
      },
      {
        img: 'https://picsum.photos/seed/seared-d3/200/150',
        title: 'Lobster Tail',
        desc: 'Butter-poached lobster tail with drawn butter and garlic mash.',
      },
    ],
  },
]

export function FeatureMenu() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section id="menu" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <h2
          className="mb-12 text-center text-3xl font-bold text-ink sm:text-4xl"
          style={{ fontFamily: 'var(--font-serif)' }}
        >
          Feature Menu
        </h2>

        {/* Tabs */}
        <div className="mb-10 flex justify-center gap-4">
          {tabs.map((tab, i) => (
            <button
              key={tab.label}
              type="button"
              onClick={() => setActiveTab(i)}
              className={`rounded border-2 px-6 py-2 text-sm font-semibold uppercase tracking-wider transition ${
                i === activeTab
                  ? 'border-brand bg-brand text-white'
                  : 'border-border text-body hover:border-brand hover:text-brand'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Menu items */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tabs[activeTab]?.items.map((item) => (
            <div
              key={item.title}
              className="flex items-start gap-4 rounded-lg border border-border p-4 transition hover:shadow-md"
            >
              <img
                src={item.img}
                alt={item.title}
                className="h-20 w-20 flex-shrink-0 rounded object-cover"
              />
              <div>
                <h4 className="mb-1 text-base font-bold text-ink">{item.title}</h4>
                <p className="text-sm text-body">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="#menu"
            className="inline-block rounded border-2 border-brand bg-brand px-8 py-3 text-sm font-semibold uppercase tracking-wider text-white transition hover:bg-brand-light hover:border-brand-light"
          >
            View All Menu
          </a>
        </div>
      </div>
    </section>
  )
}
