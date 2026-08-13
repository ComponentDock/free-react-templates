import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'
import { HERO_SLIDES, HERO_THUMBS } from '../data'

const SLIDE_INTERVAL_MS = 6000

/**
 * HeroSlider — 750px-tall split hero slider (source `.home-slider` owl
 * carousel with 2 slides): each slide splits into a right photo half
 * (full-bleed cover, arrows parked at its bottom edge) and a left white text
 * half with a bold black headline, the Duden-river paragraph, three 80px
 * circular dish thumbs and a solid red "Book A Table" button. Auto-advances
 * every 6s and pauses on hover.
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
  const previous = () =>
    setActive((current) => (current - 1 + HERO_SLIDES.length) % HERO_SLIDES.length)
  const next = () => setActive((current) => (current + 1) % HERO_SLIDES.length)

  return (
    <section
      id="home"
      aria-label="Welcome"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      className="bg-paper pt-20"
    >
      <div className="mx-auto grid max-w-6xl lg:grid-cols-2 lg:items-center lg:gap-10 lg:px-4">
        <div
          className="relative h-[320px] overflow-hidden md:h-[420px] lg:order-last lg:h-[750px]"
          aria-live="polite"
        >
          <img src={slide.image} alt="" className="absolute inset-0 h-full w-full object-cover" />
          <button
            type="button"
            aria-label="Previous slide"
            onClick={previous}
            className="absolute bottom-6 left-6 z-10 flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#d8d8d8] text-[#d8d8d8] transition-colors hover:border-brand hover:bg-brand hover:text-white"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            aria-label="Next slide"
            onClick={next}
            className="absolute bottom-6 left-[72px] z-10 flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#d8d8d8] text-[#d8d8d8] transition-colors hover:border-brand hover:bg-brand hover:text-white"
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        <div className="px-4 pb-16 pt-8 lg:pb-4">
          <h1 className="text-4xl font-bold leading-tight text-ink lg:text-5xl">{slide.title}</h1>
          <p className="mt-5 max-w-md text-base leading-relaxed text-muted">{slide.paragraph}</p>
          <div className="mt-6 flex flex-wrap gap-4">
            {HERO_THUMBS.map((thumb, index) => (
              <div key={`${thumb.src}-${index}`} className="flex flex-col items-center gap-2">
                <img
                  src={thumb.src}
                  alt=""
                  loading="lazy"
                  className="h-20 w-20 rounded-full object-cover shadow-[0_24px_48px_-12px_rgba(0,0,0,0.1)]"
                />
                <span className="text-sm text-ink/30">{thumb.label}</span>
              </div>
            ))}
          </div>
          <ButtonLink href="#reservation" className="mt-7 rounded px-8 py-3">
            Book A Table
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
