import { useState } from 'react'
import { ChevronLeft, ChevronRight, MapPin } from 'lucide-react'

interface PropertySlide {
  name: string
  price: string
  location: string
  image: string
}

const slides: PropertySlide[] = [
  {
    name: 'Riverside Haven',
    price: '$ 2,450/month',
    location: '123 River Road, Portland, OR',
    image: 'https://picsum.photos/seed/dwelling-hero-1/1200/500',
  },
  {
    name: 'Urban Loft',
    price: '$ 1,800/month',
    location: '456 Main St, Austin, TX',
    image: 'https://picsum.photos/seed/dwelling-hero-2/1200/500',
  },
  {
    name: 'Garden Retreat',
    price: '$ 3,200/month',
    location: '789 Oak Ave, Denver, CO',
    image: 'https://picsum.photos/seed/dwelling-hero-3/1200/500',
  },
]

export function Hero() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c === 0 ? slides.length - 1 : c - 1))
  const next = () => setCurrent((c) => (c === slides.length - 1 ? 0 : c + 1))

  const slide = slides[current]!

  return (
    <section id="home" className="relative h-[500px] overflow-hidden bg-white">
      <div
        className="absolute inset-0 bg-cover bg-center transition-opacity duration-500"
        style={{ backgroundImage: `url(${slide.image})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
      <div className="relative mx-auto flex h-full max-w-7xl items-center px-4 lg:px-8">
        <div className="max-w-lg text-white">
          <h1 className="font-heading text-4xl font-bold leading-tight md:text-5xl">
            {slide.name}
          </h1>
          <p className="mt-2 font-heading text-2xl font-semibold text-brand">{slide.price}</p>
          <p className="mt-3 flex items-center gap-2 text-sm text-white/80">
            <MapPin size={16} />
            {slide.location}
          </p>
          <a
            href="#properties"
            className="mt-6 inline-block rounded bg-brand px-6 py-3 font-heading text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
          >
            View Details
          </a>
        </div>
      </div>
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/20 p-2 text-white backdrop-blur-sm transition-colors hover:bg-white/40"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/20 p-2 text-white backdrop-blur-sm transition-colors hover:bg-white/40"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2 w-2 rounded-full transition-colors ${
              i === current ? 'bg-brand' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
