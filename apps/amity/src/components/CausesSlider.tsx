import { useState } from 'react'
import { ChevronLeft, ChevronRight, Heart } from 'lucide-react'
import { causes } from '../data'
import { ProgressBar } from './ProgressBar'

const PER_VIEW = 3
const step = PER_VIEW
const total = causes.length

export function CausesSlider() {
  const [index, setIndex] = useState(0)

  const next = () => setIndex((i) => (i + step) % total)
  const prev = () => setIndex((i) => (i - step + total) % total)

  return (
    <section
      id="causes"
      aria-label="Our causes"
      className="relative bg-cover bg-center py-24"
      style={{ backgroundImage: "url('https://picsum.photos/seed/amity-causes-bg/1920/600')" }}
    >
      <div className="absolute inset-0 bg-[rgba(232,237,238,0.8)]" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        <h2 className="relative pb-6 text-center text-[36px] font-semibold text-ink">Our Causes</h2>
        <span className="mx-auto mb-14 block h-1 w-16 rounded-sm bg-brand" aria-hidden="true" />

        <div className="relative">
          <div
            data-cause-track
            className="flex w-[200%] transition-transform duration-500"
            style={{ transform: `translateX(${-(index / total) * 100}%)` }}
          >
            {causes.map((cause) => (
              <article
                key={cause.title + cause.image}
                aria-label={`Cause: ${cause.title}`}
                className="w-[16.666667%] shrink-0 px-3"
              >
                <div className="group overflow-hidden rounded-lg bg-white shadow-sm">
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={cause.image}
                      alt={cause.alt}
                      className="h-full w-full object-cover transition-transform group-hover:scale-105"
                    />
                    <div
                      data-cause-overlay
                      className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity group-hover:opacity-100"
                    >
                      <Heart className="h-10 w-10 text-white" aria-hidden="true" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-[18px] font-semibold text-ink">{cause.title}</h3>
                    <p className="mt-2 text-[14px] text-body">{cause.excerpt}</p>
                    <a
                      href="#donate"
                      className="mt-4 inline-block text-[14px] font-semibold text-brand hover:text-brand-dark"
                    >
                      Donate Now
                    </a>
                    <div className="mt-5">
                      <ProgressBar percentage={cause.percentage} />
                      <p className="mt-3 text-[14px] text-body">
                        <span>Raised: {cause.raised}</span>
                        <span aria-hidden="true"> / </span>
                        <span>Goal: {cause.goal}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <button
            type="button"
            aria-label="Previous causes"
            onClick={prev}
            className="absolute top-1/2 -left-4 flex h-[70px] w-[70px] -translate-y-1/2 items-center justify-center rounded-full bg-gradient-to-r from-brand to-brand-dark text-white transition-transform hover:scale-105"
          >
            <ChevronLeft className="h-8 w-8" aria-hidden="true" />
          </button>
          <button
            type="button"
            aria-label="Next causes"
            onClick={next}
            className="absolute top-1/2 -right-4 flex h-[70px] w-[70px] -translate-y-1/2 items-center justify-center rounded-full bg-gradient-to-r from-brand to-brand-dark text-white transition-transform hover:scale-105"
          >
            <ChevronRight className="h-8 w-8" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  )
}
