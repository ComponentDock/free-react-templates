import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import {
  heroAutoplayMs,
  heroEyebrow,
  heroLabel,
  heroReadMoreLabel,
  heroSlides,
  heroTitle,
  nextSlideLabel,
  prevSlideLabel,
  slideIndicatorLabel,
} from '../data'
import { ButtonLink, cn } from '@free-react-templates/ui'

export function Hero() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((index) => (index + 1) % heroSlides.length)
    }, heroAutoplayMs)
    return () => window.clearInterval(timer)
  }, [])

  const goTo = (index: number) => {
    setActive((index + heroSlides.length) % heroSlides.length)
  }

  return (
    <section aria-label={heroLabel} className="group relative h-[850px] w-full overflow-hidden">
      {heroSlides.map((slide, index) => (
        <div
          key={slide.seed}
          aria-hidden={index !== active}
          className={cn(
            'absolute inset-0 transition-opacity duration-700',
            index === active ? 'opacity-100' : 'opacity-0',
          )}
        >
          <img
            src={`https://picsum.photos/seed/${slide.seed}/1920/850`}
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
      ))}
      {/* Dark overlay for white-text readability. */}
      <div className="absolute inset-0 bg-black/30" aria-hidden="true" />
      <div className="absolute inset-0 flex items-center justify-center px-4">
        <div key={heroSlides[active]?.seed} className="max-w-3xl text-center text-white">
          <p className="text-base font-medium uppercase tracking-[0.3em]">{heroEyebrow}</p>
          <h1 className="mt-4 text-5xl font-extrabold leading-tight md:text-[60px]">{heroTitle}</h1>
          <ButtonLink
            href="#"
            className="mt-10 rounded-none bg-gradient-to-r from-brand to-brand-2 px-10 text-sm font-semibold uppercase text-white transition-opacity hover:opacity-90"
          >
            {heroReadMoreLabel}
          </ButtonLink>
        </div>
      </div>

      {/* Owl-style square green arrows, revealed on hover (desktop). */}
      <button
        type="button"
        aria-label={prevSlideLabel}
        onClick={() => goTo(active - 1)}
        className="absolute left-[5%] top-1/2 hidden h-14 w-14 -translate-y-1/2 items-center justify-center bg-gradient-to-r from-brand to-brand-2 text-white opacity-0 transition-opacity hover:bg-footer-dark group-hover:opacity-100 md:flex"
      >
        <ChevronLeft aria-hidden="true" className="h-7 w-7" />
      </button>
      <button
        type="button"
        aria-label={nextSlideLabel}
        onClick={() => goTo(active + 1)}
        className="absolute right-[5%] top-1/2 hidden h-14 w-14 -translate-y-1/2 items-center justify-center bg-gradient-to-r from-brand to-brand-2 text-white opacity-0 transition-opacity hover:bg-footer-dark group-hover:opacity-100 md:flex"
      >
        <ChevronRight aria-hidden="true" className="h-7 w-7" />
      </button>

      {/* Slide indicators. */}
      <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-3">
        {heroSlides.map((slide, index) => (
          <button
            key={slide.seed}
            type="button"
            aria-label={slideIndicatorLabel(index)}
            aria-current={index === active ? 'true' : undefined}
            onClick={() => goTo(index)}
            className={cn(
              'h-3 w-3 rounded-full transition-colors',
              index === active ? 'bg-white' : 'bg-white/40 hover:bg-white/70',
            )}
          />
        ))}
      </div>
    </section>
  )
}
