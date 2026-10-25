import { useState } from 'react'
import { cn } from '@free-react-templates/ui'
import { seasonCopy, services, servicesFootnote, type Season } from '../data'

/** October through March is heating; everything else is cooling. */
export function defaultSeason(month: number): Season {
  return month >= 9 || month <= 2 ? 'heating' : 'cooling'
}

export interface SeasonsProps {
  /** Injectable clock so the default season is deterministic in tests. */
  today?: Date
}

/**
 * The season is a whole-catalogue swap, not a layout change: the heading, the
 * lede and all six cells change while the 3 × 2 hairline grid stays put.
 */
export function Seasons({ today }: SeasonsProps) {
  const [now] = useState(() => today ?? new Date())
  const [season, setSeason] = useState<Season>(() => defaultSeason(now.getMonth()))
  const copy = seasonCopy[season]
  const priceClass = season === 'cooling' ? 'text-primary-700' : 'text-heat-700'

  return (
    <section id="seasons" className="section-band scroll-mt-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold tracking-wide text-ink-400 uppercase">
              What we are busy with
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink-800 sm:text-4xl">
              {copy.title}
            </h2>
            <p className="mt-4 text-lg text-ink-500">{copy.description}</p>
          </div>
          <div
            role="group"
            aria-label="Choose a season"
            className="inline-flex shrink-0 rounded-full border border-ink-200 p-1"
          >
            <button
              type="button"
              aria-pressed={season === 'cooling'}
              onClick={() => setSeason('cooling')}
              className="rounded-full px-5 py-2.5 text-sm font-bold text-ink-500 transition-colors aria-pressed:bg-primary-600 aria-pressed:text-white"
            >
              Cooling
            </button>
            <button
              type="button"
              aria-pressed={season === 'heating'}
              onClick={() => setSeason('heating')}
              className="rounded-full px-5 py-2.5 text-sm font-bold text-ink-500 transition-colors aria-pressed:bg-heat-600 aria-pressed:text-white"
            >
              Heating
            </button>
          </div>
        </div>

        <div className="mt-12">
          <div className="hairline-grid sm:grid-cols-2 lg:grid-cols-3">
            {services[season].map((service) => (
              <div key={service.title} className="flex flex-col bg-white p-6 lg:p-8">
                <h3 className="text-lg font-bold text-ink-800">{service.title}</h3>
                <p className="mt-2 flex-1 text-ink-500">{service.blurb}</p>
                <p className={cn('mt-4 text-sm font-bold', priceClass)}>{service.price}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-ink-400">{servicesFootnote}</p>
        </div>
      </div>
    </section>
  )
}
