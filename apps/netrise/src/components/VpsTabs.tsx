import { useState } from 'react'
import { Monitor } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { vpsTabs } from '../data'

export function VpsTabs() {
  const [active, setActive] = useState(vpsTabs[0]!.id)

  const activeTab = vpsTabs.find((tab) => tab.id === active)!

  return (
    <section aria-label="How it works" className="bg-white py-24">
      <div className="mx-auto max-w-[1200px] px-4">
        <h2 className="text-center text-3xl font-bold text-ink sm:text-4xl">How it works</h2>
        <p className="mx-auto mt-4 max-w-[560px] text-center text-base font-light text-gray-500">
          Even the all-powerful Pointing has no control about the blind texts.
        </p>

        <div
          role="tablist"
          aria-label="VPS hosting features"
          className="mt-12 flex justify-center gap-2"
        >
          {vpsTabs.map((tab) => (
            <button
              key={tab.id}
              role="tab"
              id={`tab-${tab.id}`}
              aria-selected={active === tab.id}
              aria-controls={`panel-${tab.id}`}
              onClick={() => setActive(tab.id)}
              className={cn(
                'px-6 py-3 text-sm font-semibold transition-colors',
                active === tab.id
                  ? 'bg-[linear-gradient(45deg,#12e6ca,#8be55d)] text-white'
                  : 'bg-light text-ink hover:bg-gray-200',
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div
          key={activeTab.id}
          role="tabpanel"
          id={`panel-${activeTab.id}`}
          aria-labelledby={`tab-${activeTab.id}`}
          className="mt-12 grid items-center gap-10 lg:grid-cols-2"
        >
          <div>
            <h3 className="text-2xl font-bold text-ink">{activeTab.heading}</h3>
            {activeTab.paragraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="mt-4 text-base font-light leading-relaxed text-gray-500"
              >
                {paragraph}
              </p>
            ))}
          </div>
          <div className="rounded-lg border border-gray-200 p-4 shadow-lg">
            <div className="flex items-center gap-1.5 border-b border-gray-200 pb-3">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
            </div>
            <div className="mt-4 flex items-center gap-3">
              <Monitor className="h-5 w-5 text-indigo" aria-hidden="true" />
              <div className="h-2 flex-1 rounded bg-gray-200" />
            </div>
            <div className="mt-3 h-2 w-3/4 rounded bg-gray-200" />
            <div className="mt-3 h-2 w-1/2 rounded bg-gray-200" />
            <div className="mt-6 grid grid-cols-3 gap-3">
              <div className="h-14 rounded bg-[linear-gradient(135deg,#12e6ca,#8be55d)] opacity-80" />
              <div className="h-14 rounded bg-[linear-gradient(135deg,#56c8fb,#627bed)] opacity-80" />
              <div className="h-14 rounded bg-[linear-gradient(135deg,#fb83b5,#9a51ff)] opacity-80" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
