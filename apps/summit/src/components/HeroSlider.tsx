import { useState } from 'react'
import { ArrowRight, Calendar, ChevronLeft, ChevronRight, User } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { HERO_SLIDES, PILL } from '../data'

/* Hero recreated from the source's welcome area: a full-viewport slider
   with two photo slides under a dark overlay — slide 1 right-aligned
   ("Science Conference"), slide 2 centered with an event meta row — plus
   circular prev/next arrows, pagination dots and an animated mouse scroll
   indicator that links to the about section. */

export function HeroSlider() {
  const [index, setIndex] = useState(0)
  const slideCount = HERO_SLIDES.length

  const prev = () => setIndex((value) => (value - 1 + slideCount) % slideCount)
  const next = () => setIndex((value) => (value + 1) % slideCount)

  return (
    <section id="home" className="relative h-screen min-h-[560px] w-full overflow-hidden">
      {HERO_SLIDES.map((item, i) => (
        <div
          key={item.headline}
          aria-hidden={i !== index}
          className={cn(
            'absolute inset-0 transition-opacity duration-500',
            i === index ? 'opacity-100' : 'pointer-events-none opacity-0',
          )}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${item.image})` }}
          />
          <div className="absolute inset-0 bg-navy-deep/60" />
          <div className="relative flex h-full items-center">
            <div
              className={cn(
                'mx-auto w-full max-w-7xl px-4 lg:px-8',
                item.align === 'end' ? 'text-right' : 'text-center',
              )}
            >
              {item.eyebrow ? (
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-white/90">
                  {item.eyebrow}
                </p>
              ) : null}
              <h2 className="mt-2 text-4xl font-bold uppercase tracking-wide text-white md:text-6xl">
                {item.headline}
              </h2>
              {item.venue ? (
                <p className="mt-4 text-sm uppercase tracking-[0.2em] text-white/90 md:text-base">
                  {item.venue}
                </p>
              ) : null}
              {item.meta ? (
                <div className="mt-5 flex items-center justify-center gap-6 text-white/90">
                  <span className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" aria-hidden="true" />
                    {item.meta.date}
                  </span>
                  <span className="flex items-center gap-2">
                    <User className="h-4 w-4" aria-hidden="true" />
                    {item.meta.author}
                  </span>
                </div>
              ) : null}
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                {item.buttons.map((button) => (
                  <a key={button.label} href={button.href} className={PILL}>
                    {button.label}
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Prev / next arrows */}
      <button
        type="button"
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 z-10 flex h-[46px] w-[46px] -translate-y-1/2 items-center justify-center rounded-full border-2 border-muted text-white transition-colors hover:bg-white/50 hover:text-black"
      >
        <ChevronLeft className="h-5 w-5" aria-hidden="true" />
      </button>
      <button
        type="button"
        onClick={next}
        aria-label="Next slide"
        className="absolute right-4 top-1/2 z-10 flex h-[46px] w-[46px] -translate-y-1/2 items-center justify-center rounded-full border-2 border-muted text-white transition-colors hover:bg-white/50 hover:text-black"
      >
        <ChevronRight className="h-5 w-5" aria-hidden="true" />
      </button>

      {/* Pagination dots */}
      <div className="absolute bottom-24 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {HERO_SLIDES.map((item, i) => (
          <button
            key={item.headline}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === index}
            className={cn(
              'h-2.5 w-2.5 rounded-full transition-colors',
              i === index ? 'bg-brand' : 'bg-white/40',
            )}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        aria-label="Scroll to about section"
        className="absolute bottom-10 left-1/2 z-10 flex h-[39px] w-[26px] -translate-x-1/2 items-start justify-center rounded-[25px] border-2 border-white pt-2"
      >
        <span className="h-2 w-1 animate-bounce rounded-full bg-white" />
      </a>
    </section>
  )
}
