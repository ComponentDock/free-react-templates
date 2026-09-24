import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { heroSlides, imgUrl, nextSlideLabel, previousSlideLabel } from '../data'
import { CategoryBadge } from './CategoryBadge'

export function HeroCarousel() {
  const [current, setCurrent] = useState(0)

  const slide = heroSlides[current]!

  const goNext = () => setCurrent((c) => (c + 1) % heroSlides.length)
  const goPrev = () => setCurrent((c) => (c - 1 + heroSlides.length) % heroSlides.length)

  return (
    <section aria-label="Hero carousel" className="relative">
      <div className="relative h-[500px] overflow-hidden md:h-[600px]">
        <img
          src={imgUrl(slide.seed, 1200, 600)}
          alt={slide.title}
          className="h-full w-full object-cover animate-fade-in"
        />

        {/* White overlay card at bottom */}
        <div className="absolute bottom-6 left-6 right-6 rounded-lg bg-white p-6 shadow-lg md:left-12 md:right-auto md:max-w-xl md:p-8">
          <CategoryBadge category={slide.category} color={slide.categoryColor} className="mb-3" />
          <h2 className="mb-2 text-xl font-bold leading-tight text-heading md:text-2xl">
            {slide.title}
          </h2>
          <p className="text-sm text-meta">
            {slide.date} &bull; By {slide.author}
          </p>
        </div>

        {/* Navigation arrows */}
        <button
          type="button"
          onClick={goPrev}
          aria-label={previousSlideLabel}
          className="absolute left-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-heading shadow-md transition-colors hover:bg-white"
        >
          <ChevronLeft className="h-5 w-5" aria-hidden="true" />
        </button>
        <button
          type="button"
          onClick={goNext}
          aria-label={nextSlideLabel}
          className="absolute right-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-heading shadow-md transition-colors hover:bg-white"
        >
          <ChevronRight className="h-5 w-5" aria-hidden="true" />
        </button>

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2">
          {heroSlides.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setCurrent(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={cn(
                'h-2.5 w-2.5 rounded-full transition-colors',
                idx === current ? 'bg-accent' : 'bg-white/60',
              )}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
