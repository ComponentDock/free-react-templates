import { PERKS } from '../data'

/* site-blocks-1 — three service perk columns (line icon + uppercase
   heading + lorem) with a #edf0f5 bottom border. */
export function Perks() {
  return (
    <section className="border-b border-line py-[40px] md:py-20">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-3">
        {PERKS.map((perk) => {
          const Icon = perk.icon
          return (
            <div key={perk.heading} className="flex gap-4">
              <Icon aria-hidden="true" className="h-8 w-8 shrink-0 text-brand" strokeWidth={1.5} />
              <div>
                <h2 className="text-[18px] uppercase tracking-[0.05em] text-ink">{perk.heading}</h2>
                <p className="mt-2 text-[15px] font-light leading-relaxed text-body">
                  {perk.blurb}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
