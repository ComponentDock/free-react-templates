import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { HERO_SLIDES } from '../data'

export function Hero() {
  const [index, setIndex] = useState(0)

  const prev = () => setIndex((i) => (i - 1 + HERO_SLIDES.length) % HERO_SLIDES.length)
  const next = () => setIndex((i) => (i + 1) % HERO_SLIDES.length)

  return (
    <section
      id="home"
      aria-label="Welcome"
      className="relative h-screen min-h-[600px] overflow-hidden"
    >
      {HERO_SLIDES.map((slide, i) => (
        <div
          key={slide.headline}
          aria-hidden={i !== index}
          className={cn(
            'absolute inset-0 bg-cover bg-center transition-opacity duration-500',
            i === index ? 'opacity-100' : 'opacity-0',
          )}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="absolute inset-0 bg-black/35" aria-hidden="true" />
          <div className="relative flex h-full items-center justify-center px-6 text-center">
            <h1 className="max-w-4xl text-5xl font-light leading-tight text-white md:text-7xl">
              {slide.headline} <strong className="font-black">{slide.accent}</strong>
              {slide.tail ? ` ${slide.tail}` : ''}
            </h1>
          </div>
        </div>
      ))}

      <button
        type="button"
        aria-label="Previous slide"
        onClick={prev}
        className="absolute left-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/25"
      >
        <ChevronLeft aria-hidden="true" className="h-6 w-6" />
      </button>
      <button
        type="button"
        aria-label="Next slide"
        onClick={next}
        className="absolute right-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/25"
      >
        <ChevronRight aria-hidden="true" className="h-6 w-6" />
      </button>
    </section>
  )
}
