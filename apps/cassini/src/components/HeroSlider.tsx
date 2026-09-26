import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useCallback, useEffect, useState } from 'react'

const slides = [
  { seed: 'cassini-hero-1', category: 'Nature', heading: 'Photo Studio' },
  { seed: 'cassini-hero-2', category: 'Nature', heading: 'Photo Studio' },
  { seed: 'cassini-hero-3', category: 'Nature', heading: 'Photo Studio' },
]

const description =
  'A creative lifestyle photo studio making emotional photography communicate a story. Creative lifestyle photo studio making emotional photography.'

export default function HeroSlider() {
  const [current, setCurrent] = useState(0)

  const next = useCallback(() => setCurrent((c) => (c + 1) % slides.length), [])
  const prev = useCallback(() => setCurrent((c) => (c - 1 + slides.length) % slides.length), [])

  useEffect(() => {
    const id = setInterval(next, 6000)
    return () => clearInterval(id)
  }, [next])

  const slide = slides[current]!

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-700"
        style={{
          backgroundImage: `url(https://picsum.photos/seed/${slide.seed}/1920/1080)`,
        }}
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-start justify-center px-10 text-white sm:px-16 lg:px-24">
        <span className="mb-4 inline-block rounded-sm bg-[var(--color-brand)] px-3 py-1 text-sm font-medium uppercase tracking-wider">
          {slide.category}
        </span>
        <h1 className="mb-4 text-5xl font-semibold sm:text-6xl lg:text-7xl">{slide.heading}</h1>
        <p className="mb-8 max-w-lg text-base text-[var(--color-muted-text)]">{description}</p>
        <a
          href="#gallery"
          className="inline-flex items-center gap-2 rounded-sm border border-white bg-transparent px-6 py-3 text-sm font-medium uppercase tracking-wider text-white transition-colors hover:bg-white hover:text-black"
        >
          See More
          <ChevronRight className="h-4 w-4" />
        </a>
      </div>

      {/* Navigation arrows */}
      <button
        type="button"
        onClick={prev}
        className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-sm border border-white p-3 text-white transition-colors hover:bg-white hover:text-black"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        type="button"
        onClick={next}
        className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-sm border border-white p-3 text-white transition-colors hover:bg-white hover:text-black"
        aria-label="Next slide"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setCurrent(i)}
            className={`h-2.5 w-2.5 rounded-full transition-colors ${
              i === current ? 'bg-white' : 'bg-white/40'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
