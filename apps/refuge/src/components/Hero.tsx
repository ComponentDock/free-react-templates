import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const slides = [
  {
    headline: 'Small Business Insurance Agency',
    subtitle: 'An Insurance Company',
    image: 'https://picsum.photos/seed/refuge-hero-1/1200/600',
  },
  {
    headline: 'Insurance Coverage To Meet Your Needs',
    subtitle: 'You Will Love Our Services',
    image: 'https://picsum.photos/seed/refuge-hero-2/1200/600',
  },
]

export function Hero() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c === 0 ? slides.length - 1 : c - 1))
  const next = () => setCurrent((c) => (c === slides.length - 1 ? 0 : c + 1))

  const slide = slides[current]!

  return (
    <section className="relative h-[500px] overflow-hidden bg-ink">
      {slides.map((s, i) => (
        <div key={s.image} className={i === current ? 'block' : 'hidden'}>
          <img
            src={s.image}
            alt=""
            className="absolute inset-0 h-full w-full object-cover opacity-60"
          />
        </div>
      ))}
      <div className="absolute inset-0 flex items-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h1 className="max-w-xl font-display text-4xl font-bold uppercase leading-tight text-white md:text-5xl">
            {slide.headline}
          </h1>
          <p className="mt-4 text-lg text-white/80">{slide.subtitle}</p>
        </div>
      </div>
      {/* Navigation arrows */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/20 p-2 text-white backdrop-blur transition hover:bg-white/40"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/20 p-2 text-white backdrop-blur transition hover:bg-white/40"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>
      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2.5 w-2.5 rounded-full transition ${i === current ? 'bg-white' : 'bg-white/40'}`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
