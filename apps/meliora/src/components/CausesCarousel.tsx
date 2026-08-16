import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { causes, type Cause } from '../data'

const WINDOW = 3

function visibleCauses(start: number): Cause[] {
  const out: Cause[] = []
  for (let k = 0; k < WINDOW; k += 1) {
    out.push(causes[(start + k) % causes.length] as Cause)
  }
  return out
}

export function CausesCarousel() {
  const [start, setStart] = useState(0)
  const cards = visibleCauses(start)

  return (
    <section id="causes" aria-label="Causes" className="bg-mist py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-medium uppercase tracking-[0.2em] text-kicker">
            Kinds of Causes
          </span>
          <h2 className="mt-3 font-serif text-4xl font-bold text-plum md:text-[46px]">
            Causes we are serving
          </h2>
          <p className="mt-4 text-muted">
            Your generosity funds real programs with measurable impact. Choose a cause and see
            exactly where every dollar goes.
          </p>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {cards.map((cause) => {
            const pct = Math.round((cause.raised / cause.goal) * 100)
            return (
              <article
                key={cause.title}
                className="overflow-hidden rounded-[10px] border border-cardline bg-white shadow-sm transition-shadow hover:shadow-lg"
              >
                <div className="relative">
                  <img
                    src={cause.image}
                    alt={cause.title}
                    className="h-56 w-full rounded-t-[10px] object-cover"
                  />
                  <span className="absolute bottom-3 left-3 rounded-full bg-sweep px-4 py-1 text-xs font-medium uppercase tracking-wide text-white">
                    {cause.tag}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl font-bold text-plum">{cause.title}</h3>
                  <p className="mt-2 text-sm text-muted">{cause.copy}</p>
                  <div
                    role="progressbar"
                    aria-valuenow={pct}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-label={`${cause.title} funding progress`}
                    className="mt-5 h-2 w-full overflow-hidden rounded-full bg-lilac"
                  >
                    <div className="h-full rounded-full bg-primary" style={{ width: `${pct}%` }} />
                  </div>
                  <div className="mt-3 flex items-center justify-between text-sm">
                    <span className="text-muted">
                      <strong className="font-medium text-plum">
                        ${cause.goal.toLocaleString()}
                      </strong>{' '}
                      Goal
                    </span>
                    <span className="text-muted">
                      <strong className="font-medium text-plum">
                        ${cause.raised.toLocaleString()}
                      </strong>{' '}
                      Raised
                    </span>
                  </div>
                  <a
                    href="#donate"
                    className="mt-5 inline-block text-sm font-medium text-primary underline-offset-4 hover:underline"
                  >
                    Donate
                  </a>
                </div>
              </article>
            )
          })}
        </div>
        <div className="mt-10 flex items-center justify-center gap-4">
          <button
            type="button"
            aria-label="Previous causes"
            onClick={() => setStart((s) => (s - 1 + causes.length) % causes.length)}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-cardline bg-white text-plum transition-colors hover:border-primary hover:bg-primary hover:text-white"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="Next causes"
            onClick={() => setStart((s) => (s + 1) % causes.length)}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-cardline bg-white text-plum transition-colors hover:border-primary hover:bg-primary hover:text-white"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  )
}
