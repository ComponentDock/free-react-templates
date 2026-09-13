import { useState, useEffect, useCallback } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface Slide {
  id: number
  title: string
  subtitle: string
  image: string
}

const slides: Slide[] = [
  {
    id: 1,
    title: 'We Are Creative Agency',
    subtitle:
      'Crafting bold digital experiences that stand out. Strategy, design, and development under one roof.',
    image: 'https://picsum.photos/seed/pipekit-hero1/1200/600',
  },
  {
    id: 2,
    title: 'Innovation Meets Design',
    subtitle:
      'We blend cutting-edge technology with stunning visuals to build brands that leave a lasting impression.',
    image: 'https://picsum.photos/seed/pipekit-hero2/1200/600',
  },
  {
    id: 3,
    title: 'Your Vision, Our Mission',
    subtitle:
      'From concept to launch, we turn ambitious ideas into reality through meticulous craft and passion.',
    image: 'https://picsum.photos/seed/pipekit-hero3/1200/600',
  },
]

export function Hero() {
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

  const slide = slides[current]!

  return (
    <section id="home" className="relative h-[600px] overflow-hidden bg-navy-600">
      {/* Slide image */}
      {slides.map((s, i) => (
        <div
          key={s.id}
          className={`absolute inset-0 transition-opacity duration-700 ${
            i === current ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={s.image}
            alt={s.title}
            className="h-full w-full object-cover"
            loading={i === 0 ? 'eager' : 'lazy'}
          />
          <div className="absolute inset-0 bg-navy-600/60" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="max-w-2xl">
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-gold-400">
              Welcome to Pipekit
            </p>
            <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              {slide.title}
            </h1>
            <p className="mt-5 max-w-lg text-lg text-white/80">{slide.subtitle}</p>
            <a
              href="#about"
              className="mt-8 inline-block rounded bg-gold-400 px-8 py-3 text-sm font-semibold uppercase tracking-wide text-navy-800 transition-colors hover:bg-gold-500"
            >
              Discover More
            </a>
          </div>
        </div>
      </div>

      {/* Navigation arrows */}
      <button
        type="button"
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/20 p-3 text-white transition-colors hover:bg-white/30"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        type="button"
        onClick={next}
        aria-label="Next slide"
        className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/20 p-3 text-white transition-colors hover:bg-white/30"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {slides.map((s, i) => (
          <button
            key={s.id}
            type="button"
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-3 w-3 rounded-full transition-colors ${
              i === current ? 'bg-gold-400' : 'bg-white/40 hover:bg-white/60'
            }`}
          />
        ))}
      </div>
    </section>
  )
}
