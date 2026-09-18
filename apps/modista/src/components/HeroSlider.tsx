import { useState, useEffect, useCallback } from 'react'

const slides = [
  {
    image: 'https://picsum.photos/seed/modista-hero1/1920/800',
    alt: 'Summer fashion collection',
  },
  {
    image: 'https://picsum.photos/seed/modista-hero2/1920/800',
    alt: 'New arrivals fashion',
  },
  {
    image: 'https://picsum.photos/seed/modista-hero3/1920/800',
    alt: 'Fashion lookbook',
  },
] as const

const INTERVAL = 5000

export function HeroSlider() {
  const [current, setCurrent] = useState(0)

  const goTo = useCallback((index: number) => {
    setCurrent(index)
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, INTERVAL)
    return () => clearInterval(timer)
  }, [])

  return (
    <section
      className="relative h-[400px] w-full overflow-hidden sm:h-[500px] md:h-[600px]"
      aria-label="Hero slider"
    >
      {slides.map((slide, i) => (
        <div
          key={slide.image}
          className={`absolute inset-0 transition-opacity duration-700 ${i === current ? 'opacity-100' : 'opacity-0'}`}
        >
          <img src={slide.image} alt={slide.alt} className="h-full w-full object-cover" />
          {/* Overlay text */}
          <div className="absolute inset-0 flex items-center bg-black/20">
            <div className="ml-auto w-full max-w-[1140px] px-4 text-right sm:pr-12 md:pr-24">
              <h2 className="font-heading text-3xl font-bold text-white drop-shadow-lg sm:text-4xl md:text-5xl">
                Best Summer Collection
              </h2>
              <a
                href="#"
                className="mt-4 inline-block bg-[#d42421] px-8 py-3 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:bg-brand-red"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      ))}

      {/* Dot indicators */}
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        {slides.map((slide, i) => (
          <button
            key={slide.image}
            type="button"
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-3 w-3 rounded-full transition-colors ${
              i === current ? 'bg-brand-red' : 'bg-white/60'
            }`}
          />
        ))}
      </div>
    </section>
  )
}
