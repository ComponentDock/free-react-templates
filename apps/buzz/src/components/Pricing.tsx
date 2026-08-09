import { useState } from 'react'

const tabs = Array.from({ length: 6 }, (_, index) => ({
  id: `hair-styling-${index + 1}`,
  label: 'Hair Styling',
}))

const priceRows = [
  { name: 'Hair Cut', blurb: 'Wash, cut and style with premium products.', price: '$8' },
  { name: 'Hair Style', blurb: 'Finger-dried or blow-dried finish with wax.', price: '$8' },
  { name: 'Shaving', blurb: 'Traditional hot-towel shave with a straight razor.', price: '$8' },
] as const

export function Pricing() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section
      id="pricing"
      className="bg-paper py-20 transition-colors dark:bg-gray-900 lg:py-[120px]"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold uppercase text-ink dark:text-white sm:text-4xl">
            Our Pricing
          </h2>
          <p className="mt-4 text-mist dark:text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua ad minim veniam.
          </p>
        </div>

        <div
          role="tablist"
          aria-label="Pricing categories"
          className="mt-12 flex flex-wrap justify-center gap-2"
        >
          {tabs.map((tab, index) => (
            <button
              key={tab.id}
              id={tab.id}
              type="button"
              role="tab"
              aria-selected={activeTab === index}
              aria-controls="pricing-panel"
              onClick={() => setActiveTab(index)}
              className={`rounded-sm border px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] transition-colors ${
                activeTab === index
                  ? 'border-brand bg-brand text-white'
                  : 'border-gray-300 bg-white text-mist hover:border-brand hover:text-brand dark:border-gray-700 dark:bg-gray-950 dark:text-gray-300'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div
          id="pricing-panel"
          role="tabpanel"
          aria-labelledby={tabs[activeTab]!.id}
          className="mt-10 space-y-6"
        >
          {priceRows.map((row) => (
            <article
              key={row.name}
              className="flex items-baseline gap-4 rounded-lg bg-white px-6 py-5 shadow-sm dark:bg-gray-950"
            >
              <div className="min-w-0">
                <h3 className="font-display text-lg font-bold uppercase text-ink dark:text-white">
                  {row.name}
                </h3>
                <p className="mt-1 text-sm text-mist dark:text-gray-400">{row.blurb}</p>
              </div>
              <div
                className="mx-2 hidden flex-1 border-b border-dashed border-gray-300 sm:block dark:border-gray-700"
                aria-hidden="true"
              />
              <p className="shrink-0 font-display text-2xl font-bold text-brand">{row.price}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
