import { useState } from 'react'
import { cn } from '@free-react-templates/ui'
import { MENU_IMAGE, MENU_TABS } from '../data'

/* Restaurant menu (source: section.section.bg-image.overlay#section-menus —
   dark background-image section with a white "Our Restaurant Menu" heading,
   Food / Desserts / Drinks tabs and six items per panel: red price, white
   serif title, dimmed description). */
export function MenuTabs() {
  const [active, setActive] = useState<(typeof MENU_TABS)[number]['id']>(MENU_TABS[0].id)
  const activeTab = MENU_TABS.find((tab) => tab.id === active)!

  return (
    <section
      id="menus"
      className="relative bg-cover bg-center py-20"
      style={{ backgroundImage: `url('${MENU_IMAGE}')` }}
    >
      <div className="absolute inset-0 bg-black/60" aria-hidden="true" />
      <div className="relative z-10 mx-auto max-w-6xl px-4 text-center">
        <h2 className="font-display text-4xl font-bold text-white">Our Restaurant Menu</h2>
        <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-white/70">
          Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
          there live the blind texts.
        </p>

        <div
          role="tablist"
          aria-label="Restaurant menu categories"
          className="mt-10 flex justify-center gap-8"
        >
          {MENU_TABS.map((tab) => (
            <button
              key={tab.id}
              type="button"
              role="tab"
              id={`tab-${tab.id}`}
              aria-selected={active === tab.id}
              aria-controls={`panel-${tab.id}`}
              onClick={() => setActive(tab.id)}
              className={cn(
                'text-sm font-bold uppercase tracking-[0.2em] transition-colors',
                active === tab.id ? 'text-brand' : 'text-white/70 hover:text-white',
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div
          role="tabpanel"
          id={`panel-${activeTab.id}`}
          aria-labelledby={`tab-${activeTab.id}`}
          className="mt-12 grid gap-x-10 gap-y-8 text-left md:grid-cols-2"
        >
          {activeTab.items.map((item) => (
            <div key={item.name} className="border-b border-white/15 pb-4">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="font-display text-lg text-white">{item.name}</h3>
                <span className="font-bold text-brand">{item.price}</span>
              </div>
              <p className="mt-1 text-sm leading-relaxed text-white/70">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
