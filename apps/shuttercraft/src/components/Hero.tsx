import { useCallback, useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const slides = [
  {
    seed: 'shuttercraft-slide-1',
    heading: 'Wildlife Photography',
    subtitle: 'Capturing the raw beauty of nature through the lens, one frame at a time.',
  },
  {
    seed: 'shuttercraft-slide-2',
    heading: 'Portrait Sessions',
    subtitle: 'Professional portrait photography that tells your unique story with authenticity.',
  },
  {
    seed: 'shuttercraft-slide-3',
    heading: 'Landscape Vistas',
    subtitle: 'Exploring breathtaking landscapes from mountains to coastlines around the world.',
  },
] as const

export function Hero() {
  const [current, setCurrent] = useState(0)

  const prev = useCallback(() => setCurrent((c) => (c - 1 + slides.length) % slides.length), [])
  const next = useCallback(() => setCurrent((c) => (c + 1) % slides.length), [])

  useEffect(() => {
    const id = setInterval(next, 5000)
    return () => clearInterval(id)
  }, [next])

  const slide = slides[current]! as (typeof slides)[number]

  return (
    <section
      id="home"
      className="relative flex min-h-[500px] items-center justify-center overflow-hidden bg-ink"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-opacity duration-700"
        style={{
          backgroundImage: `url('https://picsum.photos/seed/${slide.seed}/1920/1080')`,
        }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-black/50" aria-hidden="true" />

      {/* Caption */}
      <div className="relative z-10 max-w-3xl px-4 text-center text-white">
        <h1 className="mb-4 text-4xl font-bold uppercase tracking-wide md:text-5xl">
          {slide.heading}
        </h1>
        <p className="mx-auto max-w-xl text-lg font-light text-white/80">{slide.subtitle}</p>
      </div>

      {/* Controls */}
      <button
        type="button"
        className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/20 p-2 text-white backdrop-blur transition-colors hover:bg-white/40"
        aria-label="Previous slide"
        onClick={prev}
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        type="button"
        className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/20 p-2 text-white backdrop-blur transition-colors hover:bg-white/40"
        aria-label="Next slide"
        onClick={next}
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            className={`h-2 rounded-full transition-colors ${
              i === current ? 'bg-brand' : 'bg-white/40'
            }`}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setCurrent(i)}
          />
        ))}
      </div>
    </section>
  )
}
