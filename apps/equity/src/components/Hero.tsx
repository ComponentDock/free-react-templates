import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { heroSlides } from '../data'

/** Full-viewport hero carousel (reference `.site-section-cover` owl slider):
 *  photo background with a dark overlay, a two-line headline, subtext, and a
 *  white-outline "Get in touch" CTA. Prev/next arrows advance the slides. */
export function Hero() {
  const [index, setIndex] = useState(0)
  const slide = heroSlides[index]!
  const total = heroSlides.length

  const goTo = (next: number) => setIndex((next + total) % total)

  return (
    <section
      id="home"
      aria-label="Hero carousel"
      className="relative flex min-h-[700px] items-center overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${slide.image})` }}
    >
      <div className="absolute inset-0 bg-[rgba(52,58,64,0.3)]" aria-hidden="true" />
      <div className="relative mx-auto w-full max-w-7xl px-4 py-28 lg:px-8">
        <p className="mb-4 text-sm font-bold tracking-[0.2em] text-white/80 uppercase">
          {slide.eyebrow}
        </p>
        <h1 className="max-w-3xl font-heading text-5xl leading-none font-light text-white lg:text-[4.5rem]">
          {slide.headline}
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">{slide.text}</p>
        <a
          href="#contact"
          className="mt-10 inline-flex items-center justify-center border-2 border-white bg-transparent px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-black"
        >
          Get in touch
        </a>
      </div>

      <button
        type="button"
        onClick={() => goTo(index - 1)}
        aria-label="Previous slide"
        className="absolute left-5 top-1/2 hidden h-14 w-14 -translate-y-1/2 items-center justify-center border border-white/40 text-white transition-opacity hover:opacity-100 sm:flex lg:left-10"
      >
        <ChevronLeft className="h-8 w-8" aria-hidden="true" />
      </button>
      <button
        type="button"
        onClick={() => goTo(index + 1)}
        aria-label="Next slide"
        className="absolute right-5 top-1/2 hidden h-14 w-14 -translate-y-1/2 items-center justify-center border border-white/40 text-white transition-opacity hover:opacity-100 sm:flex lg:right-10"
      >
        <ChevronRight className="h-8 w-8" aria-hidden="true" />
      </button>

      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 gap-2" aria-hidden="true">
        {heroSlides.map((_, dot) => (
          <span
            key={dot}
            className={cn(
              'h-2.5 w-2.5 rounded-full transition-colors',
              dot === index ? 'bg-primary-600' : 'bg-white/50',
            )}
          />
        ))}
      </div>
    </section>
  )
}
