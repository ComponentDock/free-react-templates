import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react'

const SLIDES = [
  {
    image: 'https://picsum.photos/seed/trekcraft-hero1/1920/800',
    title: 'discover',
    subtitle: 'the world',
  },
  {
    image: 'https://picsum.photos/seed/trekcraft-hero2/1920/800',
    title: 'explore',
    subtitle: 'new horizons',
  },
  {
    image: 'https://picsum.photos/seed/trekcraft-hero3/1920/800',
    title: 'journey',
    subtitle: 'beyond limits',
  },
]

export function HeroSlider() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c === 0 ? SLIDES.length - 1 : c - 1))
  const next = () => setCurrent((c) => (c === SLIDES.length - 1 ? 0 : c + 1))

  const slide = SLIDES[current]!

  return (
    <section className="relative h-[600px] md:h-[700px] overflow-hidden" aria-label="Hero slider">
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-700"
        style={{ backgroundImage: `url(${slide.image})` }}
      >
        <div className="absolute inset-0 bg-trek-dark/60" />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="font-display text-5xl md:text-7xl font-bold mb-2">{slide.title}</h1>
        <h2 className="font-display text-4xl md:text-6xl font-bold mb-8">{slide.subtitle}</h2>
        <a
          href="#search"
          className="bg-gradient-to-r from-trek-orange to-trek-purple text-white px-8 py-3 rounded-full text-sm font-bold uppercase tracking-wider hover:opacity-90 transition-opacity"
        >
          explore now
        </a>
      </div>

      <button
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 rounded-full p-3 transition-colors"
      >
        <ChevronLeft className="text-white" size={28} />
      </button>
      <button
        onClick={next}
        aria-label="Next slide"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 rounded-full p-3 transition-colors"
      >
        <ChevronRight className="text-white" size={28} />
      </button>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`w-3 h-3 rounded-full transition-colors ${i === current ? 'bg-trek-orange' : 'bg-white/50'}`}
          />
        ))}
      </div>
    </section>
  )
}
