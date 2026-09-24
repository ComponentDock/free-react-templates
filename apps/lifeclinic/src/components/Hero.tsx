import { useState, useEffect, useCallback } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { heroSlides } from '../data'

export function Hero() {
  const [current, setCurrent] = useState(0)

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % heroSlides.length)
  }, [])

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
  }, [])

  useEffect(() => {
    const timer = setInterval(next, 5000)
    return () => clearInterval(timer)
  }, [next])

  const slide = heroSlides[current]!

  return (
    <section className="relative overflow-hidden bg-navy" aria-label="Hero carousel">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-opacity duration-500"
        style={{
          backgroundImage: `url(https://picsum.photos/seed/${slide.imageSeed}/1920/800)`,
        }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-navy/70" aria-hidden="true" />

      <div className="relative mx-auto flex max-w-7xl items-center px-4 py-28 sm:px-8 lg:py-36">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            {slide.title}
          </h1>
          <p className="mt-5 max-w-lg text-lg text-white/80">{slide.description}</p>
          <a
            href="#about"
            className="mt-8 inline-flex h-[50px] items-center rounded bg-cta px-9 text-sm font-bold text-white transition-colors hover:bg-cta-hover"
          >
            {slide.cta}
          </a>
        </div>
      </div>

      {/* Navigation arrows */}
      <button
        type="button"
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/20 p-3 text-white transition-colors hover:bg-white/40"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        type="button"
        onClick={next}
        aria-label="Next slide"
        className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/20 p-3 text-white transition-colors hover:bg-white/40"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Indicator dots */}
      <div
        className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-3"
        role="tablist"
        aria-label="Slide indicators"
      >
        {heroSlides.map((_, index) => (
          <button
            key={index}
            type="button"
            role="tab"
            aria-selected={index === current}
            aria-label={`Go to slide ${index + 1}`}
            onClick={() => setCurrent(index)}
            className={`h-3 w-3 rounded-full transition-colors ${
              index === current ? 'bg-cta' : 'bg-white/40'
            }`}
          />
        ))}
      </div>
    </section>
  )
}
