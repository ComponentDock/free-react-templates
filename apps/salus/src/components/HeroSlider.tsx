import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { heroSlides } from '../data'

export function HeroSlider() {
  const [index, setIndex] = useState(0)
  const total = heroSlides.length

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % total)
    }, 6000)
    return () => window.clearInterval(timer)
  }, [total])

  const prev = () => setIndex((current) => (current - 1 + total) % total)
  const next = () => setIndex((current) => (current + 1) % total)

  const slide = heroSlides[index]!

  return (
    <section id="home" aria-label="Featured" className="relative h-[700px] overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-500"
        style={{ backgroundImage: `url(${slide.image})` }}
        aria-hidden="true"
      />
      <div className="relative z-10 mx-auto flex h-full max-w-6xl items-center px-4">
        <div className="max-w-xl">
          <h3 className="text-[70px] font-light leading-tight tracking-wide text-ink capitalize">
            <span className="block font-light">{slide.eyebrow}</span>
            <span className="block font-semibold">{slide.headline}</span>
          </h3>
          <p className="mt-6 text-lg leading-8 text-body">{slide.excerpt}</p>
          <a
            href="#services"
            className="mt-9 inline-block rounded bg-gradient-to-r from-brand-deep to-sky px-11 py-4 text-lg font-medium text-white transition-colors hover:from-primary-700 hover:to-primary-500"
          >
            Check Our Services
          </a>
        </div>
      </div>

      <button
        type="button"
        aria-label="Previous slide"
        onClick={prev}
        className="absolute top-1/2 left-4 z-20 -translate-y-1/2 rounded-full bg-white/80 p-3 text-ink shadow hover:bg-white"
      >
        <ChevronLeft className="h-6 w-6" aria-hidden="true" />
      </button>
      <button
        type="button"
        aria-label="Next slide"
        onClick={next}
        className="absolute top-1/2 right-4 z-20 -translate-y-1/2 rounded-full bg-white/80 p-3 text-ink shadow hover:bg-white"
      >
        <ChevronRight className="h-6 w-6" aria-hidden="true" />
      </button>

      <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === index ? 'true' : undefined}
            onClick={() => setIndex(i)}
            className={`h-2.5 rounded-full transition-all ${
              i === index ? 'w-8 bg-brand' : 'w-2.5 bg-white/70 hover:bg-white'
            }`}
          >
            <span className="sr-only">Slide {i + 1}</span>
          </button>
        ))}
      </div>
    </section>
  )
}
