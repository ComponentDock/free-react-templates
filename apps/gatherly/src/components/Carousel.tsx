import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { ButtonLink, cn } from '@free-react-templates/ui'
import { hero } from '../data'

/** Two-slide hero carousel (source .home-slider): each slide is a split row
 *  — headline + date + actions on the left, photo on the right. Exactly one
 *  slide is active at a time; prev/next arrows and dots switch between them.
 *  Both slides stay in the DOM. */
export function Carousel() {
  const [index, setIndex] = useState(0)
  const count = hero.slides.length

  const goTo = (next: number) => {
    setIndex(((next % count) + count) % count)
  }

  return (
    <div data-testid="carousel" className="relative min-h-screen w-full">
      {hero.slides.map((slide, slideIndex) => (
        <div
          key={slide.heading}
          aria-hidden={slideIndex !== index}
          className={cn(
            'absolute inset-0 transition-opacity duration-700',
            slideIndex === index ? 'opacity-100' : 'pointer-events-none opacity-0',
          )}
        >
          <div className="mx-auto grid min-h-screen max-w-[1240px] items-center px-4 lg:grid-cols-2">
            <div className="py-24 lg:py-0">
              <h1 className="text-4xl font-black uppercase leading-tight text-white md:text-6xl">
                {slide.heading}
              </h1>
              <h2 className="mt-4 text-sm font-semibold uppercase tracking-[0.15em] text-accent md:text-base">
                {hero.dateLine}
              </h2>
              <div className="mt-8 flex flex-wrap gap-4">
                <ButtonLink
                  href="#pricing-section"
                  className="rounded-[2px] bg-brand px-4 py-3 text-xs font-semibold uppercase tracking-[0.1em] text-white"
                >
                  {hero.getTicketLabel}
                </ButtonLink>
                <ButtonLink
                  href="#about-section"
                  className="rounded-[2px] bg-white px-4 py-3 text-xs font-semibold uppercase tracking-[0.1em] text-ink hover:bg-white hover:text-brand"
                >
                  {hero.watchVideoLabel}
                </ButtonLink>
              </div>
            </div>
            <div className="hidden lg:block">
              <img
                src={slide.image}
                alt=""
                className="h-[420px] w-full rounded object-cover shadow-2xl"
              />
            </div>
          </div>
        </div>
      ))}

      <button
        type="button"
        aria-label="Previous slide"
        onClick={() => goTo(index - 1)}
        className="absolute left-4 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur transition-colors hover:bg-brand"
      >
        <ChevronLeft className="h-5 w-5" aria-hidden="true" />
      </button>
      <button
        type="button"
        aria-label="Next slide"
        onClick={() => goTo(index + 1)}
        className="absolute right-4 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur transition-colors hover:bg-brand"
      >
        <ChevronRight className="h-5 w-5" aria-hidden="true" />
      </button>

      <div className="absolute bottom-24 left-1/2 z-10 flex -translate-x-1/2 gap-2 lg:bottom-8">
        {hero.slides.map((slide, dotIndex) => (
          <button
            key={slide.heading}
            type="button"
            aria-label={`Go to slide ${dotIndex + 1}`}
            aria-current={dotIndex === index ? 'true' : undefined}
            onClick={() => goTo(dotIndex)}
            className={cn(
              'h-2.5 rounded-full transition-all',
              dotIndex === index ? 'w-8 bg-accent' : 'w-2.5 bg-white/40 hover:bg-white/70',
            )}
          />
        ))}
      </div>
    </div>
  )
}
