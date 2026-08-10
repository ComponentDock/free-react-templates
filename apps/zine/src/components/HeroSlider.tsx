import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { heroCategory, heroSlides, heroTitle, imgUrl } from '../data'

export function HeroSlider() {
  const [index, setIndex] = useState(0)
  const count = heroSlides.length
  const next = () => setIndex((i) => (i + 1) % count)
  const prev = () => setIndex((i) => (i - 1 + count) % count)

  return (
    <section
      aria-label="Featured post"
      className="relative h-[70vh] min-h-[480px] overflow-hidden bg-charcoal"
    >
      {heroSlides.map((slide, i) => (
        <article
          key={slide.seed}
          aria-hidden={i !== index}
          className={cn(
            'absolute inset-0 transition-opacity duration-500',
            i === index ? 'opacity-100' : 'opacity-0',
          )}
        >
          <img
            src={imgUrl(slide.seed, 1600, 900)}
            alt={slide.alt}
            className="h-full w-full object-cover"
          />
        </article>
      ))}

      <div className="absolute inset-x-0 bottom-0 z-10">
        <div className="mx-auto max-w-[1170px] px-6 pb-20 lg:px-10">
          <p className="text-[11px] font-medium uppercase tracking-[5px] text-cream">
            {heroCategory}
          </p>
          <h2 className="mt-4 max-w-2xl font-display text-3xl font-bold leading-[40px] text-white lg:text-4xl">
            {heroTitle}
          </h2>
        </div>
      </div>

      <button
        type="button"
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 z-10 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-brand hover:text-charcoal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
      >
        <ChevronLeft className="h-6 w-6" aria-hidden="true" />
      </button>
      <button
        type="button"
        onClick={next}
        aria-label="Next slide"
        className="absolute right-4 top-1/2 z-10 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-brand hover:text-charcoal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
      >
        <ChevronRight className="h-6 w-6" aria-hidden="true" />
      </button>

      <div className="absolute bottom-6 left-6 z-10 flex gap-2.5 lg:left-10">
        {heroSlides.map((slide, i) => (
          <button
            key={slide.seed}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === index}
            className={cn(
              'h-2.5 w-2.5 rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand',
              i === index ? 'bg-brand' : 'bg-white/60 hover:bg-brand',
            )}
          />
        ))}
      </div>
    </section>
  )
}
