import { useState } from 'react'
import { ChevronLeft, ChevronRight, Play } from 'lucide-react'

const slides = [
  {
    heading: 'RoxyGlow',
    subheading: 'More than a hotel... an experience',
    image: 'roxyglow-hero1',
  },
  {
    heading: 'Experience Epic Beauty',
    subheading: 'RoxyGlow Hotel & Resort',
    image: 'roxyglow-hero2',
  },
]

export function Hero() {
  const [current, setCurrent] = useState(0)

  const next = () => setCurrent((c) => (c + 1) % slides.length)
  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length)

  const slide = slides[current]!

  return (
    <section className="relative flex min-h-[500px] items-center bg-ink bg-cover bg-center bg-no-repeat md:min-h-[700px]">
      {/* Background image */}
      <img
        src={`https://picsum.photos/seed/${slide.image}/1920/1080`}
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover"
        aria-hidden="true"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-ink/60" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 text-center">
        <h1 className="mb-4 font-heading text-5xl font-bold text-white md:text-7xl">
          {slide.heading}
        </h1>
        <h2 className="mb-8 font-sans text-lg text-white/80 md:text-xl">{slide.subheading}</h2>
        <a
          href="#"
          className="inline-flex h-16 w-16 items-center justify-center rounded-full border-2 border-white/40 text-white transition-colors hover:border-white hover:bg-white/10"
          aria-label="Play introduction video"
        >
          <Play className="ml-1 h-6 w-6" />
        </a>
      </div>

      {/* Navigation arrows */}
      <button
        type="button"
        onClick={prev}
        className="absolute left-4 top-1/2 z-20 -translate-y-1/2 text-white/60 transition-colors hover:text-white"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-10 w-10" />
      </button>
      <button
        type="button"
        onClick={next}
        className="absolute right-4 top-1/2 z-20 -translate-y-1/2 text-white/60 transition-colors hover:text-white"
        aria-label="Next slide"
      >
        <ChevronRight className="h-10 w-10" />
      </button>

      {/* Slide indicators */}
      <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setCurrent(i)}
            className={`h-3 w-3 rounded-full transition-colors ${
              i === current ? 'bg-brand' : 'bg-white/40'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
