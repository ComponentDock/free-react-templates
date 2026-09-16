import { useState, useEffect, useCallback } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'

const slides = [
  {
    heading: 'Elevate Your Coaching Business',
    subheading: 'Transform your practice with modern tools and strategies.',
    image: 'https://picsum.photos/seed/elevate-hero-1/1920/800',
  },
  {
    heading: 'Unlock Your True Potential',
    subheading: 'Personalized coaching plans tailored to your goals.',
    image: 'https://picsum.photos/seed/elevate-hero-2/1920/800',
  },
  {
    heading: 'Build Lasting Change',
    subheading: 'Sustainable growth through expert guidance.',
    image: 'https://picsum.photos/seed/elevate-hero-3/1920/800',
  },
] as const

export function HeroSlider() {
  const [current, setCurrent] = useState(0)

  const next = useCallback(() => {
    setCurrent((idx) => (idx + 1) % slides.length)
  }, [])

  const prev = useCallback(() => {
    setCurrent((idx) => (idx - 1 + slides.length) % slides.length)
  }, [])

  useEffect(() => {
    const timer = setInterval(next, 5000)
    return () => clearInterval(timer)
  }, [next])

  const slide = slides[current]!

  return (
    <section id="home" className="relative flex min-h-[60vh] items-center overflow-hidden bg-ink">
      <img
        src={slide.image}
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-40"
      />
      <div className="relative z-10 mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <h1 className="max-w-2xl text-4xl font-bold leading-tight text-white sm:text-5xl">
          {slide.heading}
        </h1>
        <p className="mt-4 max-w-xl text-lg text-gray-200">{slide.subheading}</p>
        <ButtonLink
          href="#contact"
          className="mt-8 inline-flex rounded-lg bg-brand px-8 py-3 text-base font-semibold text-white transition-colors hover:bg-brand-dark"
        >
          Start Free Trial
        </ButtonLink>
      </div>

      <button
        type="button"
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur transition-colors hover:bg-white/30"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        type="button"
        onClick={next}
        aria-label="Next slide"
        className="absolute right-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur transition-colors hover:bg-white/30"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2.5 rounded-full transition-colors ${
              i === current ? 'w-8 bg-brand' : 'w-2.5 bg-white/40'
            }`}
          />
        ))}
      </div>
    </section>
  )
}
