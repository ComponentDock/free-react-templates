import { useState, useEffect, useCallback } from 'react'

const slides = [
  {
    image: 'https://picsum.photos/seed/palatable-hero1/1920/800',
    heading: 'Delicios Homemade Burger',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tristique nisl vitae luctus sollicitudin. Fusce consectetur sem eget dui tristique.',
  },
  {
    image: 'https://picsum.photos/seed/palatable-hero2/1920/800',
    heading: 'Fresh & Healthy Salads',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tristique nisl vitae luctus sollicitudin. Fusce consectetur sem eget dui tristique.',
  },
  {
    image: 'https://picsum.photos/seed/palatable-hero3/1920/800',
    heading: 'Authentic Italian Pasta',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tristique nisl vitae luctus sollicitudin. Fusce consectetur sem eget dui tristique.',
  },
]

export function HeroCarousel() {
  const [current, setCurrent] = useState(0)

  const next = useCallback(() => setCurrent((c) => (c + 1) % slides.length), [])

  useEffect(() => {
    const timer = setInterval(next, 5000)
    return () => clearInterval(timer)
  }, [next])

  const slide = slides[current]!

  return (
    <section className="relative h-[500px] md:h-[600px] overflow-hidden" aria-label="Hero carousel">
      <div className="absolute inset-0">
        <img
          src={slide.image}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-overlay" />
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
              {slide.heading}
            </h1>
            <p className="text-white/80 text-lg mb-6 leading-relaxed">{slide.text}</p>
            <a
              href="#"
              className="inline-block bg-brand hover:bg-brand-dark text-white font-semibold px-8 py-4 text-sm uppercase tracking-wider transition-colors"
            >
              See Recipe
            </a>
          </div>
        </div>
      </div>

      {/* Navigation dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-3">
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

      {/* Prev/Next arrows */}
      <button
        onClick={() => setCurrent((c) => (c - 1 + slides.length) % slides.length)}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 text-white/70 hover:text-white text-3xl"
        aria-label="Previous slide"
      >
        &#8249;
      </button>
      <button
        onClick={() => setCurrent((c) => (c + 1) % slides.length)}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 text-white/70 hover:text-white text-3xl"
        aria-label="Next slide"
      >
        &#8250;
      </button>
    </section>
  )
}
