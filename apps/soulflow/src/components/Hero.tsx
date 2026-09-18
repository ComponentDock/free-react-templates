import { useState, useEffect, useCallback } from 'react'
import { cn } from '@free-react-templates/ui'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const slides = [
  {
    caption: 'Yoga for everybody',
    heading: 'Welcome To Soulflow',
    image: 'https://picsum.photos/seed/soulflow-hero1/1600/900',
  },
  {
    caption: 'Enjoy With Us',
    heading: 'Yoga & Meditation',
    image: 'https://picsum.photos/seed/soulflow-hero2/1600/900',
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
    <section className="relative h-[500px] md:h-[600px] overflow-hidden" aria-label="Hero slider">
      {slides.map((slide, i) => (
        <div
          key={i}
          className={cn(
            'absolute inset-0 transition-opacity duration-700',
            i === current ? 'opacity-100 z-10' : 'opacity-0 z-0',
          )}
        >
          <img src={slide.image} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <p className="uppercase tracking-[0.2em] text-sm mb-3">{slide.caption}</p>
              <h1 className="text-4xl md:text-6xl font-serif font-bold">{slide.heading}</h1>
            </div>
          </div>
        </div>
      ))}

      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 text-white/70 hover:text-white transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-10 h-10" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 text-white/70 hover:text-white transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="w-10 h-10" />
      </button>
    </section>
  )
}
