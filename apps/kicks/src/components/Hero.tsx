import { useEffect, useState, useCallback } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn, ButtonLink } from '@free-react-templates/ui'

interface Slide {
  eyebrow: string
  heading: string
  image: string
}

const slides: Slide[] = [
  {
    eyebrow: "Men's / Shoes / Collection",
    heading: 'New trending shoes',
    image: 'https://picsum.photos/seed/kicks-hero1/1600/900',
  },
  {
    eyebrow: 'Huge / Sale / 50% Off',
    heading: 'Big sale sandals',
    image: 'https://picsum.photos/seed/kicks-hero2/1600/900',
  },
  {
    eyebrow: 'New / Arrival / up to 30% off',
    heading: 'New stylish shoes for men',
    image: 'https://picsum.photos/seed/kicks-hero3/1600/900',
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
    const timer = setInterval(next, 6000)
    return () => clearInterval(timer)
  }, [next])

  const slide = slides[current]!

  return (
    <section className="relative h-[500px] md:h-[600px] overflow-hidden" aria-label="Hero slider">
      {slides.map((s, i) => (
        <div
          key={s.eyebrow}
          className={cn(
            'absolute inset-0 transition-opacity duration-700',
            i === current ? 'opacity-100 z-10' : 'opacity-0 z-0',
          )}
          aria-hidden={i !== current}
        >
          <img src={s.image} alt="" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/50" />
        </div>
      ))}

      <div className="relative z-20 h-full flex items-center">
        <div className="mx-auto max-w-7xl px-5 w-full">
          <div className="max-w-lg">
            <p className="text-white/80 uppercase text-sm tracking-widest mb-2">{slide.eyebrow}</p>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-4 leading-tight">
              {slide.heading}
            </h2>
            <ButtonLink
              href="#shop"
              variant="primary"
              size="md"
              className="rounded-sm bg-brand-500 hover:bg-brand-600"
            >
              Shop Collection
            </ButtonLink>
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 bg-white/20 hover:bg-white/40 rounded-full text-white transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        type="button"
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 bg-white/20 hover:bg-white/40 rounded-full text-white transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={cn(
              'h-2.5 rounded-full transition-all',
              i === current ? 'bg-white w-8' : 'bg-white/50 w-2.5',
            )}
          />
        ))}
      </div>
    </section>
  )
}
