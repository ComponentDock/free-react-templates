import { useState, useEffect, useCallback } from 'react'

const slides = [
  {
    heading1: "Men's",
    heading2: 'Jeans',
    heading3: 'Collection',
    subtitle: 'New stylish shirts, pants & Accessories',
    image: 'https://picsum.photos/seed/bodega-bg1/1600/900',
  },
  {
    heading1: 'Huge',
    heading2: 'Sale',
    heading3: '45% off',
    subtitle: 'New stylish shirts, pants & Accessories',
    image: 'https://picsum.photos/seed/bodega-bg2/1600/900',
  },
  {
    heading1: 'New',
    heading2: 'Arrival',
    heading3: 'up to 30% off',
    subtitle: 'New stylish shirts, pants & Accessories',
    image: 'https://picsum.photos/seed/bodega-bg3/1600/900',
  },
]

export function HeroSlider() {
  const [current, setCurrent] = useState(0)

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % slides.length)
  }, [])

  useEffect(() => {
    const timer = setInterval(next, 5000)
    return () => clearInterval(timer)
  }, [next])

  const slide = slides[current]!

  return (
    <section
      className="relative h-[500px] md:h-[650px] bg-cover bg-center transition-all duration-700"
      style={{ backgroundImage: `url(${slide.image})` }}
      aria-label="Hero slider"
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 flex items-center h-full max-w-7xl mx-auto px-4">
        <div className="text-white max-w-lg">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">{slide.heading1}</h1>
          <h2 className="text-4xl md:text-6xl font-bold mt-1">{slide.heading2}</h2>
          <h3 className="text-3xl md:text-5xl font-bold mt-1">{slide.heading3}</h3>
          <p className="mt-4 text-lg text-white/80">{slide.subtitle}</p>
          <a
            href="#shop"
            className="inline-block mt-6 bg-brand text-heading font-bold uppercase tracking-[2px] px-8 py-3 text-sm hover:bg-brand-hover transition-colors"
          >
            Shop Collection
          </a>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition-colors ${
              i === current ? 'bg-brand' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
