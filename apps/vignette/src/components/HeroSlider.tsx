import { useState, useEffect, useCallback } from 'react'

const slides = [
  {
    image: 'https://picsum.photos/seed/vignette-hero1/1600/900',
    subtitle: 'Only today we offer free shipping',
    title: 'Fashion Trends',
    cta: 'Shop Now',
    href: '#shop',
  },
  {
    image: 'https://picsum.photos/seed/vignette-hero2/1600/900',
    subtitle: 'Only today we offer free shipping',
    title: 'Summer Collection',
    cta: 'Check Collection',
    href: '#shop',
  },
  {
    image: 'https://picsum.photos/seed/vignette-hero3/1600/900',
    subtitle: 'Only today we offer free shipping',
    title: 'Women Fashion',
    cta: 'Check Collection',
    href: '#shop',
  },
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

  const slide = slides[current]!

  return (
    <section
      aria-label="Hero carousel"
      className="relative h-[500px] overflow-hidden sm:h-[600px] lg:h-[700px]"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={slide.image}
          alt=""
          className="h-full w-full object-cover transition-opacity duration-700"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative mx-auto flex h-full max-w-7xl items-center px-4 sm:px-6">
        <div className="max-w-xl text-white">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/80">
            * {slide.subtitle}
          </p>
          <h2 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            {slide.title}
          </h2>
          <a
            href={slide.href}
            className="mt-8 inline-block rounded bg-brand px-8 py-3 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-brand-dark"
          >
            {slide.cta}
          </a>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2 rounded-full transition-all ${
              i === current ? 'w-8 bg-brand' : 'w-2 bg-white/50 hover:bg-white/80'
            }`}
          />
        ))}
      </div>
    </section>
  )
}
