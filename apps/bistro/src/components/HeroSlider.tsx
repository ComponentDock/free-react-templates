import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'
import { HERO_SLIDES } from '../data'

const SLIDE_INTERVAL_MS = 6000

/**
 * HeroSlider — full-width photo-backdrop hero with 2 rotating slides (source
 * `.slider-area` owl-carousel): orange kicker + display headline + paragraph +
 * solid orange Reservation CTA. Auto-rotates every 6s, pauses on hover,
 * prev/next arrows + dots (all keyboard accessible).
 */
export function HeroSlider() {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused) return
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % HERO_SLIDES.length)
    }, SLIDE_INTERVAL_MS)
    return () => window.clearInterval(timer)
  }, [paused])

  const slide = HERO_SLIDES[active]!
  const goTo = (index: number) => setActive(index)

  return (
    <section
      id="home"
      aria-label="Welcome"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      className="relative min-h-[600px] overflow-hidden lg:min-h-[1080px]"
    >
      <img
        src="https://picsum.photos/seed/bistro-hero/1920/1080"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/45" aria-hidden="true" />

      <div className="relative z-10 mx-auto flex min-h-[600px] max-w-6xl items-center px-4 py-24 lg:min-h-[1080px]">
        <div className="max-w-2xl text-white" aria-live="polite">
          <span className="text-lg font-medium text-brand">{slide.kicker}</span>
          <h1 className="mt-4 font-display text-4xl font-bold leading-tight lg:text-[87px] lg:leading-[1.1]">
            {slide.title}
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/80">{slide.paragraph}</p>
          <ButtonLink
            href={slide.cta.href}
            className="mt-8 rounded-md bg-brand px-10 py-4 text-base hover:bg-brand-dark"
          >
            {slide.cta.label}
          </ButtonLink>
        </div>
      </div>

      <button
        type="button"
        aria-label="Previous slide"
        onClick={() => goTo((active - 1 + HERO_SLIDES.length) % HERO_SLIDES.length)}
        className="absolute left-4 top-1/2 z-20 hidden -translate-y-1/2 rounded-full bg-white/20 p-3 text-white backdrop-blur transition-colors hover:bg-white/40 lg:block"
      >
        <ChevronLeft className="h-6 w-6" aria-hidden="true" />
      </button>
      <button
        type="button"
        aria-label="Next slide"
        onClick={() => goTo((active + 1) % HERO_SLIDES.length)}
        className="absolute right-4 top-1/2 z-20 hidden -translate-y-1/2 rounded-full bg-white/20 p-3 text-white backdrop-blur transition-colors hover:bg-white/40 lg:block"
      >
        <ChevronRight className="h-6 w-6" aria-hidden="true" />
      </button>

      <div
        className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-3"
        role="tablist"
        aria-label="Slides"
      >
        {HERO_SLIDES.map((item, index) => (
          <button
            key={item.kicker}
            type="button"
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === active}
            onClick={() => goTo(index)}
            className={`h-3 w-3 rounded-full transition-colors ${
              index === active ? 'bg-brand' : 'bg-white/50 hover:bg-white/80'
            }`}
          />
        ))}
      </div>
    </section>
  )
}
