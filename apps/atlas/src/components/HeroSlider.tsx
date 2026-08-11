import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import {
  goToSlideLabel,
  heroSlides,
  heroSlidesLabel,
  imgUrl,
  nextSlideLabel,
  previousSlideLabel,
} from '../data'

/* Full-width hero photo slider (reference `div.hero-slides.owl-carousel`):
   2 pure-imagery background slides ~600px tall (400px md / 450px lg) under a
   rgba(0,0,0,0.7) overlay, with prev/next arrows and dot indicators. */
export function HeroSlider() {
  const [index, setIndex] = useState(0)
  const slideCount = heroSlides.length

  const previous = () => setIndex((current) => (current - 1 + slideCount) % slideCount)
  const next = () => setIndex((current) => (current + 1) % slideCount)

  return (
    <section
      aria-label={heroSlidesLabel}
      className="relative h-[600px] overflow-hidden md:h-[400px] lg:h-[450px]"
    >
      {heroSlides.map((slide, slideIndex) => (
        <div
          key={slide.seed}
          className={cn(
            'absolute inset-0 bg-cover bg-center transition-opacity duration-500',
            slideIndex === index ? 'opacity-100' : 'opacity-0',
          )}
          style={{ backgroundImage: `url(${imgUrl(slide.seed, 1200, 600)})` }}
        />
      ))}
      <div aria-hidden="true" className="absolute inset-0 bg-black/70" />

      <button
        type="button"
        aria-label={previousSlideLabel}
        onClick={previous}
        className="absolute top-1/2 left-4 -translate-y-1/2 rounded-full bg-black/30 p-2 text-white transition-colors hover:bg-black/50"
      >
        <ChevronLeft className="h-6 w-6" aria-hidden="true" />
      </button>
      <button
        type="button"
        aria-label={nextSlideLabel}
        onClick={next}
        className="absolute top-1/2 right-4 -translate-y-1/2 rounded-full bg-black/30 p-2 text-white transition-colors hover:bg-black/50"
      >
        <ChevronRight className="h-6 w-6" aria-hidden="true" />
      </button>

      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        {heroSlides.map((slide, slideIndex) => (
          <button
            key={slide.seed}
            type="button"
            aria-label={goToSlideLabel(slideIndex + 1)}
            aria-current={slideIndex === index ? 'true' : undefined}
            onClick={() => setIndex(slideIndex)}
            className={cn(
              'h-2.5 w-2.5 rounded-full transition-colors',
              slideIndex === index ? 'bg-brand' : 'bg-white/50 hover:bg-white',
            )}
          />
        ))}
      </div>
    </section>
  )
}
