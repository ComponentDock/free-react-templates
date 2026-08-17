import { STATS } from '../data'
import { PillLink } from './Pill'

/* StatsBand — intro split with eyebrow, heading, paragraph, orange CTA,
   and two orange counters. */
export function StatsBand() {
  return (
    <section aria-label="Stats" className="bg-white py-24 lg:py-[120px]">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-brand">
            {STATS.eyebrow}
          </p>
          <h2 className="font-display text-[34px] font-medium leading-tight text-ink">
            {STATS.heading}
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-body">{STATS.text}</p>
          <PillLink href="#about" className="mt-8">
            {STATS.ctaLabel}
          </PillLink>
        </div>
        <div className="grid grid-cols-2 gap-8">
          {STATS.counters.map((counter) => (
            <div key={counter.label} className="border-l-4 border-brand pl-6">
              <p className="font-display text-[50px] font-semibold leading-none text-brand">
                {counter.value}
              </p>
              <p className="mt-3 text-base text-body">{counter.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
