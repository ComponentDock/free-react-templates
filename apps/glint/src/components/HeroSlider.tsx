import { useState, useEffect, useCallback } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const slides: { heading: string; text: string; image: string }[] = [
  {
    heading: 'Your Smile Is Our Priority',
    text: 'We provide world-class dental care with the latest technology and experienced professionals.',
    image: 'https://picsum.photos/seed/glint-hero1/1600/900',
  },
  {
    heading: 'Expert Dental Solutions',
    text: 'From routine checkups to advanced procedures, we ensure your dental health is in the best hands.',
    image: 'https://picsum.photos/seed/glint-hero2/1600/900',
  },
]

export function HeroSlider() {
  const [current, setCurrent] = useState(0)

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % slides.length)
  }, [])

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + slides.length) % slides.length)
  }, [])

  useEffect(() => {
    const timer = setInterval(next, 5000)
    return () => clearInterval(timer)
  }, [next])

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion -- array is non-empty
  const slide = slides[current]!

  return (
    <section
      id="home"
      className="relative flex min-h-[500px] items-center overflow-hidden bg-gray-900"
    >
      <img
        src={slide.image}
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-50"
      />
      <div className="relative mx-auto max-w-7xl px-4 py-20 text-white sm:px-6">
        <h1 className="mb-4 max-w-2xl font-display text-4xl font-bold leading-tight md:text-5xl">
          {slide.heading}
        </h1>
        <p className="mb-8 max-w-xl text-lg text-white/80">{slide.text}</p>
        <a
          href="#appointment"
          className="inline-block rounded bg-primary-400 px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-500"
        >
          Get Appointment
        </a>
      </div>

      {/* Navigation arrows */}
      <button
        type="button"
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/20 p-2 text-white transition-colors hover:bg-white/40"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        type="button"
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/20 p-2 text-white transition-colors hover:bg-white/40"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setCurrent(i)}
            className={`h-3 w-3 rounded-full transition-colors ${
              i === current ? 'bg-primary-400' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
