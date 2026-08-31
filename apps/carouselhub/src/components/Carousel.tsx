import { useState, useEffect, useCallback, useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { slides } from '../data'

const INTERVAL_MS = 5000

export function Carousel() {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const total = slides.length

  const goTo = useCallback(
    (index: number) => {
      setCurrent((index + total) % total)
    },
    [total],
  )

  const next = useCallback(() => goTo(current + 1), [goTo, current])
  const prev = useCallback(() => goTo(current - 1), [goTo, current])

  useEffect(() => {
    if (paused) {
      clearInterval(timerRef.current!)
      timerRef.current = null
      return
    }
    timerRef.current = setInterval(next, INTERVAL_MS)
    return () => {
      clearInterval(timerRef.current!)
    }
  }, [paused, next])

  const slide = slides[current]!

  return (
    <section
      id="home"
      className="relative h-screen w-full overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      {/* Background image */}
      <img
        src={slide.image}
        alt=""
        className="absolute inset-0 h-full w-full object-cover transition-opacity duration-700"
        loading={current === 0 ? 'eager' : 'lazy'}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Slide content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white">
        <h2
          key={slide.id}
          className="text-4xl font-bold uppercase tracking-wider sm:text-5xl md:text-6xl lg:text-7xl"
        >
          {slide.heading}
        </h2>
        <p className="mt-4 max-w-xl text-lg text-white/80 sm:text-xl">{slide.subtext}</p>
        <a
          href="#gallery"
          className="mt-8 inline-block rounded-full bg-brand px-8 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-brand-dark"
        >
          {slide.cta}
        </a>
      </div>

      {/* Left arrow */}
      <button
        type="button"
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/20 p-3 text-white backdrop-blur-sm transition-colors hover:bg-white/40"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      {/* Right arrow */}
      <button
        type="button"
        onClick={next}
        aria-label="Next slide"
        className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/20 p-3 text-white backdrop-blur-sm transition-colors hover:bg-white/40"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Navigation dots */}
      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-3">
        {slides.map((s, i) => (
          <button
            key={s.id}
            type="button"
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={cn(
              'h-3 w-3 rounded-full transition-all duration-300',
              i === current ? 'bg-white scale-110' : 'bg-white/40 hover:bg-white/60',
            )}
          />
        ))}
      </div>
    </section>
  )
}
