import { useState } from 'react'
import { Activity, Ambulance, Users } from 'lucide-react'
import { businessTabs } from '../data'

const icons = [Activity, Users, Ambulance] as const

export function BusinessTabs() {
  const [active, setActive] = useState(0)
  const tab = businessTabs[active]!
  const Icon = icons[active]!

  return (
    <section aria-label="Why choose us" className="border-b border-line bg-tint py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div
          role="tablist"
          aria-label="Business highlights"
          className="grid grid-cols-1 md:grid-cols-3"
        >
          {businessTabs.map((item, i) => (
            <button
              key={item.title}
              type="button"
              role="tab"
              id={`business-tab-${i}`}
              aria-selected={i === active}
              aria-controls={`business-panel-${i}`}
              onClick={() => setActive(i)}
              className={`px-10 py-9 text-left text-xl text-ink transition-colors ${
                i === active ? 'bg-white' : 'hover:bg-white/60'
              }`}
            >
              {item.title}
            </button>
          ))}
        </div>
        <div
          role="tabpanel"
          id={`business-panel-${active}`}
          aria-labelledby={`business-tab-${active}`}
          className="mt-10 grid grid-cols-1 items-center gap-10 lg:grid-cols-2"
        >
          <div>
            <span className="flex h-[75px] w-[75px] items-center justify-center rounded-full bg-sky">
              <Icon className="h-9 w-9 text-white" aria-hidden="true" />
            </span>
            <h3 className="mt-6 text-xl font-medium text-ink">{tab.title}</h3>
            <p className="mt-4 text-base leading-7 text-body">{tab.blurb}</p>
          </div>
          <img src={tab.image} alt="" className="w-full rounded" />
        </div>
      </div>
    </section>
  )
}
