import { useState, useEffect, useCallback } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface HeroProps {
  className?: string
}

interface Slide {
  image: string
  headline: string
  subtext: string
}

const slides: Slide[] = [
  {
    image: 'https://picsum.photos/seed/cruiser-1/1920/1080',
    headline: 'Ride Beyond Limits',
    subtext: 'Pushing boundaries in skateboarding culture since day one.',
  },
  {
    image: 'https://picsum.photos/seed/cruiser-2/1920/1080',
    headline: 'Own the Streets',
    subtext: 'Master every trick, conquer every ramp, ride every wave.',
  },
]

export function Hero({ className = '' }: HeroProps) {
  const [current, setCurrent] = useState(0)

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % slides.length)
  }, [])

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + slides.length) % slides.length)
  }, [])

  useEffect(() => {
    const timer = setInterval(next, 6000)
    return () => clearInterval(timer)
  }, [next])

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const slide = slides[current]!

  return (
    <section className={`relative h-screen overflow-hidden ${className}`}>
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === current ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <img src={slide.image} alt={slide.headline} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/90 via-bg-dark/40 to-transparent" />
        </div>
      ))}

      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-4">
        <h1 className="font-oswald text-5xl md:text-7xl font-bold uppercase tracking-wider text-white mb-4">
          {slide.headline}
        </h1>
        <p className="text-lg md:text-xl text-muted max-w-xl mb-8">{slide.subtext}</p>
        <a
          href="#services"
          className="inline-block bg-brand hover:bg-brand-light text-white font-oswald font-semibold uppercase tracking-wider px-8 py-3 transition-colors"
        >
          Explore More
        </a>
      </div>

      {/* Arrows */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-surface/60 hover:bg-brand p-3 rounded-full transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-surface/60 hover:bg-brand p-3 rounded-full transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-3 w-3 rounded-full transition-colors ${
              i === current ? 'bg-brand' : 'bg-gray-500'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
