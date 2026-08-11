import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import {
  featuredSlides,
  introHeadline,
  introSubline,
  nextSlideLabel,
  prevSlideLabel,
  sliderAutoplayMs,
  sliderLabel,
} from '../data'

/* Featured flex (#colorlib-featured-flex) — 30% hot-pink intro panel with
   the agency headline (table-centered white Tenor Sans h1 + uppercase
   sub-line) beside a 70% five-slide image carousel. Each slide is 600px
   tall with a dark overlay, a white title and an uppercase meta line pinned
   to the bottom; the carousel auto-advances with prev/next arrow controls. */
export function FeaturedFlex() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((index) => (index + 1) % featuredSlides.length)
    }, sliderAutoplayMs)
    return () => window.clearInterval(timer)
  }, [])

  const goPrev = () =>
    setActive((index) => (index - 1 + featuredSlides.length) % featuredSlides.length)
  const goNext = () => setActive((index) => (index + 1) % featuredSlides.length)

  return (
    <section aria-label={sliderLabel} className="flex flex-col md:flex-row">
      {/* one-forth — pink intro panel. */}
      <div className="flex h-[320px] items-center justify-center bg-primary-600 px-8 text-center md:h-[600px] md:w-[30%]">
        <div>
          <h1 className="font-serif text-3xl leading-snug text-white md:text-[40px]">
            {introHeadline}
          </h1>
          <p className="mt-4 text-xs uppercase tracking-[2px] text-white/70">{introSubline}</p>
        </div>
      </div>

      {/* three-forth — 5-slide carousel. */}
      <div className="relative h-[320px] overflow-hidden md:h-[600px] md:w-[70%]">
        {featuredSlides.map((slide, index) => (
          <div
            key={slide.seed}
            data-active={index === active}
            aria-hidden={index !== active}
            className="absolute inset-0 transition-opacity duration-500"
            style={{ opacity: index === active ? 1 : 0 }}
          >
            <img
              src={`https://picsum.photos/seed/${slide.seed}/1200/600`}
              alt=""
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30" />
            <div className="absolute inset-x-0 bottom-16 px-8">
              <h2 className="font-serif text-xl text-white">{slide.title}</h2>
              <p className="mt-2 text-sm uppercase tracking-widest text-white/70">{slide.meta}</p>
            </div>
          </div>
        ))}

        <button
          type="button"
          aria-label={prevSlideLabel}
          onClick={goPrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/20 p-2.5 text-white backdrop-blur-sm transition-colors hover:bg-white/40"
        >
          <ChevronLeft aria-hidden="true" className="h-5 w-5" />
        </button>
        <button
          type="button"
          aria-label={nextSlideLabel}
          onClick={goNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/20 p-2.5 text-white backdrop-blur-sm transition-colors hover:bg-white/40"
        >
          <ChevronRight aria-hidden="true" className="h-5 w-5" />
        </button>
      </div>
    </section>
  )
}
