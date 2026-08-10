import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { heroLabel, heroSlides, imgUrl, nextSlideLabel, previousSlideLabel } from '../data'

export function HeroSlider() {
  const [index, setIndex] = useState(0)

  const showPrevious = () => setIndex((i) => (i - 1 + heroSlides.length) % heroSlides.length)
  const showNext = () => setIndex((i) => (i + 1) % heroSlides.length)

  const slide = heroSlides[index]!

  return (
    <section aria-label={heroLabel} className="relative h-[480px] overflow-hidden md:h-[633px]">
      {heroSlides.map((item, i) => (
        <img
          key={item.seed}
          src={imgUrl(item.seed, 1600, 633)}
          alt=""
          className={cn(
            'absolute inset-0 h-full w-full object-cover transition-opacity duration-700',
            i === index ? 'opacity-100' : 'opacity-0',
          )}
        />
      ))}
      <div
        className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"
        aria-hidden="true"
      />

      <div className="absolute inset-x-0 bottom-0 px-6 pb-12 sm:px-10">
        <div className="flex items-start gap-6">
          <div className="hidden h-[110px] w-[110px] shrink-0 flex-col items-center justify-center bg-ink sm:flex">
            <span className="font-serif text-[42px] font-bold leading-none text-white">
              {slide.day}
            </span>
            <p className="mt-1 text-2xl font-normal text-white/80">{slide.month}</p>
          </div>
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[2px] text-primary">
              {slide.category}
            </p>
            <h2 className="mt-2 font-serif text-3xl font-bold leading-tight text-white md:text-5xl">
              {slide.title}
            </h2>
            <p className="mt-3 text-sm text-white/80">{slide.byline}</p>
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={showPrevious}
        aria-label={previousSlideLabel}
        className="absolute left-6 top-1/2 z-10 flex h-[50px] w-[50px] -translate-y-1/2 items-center justify-center rounded-full bg-black/30 text-white transition-colors hover:bg-primary"
      >
        <ChevronLeft className="h-[30px] w-[30px]" aria-hidden="true" />
      </button>
      <button
        type="button"
        onClick={showNext}
        aria-label={nextSlideLabel}
        className="absolute right-6 top-1/2 z-10 flex h-[50px] w-[50px] -translate-y-1/2 items-center justify-center rounded-full bg-black/30 text-white transition-colors hover:bg-primary"
      >
        <ChevronRight className="h-[30px] w-[30px]" aria-hidden="true" />
      </button>
    </section>
  )
}
