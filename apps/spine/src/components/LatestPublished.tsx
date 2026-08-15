import { useState } from 'react'
import { cn } from '@free-react-templates/ui'
import { browseMoreLabel, latestBooks, latestTabs, latestTitle } from '../data'
import { BookCard } from './BookCard'

export function LatestPublished() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section id="latest" aria-labelledby="latest-heading" className="bg-white py-[120px]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <h2 id="latest-heading" className="font-display text-3xl font-bold text-ink">
            {latestTitle}
          </h2>
          <div role="tablist" aria-label="Book categories" className="flex flex-wrap gap-2">
            {latestTabs.map((tab, index) => (
              <button
                key={tab}
                type="button"
                role="tab"
                id={`latest-tab-${index}`}
                aria-selected={activeIndex === index}
                aria-controls="latest-panel"
                onClick={() => setActiveIndex(index)}
                className={cn(
                  'rounded-[20px] border px-6 py-1.5 text-base transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand',
                  activeIndex === index
                    ? 'border-transparent bg-brand text-white'
                    : 'border-edge bg-transparent text-secondary hover:text-brand',
                )}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
        <div
          role="tabpanel"
          id="latest-panel"
          aria-labelledby={`latest-tab-${activeIndex}`}
          className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6"
        >
          {latestBooks.map((book, index) => (
            <BookCard key={`${activeIndex}-${index}`} book={book} bordered />
          ))}
        </div>
        <div className="mt-12 text-center">
          <button
            type="button"
            className="rounded-full border border-brand px-10 py-[17px] text-base font-medium text-brand transition-colors hover:bg-brand hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
          >
            {browseMoreLabel}
          </button>
        </div>
      </div>
    </section>
  )
}
