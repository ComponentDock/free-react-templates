import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { HERO_SLIDES } from '../data'
import { ButtonLink } from '@free-react-templates/ui'
import { cn } from '@free-react-templates/ui'

/* Hero — full-height 2-slide carousel. Each slide splits natively into a
   white text column (eyebrow, 44px light headline, lorem, coral pill CTA)
   and a photo column with the oversized rotated STRENGTH/WORKOUT keyword.
   Arrows + dots navigate; auto-advances every 6s. */
export function Hero() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % HERO_SLIDES.length)
    }, 6000)
    return () => window.clearInterval(timer)
  }, [])

  const go = (next: number) => setIndex((next + HERO_SLIDES.length) % HERO_SLIDES.length)

  return (
    <section aria-label="Hero slider" className="relative min-h-screen overflow-hidden bg-white">
      {HERO_SLIDES.map((slide, i) => (
        <div
          key={slide.keyword}
          aria-hidden={i !== index}
          className={cn(
            'absolute inset-0 grid md:grid-cols-2 transition-opacity duration-700',
            i === index ? 'opacity-100' : 'pointer-events-none opacity-0',
          )}
        >
          <div className="flex items-center bg-white px-6 py-32 md:px-16 lg:px-24">
            <div>
              <span className="text-[13px] font-bold uppercase tracking-[3px] text-brand">
                {slide.eyebrow}
              </span>
              <h1 className="mt-4 max-w-xl text-[44px] font-light leading-tight text-black">
                {slide.headline}
              </h1>
              <p className="mt-5 max-w-md text-mist">{slide.paragraph}</p>
              <ButtonLink
                href="#programs-section"
                className="mt-8 rounded-full bg-brand px-8 py-4 text-white shadow-[0_24px_36px_-11px_rgba(0,0,0,0.09)] transition-colors hover:bg-brand-dark"
              >
                Join with us
              </ButtonLink>
            </div>
          </div>
          <div className="relative hidden min-h-[70vh] md:block">
            <img src={slide.photo} alt="" className="absolute inset-0 h-full w-full object-cover" />
            <span className="absolute right-6 top-10 [writing-mode:vertical-lr] [text-orientation:sideways] [transform:rotate(180deg)] text-5xl font-black uppercase tracking-widest text-white">
              {slide.keyword}
            </span>
          </div>
        </div>
      ))}

      <button
        type="button"
        aria-label="Previous slide"
        onClick={() => go(index - 1)}
        className="absolute left-4 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/20 text-white transition-colors hover:bg-black/40 md:flex"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        type="button"
        aria-label="Next slide"
        onClick={() => go(index + 1)}
        className="absolute right-4 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/20 text-white transition-colors hover:bg-black/40 md:flex"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {HERO_SLIDES.map((slide, i) => (
          <button
            key={slide.keyword}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === index ? 'true' : undefined}
            onClick={() => go(i)}
            className={cn(
              'h-2.5 w-2.5 rounded-full transition-colors',
              i === index ? 'bg-brand' : 'bg-black/30 hover:bg-black/50',
            )}
          />
        ))}
      </div>
    </section>
  )
}
