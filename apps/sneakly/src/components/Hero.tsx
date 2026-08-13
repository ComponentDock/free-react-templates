import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { slides } from '../data'

/** Full-height hero slider: two slides, each with a photo on the right and
 *  a text block on the left (subheading, 44px weight-300 uppercase
 *  headline, paragraph, sharp gold "Discover Now" button). Below 992px the
 *  photo becomes the slide background with white text over a dark overlay
 *  (reference mobile rule) and the bottom-center arrows hide. */
export function Hero() {
  const [index, setIndex] = useState(0)
  const slide = slides[index]!

  const goTo = (next: number) => {
    setIndex((next + slides.length) % slides.length)
  }

  return (
    <section
      data-testid="hero"
      className="relative flex min-h-screen items-center overflow-hidden bg-white"
    >
      <img
        src={slide.image}
        alt=""
        className="absolute inset-0 h-full w-full object-cover lg:hidden"
      />
      <div className="absolute inset-0 bg-black/50 lg:hidden" aria-hidden="true" />

      <div className="relative mx-auto flex w-full max-w-[1200px] flex-col-reverse items-center px-4 md:px-8 lg:flex-row lg:gap-12">
        <div className="w-full py-24 lg:w-3/5 lg:py-0">
          <span className="text-xs font-semibold uppercase tracking-[4px] text-brand lg:text-black">
            {slide.subheading}
          </span>
          <h1 className="mt-3 mb-4 text-[44px] font-light uppercase leading-[1.3] text-white lg:text-black">
            {slide.headline}
          </h1>
          <p className="mb-6 max-w-md font-normal text-white/80 lg:text-black/80">
            {slide.paragraph}
          </p>
          <a
            href="#products"
            className="inline-block bg-gold px-5 py-2.5 font-semibold uppercase tracking-wide text-white transition-colors hover:bg-brand"
          >
            Discover Now
          </a>
        </div>
        <img src={slide.image} alt="" className="hidden w-2/5 object-cover lg:block" />
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 items-center gap-4">
        <button
          type="button"
          aria-label="Previous slide"
          onClick={() => goTo(index - 1)}
          className="hidden h-11 w-11 items-center justify-center rounded-full border border-black/20 text-black transition-colors hover:bg-brand lg:flex"
        >
          <ChevronLeft className="h-5 w-5" aria-hidden="true" />
        </button>
        <div className="flex items-center gap-2">
          {slides.map((item, dotIndex) => (
            <button
              key={item.headline}
              type="button"
              aria-label={`Go to slide ${dotIndex + 1}`}
              aria-current={dotIndex === index}
              onClick={() => setIndex(dotIndex)}
              className={cn(
                'h-2.5 w-2.5 rounded-full transition-colors',
                dotIndex === index ? 'bg-brand' : 'bg-white/60 lg:bg-black/20',
              )}
            />
          ))}
        </div>
        <button
          type="button"
          aria-label="Next slide"
          onClick={() => goTo(index + 1)}
          className="hidden h-11 w-11 items-center justify-center rounded-full border border-black/20 text-black transition-colors hover:bg-brand lg:flex"
        >
          <ChevronRight className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>
    </section>
  )
}
