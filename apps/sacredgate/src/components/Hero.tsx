import { useState, useEffect, useCallback } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'

const slides = [
  {
    heading: 'God is all around us',
    subheading: 'Join our community of faith and love',
    image: 'https://picsum.photos/seed/sacredgate-hero1/1600/800',
  },
  {
    heading: 'A place of peace and prayer',
    subheading: 'Discover your spiritual home with us',
    image: 'https://picsum.photos/seed/sacredgate-hero2/1600/800',
  },
  {
    heading: 'Together in faith',
    subheading: 'Building a brighter future through community',
    image: 'https://picsum.photos/seed/sacredgate-hero3/1600/800',
  },
] as const

export function Hero() {
  const [current, setCurrent] = useState(0)

  const next = useCallback(() => setCurrent((c) => (c + 1) % slides.length), [])
  const prev = useCallback(() => setCurrent((c) => (c - 1 + slides.length) % slides.length), [])

  useEffect(() => {
    const id = setInterval(next, 6000)
    return () => clearInterval(id)
  }, [next])

  const slide = slides[current]!

  return (
    <section
      id="home"
      className="relative flex h-[500px] items-center justify-center overflow-hidden sm:h-[600px]"
    >
      <img
        src={slide.image}
        alt=""
        className="absolute inset-0 h-full w-full object-cover transition-opacity duration-700"
      />
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 text-center text-white">
        <h1 className="font-display text-4xl font-bold leading-tight sm:text-5xl md:text-6xl lg:text-7xl">
          {slide.heading}
        </h1>
        <p className="mt-4 text-lg text-gray-200">{slide.subheading}</p>
        <ButtonLink
          href="#services"
          className="mt-8 inline-flex rounded-none bg-brand px-8 py-4 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-brand-dark"
        >
          Learn More
        </ButtonLink>
      </div>

      <button
        type="button"
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center bg-black/40 text-white transition-colors hover:bg-black/60"
      >
        <ChevronLeft className="h-6 w-6" aria-hidden="true" />
      </button>
      <button
        type="button"
        onClick={next}
        aria-label="Next slide"
        className="absolute right-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center bg-black/40 text-white transition-colors hover:bg-black/60"
      >
        <ChevronRight className="h-6 w-6" aria-hidden="true" />
      </button>

      <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {slides.map((_, i) => (
          <span
            key={i}
            className={`block h-3 w-3 rounded-full transition-colors ${
              i === current ? 'bg-brand' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </section>
  )
}
