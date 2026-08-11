import { useState } from 'react'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import {
  heroParagraph,
  heroReadMore,
  heroSectionLabel,
  heroSlides,
  heroSubheading,
  nextSlideLabel,
  previousSlideLabel,
} from '../data'

export function HeroSlider() {
  const [active, setActive] = useState(0)
  const slide = heroSlides[active]!
  const previous = () => setActive((i) => (i - 1 + heroSlides.length) % heroSlides.length)
  const next = () => setActive((i) => (i + 1) % heroSlides.length)

  return (
    <section aria-label={heroSectionLabel} className="relative overflow-hidden">
      <div className="grid min-h-[560px] md:grid-cols-[1fr_34%]">
        {/* Left: food photograph (original bg_1.jpg / bg_2.jpg full-bleed). */}
        <div className="relative min-h-[300px]">
          <img
            src={`https://picsum.photos/seed/${slide.seed}/1200/680`}
            alt={slide.imageAlt}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
        {/* Right: solid yellow #ffd615 text panel (width 34%, height 680px). */}
        <div className="flex items-center bg-accent px-6 py-16 md:px-10">
          <div className="max-w-md">
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-ink/70">
              {heroSubheading}
            </h3>
            <h1 className="mt-4 font-serif text-4xl font-normal leading-[1.3] text-ink md:text-5xl">
              {slide.heading}
            </h1>
            <p className="mt-5 text-sm leading-relaxed text-ink/70">{heroParagraph}</p>
            <a
              href="#"
              className="mt-8 inline-flex items-center gap-3 bg-black px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-ink"
            >
              {heroReadMore}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>

      {/* Carousel controls. */}
      <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-3 md:left-auto md:right-6 md:translate-x-0">
        <button
          type="button"
          aria-label={previousSlideLabel}
          onClick={previous}
          className="flex h-11 w-11 items-center justify-center rounded-full bg-black/60 text-white transition-colors hover:bg-black"
        >
          <ChevronLeft className="h-5 w-5" aria-hidden="true" />
        </button>
        <button
          type="button"
          aria-label={nextSlideLabel}
          onClick={next}
          className="flex h-11 w-11 items-center justify-center rounded-full bg-black/60 text-white transition-colors hover:bg-black"
        >
          <ChevronRight className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>
    </section>
  )
}
