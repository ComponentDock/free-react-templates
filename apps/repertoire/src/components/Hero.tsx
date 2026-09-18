import { useState, useEffect } from 'react'
import { cn } from '@free-react-templates/ui'

interface Slide {
  heading: string
  cta: string
}

const slides: readonly Slide[] = [
  { heading: 'Strategic Design for Brands', cta: 'Learn More' },
  { heading: 'Creators of Brands Template', cta: 'Learn More' },
  { heading: 'Design & develop functional sites', cta: 'Learn More' },
] as const

interface HeroProps {
  className?: string
}

export function Hero({ className }: HeroProps) {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setActiveIndex((i) => (i + 1) % slides.length)
    }, 5000)
    return () => clearInterval(id)
  }, [])

  return (
    <section
      id="home"
      aria-label="Hero"
      className={cn(
        'relative flex h-screen items-center justify-center overflow-hidden bg-gray-900',
        className,
      )}
    >
      {/* Background images */}
      {slides.map((slide, i) => (
        <div
          key={slide.heading}
          className={cn(
            'absolute inset-0 bg-cover bg-center transition-opacity duration-700',
            i === activeIndex ? 'opacity-100' : 'opacity-0',
          )}
          style={{ backgroundImage: `url(https://picsum.photos/seed/slide${i}/1920/1080)` }}
          aria-hidden="true"
        />
      ))}

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" aria-hidden="true" />

      {/* Content */}
      <div className="relative z-10 text-center text-white">
        <h1 className="mb-6 text-4xl font-bold sm:text-5xl md:text-6xl">
          {slides[activeIndex]!.heading}
        </h1>
        <a
          href="#contact"
          className="inline-block rounded-lg bg-primary-600 px-8 py-3 font-semibold text-white transition-colors hover:bg-primary-700"
        >
          {slides[activeIndex]!.cta}
        </a>
      </div>

      {/* Slide indicators */}
      <div
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 gap-3"
        role="tablist"
        aria-label="Hero slides"
      >
        {slides.map((slide, i) => (
          <button
            key={slide.heading}
            role="tab"
            aria-selected={i === activeIndex}
            aria-label={`Go to slide ${i + 1}`}
            className={cn(
              'h-3 w-3 rounded-full transition-colors',
              i === activeIndex ? 'bg-white' : 'bg-white/40 hover:bg-white/60',
            )}
            onClick={() => setActiveIndex(i)}
          />
        ))}
      </div>
    </section>
  )
}
