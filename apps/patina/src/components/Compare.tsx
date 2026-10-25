import { useState } from 'react'
import { compare } from '../content'
import { SectionHeading, containerClass, sectionClass } from './ui'

/**
 * Before/after with one range control driving both the clip and the divider. The
 * band has an id the reference does not have, so the page's most distinctive
 * interaction is linkable.
 */
export function Compare() {
  const [reveal, setReveal] = useState(50)

  return (
    <section id="compare" aria-labelledby="compare-heading" className={`bg-ink-800 ${sectionClass}`}>
      <div className={containerClass}>
        <div id="compare-heading">
          <SectionHeading title={compare.title} lead={compare.lead} />
        </div>

        <figure
          data-testid="before-after"
          className="relative mt-10 overflow-hidden rounded-2xl"
        >
          <img
            src={compare.beforeImage}
            alt={compare.beforeAlt}
            width={1600}
            height={900}
            loading="lazy"
            className="block w-full"
          />
          <img
            src={compare.afterImage}
            alt={compare.afterAlt}
            data-after-image
            width={1600}
            height={900}
            loading="lazy"
            style={{ clipPath: `inset(0 0 0 ${reveal}%)` }}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <span
            data-divider
            aria-hidden="true"
            style={{ left: `${reveal}%` }}
            className="absolute inset-y-0 w-0.5 bg-white/90"
          />
          <figcaption className="absolute inset-x-0 top-0 flex justify-between p-4">
            <span className="rounded bg-black/50 px-2 py-1 text-xs font-bold tracking-[0.08em] text-white uppercase">
              Before
            </span>
            <span className="rounded bg-black/50 px-2 py-1 text-xs font-bold tracking-[0.08em] text-white uppercase">
              After
            </span>
          </figcaption>

          <label className="sr-only" htmlFor="ba-range">
            {compare.label}
          </label>
          <input
            id="ba-range"
            type="range"
            min={0}
            max={100}
            value={reveal}
            data-range
            aria-valuetext={`${reveal}% of the finished room revealed`}
            onChange={(event) => setReveal(Number(event.target.value))}
            className="absolute inset-x-0 bottom-4 mx-auto block w-[85%] cursor-ew-resize accent-white"
          />
        </figure>
      </div>
    </section>
  )
}
