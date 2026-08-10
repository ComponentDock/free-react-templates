import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { heroSlides, heroStickers, imgUrl, nextSlideLabel, previousSlideLabel } from '../data'

const stickerClasses = {
  pink: 'bg-primary rotate-[4deg]',
  yellow: 'bg-secondary',
  lime: 'bg-accent',
} as const

export function HeroSlider() {
  const [index, setIndex] = useState(0)

  const showPrevious = () => setIndex((i) => (i - 1 + heroSlides.length) % heroSlides.length)
  const showNext = () => setIndex((i) => (i + 1) % heroSlides.length)

  return (
    <section id="home" className="relative h-[694px] overflow-hidden" aria-label="Featured recipes">
      {heroSlides.map((seed, i) => (
        <img
          key={seed}
          src={imgUrl(seed, 1600, 694)}
          alt=""
          className={cn(
            'absolute inset-0 h-full w-full object-cover transition-opacity duration-700',
            i === index ? 'opacity-100' : 'opacity-0',
          )}
        />
      ))}

      {/* Sticker-style headline boxes, matching the original hs-title layers */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-1 px-4 text-center">
        {heroStickers.map((sticker) => (
          <h2
            key={sticker.text}
            className={cn(
              'rounded-[5px] px-7 py-2 text-2xl font-bold text-white shadow-[-1px_-5px_20px_rgba(0,0,0,0.3)] md:text-4xl lg:text-5xl',
              stickerClasses[sticker.color],
            )}
          >
            {sticker.text}
          </h2>
        ))}
      </div>

      <button
        type="button"
        onClick={showPrevious}
        aria-label={previousSlideLabel}
        className="absolute left-6 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border-2 border-primary bg-white/80 text-primary transition-colors hover:bg-primary hover:text-white"
      >
        <ChevronLeft className="h-5 w-5" aria-hidden="true" />
      </button>
      <button
        type="button"
        onClick={showNext}
        aria-label={nextSlideLabel}
        className="absolute right-6 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border-2 border-primary bg-white/80 text-primary transition-colors hover:bg-primary hover:text-white"
      >
        <ChevronRight className="h-5 w-5" aria-hidden="true" />
      </button>
    </section>
  )
}
