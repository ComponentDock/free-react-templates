import { useState, useEffect, useCallback } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const slides = [
  {
    heading: "Men's",
    subheading: 'Jeans',
    detail: 'Collection',
    description: 'New stylish shirts, pants & Accessories',
    cta: 'Shop Collection',
    image: 'https://picsum.photos/seed/bazaar-hero1/1920/900',
  },
  {
    heading: 'Huge',
    subheading: 'Sale',
    detail: '45% off',
    description: 'New stylish shirts, pants & Accessories',
    cta: 'Shop Collection',
    image: 'https://picsum.photos/seed/bazaar-hero2/1920/900',
  },
  {
    heading: 'New',
    subheading: 'Arrival',
    detail: 'up to 30% off',
    description: 'New stylish shirts, pants & Accessories',
    cta: 'Shop Collection',
    image: 'https://picsum.photos/seed/bazaar-hero3/1920/900',
  },
]

export function Hero() {
  const [current, setCurrent] = useState(0)

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length)
  }, [])

  const prevSlide = useCallback(() => {
    setCurrent((c) => (c - 1 + slides.length) % slides.length)
  }, [])

  useEffect(() => {
    const timer = setInterval(next, 5000)
    return () => clearInterval(timer)
  }, [next])

  const slide = slides[current]!

  return (
    <section
      className="relative flex min-h-[500px] items-center bg-cover bg-center md:min-h-[600px]"
      style={{ backgroundImage: `url(${slide.image})` }}
      aria-label="Hero slider"
    >
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-lg">
          <h1 className="font-display text-5xl font-bold text-white md:text-7xl">
            {slide.heading}
          </h1>
          <h2 className="font-display text-5xl font-bold text-white md:text-7xl">
            {slide.subheading}
          </h2>
          <h3 className="font-display text-3xl font-bold text-white md:text-5xl">{slide.detail}</h3>
          <p className="mt-4 text-sm text-white/80">{slide.description}</p>
          <a
            href="#shop"
            className="mt-6 inline-block rounded bg-brand px-6 py-3 text-sm font-bold uppercase tracking-wide text-ink transition-colors hover:bg-brand-dark"
          >
            {slide.cta}
          </a>
        </div>
      </div>
      <button
        type="button"
        onClick={prevSlide}
        className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/20 p-2 text-white backdrop-blur-sm transition-colors hover:bg-white/40"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        type="button"
        onClick={next}
        className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/20 p-2 text-white backdrop-blur-sm transition-colors hover:bg-white/40"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>
    </section>
  )
}
