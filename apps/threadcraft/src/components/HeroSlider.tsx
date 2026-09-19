import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const slides = [
  {
    image: 'https://picsum.photos/seed/fashion-hero1/1200/500',
    badge: '-50%',
    title: 'Summer Collection',
    subtitle: 'Up to 50% off selected styles',
    cta: 'Shop Now',
  },
  {
    image: 'https://picsum.photos/seed/fashion-hero2/1200/500',
    badge: 'New',
    title: 'Winter Essentials',
    subtitle: 'Cozy up with our latest arrivals',
    cta: 'Shop Now',
  },
]

export function HeroSlider() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c === 0 ? slides.length - 1 : c - 1))
  const next = () => setCurrent((c) => (c === slides.length - 1 ? 0 : c + 1))

  const slide = slides[current]!

  return (
    <section className="relative overflow-hidden bg-section-bg">
      <div className="relative h-[400px] md:h-[500px]">
        <img
          src={slide.image}
          alt={slide.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 w-full">
            <span className="inline-block bg-sale text-white text-sm font-bold px-3 py-1 rounded mb-4">
              {slide.badge}
            </span>
            <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-3">{slide.title}</h2>
            <p className="text-white/90 text-lg mb-6 max-w-md">{slide.subtitle}</p>
            <a
              href="#"
              className="inline-block bg-brand hover:bg-brand-light text-dark-deep font-bold px-8 py-3 rounded transition-colors"
            >
              {slide.cta}
            </a>
          </div>
        </div>
      </div>
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5 text-dark" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5 text-dark" />
      </button>
    </section>
  )
}
