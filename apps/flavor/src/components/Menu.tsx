import { useState } from 'react'
import { menuCategories, menuItems } from '../data'

/** Tabbed menu section: heading + tabbed content (Main, Desserts, Drinks)
 *  with dish items in 2-column layout. */
export function Menu() {
  const [active, setActive] = useState<string>('Main')

  const visible = menuItems.filter((item) => item.category === active)

  return (
    <section id="menu" className="bg-section py-[120px]">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="mb-6 text-4xl font-semibold">Flavor Menu</h1>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-0 rounded-[10px] bg-white py-2 shadow-[0px_10px_30px_0px_rgba(153,153,153,0.2)]">
          {menuCategories.map((category, index) => (
            <button
              key={category}
              type="button"
              onClick={() => setActive(category)}
              aria-pressed={active === category}
              className={`px-5 py-2 text-xs font-medium transition-colors ${
                index < menuCategories.length - 1 ? 'border-r border-[#edf6ff]' : ''
              } ${
                active === category
                  ? 'bg-brand text-white'
                  : 'bg-transparent text-ink hover:text-brand'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {visible.map((item) => (
            <article
              key={item.name}
              className="flex items-center gap-4 rounded-[10px] bg-white p-4 shadow-[0px_10px_30px_0px_rgba(153,153,153,0.2)]"
            >
              <img
                src={item.image}
                alt={item.name}
                loading="lazy"
                className="h-24 w-24 shrink-0 rounded-[10px] object-cover"
              />
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h4 className="text-lg font-semibold">{item.name}</h4>
                  <span className="text-lg font-semibold text-brand">{item.price}</span>
                </div>
                <p className="mt-1 text-xs uppercase text-body-grey">{item.category}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
