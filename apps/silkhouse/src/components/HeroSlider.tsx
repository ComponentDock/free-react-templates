import { useState, useEffect, useCallback } from 'react'

const slides = [
  {
    id: 1,
    image: 'https://picsum.photos/seed/silkhouse-hero-1/1920/900',
    headline: 'FASHION CHANGING ALWAYS',
  },
  {
    id: 2,
    image: 'https://picsum.photos/seed/silkhouse-hero-2/1920/900',
    headline: 'NEW COLLECTION 2024',
  },
  {
    id: 3,
    image: 'https://picsum.photos/seed/silkhouse-hero-3/1920/900',
    headline: 'STYLE MEETS COMFORT',
  },
]

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
    <section aria-label="Hero slider" className="relative h-[600px] overflow-hidden md:h-[900px]">
      {slides.map((slide, i) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-700 ${
            i === current ? 'opacity-100' : 'opacity-0'
          }`}
          aria-hidden={i !== current}
        >
          <img
            src={slide.image}
            alt=""
            className="h-full w-full object-cover"
            loading={i === 0 ? 'eager' : 'lazy'}
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <h1
              className="mb-6 px-4 text-3xl font-bold tracking-widest text-white md:text-5xl lg:text-6xl"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              {slide.headline}
            </h1>
            <a
              href="#shop"
              className="border-2 border-brand bg-brand px-10 py-3 text-sm font-semibold uppercase text-white transition-colors hover:bg-brand-hover hover:border-brand-hover"
            >
              Shop Now
            </a>
          </div>
        </div>
      ))}

      {/* Dot navigation */}
      <div
        className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-3"
        role="tablist"
        aria-label="Slide navigation"
      >
        {slides.map((slide, i) => (
          <button
            key={slide.id}
            role="tab"
            aria-selected={i === current}
            aria-label={`Slide ${i + 1}`}
            onClick={() => setCurrent(i)}
            className={`h-3 w-3 rounded-full transition-colors ${
              i === current ? 'bg-brand' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </section>
  )
}
