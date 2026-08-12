import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'
import { cn } from '@free-react-templates/ui'
import { BANNER_SLIDES } from '../data'

/* banner — full-bleed 3-slide carousel (script-font headline, tagline,
   EXPLORE CTA) with prev/next arrows that wrap around and clickable dots. */
export function Banner() {
  const [active, setActive] = useState(0)

  const showPrevious = () =>
    setActive((current) => (current - 1 + BANNER_SLIDES.length) % BANNER_SLIDES.length)
  const showNext = () => setActive((current) => (current + 1) % BANNER_SLIDES.length)

  const slide = BANNER_SLIDES[active]!

  return (
    <section className="relative overflow-hidden bg-ink">
      <img
        src={`https://picsum.photos/seed/${slide.seed}/1600/700`}
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-60"
      />
      <div className="relative mx-auto flex min-h-[480px] max-w-7xl flex-col items-center justify-center px-4 py-20 text-center">
        <h1 className="font-script text-5xl text-white sm:text-7xl md:text-8xl">
          {slide.headline}
        </h1>
        <p className="mt-4 max-w-xl text-lg text-white/90">{slide.tagline}</p>
        <ButtonLink
          href="#new-products"
          variant="primary"
          className="mt-8 rounded-full px-10 py-3 text-sm font-semibold uppercase"
        >
          Explore
        </ButtonLink>
      </div>

      <button
        type="button"
        aria-label="Previous slide"
        onClick={showPrevious}
        className="absolute top-1/2 left-4 -translate-y-1/2 cursor-pointer rounded-full bg-white/20 p-2 text-white transition-colors hover:bg-brand"
      >
        <ChevronLeft className="h-6 w-6" aria-hidden="true" />
      </button>
      <button
        type="button"
        aria-label="Next slide"
        onClick={showNext}
        className="absolute top-1/2 right-4 -translate-y-1/2 cursor-pointer rounded-full bg-white/20 p-2 text-white transition-colors hover:bg-brand"
      >
        <ChevronRight className="h-6 w-6" aria-hidden="true" />
      </button>

      <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-3">
        {BANNER_SLIDES.map((item, index) => (
          <button
            key={item.headline}
            type="button"
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === active ? 'true' : undefined}
            onClick={() => setActive(index)}
            className={cn(
              'h-3 w-3 cursor-pointer rounded-full transition-colors',
              index === active ? 'bg-brand' : 'bg-white/50 hover:bg-white',
            )}
          />
        ))}
      </div>
    </section>
  )
}
