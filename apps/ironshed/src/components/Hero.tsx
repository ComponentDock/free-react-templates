import { useState, useEffect, useCallback } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'

const slides = [
  { id: 1, image: 'https://picsum.photos/seed/ironshed-hero1/1920/1080' },
  { id: 2, image: 'https://picsum.photos/seed/ironshed-hero2/1920/1080' },
  { id: 3, image: 'https://picsum.photos/seed/ironshed-hero3/1920/1080' },
] as const

export function Hero() {
  const [current, setCurrent] = useState(0)

  const next = useCallback(() => setCurrent((i) => (i + 1) % slides.length), [])
  const prev = useCallback(() => setCurrent((i) => (i - 1 + slides.length) % slides.length), [])

  useEffect(() => {
    const timer = setInterval(next, 5000)
    return () => clearInterval(timer)
  }, [next])

  return (
    <section
      id="home"
      aria-label="Hero"
      className="relative h-screen min-h-[600px] overflow-hidden"
    >
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === current ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={slide.image}
            alt=""
            className="h-full w-full object-cover"
            loading={index === 0 ? 'eager' : 'lazy'}
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
      ))}

      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h4 className="font-heading text-lg font-light uppercase tracking-[3px] text-white/90">
            Elite Personal Training Services
          </h4>
          <h1 className="mt-4 font-heading text-5xl font-bold leading-tight text-white sm:text-6xl lg:text-7xl">
            Make it <span className="text-brand">Shape</span>
          </h1>
          <div className="mt-8">
            <ButtonLink
              href="#about"
              className="inline-block bg-brand px-10 py-3.5 font-heading text-sm font-semibold uppercase tracking-[2px] text-white transition-colors hover:bg-brand-dark"
            >
              Join Us Now
            </ButtonLink>
          </div>
        </div>
      </div>

      <button
        type="button"
        aria-label="Previous slide"
        onClick={prev}
        className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/30 p-2 text-white transition-colors hover:bg-black/50"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        type="button"
        aria-label="Next slide"
        onClick={next}
        className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/30 p-2 text-white transition-colors hover:bg-black/50"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            aria-label={`Go to slide ${index + 1}`}
            onClick={() => setCurrent(index)}
            className={`h-2.5 rounded-full transition-all ${
              index === current ? 'w-8 bg-brand' : 'w-2.5 bg-white/50'
            }`}
          />
        ))}
      </div>
    </section>
  )
}
