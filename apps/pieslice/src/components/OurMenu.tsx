import { useState } from 'react'
import { cn } from '@free-react-templates/ui'

type MenuCategory = 'all' | 'pizza' | 'pasta' | 'salads' | 'desserts'

interface MenuItem {
  name: string
  price: string
  description: string
  category: Exclude<MenuCategory, 'all'>
  imageSeed: string
}

const CATEGORIES: { key: MenuCategory; label: string }[] = [
  { key: 'all', label: 'All' },
  { key: 'pizza', label: 'Pizza' },
  { key: 'pasta', label: 'Pasta' },
  { key: 'salads', label: 'Salads' },
  { key: 'desserts', label: 'Desserts' },
]

const MENU_ITEMS: MenuItem[] = [
  {
    name: 'Pizza Margherita',
    price: '$12.00',
    description:
      'Maecenas fermentum tortor id fringilla molestie. In hac habitasse platea dictumst.',
    category: 'pizza',
    imageSeed: 'pieslice-menu-1',
  },
  {
    name: 'Italian Pasta',
    price: '$20.00',
    description:
      'Proin dictum viverra varius. Etiam vulputate libero dui, at pretium elit elementum quis.',
    category: 'pasta',
    imageSeed: 'pieslice-menu-2',
  },
  {
    name: 'Pizza Prosciutto',
    price: '$12.00',
    description:
      'Maecenas fermentum tortor id fringilla molestie. In hac habitasse platea dictumst.',
    category: 'pizza',
    imageSeed: 'pieslice-menu-3',
  },
  {
    name: 'Bruschettas',
    price: '$6.00',
    description:
      'Proin dictum viverra varius. Etiam vulputate libero dui, at pretium elit elementum quis.',
    category: 'salads',
    imageSeed: 'pieslice-menu-4',
  },
  {
    name: 'Chocolate Lava Cake',
    price: '$8.50',
    description:
      'Maecenas fermentum tortor id fringilla molestie. In hac habitasse platea dictumst.',
    category: 'desserts',
    imageSeed: 'pieslice-menu-5',
  },
  {
    name: 'Penne Arrabbiata',
    price: '$16.00',
    description:
      'Proin dictum viverra varius. Etiam vulputate libero dui, at pretium elit elementum quis.',
    category: 'pasta',
    imageSeed: 'pieslice-menu-6',
  },
  {
    name: 'Caesar Salad',
    price: '$9.00',
    description:
      'Maecenas fermentum tortor id fringilla molestie. In hac habitasse platea dictumst.',
    category: 'salads',
    imageSeed: 'pieslice-menu-7',
  },
  {
    name: 'Tiramisu',
    price: '$7.50',
    description:
      'Proin dictum viverra varius. Etiam vulputate libero dui, at pretium elit elementum quis.',
    category: 'desserts',
    imageSeed: 'pieslice-menu-8',
  },
]

export function OurMenu() {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>('all')

  const filtered =
    activeCategory === 'all'
      ? MENU_ITEMS
      : MENU_ITEMS.filter((item) => item.category === activeCategory)

  return (
    <section id="menu" className="py-20">
      <div className="mx-auto max-w-6xl px-4">
        {/* Section heading */}
        <div className="mb-12 text-center">
          <div className="mx-auto mb-3 h-8 w-8 rotate-45 border-2 border-brand" />
          <h2 className="text-3xl font-bold text-ink">Our Menu</h2>
        </div>

        {/* Category tabs */}
        <div className="mb-10 flex flex-wrap justify-center gap-2 border-b-2 border-brand/30 pb-4">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={cn(
                'rounded px-5 py-2 text-sm font-bold uppercase tracking-wider transition-colors',
                activeCategory === cat.key ? 'bg-brand text-white' : 'text-ink hover:bg-brand/10',
              )}
              aria-pressed={activeCategory === cat.key}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Menu items grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {filtered.map((item) => (
            <div key={item.name} className="flex gap-4">
              <img
                src={`https://picsum.photos/seed/${item.imageSeed}/120/120`}
                alt={item.name}
                className="h-[120px] w-[120px] flex-shrink-0 rounded object-cover"
                loading="lazy"
              />
              <div>
                <div className="flex items-baseline justify-between gap-2">
                  <h3 className="text-lg font-bold text-ink">{item.name}</h3>
                  <span className="whitespace-nowrap text-lg font-bold text-brand">
                    {item.price}
                  </span>
                </div>
                <p className="mt-1 text-sm leading-relaxed text-body">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
