import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import {
  heroExploreLabel,
  heroSlides,
  nextSlideLabel,
  previousSlideLabel,
  slideLabelPrefix,
} from '../data'

export function HeroSlider() {
  const [current, setCurrent] = useState(0)

  const goToNext = () => setCurrent((value) => (value + 1) % heroSlides.length)
  const goToPrevious = () =>
    setCurrent((value) => (value - 1 + heroSlides.length) % heroSlides.length)

  return (
    <section
      id="home"
      aria-label="Featured destinations"
      className="relative h-[650px] w-full overflow-hidden"
    >
      {heroSlides.map((slide, index) =>
        index === current ? (
          <div key={slide.name} className="absolute inset-0">
            <img src={slide.image} alt={slide.name} className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-navy/40" aria-hidden="true" />
            <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
              <h1 className="font-cursive text-6xl leading-tight text-white md:text-[94px] md:leading-none">
                {slide.name}
              </h1>
              <p className="mt-8 mb-10 max-w-xl font-sans text-xl text-white">{slide.text}</p>
              <a
                href="#destination"
                className="rounded-md bg-teal px-10 py-[18px] font-sans text-base font-medium capitalize text-white transition-colors hover:bg-coral"
              >
                {heroExploreLabel}
              </a>
            </div>
          </div>
        ) : null,
      )}

      <button
        type="button"
        aria-label={previousSlideLabel}
        onClick={goToPrevious}
        className="absolute left-6 top-1/2 flex h-[50px] w-[50px] -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#1F1F1F] transition-colors hover:bg-swiper-accent hover:text-white"
      >
        <ChevronLeft className="h-6 w-6" aria-hidden="true" />
      </button>
      <button
        type="button"
        aria-label={nextSlideLabel}
        onClick={goToNext}
        className="absolute right-6 top-1/2 flex h-[50px] w-[50px] -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#1F1F1F] transition-colors hover:bg-swiper-accent hover:text-white"
      >
        <ChevronRight className="h-6 w-6" aria-hidden="true" />
      </button>

      <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-2">
        {heroSlides.map((slide, index) => (
          <button
            key={slide.name}
            type="button"
            aria-label={`${slideLabelPrefix} ${index + 1}`}
            onClick={() => setCurrent(index)}
            className={cn(
              'h-3 w-3 rounded-full',
              index === current ? 'bg-swiper-accent' : 'bg-white/60',
            )}
          />
        ))}
      </div>
    </section>
  )
}
