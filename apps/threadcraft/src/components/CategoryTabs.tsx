import { useState } from 'react'

const tabs = ["Men's", "Women's", "Kid's"]

export function CategoryTabs() {
  const [active, setActive] = useState("Men's")

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <div className="flex items-center justify-center gap-8 border-b border-border">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className={`pb-3 text-sm font-bold uppercase tracking-wider transition-colors border-b-2 ${
              active === tab
                ? 'border-brand text-text-dark'
                : 'border-transparent text-text-secondary hover:text-text-dark'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
    </section>
  )
}
