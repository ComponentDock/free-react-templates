import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { Chip } from './Chip'
import { heroSlides, imgUrl, nextSlideLabel, previousSlideLabel } from '../data'

export function HeroSlider() {
  const [index, setIndex] = useState(0)

  const showPrevious = () => setIndex((i) => (i - 1 + heroSlides.length) % heroSlides.length)
  const showNext = () => setIndex((i) => (i + 1) % heroSlides.length)

  return (
    <section id="home" className="relative" aria-label="Featured stories">
      {heroSlides.map((slide, i) => (
        <div
          key={slide.seed}
          className={cn(
            'relative transition-opacity duration-700',
            i === index ? 'block' : 'hidden',
          )}
        >
          <img
            src={imgUrl(slide.seed, 1600, 800)}
            alt=""
            className="h-[420px] w-full object-cover sm:h-[560px]"
          />
          <div aria-hidden="true" className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-0 flex items-center">
            <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
              <div className="max-w-xl">
                <Chip label={slide.chipLabel} category={slide.category} />
                <h2 className="mt-4 font-serif text-3xl font-normal leading-tight text-white sm:text-5xl">
                  {slide.title}
                </h2>
                <p className="mt-4 flex items-center gap-2 text-[13px] text-white">
                  <span className="flex h-[30px] w-[30px] items-center justify-center overflow-hidden rounded-full border border-white/40">
                    <img
                      src={imgUrl(`${slide.seed}-avatar`, 60, 60)}
                      alt=""
                      className="h-full w-full object-cover"
                    />
                  </span>
                  {slide.author} &ndash; {slide.date}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}

      <button
        type="button"
        onClick={showPrevious}
        aria-label={previousSlideLabel}
        className="absolute left-2.5 top-1/2 z-10 flex h-[50px] w-[50px] -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-white transition-colors hover:bg-black"
      >
        <ChevronLeft className="h-6 w-6" aria-hidden="true" />
      </button>
      <button
        type="button"
        onClick={showNext}
        aria-label={nextSlideLabel}
        className="absolute right-2.5 top-1/2 z-10 flex h-[50px] w-[50px] -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-white transition-colors hover:bg-black"
      >
        <ChevronRight className="h-6 w-6" aria-hidden="true" />
      </button>
    </section>
  )
}
