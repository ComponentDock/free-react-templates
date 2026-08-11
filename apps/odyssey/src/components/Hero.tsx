import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import {
  heroHeadline,
  heroSlideLabel,
  heroSlides,
  nextSlideLabel,
  prevSlideLabel,
  slideIndicatorLabel,
} from '../data'
import { cn } from '@free-react-templates/ui'

export function Hero() {
  const [active, setActive] = useState(0)

  const goTo = (index: number) => {
    setActive((index + heroSlides.length) % heroSlides.length)
  }

  return (
    <section aria-label={heroSlideLabel} className="relative h-[500px] w-full overflow-hidden">
      {heroSlides.map((slide, index) => (
        <div
          key={slide.seed}
          aria-hidden={index !== active}
          className={cn(
            'absolute inset-0 transition-opacity duration-700',
            index === active ? 'opacity-100' : 'opacity-0',
          )}
        >
          <img
            src={`https://picsum.photos/seed/${slide.seed}/1600/800`}
            alt={slide.alt}
            className="h-full w-full object-cover"
          />
        </div>
      ))}
      {/* Purple gradient overlay, matching the original
          linear-gradient(0deg, rgba(128,80,250,0.8), rgba(128,80,250,0.8)). */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-brand/80 to-brand/80"
      />
      <div className="absolute inset-0 flex items-center justify-center px-4">
        <h1 className="text-center font-serif text-4xl font-light leading-tight text-white md:text-6xl md:leading-[1.2]">
          {heroHeadline[0]}
          <br />
          {heroHeadline[1]}
        </h1>
      </div>

      <div className="absolute inset-y-0 right-4 flex flex-col items-center justify-center gap-3 md:right-8">
        <button
          type="button"
          aria-label={prevSlideLabel}
          onClick={() => goTo(active - 1)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/60 text-white transition-colors hover:bg-white/20"
        >
          <ChevronLeft aria-hidden="true" className="h-5 w-5" />
        </button>
        <button
          type="button"
          aria-label={nextSlideLabel}
          onClick={() => goTo(active + 1)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/60 text-white transition-colors hover:bg-white/20"
        >
          <ChevronRight aria-hidden="true" className="h-5 w-5" />
        </button>
      </div>

      <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-3">
        {heroSlides.map((slide, index) => (
          <button
            key={slide.seed}
            type="button"
            aria-label={slideIndicatorLabel(index)}
            aria-current={index === active ? 'true' : undefined}
            onClick={() => goTo(index)}
            className={cn(
              'h-2.5 w-2.5 rounded-full transition-colors',
              index === active ? 'bg-white' : 'bg-white/40 hover:bg-white/70',
            )}
          />
        ))}
      </div>
    </section>
  )
}
