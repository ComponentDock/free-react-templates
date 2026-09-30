import { useState } from 'react'
import { ChevronRight } from 'lucide-react'
import { slides } from '../data'

/** Full-viewport hero slider: photographic slides with the match countdown
 *  chip and skewed home/away VS chips; orange square Next button advances. */
export function Hero() {
  const [index, setIndex] = useState(0)
  const slide = slides[index % slides.length]!

  return (
    <section id="home" className="relative flex min-h-screen items-center bg-navy">
      <img
        src={slide.image}
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-60"
      />

      <div className="relative mx-auto w-full max-w-6xl px-4 pb-16 pt-36 lg:px-8">
        {/* Countdown block */}
        <div className="flex flex-wrap items-stretch justify-center gap-y-4">
          <div className="flex items-center bg-navy px-6 py-4 text-2xl font-bold text-white sm:text-4xl lg:py-0 lg:text-6xl">
            days until the next match
          </div>
          <div
            className="flex h-[143px] w-[109px] shrink-0 items-center justify-center border-t-[9px] border-navy bg-brand text-[100px] font-bold leading-none text-white"
            data-testid="countdown-days"
          >
            {slide.days}
          </div>
        </div>

        {/* VS row */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <div className="flex h-[70px] skew-x-[37deg] items-center bg-navy px-8">
            <span className="-skew-x-[37deg] text-xl font-medium uppercase text-white sm:text-3xl">
              {slide.home}
            </span>
          </div>
          <span
            aria-hidden="true"
            className="rotate-[-7deg] text-[80px] font-black leading-none text-vs sm:text-[118px]"
            style={{ WebkitTextStroke: '3px #191339' }}
          >
            VS
          </span>
          <div className="flex h-[70px] skew-x-[37deg] items-center bg-brand px-8">
            <span className="-skew-x-[37deg] text-xl font-medium uppercase text-white sm:text-3xl">
              {slide.away}
            </span>
          </div>
        </div>
      </div>

      {/* Next slider button */}
      <button
        type="button"
        aria-label="Next slide"
        onClick={() => setIndex((current) => current + 1)}
        className="absolute right-4 top-1/2 flex h-[92px] w-[92px] -translate-y-1/2 items-center justify-center bg-brand text-sm font-bold uppercase text-white transition-colors hover:bg-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
      >
        Next
        <ChevronRight className="ml-1 h-5 w-5" aria-hidden="true" />
      </button>
    </section>
  )
}
