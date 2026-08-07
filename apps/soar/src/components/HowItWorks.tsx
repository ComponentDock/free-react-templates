import { useState } from 'react'
import { Server, Gauge, Zap } from 'lucide-react'

const tabs = [
  {
    label: 'Next gen VPS',
    icon: Server,
    heading: 'Next gen VPS hosting',
    copy: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
  },
  {
    label: 'Performance',
    icon: Gauge,
    heading: 'Performance VPS hosting',
    copy: 'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.',
  },
  {
    label: 'Effectiveness',
    icon: Zap,
    heading: 'Effective VPS hosting',
    copy: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life. One day however a small line of blind text by the name of Lorem Ipsum decided to leave.',
  },
] as const

export function HowItWorks() {
  const [active, setActive] = useState(0)
  const current = tabs[active]

  return (
    <section
      id="how-it-works"
      aria-label="How it works"
      className="bg-white py-16 sm:py-24 dark:bg-gray-950"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-gray-400">
            How It Works
          </p>
          <h2 className="mt-3 font-display text-2xl font-medium leading-snug text-gray-900 sm:text-3xl dark:text-gray-100">
            How it works
          </h2>
        </div>

        <div
          role="tablist"
          aria-label="Hosting options"
          className="mx-auto mt-12 flex max-w-2xl justify-center gap-2 rounded-full bg-gray-100 p-2 dark:bg-gray-900"
        >
          {tabs.map((tab, index) => {
            const Icon = tab.icon
            return (
              <button
                key={tab.label}
                role="tab"
                id={`howitworks-tab-${index}`}
                aria-selected={active === index}
                aria-controls="howitworks-panel"
                onClick={() => setActive(index)}
                className={`inline-flex flex-1 items-center justify-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium transition-colors ${
                  active === index
                    ? 'bg-primary-400 text-white shadow'
                    : 'text-gray-600 hover:text-primary-400 dark:text-gray-300 dark:hover:text-primary-300'
                }`}
              >
                <Icon className="h-4 w-4" aria-hidden="true" />
                {tab.label}
              </button>
            )
          })}
        </div>

        <div
          id="howitworks-panel"
          role="tabpanel"
          aria-labelledby={`howitworks-tab-${active}`}
          className="mx-auto mt-12 max-w-3xl text-center"
        >
          <h3 className="font-display text-2xl font-semibold text-gray-900 dark:text-gray-100">
            {current?.heading}
          </h3>
          <p className="mt-4 leading-relaxed text-gray-500 dark:text-gray-400">{current?.copy}</p>
        </div>
      </div>
    </section>
  )
}
