import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react'

const SLIDES = [
  {
    name: 'Jesse Edwards',
    role: 'Star Model 2019',
    image: 'https://picsum.photos/seed/vizier-hero1/1600/900',
  },
  {
    name: 'Naznin Niloy',
    role: 'Star Model 2019',
    image: 'https://picsum.photos/seed/vizier-hero2/1600/900',
  },
  {
    name: 'Shaila Ritu',
    role: 'Star Model 2019',
    image: 'https://picsum.photos/seed/vizier-hero3/1600/900',
  },
]

export function Hero() {
  const [current, setCurrent] = useState(0)

  const next = () => setCurrent((idx) => (idx + 1) % SLIDES.length)
  const prev = () => setCurrent((idx) => (idx - 1 + SLIDES.length) % SLIDES.length)
  const slide = SLIDES[current]!

  return (
    <section
      className="relative flex h-screen items-center bg-cover bg-center"
      style={{ backgroundImage: `url(${slide.image})` }}
      data-testid="hero"
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
        <h1 className="mb-4 text-5xl font-bold text-white md:text-7xl">
          {slide.name.split(' ').map((w, i) => (
            <span key={i} className="block">
              {w}
            </span>
          ))}
        </h1>
        <h2 className="mb-8 text-xl font-medium text-gray-200">{slide.role}</h2>
        <a
          href="#models"
          className="inline-block rounded bg-primary px-8 py-3 text-sm font-semibold uppercase text-white transition hover:bg-primary/80"
        >
          View Profile →
        </a>
      </div>

      {/* Social links */}
      <div className="absolute bottom-24 left-6 z-10 flex gap-4" data-testid="hero-social">
        {['Facebook', 'Twitter', 'Instagram', 'YouTube'].map((name) => (
          <a
            key={name}
            href="#"
            className="text-sm font-medium text-white/80 transition hover:text-white"
          >
            {name}
          </a>
        ))}
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/20 p-3 text-white backdrop-blur transition hover:bg-white/40"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={next}
        aria-label="Next slide"
        className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/20 p-3 text-white backdrop-blur transition hover:bg-white/40"
      >
        <ChevronRight size={24} />
      </button>

      {/* Slide indicator */}
      <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2 rounded-full transition ${i === current ? 'w-8 bg-primary' : 'w-2 bg-white/50'}`}
            onClick={() => setCurrent(i)}
          />
        ))}
      </div>
    </section>
  )
}
