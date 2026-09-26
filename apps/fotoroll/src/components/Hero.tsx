import { useCallback, useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const slides = [
  {
    seed: 'fotoroll-slide-1',
    heading: 'Mountain Vistas',
    sub: 'Explore breathtaking landscapes from peaks to valleys.',
  },
  {
    seed: 'fotoroll-slide-2',
    heading: 'Urban Streets',
    sub: 'Capturing the rhythm and soul of city life.',
  },
  {
    seed: 'fotoroll-slide-3',
    heading: 'Ocean Dreams',
    sub: 'Where the horizon meets endless blue water.',
  },
] as const

export function Hero() {
  const [current, setCurrent] = useState(0)

  const prev = useCallback(() => setCurrent((c) => (c - 1 + slides.length) % slides.length), [])
  const next = useCallback(() => setCurrent((c) => (c + 1) % slides.length), [])

  useEffect(() => {
    const id = setInterval(next, 6000)
    return () => clearInterval(id)
  }, [next])

  const slide = slides[current]! as (typeof slides)[number]

  return (
    <section
      id="home"
      className="relative flex min-h-[600px] items-center justify-center overflow-hidden bg-ink"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-opacity duration-700"
        style={{
          backgroundImage: `url('https://picsum.photos/seed/${slide.seed}/1920/1080')`,
        }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-black/40" aria-hidden="true" />

      {/* Caption */}
      <div className="relative z-10 max-w-3xl px-4 text-center text-white">
        <h1 className="mb-4 text-5xl font-bold uppercase tracking-wider md:text-7xl">
          {slide.heading}
        </h1>
        <a
          href="#portfolio"
          className="mt-6 inline-block border-b-2 border-white pb-1 text-sm font-semibold uppercase tracking-widest text-white transition-colors hover:border-brand hover:text-brand"
        >
          View Projects
        </a>
      </div>

      {/* Controls */}
      <button
        type="button"
        className="absolute left-6 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/30 p-3 text-white backdrop-blur transition-colors hover:bg-black/50"
        aria-label="Previous slide"
        onClick={prev}
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        type="button"
        className="absolute right-6 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/30 p-3 text-white backdrop-blur transition-colors hover:bg-black/50"
        aria-label="Next slide"
        onClick={next}
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Pagination */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-sm font-light tracking-widest text-white/80">
        {current + 1} / {slides.length}
      </div>
    </section>
  )
}
