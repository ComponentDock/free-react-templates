import { useState, useEffect } from 'react'
import { Play } from 'lucide-react'

const slides = [
  {
    image: 'https://picsum.photos/seed/lounge-slide-1/1920/1080',
    heading: 'Welcome to Lounge — your seaside retreat',
  },
  {
    image: 'https://picsum.photos/seed/lounge-slide-2/1920/1080',
    heading: 'Book the perfect accommodations without breaking the bank',
  },
  {
    image: 'https://picsum.photos/seed/lounge-slide-3/1920/1080',
    heading: 'Discover something extraordinary',
  },
]

export function Hero() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {slides.map((slide, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{ opacity: i === current ? 1 : 0 }}
        >
          <img src={slide.image} alt={slide.heading} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-black/40" />
        </div>
      ))}

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <h1 className="max-w-3xl font-heading text-4xl font-bold text-white drop-shadow-lg md:text-6xl">
          {slides[current]!.heading}
        </h1>
        <button className="mt-8 flex items-center gap-2 rounded-full border border-white/40 px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10">
          <Play className="h-4 w-4" />
          Watch Video
        </button>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`h-2 w-2 rounded-full transition-colors ${
              i === current ? 'bg-white' : 'bg-white/40'
            }`}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
