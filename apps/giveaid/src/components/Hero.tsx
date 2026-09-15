import { useState, useEffect, useCallback } from 'react'

interface Slide {
  name: string
  heading: string
  description: string
  cta: string
  image: string
}

const slides: Slide[] = [
  {
    name: 'Celine Richardson, 14 yrs. old',
    heading: 'Needs a Caring Parents',
    description:
      'Every child deserves a loving home. Help us find the perfect family for children waiting for adoption.',
    cta: 'Adopt Her Now!',
    image: 'https://picsum.photos/seed/giveaid-hero1/1600/900',
  },
  {
    name: 'Mark Rodriguez, 12 yrs. old',
    heading: 'Needs a Loving Parents',
    description:
      'Open your heart and home to a child in need. Your love can change a life forever.',
    cta: 'Adopt Him Now!',
    image: 'https://picsum.photos/seed/giveaid-hero2/1600/900',
  },
]

/* eslint-disable-next-line @typescript-eslint/no-non-null-assertion */
const firstSlide = slides[0]!

export function Hero() {
  const [current, setCurrent] = useState(0)

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % slides.length)
  }, [])

  useEffect(() => {
    const timer = setInterval(next, 6000)
    return () => clearInterval(timer)
  }, [next])

  const slide = current === 0 ? firstSlide : slides[1]!

  return (
    <section
      id="home"
      className="relative flex min-h-[600px] items-center bg-cover bg-center transition-all duration-700"
      style={{ backgroundImage: `url(${slide.image})` }}
      aria-label="Hero carousel"
    >
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-20">
        <div className="max-w-lg">
          <span className="font-accent text-3xl text-white">{slide.name}</span>
          <h1 className="mt-2 text-5xl font-bold leading-tight text-white">{slide.heading}</h1>
          <p className="mt-4 text-lg text-white/80">{slide.description}</p>
          <a
            href="#"
            className="mt-6 inline-block rounded bg-brand px-8 py-3 font-semibold text-white hover:bg-brand-hover"
          >
            {slide.cta}
          </a>
        </div>
      </div>
      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-3 w-3 rounded-full ${i === current ? 'bg-brand' : 'bg-white/50'}`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
