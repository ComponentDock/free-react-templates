import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const slides = [
  {
    image: 'https://picsum.photos/seed/peakform-hero1/1920/800',
    headline: 'Get Your Body In Peak Shape',
  },
  {
    image: 'https://picsum.photos/seed/peakform-hero2/1920/800',
    headline: 'Train Like A Champion',
  },
  {
    image: 'https://picsum.photos/seed/peakform-hero3/1920/800',
    headline: 'Push Your Limits Every Day',
  },
]

export function Hero() {
  const [current, setCurrent] = useState(0)

  const go = (dir: number) => {
    setCurrent((prev) => (prev + dir + slides.length) % slides.length)
  }

  return (
    <section className="relative h-[600px] md:h-[700px] overflow-hidden" aria-label="Hero">
      {slides.map((slide, i) => (
        <div
          key={i}
          className={cn(
            'absolute inset-0 transition-opacity duration-700',
            i === current ? 'opacity-100' : 'opacity-0 pointer-events-none',
          )}
        >
          <img src={slide.image} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-black/50" />
        </div>
      ))}

      <div className="relative z-10 flex h-full items-center justify-center text-center text-white px-4">
        <div>
          <h1 className="text-4xl md:text-6xl font-extrabold uppercase mb-6 leading-tight">
            {slides[current]?.headline}
          </h1>
          <button
            className="rounded-full bg-brand px-8 py-3 text-sm font-bold uppercase tracking-wider text-white hover:bg-primary-600 transition-colors"
            aria-label="Get Started"
          >
            Get Started
          </button>
        </div>
      </div>

      {/* Navigation arrows */}
      <button
        onClick={() => go(-1)}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-black/60 text-white rounded-full p-2 transition-colors"
        aria-label="Previous"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={() => go(1)}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-black/60 text-white rounded-full p-2 transition-colors"
        aria-label="Next"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Slide indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={cn(
              'h-3 w-3 rounded-full transition-colors',
              i === current ? 'bg-brand' : 'bg-white/50',
            )}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
