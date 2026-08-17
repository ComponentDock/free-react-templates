import { STATS } from '../data'

/* StatsBand — pale-blue band with a heading and four static counters
   (black 40px weight-600 numbers, per the reference — no count-up). */
export function StatsBand() {
  return (
    <section aria-label="Stats" className="bg-paleblue py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-12 max-w-xl text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-muted">{STATS.eyebrow}</p>
          <h2 className="mt-2 font-display text-[38px] font-medium text-ink">{STATS.heading}</h2>
        </div>
        <div className="grid grid-cols-2 gap-10 text-center lg:grid-cols-4">
          {STATS.counters.map((counter) => (
            <div key={counter.label}>
              <p className="font-display text-[40px] font-semibold leading-none text-ink">
                {counter.value}
              </p>
              <span className="mt-3 block text-base text-muted">{counter.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
