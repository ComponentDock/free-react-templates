import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { HERO_SLIDES } from '../data'

/** Hero — full-width background image carousel with 3 slides,
    large serif heading, subheading, and navigation arrows. */
export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  function goToPrev() {
    setCurrentSlide((prev) => (prev === 0 ? HERO_SLIDES.length - 1 : prev - 1))
  }

  function goToNext() {
    setCurrentSlide((prev) => (prev === HERO_SLIDES.length - 1 ? 0 : prev + 1))
  }

  const slide = HERO_SLIDES[currentSlide]!

  return (
    <section
      id="home"
      className="relative flex min-h-[600px] items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${slide.image})` }}
    >
      <div className="absolute inset-0 bg-black/50" aria-hidden="true" />
      <div className="relative z-10 mx-auto max-w-4xl px-4 py-32 text-center">
        <h1 className="font-heading text-5xl font-bold leading-tight text-white md:text-6xl">
          {slide.heading}
        </h1>
        <p className="mt-4 text-xl font-light text-white/80">{slide.subheading}</p>
      </div>
      {/* Navigation arrows */}
      <button
        type="button"
        aria-label="Previous"
        onClick={goToPrev}
        className="absolute left-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-white transition-colors hover:bg-brand"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        type="button"
        aria-label="Next"
        onClick={goToNext}
        className="absolute right-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-white transition-colors hover:bg-brand"
      >
        <ChevronRight className="h-6 w-6" />
      </button>
      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 gap-3">
        {HERO_SLIDES.map((_, index) => (
          <button
            key={index}
            type="button"
            aria-label={`Go to slide ${index + 1}`}
            onClick={() => setCurrentSlide(index)}
            className={`h-3 w-3 rounded-full transition-colors ${
              index === currentSlide ? 'bg-brand' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </section>
  )
}
