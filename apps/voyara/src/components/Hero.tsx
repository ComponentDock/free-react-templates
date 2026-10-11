import { useState } from 'react'
import { ArrowDown, ArrowUp } from 'lucide-react'

const SLIDES = ['voyara-hero-1', 'voyara-hero-2'] as const

/* Full-viewport hero: a hotel photo under the pink→peach gradient at 0.8
   opacity, centered white headline, white pill CTA, and stacked square
   up/down slide triggers on the right edge. */
export function Hero() {
  const [index, setIndex] = useState(0)

  const next = (current: number) => (current + 1) % SLIDES.length
  const previous = (current: number) => (current - 1 + SLIDES.length) % SLIDES.length

  return (
    <section
      id="home"
      data-testid="hero"
      className="relative flex min-h-[700px] items-center justify-center overflow-hidden text-center"
    >
      <div
        data-testid="hero-slide"
        aria-hidden="true"
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(https://picsum.photos/seed/${SLIDES[index]}/1920/1080)`,
        }}
      />
      <div
        data-testid="hero-overlay"
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-pink to-peach opacity-80"
      />

      <div className="relative z-10 px-4">
        <h1 className="text-[42px] font-bold leading-[1.15] text-white md:text-[72px]">
          <span className="block">Enjoy Holidays</span>
          <span className="block">with affordable Hotels</span>
        </h1>
        <a
          href="#book"
          className="mt-8 inline-block rounded-[20px] bg-white px-8 py-2.5 text-[13px] font-medium uppercase tracking-[1px] text-ink transition-colors hover:bg-ink hover:text-white"
        >
          Start Searching
        </a>
      </div>

      <div className="absolute right-4 top-1/2 z-10 flex -translate-y-1/2 flex-col gap-2">
        <button
          type="button"
          aria-label="Next slide"
          onClick={() => setIndex(next)}
          className="flex h-10 w-10 items-center justify-center border border-[#eee] bg-white text-ink transition-colors hover:border-hoverpink hover:bg-hoverpink hover:text-white"
        >
          <ArrowUp className="h-4 w-4" aria-hidden="true" />
        </button>
        <button
          type="button"
          aria-label="Previous slide"
          onClick={() => setIndex(previous)}
          className="flex h-10 w-10 items-center justify-center border border-[#eee] bg-white text-ink transition-colors hover:border-hoverpink hover:bg-hoverpink hover:text-white"
        >
          <ArrowDown className="h-4 w-4" aria-hidden="true" />
        </button>
      </div>
    </section>
  )
}
