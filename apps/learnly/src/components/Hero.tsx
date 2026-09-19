import { useState, useEffect, useCallback } from 'react'

const SLIDES = [
  { heading: 'Learnly University', image: 'https://picsum.photos/seed/learnly-hero1/1600/900' },
  { heading: 'You Can Learn Anything', image: 'https://picsum.photos/seed/learnly-hero2/1600/900' },
]

export function Hero() {
  const [current, setCurrent] = useState(0)

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % SLIDES.length)
  }, [])

  useEffect(() => {
    const id = setInterval(next, 5000)
    return () => clearInterval(id)
  }, [next])

  return (
    <section className="relative h-[500px] overflow-hidden" aria-label="Hero carousel">
      {SLIDES.map((slide, i) => (
        <div
          key={slide.heading}
          className={`absolute inset-0 transition-opacity duration-700 ${
            i === current ? 'z-10 opacity-100' : 'z-0 opacity-0'
          }`}
        >
          <img src={slide.image} alt="" className="h-full w-full object-cover" aria-hidden="true" />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-center text-4xl font-bold text-white md:text-6xl">
              {slide.heading}
            </h1>
          </div>
        </div>
      ))}

      {/* Slide indicators */}
      <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {SLIDES.map((slide, i) => (
          <button
            key={slide.heading}
            type="button"
            className={`h-3 w-3 rounded-full transition-colors ${
              i === current ? 'bg-brand' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setCurrent(i)}
          />
        ))}
      </div>
    </section>
  )
}
