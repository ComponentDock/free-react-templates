import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { heroSlides } from '../data'

export function Hero() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroSlides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const slide = heroSlides[current]!

  return (
    <section
      id="home-section"
      aria-label="Hero"
      className="relative h-[600px] w-full overflow-hidden bg-black"
    >
      <img
        src={slide.image}
        alt=""
        className="absolute inset-0 h-full w-full object-cover transition-opacity duration-700"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-black/70" />
      <div className="relative z-10 flex h-full max-w-5xl flex-col items-center justify-center px-4 text-center text-white">
        <h1 className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">{slide.title}</h1>
        <a
          href="#"
          className="mt-8 rounded bg-brand px-8 py-3 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-brand-dark"
        >
          {slide.ctaLabel}
        </a>
      </div>

      <button
        type="button"
        aria-label="Previous slide"
        onClick={() => setCurrent((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)}
        className="absolute left-4 top-1/2 z-20 -translate-y-1/2 text-white/70 transition-colors hover:text-white"
      >
        <ChevronLeft className="h-8 w-8" />
      </button>
      <button
        type="button"
        aria-label="Next slide"
        onClick={() => setCurrent((prev) => (prev + 1) % heroSlides.length)}
        className="absolute right-4 top-1/2 z-20 -translate-y-1/2 text-white/70 transition-colors hover:text-white"
      >
        <ChevronRight className="h-8 w-8" />
      </button>

      <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setCurrent(i)}
            className={`h-3 w-3 rounded-full transition-colors ${
              i === current ? 'bg-brand' : 'bg-white/40 hover:bg-white/60'
            }`}
          />
        ))}
      </div>
    </section>
  )
}
