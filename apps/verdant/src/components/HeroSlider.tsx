import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { heroSlides } from '../data'
import { slideIndex } from '../carousel'

/** Full-width hero carousel: two photo slides with a dark overlay and a
 *  centered white uppercase headline; prev/next arrows and dots. */
export function HeroSlider() {
  const [index, setIndex] = useState(0)

  const go = (delta: number) => setIndex((current) => slideIndex(current, heroSlides.length, delta))

  const slide = heroSlides[index]!

  return (
    <section
      aria-label="Hero slides"
      className="relative min-h-[600px] w-full bg-cover bg-center lg:min-h-[80vh]"
      style={{ backgroundImage: `url(${slide.image})` }}
    >
      <div className="overlay absolute inset-0 bg-black/20" aria-hidden="true" />
      <div className="relative z-10 flex min-h-[600px] items-center justify-center px-4 lg:min-h-[80vh]">
        <h1 className="font-heading text-center text-4xl font-bold uppercase text-white sm:text-5xl lg:text-6xl">
          {slide.headline}
        </h1>
      </div>

      <button
        type="button"
        onClick={() => go(-1)}
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center bg-black/30 text-white transition-colors hover:bg-black/50"
      >
        <ChevronLeft className="h-7 w-7" aria-hidden="true" />
      </button>
      <button
        type="button"
        onClick={() => go(1)}
        aria-label="Next slide"
        className="absolute right-4 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center bg-black/30 text-white transition-colors hover:bg-black/50"
      >
        <ChevronRight className="h-7 w-7" aria-hidden="true" />
      </button>

      <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {heroSlides.map((item, dotIndex) => (
          <button
            key={item.headline}
            type="button"
            onClick={() => setIndex(dotIndex)}
            aria-label={`Show slide ${dotIndex + 1}`}
            aria-current={dotIndex === index}
            className={cn(
              'h-2.5 w-2.5 transition-colors',
              dotIndex === index ? 'bg-white' : 'bg-white/50 hover:bg-white/80',
            )}
          />
        ))}
      </div>
    </section>
  )
}
