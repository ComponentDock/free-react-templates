import { useState, useEffect, useCallback } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const slides = [
  {
    title: 'Remedy',
    subtitle: 'Opens 24 Hours',
    description: 'Your trusted pharmacy for quality supplements, vitamins, and wellness products.',
    cta: 'Shop Now',
    image: 'https://picsum.photos/seed/remedy-hero-1/1920/800',
  },
  {
    title: 'New Medicine',
    subtitle: 'Everyday',
    description:
      'Discover the latest in health and wellness. Premium products at affordable prices.',
    cta: 'Shop Now',
    image: 'https://picsum.photos/seed/remedy-hero-2/1920/800',
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

  return (
    <section
      id="home"
      className="relative h-[500px] overflow-hidden md:h-[600px]"
      data-testid="hero"
    >
      {slides.map((slide, i) => (
        <div
          key={slide.title}
          className={`absolute inset-0 transition-opacity duration-700 ${
            i === current ? 'z-10 opacity-100' : 'z-0 opacity-0'
          }`}
        >
          {/* Background image with overlay */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          <div className="absolute inset-0 bg-black/40" />

          {/* Content */}
          <div className="relative z-10 flex h-full items-center">
            <div className="container mx-auto px-4 text-center">
              <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
                <span className="text-brand">{slide.title}</span> {slide.subtitle}
              </h1>
              <p className="mx-auto mb-8 max-w-lg text-lg text-white/90">{slide.description}</p>
              <a
                href="#products"
                className="inline-block border-2 border-brand bg-brand px-8 py-3 text-sm font-bold uppercase text-white transition-colors hover:bg-transparent hover:text-brand"
              >
                {slide.cta}
              </a>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation arrows */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center bg-white/20 text-white backdrop-blur-sm transition-colors hover:bg-white/40"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center bg-white/20 text-white backdrop-blur-sm transition-colors hover:bg-white/40"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-2">
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
