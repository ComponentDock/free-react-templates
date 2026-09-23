import { useState, useEffect, useCallback } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { HERO_SLIDES } from '../data'

export function HeroSlider() {
  const [current, setCurrent] = useState(0)

  const next = useCallback(() => {
    setCurrent((i) => (i + 1) % HERO_SLIDES.length)
  }, [])

  const prev = useCallback(() => {
    setCurrent((i) => (i - 1 + HERO_SLIDES.length) % HERO_SLIDES.length)
  }, [])

  // Auto-cycle every 5s
  useEffect(() => {
    const id = setInterval(next, 5000)
    return () => clearInterval(id)
  }, [next])

  const slide = HERO_SLIDES[current]
  /* v8 ignore next -- defensive guard, HERO_SLIDES always non-empty */
  if (!slide) return null

  return (
    <section
      id="home"
      className="relative flex h-[70vh] min-h-[500px] items-center justify-center overflow-hidden"
    >
      {/* Background images */}
      {HERO_SLIDES.map((s, i) => (
        <div
          key={s.image}
          className={cn(
            'absolute inset-0 bg-cover bg-center transition-opacity duration-1000',
            i === current ? 'opacity-100' : 'opacity-0',
          )}
          style={{ backgroundImage: `url(${s.image})` }}
          aria-hidden
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 px-4 text-center">
        <p className="mb-3 text-sm font-medium uppercase tracking-widest text-white/80">
          {slide.subtitle}
        </p>
        <h1 className="mx-auto max-w-3xl text-3xl font-bold leading-tight text-white md:text-5xl">
          {slide.title}
        </h1>
        <a
          href="#contact"
          className="mt-8 inline-block rounded bg-[#3f52e3] px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#2f89fc]"
        >
          Get Consultation
        </a>
      </div>

      {/* Arrows */}
      <button
        type="button"
        onClick={prev}
        className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/20 p-2 text-white transition-colors hover:bg-white/40"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        type="button"
        onClick={next}
        className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/20 p-2 text-white transition-colors hover:bg-white/40"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {HERO_SLIDES.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setCurrent(i)}
            className={cn(
              'h-2.5 w-2.5 rounded-full transition-colors',
              i === current ? 'bg-white' : 'bg-white/40',
            )}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
