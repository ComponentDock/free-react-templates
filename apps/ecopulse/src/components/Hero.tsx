import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@free-react-templates/ui'

const slides = [
  {
    heading: 'Protecting Our Environment Together',
    subtitle: 'Building a sustainable future for generations to come',
    image: 'https://picsum.photos/seed/ecopulse-hero1/1920/1080',
  },
  {
    heading: 'Clean Water for Every Community',
    subtitle: 'Providing access to safe drinking water worldwide',
    image: 'https://picsum.photos/seed/ecopulse-hero2/1920/1080',
  },
  {
    heading: 'Renewable Energy Solutions',
    subtitle: 'Powering the world with clean, sustainable energy',
    image: 'https://picsum.photos/seed/ecopulse-hero3/1920/1080',
  },
]

export function Hero() {
  const [current, setCurrent] = useState(0)

  const next = () => setCurrent((c) => (c + 1) % slides.length)
  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length)

  const slide = slides[current]!

  return (
    <section className="relative flex min-h-[600px] items-center justify-center overflow-hidden lg:min-h-[790px]">
      {/* Background image */}
      <img
        src={slide.image}
        alt=""
        className="absolute inset-0 h-full w-full object-cover transition-opacity duration-500"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-hero-overlay" />

      {/* Content */}
      <div className="relative z-10 px-4 text-center text-white">
        <h1 className="mb-4 text-4xl font-bold leading-tight md:text-6xl lg:text-7xl">
          {slide.heading}
        </h1>
        <p className="mb-8 text-lg text-white/90 md:text-xl">{slide.subtitle}</p>
        <div className="flex items-center justify-center gap-4">
          <Button className="rounded-full border-2 border-white bg-transparent px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand hover:border-brand">
            Learn More
          </Button>
          <Button className="rounded-full bg-brand px-8 py-3 text-sm font-semibold text-white hover:bg-brand-dark">
            Get Involved
          </Button>
        </div>
      </div>

      {/* Arrow navigation */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/20 p-2 text-white backdrop-blur-sm transition-colors hover:bg-white/40"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/20 p-2 text-white backdrop-blur-sm transition-colors hover:bg-white/40"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dot navigation */}
      <div className="absolute right-6 top-1/2 z-10 flex -translate-y-1/2 flex-col gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-3 w-3 rounded-full transition-colors ${
              i === current ? 'bg-brand' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
