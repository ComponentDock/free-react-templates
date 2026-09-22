import { useState, useEffect, useCallback } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'

const slides: Array<{ heading: string; sub: string; img: string }> = [
  {
    heading: 'We provide your Industrial solution',
    sub: 'Welcome to Industrix',
    img: 'https://picsum.photos/seed/industrix-hero1/1920/1080',
  },
  {
    heading: "Building tomorrow's infrastructure today",
    sub: 'Expert Engineering',
    img: 'https://picsum.photos/seed/industrix-hero2/1920/1080',
  },
  {
    heading: 'Trusted by industry leaders worldwide',
    sub: 'Global Projects',
    img: 'https://picsum.photos/seed/industrix-hero3/1920/1080',
  },
]

export function HeroSlider() {
  const [current, setCurrent] = useState(0)

  const next = useCallback(() => setCurrent((c) => (c + 1) % slides.length), [])
  const prev = useCallback(() => setCurrent((c) => (c - 1 + slides.length) % slides.length), [])

  useEffect(() => {
    const id = setInterval(next, 5000)
    return () => clearInterval(id)
  }, [next])

  const slide = slides[current]!

  return (
    <section
      id="home"
      className="relative flex h-[600px] items-center overflow-hidden bg-ink md:h-[700px]"
      aria-label="Hero slider"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-opacity duration-700"
        style={{ backgroundImage: `url(${slide.img})` }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-ink/85" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-xl rounded-lg bg-white p-8 shadow-lg sm:p-12">
          <span className="text-sm font-semibold uppercase tracking-widest text-brand">
            {slide.sub}
          </span>
          <h1 className="mt-3 font-display text-3xl font-bold leading-tight text-ink sm:text-4xl lg:text-5xl">
            {slide.heading}
          </h1>
          <div className="mt-8 flex flex-wrap gap-4">
            <ButtonLink
              href="#services"
              className="rounded border-2 border-brand bg-transparent px-8 py-3 text-sm font-semibold uppercase tracking-wide text-brand transition-colors hover:bg-brand hover:text-white"
            >
              Our Services
            </ButtonLink>
            <ButtonLink
              href="#contact"
              className="rounded bg-brand px-8 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-brand-dark"
            >
              Get a Quote
            </ButtonLink>
          </div>
        </div>
      </div>

      {/* Navigation arrows */}
      <button
        type="button"
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur transition-colors hover:bg-white/40"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        type="button"
        onClick={next}
        aria-label="Next slide"
        className="absolute right-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur transition-colors hover:bg-white/40"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-3 w-3 rounded-full transition-colors ${
              i === current ? 'bg-brand' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </section>
  )
}
