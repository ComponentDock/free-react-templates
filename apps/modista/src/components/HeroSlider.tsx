import { useState, useEffect, useCallback } from 'react'

const slides = [
  {
    id: 1,
    image: 'https://picsum.photos/seed/modista-hero1/1600/800',
    heading: 'Best Summer Collection',
  },
  {
    id: 2,
    image: 'https://picsum.photos/seed/modista-hero2/1600/800',
    heading: 'New Arrivals 2024',
  },
  { id: 3, image: 'https://picsum.photos/seed/modista-hero3/1600/800', heading: 'Trending Styles' },
] as const

export function HeroSlider() {
  const [current, setCurrent] = useState(0)

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length)
  }, [])

  useEffect(() => {
    const timer = setInterval(next, 5000)
    return () => clearInterval(timer)
  }, [next])

  return (
    <section
      className="relative h-[400px] w-full overflow-hidden md:h-[600px]"
      aria-label="Hero slider"
    >
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === current ? 'opacity-100' : 'opacity-0'
          }`}
          aria-hidden={index !== current}
        >
          <img src={slide.image} alt={slide.heading} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-black/20" />
        </div>
      ))}

      {/* Slide content */}
      <div className="relative z-10 flex h-full items-center justify-end px-8 md:px-16">
        <div className="text-right">
          <h2 className="font-heading text-3xl font-bold text-white drop-shadow-lg md:text-5xl">
            {slides[current]!.heading}
          </h2>
          <a
            href="#shop"
            className="mt-6 inline-block bg-[#d42421] px-8 py-3 font-heading text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-brand-red"
          >
            read more
          </a>
        </div>
      </div>

      {/* Dot indicators */}
      <div
        className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2"
        role="tablist"
        aria-label="Slide navigation"
      >
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            role="tab"
            aria-selected={index === current}
            aria-label={`Go to slide ${index + 1}`}
            onClick={() => setCurrent(index)}
            className={`h-3 w-3 rounded-full transition-colors ${
              index === current ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </section>
  )
}
