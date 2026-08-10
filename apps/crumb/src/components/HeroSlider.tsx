import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { heroSlides, imgUrl, nextSlideLabel, previousSlideLabel } from '../data'

export function HeroSlider() {
  const [index, setIndex] = useState(0)

  const showPrevious = () => setIndex((i) => (i - 1 + heroSlides.length) % heroSlides.length)
  const showNext = () => setIndex((i) => (i + 1) % heroSlides.length)

  const slide = heroSlides[index]!

  return (
    <section
      aria-label="Featured story"
      className="relative h-[400px] overflow-hidden md:h-[480px]"
    >
      {heroSlides.map((item, i) => (
        <img
          key={item.seed}
          src={imgUrl(item.seed, 1600, 480)}
          alt=""
          className={cn(
            'absolute inset-0 h-full w-full object-cover transition-opacity duration-700',
            i === index ? 'opacity-100' : 'opacity-0',
          )}
        />
      ))}
      <div
        className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"
        aria-hidden="true"
      />
      <div className="absolute inset-x-0 bottom-0 px-4 pb-10 sm:px-8">
        <p className="text-[13px] font-medium uppercase tracking-[2px] text-white/90">
          {`${slide.date} / ${slide.category}`}
        </p>
        <h2 className="mt-2 max-w-2xl font-serif text-3xl font-light leading-snug text-white transition-colors hover:text-primary md:text-4xl">
          {slide.title}
        </h2>
      </div>

      <button
        type="button"
        onClick={showPrevious}
        aria-label={previousSlideLabel}
        className="absolute left-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center bg-white/30 text-white backdrop-blur-sm transition-colors hover:bg-white/60 hover:text-ink"
      >
        <ChevronLeft className="h-5 w-5" aria-hidden="true" />
      </button>
      <button
        type="button"
        onClick={showNext}
        aria-label={nextSlideLabel}
        className="absolute right-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center bg-white/30 text-white backdrop-blur-sm transition-colors hover:bg-white/60 hover:text-ink"
      >
        <ChevronRight className="h-5 w-5" aria-hidden="true" />
      </button>
    </section>
  )
}
