import { useState } from 'react'
import { cn } from '@free-react-templates/ui'
import { finder, pests } from '../content'
import { ActionLink, SectionIntro, containerClass } from './ui'

/**
 * The page's centrepiece: nine pests, one panel, and the honesty mechanism kept
 * intact — five say "On the plan." and four say "Not on the plan."
 */
export function Finder() {
  const [activeIndex, setActiveIndex] = useState(0)
  const selected = pests[activeIndex]!

  return (
    <section
      id="identify"
      data-pestfinder=""
      className="section scroll-mt-20 bg-ink-900 text-white"
    >
      <div className={containerClass}>
        <SectionIntro tone="dark" kicker={finder.kicker} title={finder.title} lead={finder.lead} />

        <div className="mt-10 grid gap-6 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3" role="group" aria-label="Choose the pest">
              {pests.map((pest, index) => {
                const isActive = index === activeIndex
                return (
                  <button
                    key={pest.slug}
                    id={`tab-${pest.slug}`}
                    type="button"
                    data-pest-tab={pest.slug}
                    aria-expanded={isActive}
                    aria-controls="pest-panel"
                    onClick={() => setActiveIndex(index)}
                    className={cn(
                      'rounded-xl border border-white/15 p-4 text-left transition-colors hover:border-white/40',
                      isActive && 'border-primary-400 bg-primary-400/10',
                    )}
                  >
                    <span
                      className={cn(
                        'block text-base leading-6 font-bold text-white/70',
                        isActive && 'text-white',
                      )}
                    >
                      {pest.label}
                    </span>
                    <span className="mt-1 block text-xs leading-4 text-white/40">{pest.sub}</span>
                  </button>
                )
              })}
            </div>
            <p className="mt-6 text-sm leading-5 text-white/40">{finder.note}</p>
          </div>

          <div className="lg:col-span-5">
            <div
              id="pest-panel"
              data-pest-panel={selected.slug}
              role="region"
              aria-labelledby={`tab-${selected.slug}`}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8"
            >
              <h3 className="text-2xl leading-8 font-bold">{selected.label}</h3>
              <p className="mt-3 text-base leading-6 text-white/70">{selected.lead}</p>

              <dl className="mt-6 space-y-4 border-t border-white/10 pt-6">
                <div className="flex items-baseline justify-between gap-4">
                  <dt className="text-sm leading-5 text-white/50">{finder.labels.visits}</dt>
                  <dd className="text-right font-semibold">{selected.visits}</dd>
                </div>
                <div className="flex items-baseline justify-between gap-4">
                  <dt className="text-sm leading-5 text-white/50">{finder.labels.price}</dt>
                  <dd className="text-right font-semibold text-primary-300">{selected.price}</dd>
                </div>
                <div className="flex items-baseline justify-between gap-4">
                  <dt className="text-sm leading-5 text-white/50">{finder.labels.arrival}</dt>
                  <dd className="text-right font-semibold">{selected.arrival}</dd>
                </div>
              </dl>

              <p className="mt-5 rounded-lg border border-primary-400/40 bg-primary-400/10 p-4 text-sm leading-5 text-primary-100">
                <strong className="font-bold">
                  {selected.covered ? finder.coveredLabel : finder.uncoveredLabel}
                </strong>{' '}
                {selected.note}
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <ActionLink href="#quote" className="flex-1 px-5 py-2.5">
                  {finder.ctaBook}
                </ActionLink>
                <ActionLink href="#plans" variant="outlineWhite" className="flex-1 px-5 py-2.5">
                  {finder.ctaPlan}
                </ActionLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
