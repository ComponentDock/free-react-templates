import { useState } from 'react'

type Category = 'all' | 'espresso' | 'brewed' | 'specialty'

interface MenuItem {
  name: string
  description: string
  price: string
  category: Exclude<Category, 'all'>
  image: string
}

const menuItems: ReadonlyArray<MenuItem> = [
  {
    name: 'Classic Espresso',
    description: 'Rich, bold shot with a golden crema.',
    price: '$3.50',
    category: 'espresso',
    image: 'https://picsum.photos/seed/espresso1/400/300',
  },
  {
    name: 'Cappuccino',
    description: 'Velvety espresso topped with steamed milk foam.',
    price: '$4.50',
    category: 'espresso',
    image: 'https://picsum.photos/seed/cappuccino1/400/300',
  },
  {
    name: 'Pour Over',
    description: 'Clean, bright single-origin brewed to order.',
    price: '$5.00',
    category: 'brewed',
    image: 'https://picsum.photos/seed/pourover1/400/300',
  },
  {
    name: 'Cold Brew',
    description: 'Smooth 16-hour steep, served over ice.',
    price: '$4.75',
    category: 'brewed',
    image: 'https://picsum.photos/seed/coldbrew1/400/300',
  },
  {
    name: 'Caramel Latte',
    description: 'Espresso with caramel drizzle and creamy milk.',
    price: '$5.50',
    category: 'specialty',
    image: 'https://picsum.photos/seed/caramellatte1/400/300',
  },
  {
    name: 'Mocha Delight',
    description: 'Chocolate, espresso, and whipped cream indulgence.',
    price: '$5.75',
    category: 'specialty',
    image: 'https://picsum.photos/seed/mocha1/400/300',
  },
] as const

const categories: ReadonlyArray<{ key: Category; label: string }> = [
  { key: 'all', label: 'All' },
  { key: 'espresso', label: 'Espresso' },
  { key: 'brewed', label: 'Brewed' },
  { key: 'specialty', label: 'Specialty' },
]

export function Menu() {
  const [active, setActive] = useState<Category>('all')

  const filtered =
    active === 'all' ? menuItems : menuItems.filter((item) => item.category === active)

  return (
    <section id="menu" className="bg-paper py-20 transition-colors dark:bg-charcoal">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <span className="font-display text-sm font-semibold uppercase tracking-[0.3em] text-brand">
            Our Menu
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-ink dark:text-white sm:text-4xl">
            Explore Our Blends
          </h2>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat.key}
              type="button"
              onClick={() => setActive(cat.key)}
              className={`rounded-full px-6 py-2 text-sm font-medium uppercase tracking-wide transition-colors ${
                active === cat.key
                  ? 'bg-brand text-charcoal'
                  : 'border border-gray-300 text-mist hover:border-brand hover:text-brand dark:border-gray-700 dark:text-gray-400'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item) => (
            <div
              key={item.name}
              className="group overflow-hidden rounded-2xl bg-white shadow-md transition-all hover:shadow-lg dark:bg-gray-900"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between">
                  <h3 className="font-display text-lg font-bold text-ink dark:text-white">
                    {item.name}
                  </h3>
                  <span className="text-lg font-bold text-brand">{item.price}</span>
                </div>
                <p className="mt-2 text-sm text-mist">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
