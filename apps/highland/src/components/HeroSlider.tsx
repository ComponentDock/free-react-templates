import { useState, useEffect, useCallback } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const slides = [
  {
    image: 'https://picsum.photos/seed/highland-hero-1/1920/1080',
    title: 'Highland Resort',
    subtitle: 'Unlock to enjoy the view of nature',
  },
  {
    image: 'https://picsum.photos/seed/highland-hero-2/1920/1080',
    title: 'Life is Beautiful',
    subtitle: 'Experience luxury in the heart of the mountains',
  },
  {
    image: 'https://picsum.photos/seed/highland-hero-3/1920/1080',
    title: 'Welcome to Highland',
    subtitle: 'Your perfect getaway destination',
  },
  {
    image: 'https://picsum.photos/seed/highland-hero-4/1920/1080',
    title: 'Relax & Rejuvenate',
    subtitle: 'Discover world-class amenities and service',
  },
]

export function HeroSlider() {
  const [current, setCurrent] = useState(0)

  const next = useCallback(() => setCurrent((c) => (c + 1) % slides.length), [])
  const prev = useCallback(() => setCurrent((c) => (c - 1 + slides.length) % slides.length), [])

  useEffect(() => {
    const timer = setInterval(next, 5000)
    return () => clearInterval(timer)
  }, [next])

  return (
    <section data-testid="hero-slider" className="relative h-screen w-full overflow-hidden">
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-700 ${
            i === current ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/40" />
        </div>
      ))}

      <div className="absolute inset-0 flex items-center justify-center text-center text-white z-10">
        <div>
          <h1 className="text-5xl md:text-7xl font-light mb-4">{slides[current]!.title}</h1>
          <p className="text-lg md:text-xl font-light tracking-wide">{slides[current]!.subtitle}</p>
        </div>
      </div>

      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white/70 hover:text-white transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft size={40} />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white/70 hover:text-white transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight size={40} />
      </button>
    </section>
  )
}
