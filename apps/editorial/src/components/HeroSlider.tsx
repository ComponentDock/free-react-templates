import { useState, useEffect, useCallback } from 'react'

export interface Slide {
  tag: string
  heading: string
  description: string
  image: string
}

interface HeroSliderProps {
  slides: Slide[]
}

export function HeroSlider({ slides }: HeroSliderProps) {
  const [current, setCurrent] = useState(0)

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length)
  }, [slides.length])

  useEffect(() => {
    const timer = setInterval(next, 5000)
    return () => clearInterval(timer)
  }, [next])

  const slide = slides[current] as Slide

  return (
    <section
      className="relative flex h-screen items-end bg-cover bg-center"
      style={{ backgroundImage: `url(${slide.image})` }}
    >
      <div className="absolute inset-0 bg-overlay" />
      <div className="relative z-10 w-full px-8 pb-16 md:px-16">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-white/80">
          {slide.tag}
        </p>
        <h2 className="mb-4 text-4xl font-bold leading-tight text-white md:text-5xl">
          {slide.heading}
        </h2>
        <p className="max-w-xl text-base text-white/70">{slide.description}</p>
      </div>

      <div className="absolute bottom-6 right-8 z-10 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-3 w-3 rounded-full border-2 border-white transition-colors ${
              i === current ? 'bg-brand' : 'bg-transparent'
            }`}
          />
        ))}
      </div>
    </section>
  )
}
