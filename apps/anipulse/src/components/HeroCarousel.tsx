import { useEffect, useState, useCallback } from 'react'
import { ChevronRight } from 'lucide-react'
import { HERO_SLIDES } from '../data'

/* Hero carousel recreated from the source template's hero section:
   full-width slides with background images, overlay, category label,
   title, description, and "Watch Now" CTA. Auto-rotates every 5s. */

export function HeroCarousel() {
  const [current, setCurrent] = useState(0)

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % HERO_SLIDES.length)
  }, [])

  useEffect(() => {
    const id = setInterval(next, 5000)
    return () => clearInterval(id)
  }, [next])

  const slide = HERO_SLIDES[current]!

  return (
    <section
      aria-label="Hero carousel"
      className="relative h-[500px] overflow-hidden bg-navy lg:h-[600px]"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-opacity duration-700"
        style={{ backgroundImage: `url(${slide.image})` }}
        aria-hidden="true"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/90 via-navy-deep/60 to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-center px-4 lg:px-8">
        <span className="mb-3 inline-block w-fit rounded bg-brand px-3 py-1 text-xs font-bold uppercase tracking-wider text-text-white">
          {slide.category}
        </span>
        <h1 className="font-heading text-3xl font-bold uppercase tracking-wide text-text-white sm:text-4xl lg:text-5xl">
          {slide.title}
        </h1>
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-text-light sm:text-base">
          {slide.description}
        </p>
        <button
          type="button"
          className="mt-6 inline-flex w-fit items-center gap-2 rounded bg-brand px-6 py-3 text-xs font-bold uppercase tracking-widest text-text-white transition-colors hover:bg-brand-hover"
        >
          Watch Now
          <ChevronRight className="h-4 w-4" aria-hidden="true" />
        </button>
      </div>

      {/* Slide indicators */}
      <div
        className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 gap-2"
        role="tablist"
        aria-label="Carousel slides"
      >
        {HERO_SLIDES.map((_, idx) => (
          <button
            key={idx}
            type="button"
            role="tab"
            aria-selected={idx === current}
            aria-label={`Slide ${idx + 1}`}
            onClick={() => setCurrent(idx)}
            className={`h-2 rounded-full transition-all ${
              idx === current ? 'w-6 bg-brand' : 'w-2 bg-text-muted/50'
            }`}
          />
        ))}
      </div>
    </section>
  )
}
