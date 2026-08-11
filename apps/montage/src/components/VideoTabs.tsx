import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import {
  cardImage,
  nextLabel,
  prevLabel,
  tabCards,
  tabListLabel,
  videoTabs,
  type TabId,
} from '../data'
import { PostMeta } from './PostMeta'

/* Tabbed video carousels (reference `.video-mag-tabs-area`): Latest / Top
   Viewed / See All Videos tabs with a rotating card row and prev/next
   controls (the reference uses owl-carousel — recreated as a static grid). */
export function VideoTabs() {
  const [active, setActive] = useState<TabId>('latest')
  const [offset, setOffset] = useState(0)

  const cards = tabCards[active]
  const rotated = [...cards.slice(offset), ...cards.slice(0, offset)]

  return (
    <section aria-label="Video carousels" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div role="tablist" aria-label={tabListLabel} className="flex flex-wrap gap-6">
            {videoTabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={active === tab.id}
                onClick={() => {
                  setActive(tab.id)
                  setOffset(0)
                }}
                className={cn(
                  'border-b-2 pb-1 font-display text-sm font-bold uppercase tracking-wide transition-colors',
                  active === tab.id
                    ? 'border-brand text-brand'
                    : 'border-transparent text-ink hover:text-brand',
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              aria-label={prevLabel}
              onClick={() => setOffset((value) => (value + cards.length - 1) % cards.length)}
              className="flex h-9 w-9 items-center justify-center border border-line text-ink transition-colors hover:border-brand hover:text-brand"
            >
              <ChevronLeft className="h-4 w-4" aria-hidden="true" />
            </button>
            <button
              type="button"
              aria-label={nextLabel}
              onClick={() => setOffset((value) => (value + 1) % cards.length)}
              className="flex h-9 w-9 items-center justify-center border border-line text-ink transition-colors hover:border-brand hover:text-brand"
            >
              <ChevronRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {rotated.map((card) => (
            <article key={card.title}>
              <a href="#">
                <img
                  src={cardImage(card)}
                  alt={card.title}
                  className="mb-4 aspect-video w-full object-cover"
                />
              </a>
              <h3 className="font-display text-lg font-bold leading-snug text-ink">
                <a href="#" className="transition-colors hover:text-brand">
                  {card.title}
                </a>
              </h3>
              <div className="mt-2">
                <PostMeta meta={card.meta} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
