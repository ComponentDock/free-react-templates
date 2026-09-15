import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const SLIDES = [
  {
    headline: 'Catch Your Own Stylish & Look',
    sub: 'Best eCommerce Online Shop',
    cta: 'Shop Now',
    image: 'https://picsum.photos/seed/warehaus-hero1/1920/900',
  },
  {
    headline: 'A Thoroughly Modern Woman',
    sub: 'Stablished Since 2000',
    cta: 'Shop Now',
    image: 'https://picsum.photos/seed/warehaus-hero2/1920/900',
  },
]

export function Hero() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SLIDES.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const prev = () => setCurrent((c) => (c - 1 + SLIDES.length) % SLIDES.length)
  const next = () => setCurrent((c) => (c + 1) % SLIDES.length)

  const slide = SLIDES[current]!

  return (
    <section
      id="home"
      className="relative flex h-[600px] items-center bg-cover bg-center"
      style={{ backgroundImage: `url(${slide.image})` }}
      aria-label="Hero carousel"
    >
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-xl">
          <span className="mb-3 block text-sm font-semibold uppercase tracking-widest text-accent">
            {slide.sub}
          </span>
          <h1 className="mb-6 text-5xl font-bold leading-tight text-white md:text-6xl">
            {slide.headline}
          </h1>
          <a
            href="#shop"
            className="inline-block rounded bg-brand px-8 py-3 text-sm font-semibold uppercase text-white transition-colors hover:bg-brand-dark"
          >
            {slide.cta}
          </a>
        </div>
      </div>

      <button
        type="button"
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/20 p-2 text-white backdrop-blur-sm transition-colors hover:bg-white/40"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        type="button"
        onClick={next}
        aria-label="Next slide"
        className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/20 p-2 text-white backdrop-blur-sm transition-colors hover:bg-white/40"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setCurrent(i)}
            className={`h-2 w-2 rounded-full transition-colors ${
              i === current ? 'bg-accent' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </section>
  )
}
