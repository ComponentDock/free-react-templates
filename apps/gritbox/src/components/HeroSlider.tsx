import { useState, useEffect, useCallback } from 'react'
import { cn } from '@free-react-templates/ui'

const slides = [
  {
    heading: 'Welcome To GritBox',
    caption: 'Find The Healthy Way',
    image: 'https://picsum.photos/seed/gritbox-hero1/1920/1080',
  },
  {
    heading: 'Optimize Your Health',
    caption: 'Effective Program',
    image: 'https://picsum.photos/seed/gritbox-hero2/1920/1080',
  },
]

export function HeroSlider() {
  const [current, setCurrent] = useState(0)
  const active = slides[current]!

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length)
  }, [])

  useEffect(() => {
    const timer = setInterval(next, 5000)
    return () => clearInterval(timer)
  }, [next])

  return (
    <section
      className="relative flex h-screen items-center justify-center overflow-hidden"
      aria-label="Hero slider"
    >
      {slides.map((slide, i) => (
        <div
          key={i}
          className={cn(
            'absolute inset-0 bg-cover bg-center transition-opacity duration-1000',
            i === current ? 'opacity-100' : 'opacity-0',
          )}
          style={{ backgroundImage: `url(${slide.image})` }}
          aria-hidden={i !== current}
        >
          <div className="absolute inset-0 bg-black/60" />
        </div>
      ))}

      <div className="relative z-10 text-center text-white">
        <h1 className="font-display text-6xl font-bold uppercase tracking-wide md:text-8xl">
          {active.heading}
        </h1>
        <p className="mt-4 text-lg uppercase tracking-widest md:text-xl">{active.caption}</p>
        <div className="mt-8 flex justify-center gap-4">
          <a
            href="#program"
            className="rounded-full bg-brand px-8 py-3 text-sm font-semibold uppercase text-white transition-colors hover:bg-brand-dark"
          >
            Our Program
          </a>
          <a
            href="#club"
            className="rounded-full border-2 border-white px-8 py-3 text-sm font-semibold uppercase text-white transition-colors hover:bg-white hover:text-ink"
          >
            Join Our Club
          </a>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={cn(
              'h-3 w-3 rounded-full transition-colors',
              i === current ? 'bg-brand' : 'bg-white/50',
            )}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
