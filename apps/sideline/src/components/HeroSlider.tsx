import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { heroSlides } from '../data'

/** HeroSlider: full-bleed photographic slides with a dark overlay, a
 *  translucent black headline box and square red CTA; white chevrons
 *  bottom-center. */
export function HeroSlider() {
  const [index, setIndex] = useState(0)
  const slide = heroSlides[index]!
  const atStart = index === 0
  const atEnd = index === heroSlides.length - 1

  return (
    <section
      aria-label="Featured stories"
      className="relative h-[300px] w-full overflow-hidden md:h-[800px]"
    >
      <img src={slide.image} alt="" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-black/40" aria-hidden="true" />
      <div className="relative flex h-full items-center">
        <div className="mx-auto w-full max-w-7xl px-4 lg:px-8">
          <div className="max-w-xl bg-black/70 p-6 md:p-8">
            <h1 className="text-3xl font-bold text-white md:text-5xl">{slide.title}</h1>
            <p className="mt-4 text-white/90">{slide.blurb}</p>
            <a
              href="#news"
              className="mt-6 inline-block bg-brand px-5 py-3 text-sm font-light uppercase tracking-[0.2em] text-white transition-colors hover:bg-[#d92f24]"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-6 flex items-center justify-center gap-8">
        <button
          type="button"
          onClick={() => setIndex((i) => Math.max(0, i - 1))}
          disabled={atStart}
          aria-label="Previous slide"
          className="p-5 text-white transition-opacity disabled:opacity-20"
        >
          <ChevronLeft className="h-7 w-7" aria-hidden="true" />
        </button>
        <button
          type="button"
          onClick={() => setIndex((i) => Math.min(heroSlides.length - 1, i + 1))}
          disabled={atEnd}
          aria-label="Next slide"
          className="p-5 text-white transition-opacity disabled:opacity-20"
        >
          <ChevronRight className="h-7 w-7" aria-hidden="true" />
        </button>
      </div>
    </section>
  )
}
