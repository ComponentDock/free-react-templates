import { Hexagon } from 'lucide-react'
import { SPONSORS } from '../data'

/* Brands — dark card holding six generic sponsor marks (text + lucide icon,
   never copied logo assets). */
export function Brands() {
  return (
    <section aria-label="Sponsors" className="bg-white pb-[120px]">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-2 items-center gap-8 bg-card px-10 py-12 sm:grid-cols-3 lg:grid-cols-6 lg:px-[50px]">
          {SPONSORS.map((sponsor) => (
            <div
              key={sponsor}
              className="flex flex-col items-center gap-2 text-center text-mist transition-colors hover:text-brand"
            >
              <Hexagon aria-hidden="true" className="size-8" />
              <span className="font-display text-sm font-medium uppercase tracking-wide">
                {sponsor}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
