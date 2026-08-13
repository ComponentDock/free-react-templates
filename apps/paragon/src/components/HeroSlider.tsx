import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { ButtonLink, cn } from '@free-react-templates/ui'
import { HERO_CTA, HERO_INTERVAL_MS, HERO_SLIDES } from '../data'

/* div.owl-carousel.owl-1 — full-width hero photo slider (min-height 600px).
   The source runs an Owl carousel of 3 interior shots with dots (inactive
   #fff, active #207561), prev/next and autoplay; the `.overlay:before` is a
   10% black full-cover overlay, kept here as bg-black/10 for text
   legibility. Centered white 3rem headline (brand name in a green span on
   slide 1), subtext and a square green "Get A Quote" button. */
export function HeroSlider() {
  const [index, setIndex] = useState(0)
  const slideCount = HERO_SLIDES.length

  useEffect(() => {
    const timer = setInterval(
      () => setIndex((current) => (current + 1) % slideCount),
      HERO_INTERVAL_MS,
    )
    return () => clearInterval(timer)
  }, [slideCount])

  const goTo = (next: number) => setIndex((next + slideCount) % slideCount)

  const slide = HERO_SLIDES[index]!

  return (
    <section
      id="home"
      aria-label="Hero"
      className="relative min-h-[600px] overflow-hidden bg-black"
    >
      <img
        src={slide.image}
        alt={slide.alt}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/10" aria-hidden="true" />

      <div className="relative flex min-h-[600px] items-center justify-center px-4 text-center">
        <div className="max-w-3xl">
          <h1 className="font-sans text-3xl font-bold text-white md:text-5xl">
            {slide.headline}
            {slide.accent && <span className="text-brand">{slide.accent}</span>}
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-white/80">
            {slide.lead}
          </p>
          <ButtonLink
            href="#contact"
            className="mt-8 rounded-none bg-brand px-4 py-2 text-[15px] font-bold text-white hover:bg-brand-dark"
          >
            {HERO_CTA}
          </ButtonLink>
        </div>
      </div>

      {/* Prev / Next — owl nav controls. */}
      <button
        type="button"
        aria-label="Previous slide"
        onClick={() => goTo(index - 1)}
        className="absolute top-1/2 left-4 -translate-y-1/2 cursor-pointer rounded-full bg-white/20 p-2 text-white backdrop-blur transition-colors hover:bg-white/40"
      >
        <ChevronLeft aria-hidden="true" className="h-5 w-5" />
      </button>
      <button
        type="button"
        aria-label="Next slide"
        onClick={() => goTo(index + 1)}
        className="absolute top-1/2 right-4 -translate-y-1/2 cursor-pointer rounded-full bg-white/20 p-2 text-white backdrop-blur transition-colors hover:bg-white/40"
      >
        <ChevronRight aria-hidden="true" className="h-5 w-5" />
      </button>

      {/* Dots — bottom 50px, inactive white, active green. */}
      <div className="absolute right-0 bottom-12 left-0 flex justify-center gap-2">
        {HERO_SLIDES.map((item, i) => (
          <button
            key={item.headline}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === index ? 'true' : undefined}
            onClick={() => goTo(i)}
            className={cn(
              'h-2.5 w-2.5 cursor-pointer rounded-full transition-colors',
              i === index ? 'bg-brand' : 'bg-white/60 hover:bg-white',
            )}
          />
        ))}
      </div>
    </section>
  )
}
