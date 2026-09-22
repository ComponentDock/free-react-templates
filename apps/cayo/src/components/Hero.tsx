import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const slides = [
  {
    heading: 'A Perfect Place To Stay',
    subheading: 'Welcome to Cayo Hotel',
    image: 'https://picsum.photos/seed/cayo-hero-1/1200/800',
  },
  {
    heading: 'Experience Luxury Living',
    subheading: 'Discover Our Amenities',
    image: 'https://picsum.photos/seed/cayo-hero-2/1200/800',
  },
  {
    heading: 'Your Dream Vacation Awaits',
    subheading: 'Book Your Stay Today',
    image: 'https://picsum.photos/seed/cayo-hero-3/1200/800',
  },
]

export function Hero({ className }: { className?: string }) {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c === 0 ? slides.length - 1 : c - 1))
  const next = () => setCurrent((c) => (c === slides.length - 1 ? 0 : c + 1))

  const slide = slides[current]!

  return (
    <section id="hero" className={cn('relative flex min-h-[80vh] items-center', className)}>
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={slide.image} alt="Hotel hero" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-ink/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-start px-4 md:flex-row md:items-center">
        {/* Left text */}
        <div className="w-full md:w-1/2 md:pr-12">
          <p className="mb-4 font-serif text-lg font-semibold text-brand">{slide.subheading}</p>
          <h1 className="mb-8 font-heading text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
            {slide.heading}
          </h1>
          <a
            href="#booking"
            className="inline-block bg-accent px-8 py-3 font-heading text-sm font-semibold uppercase tracking-[2px] text-white transition hover:bg-accent/90"
          >
            Make A Booking
          </a>
        </div>

        {/* Right image slider */}
        <div className="hidden w-full md:block md:w-1/2">
          <div className="relative overflow-hidden">
            <img src={slide.image} alt={slide.heading} className="h-[400px] w-full object-cover" />
            {/* Slider arrows */}
            <button
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/20 p-2 text-white backdrop-blur-sm transition hover:bg-white/40"
              aria-label="Previous slide"
              onClick={prev}
            >
              <ChevronLeft size={20} />
            </button>
            <button
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/20 p-2 text-white backdrop-blur-sm transition hover:bg-white/40"
              aria-label="Next slide"
              onClick={next}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to slide ${i + 1}`}
            className={cn(
              'h-2 w-2 rounded-full transition',
              i === current ? 'bg-brand' : 'bg-white/40',
            )}
            onClick={() => setCurrent(i)}
          />
        ))}
      </div>
    </section>
  )
}
