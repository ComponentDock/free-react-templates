import { useState } from 'react'
import { menuCategories, menuItems } from '../data'

/** Light #f9f9ff menu section with filter pills and six white coffee
 *  cards. Clicking a pill filters the cards client-side. */
export function MenuSection() {
  const [active, setActive] = useState<string>('All Menu')

  const visible =
    active === 'All Menu' ? menuItems : menuItems.filter((item) => item.category === active)

  return (
    <section id="menu" className="bg-section py-[120px]">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="mb-6 text-4xl font-semibold">What kind of Foods we serve for you</h1>
          <p className="leading-relaxed">
            Who are in extremely love with eco friendly system. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua.
          </p>
        </div>

        <div className="mt-14 flex flex-wrap justify-center gap-0 rounded-[10px] bg-white py-2 shadow-[0px_10px_30px_0px_rgba(153,153,153,0.2)]">
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

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((item) => (
            <article
              key={item.name}
              className="rounded-[10px] bg-white p-[30px] shadow-[0px_10px_30px_0px_rgba(153,153,153,0.2)]"
            >
              <img
                src={item.image}
                alt={item.name}
                loading="lazy"
                className="h-44 w-full rounded-[10px] object-cover"
              />
              <div className="mt-5 flex items-center justify-between">
                <h4 className="text-lg font-semibold">{item.name}</h4>
                <span className="text-lg font-semibold text-brand">{item.price}</span>
              </div>
              <p className="mt-3 leading-relaxed">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
