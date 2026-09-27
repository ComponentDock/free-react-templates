import { useState, useEffect, useCallback } from 'react'
import { ChevronLeft, ChevronRight, Maximize2, BedDouble, Bath } from 'lucide-react'

interface Slide {
  subtitle: string
  title: string
  sqft: string
  bedrooms: string
  bathrooms: string
  price: string
  image: string
}

const slides: Slide[] = [
  {
    subtitle: 'Super Offer',
    title: 'Villa With Sea View',
    sqft: '250 sqft',
    bedrooms: '4 Bedrooms',
    bathrooms: '2 Bathrooms',
    price: '$3,500',
    image: 'https://picsum.photos/seed/bluecoast-1/1920/800',
  },
  {
    subtitle: 'New Listing',
    title: 'Modern City Apartment',
    sqft: '180 sqft',
    bedrooms: '3 Bedrooms',
    bathrooms: '1 Bathroom',
    price: '$2,200',
    image: 'https://picsum.photos/seed/bluecoast-2/1920/800',
  },
  {
    subtitle: 'Featured',
    title: 'Cozy Suburban House',
    sqft: '320 sqft',
    bedrooms: '5 Bedrooms',
    bathrooms: '3 Bathrooms',
    price: '$4,800',
    image: 'https://picsum.photos/seed/bluecoast-3/1920/800',
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

  const slide = slides[current]!

  return (
    <section className="relative h-[600px] w-full overflow-hidden" aria-label="Hero slider">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-opacity duration-500"
        style={{ backgroundImage: `url(${slide.image})` }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Gradient at bottom */}
      <div className="absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-brand-blue/80 to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-end px-4 pb-24 lg:px-8">
        <div className="text-white">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-accent-green">
            {slide.subtitle}
          </p>
          <h1 className="mb-4 text-4xl font-bold md:text-5xl lg:text-6xl">{slide.title}</h1>
          <div className="mb-4 flex flex-wrap items-center gap-6 text-sm text-white/80">
            <span className="flex items-center gap-2">
              <Maximize2 size={16} /> {slide.sqft}
            </span>
            <span className="flex items-center gap-2">
              <BedDouble size={16} /> {slide.bedrooms}
            </span>
            <span className="flex items-center gap-2">
              <Bath size={16} /> {slide.bathrooms}
            </span>
          </div>
          <p className="text-3xl font-bold">{slide.price}</p>
        </div>
      </div>

      {/* Navigation arrows */}
      <button
        type="button"
        onClick={prev}
        className="absolute left-4 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 text-white transition-colors hover:bg-white/40"
        aria-label="Previous slide"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        type="button"
        onClick={next}
        className="absolute right-4 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 text-white transition-colors hover:bg-white/40"
        aria-label="Next slide"
      >
        <ChevronRight size={20} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setCurrent(i)}
            className={`h-2.5 rounded-full transition-colors ${
              i === current ? 'bg-accent-green' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
