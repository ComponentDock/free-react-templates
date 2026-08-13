import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { clients, clientsBlurb, clientsHeading } from '../data'

const LOGOS_PER_VIEW = 5

export function Clients() {
  const [offset, setOffset] = useState(0)

  const next = () => setOffset((current) => (current + 1) % clients.length)
  const prev = () => setOffset((current) => (current - 1 + clients.length) % clients.length)

  const visible = Array.from(
    { length: LOGOS_PER_VIEW },
    (_, i) => clients[(offset + i) % clients.length],
  )

  return (
    <section data-section="clients" className="py-[103px]">
      <div className="mx-auto max-w-6xl px-4 text-center">
        <h2 className="mx-auto max-w-3xl text-3xl font-light text-navy-900">{clientsHeading}</h2>
        <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-muted-400">
          {clientsBlurb}
        </p>

        <div className="relative mt-16">
          <button
            type="button"
            aria-label="Previous logos"
            onClick={prev}
            className="absolute -left-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center border border-gray-200 bg-white text-navy-900 transition-colors hover:border-primary-600 hover:text-primary-600"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>
          <div className="flex items-center justify-center gap-8 overflow-hidden px-8">
            {visible.map((logo) => (
              <span
                key={logo}
                data-client-logo
                className="min-w-0 select-none text-2xl font-bold uppercase tracking-widest text-gray-300"
              >
                {logo}
              </span>
            ))}
          </div>
          <button
            type="button"
            aria-label="Next logos"
            onClick={next}
            className="absolute -right-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center border border-gray-200 bg-white text-navy-900 transition-colors hover:border-primary-600 hover:text-primary-600"
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  )
}
