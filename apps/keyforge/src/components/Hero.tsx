import { useState, useCallback, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const slides = [
  {
    label: 'BEST LOCKSMITH',
    heading: 'We Provide Best Locksmith Services All Over World',
    image: 'https://picsum.photos/seed/keyforge-hero1/1920/900',
  },
  {
    label: 'TRUSTED SECURITY',
    heading: 'Professional Security Solutions for Your Home and Business',
    image: 'https://picsum.photos/seed/keyforge-hero2/1920/900',
  },
  {
    label: '24/7 EMERGENCY',
    heading: 'Fast and Reliable Emergency Lockout Services Near You',
    image: 'https://picsum.photos/seed/keyforge-hero3/1920/900',
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
      className="relative min-h-[500px] bg-cover bg-center md:min-h-[600px]"
      style={{ backgroundImage: `url(${slide.image})` }}
      aria-label="Hero slider"
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 flex flex-col items-center justify-center px-4 py-20 text-center">
        <span className="mb-4 text-sm font-semibold uppercase tracking-widest text-brand">
          {slide.label}
        </span>
        <h1 className="max-w-3xl font-display text-3xl font-bold text-white md:text-5xl">
          {slide.heading}
        </h1>
        <a
          href="#quote"
          className="mt-8 inline-block rounded bg-brand px-8 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-brand-dark"
        >
          Contact Us
        </a>
      </div>

      <button
        type="button"
        onClick={prevSlide}
        className="absolute left-4 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition-colors hover:bg-white/40"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        type="button"
        onClick={next}
        className="absolute right-4 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition-colors hover:bg-white/40"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>
    </section>
  )
}
