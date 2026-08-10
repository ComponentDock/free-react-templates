import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import {
  heroSlides,
  heroSubtext,
  heroTitle,
  imgUrl,
  nextSlideLabel,
  previousSlideLabel,
  readMoreLabel,
} from '../data'
import { SiteButton } from './SiteButton'

/** Full-width two-slide hero with giant headline, CTA and 01/02 pagination. */
export function HeroSlider() {
  const [active, setActive] = useState(0)
  const slide = heroSlides[active]!

  const next = () => setActive((current) => (current + 1) % heroSlides.length)
  const prev = () => setActive((current) => (current - 1 + heroSlides.length) % heroSlides.length)

  return (
    <section
      className="hero-section relative"
      aria-roledescription="carousel"
      aria-label="Hero slides"
    >
      <div
        key={active}
        data-slide={slide.seed}
        className="relative flex h-[921px] items-center justify-center overflow-hidden border-b-2 border-magenta bg-deep-purple text-center"
        style={{ backgroundImage: `url(${imgUrl(slide.seed, 1920, 921)})` }}
      >
        <div aria-hidden="true" className="absolute inset-0 bg-[#0c062e]/60" />
        <div className="relative z-10 max-w-[900px] px-4 pt-[125px]">
          <h2 className="hero-anim text-[64px] leading-none font-medium text-white md:text-[120px] lg:text-[160px]">
            {heroTitle}
          </h2>
          <p
            className="hero-anim mx-auto mt-8 mb-[70px] max-w-[720px] text-[18px] font-medium text-white/40 md:text-[24px]"
            style={{ animationDelay: '0.2s' }}
          >
            {heroSubtext}
          </p>
          <div className="hero-anim" style={{ animationDelay: '0.4s' }}>
            <SiteButton as="link" href="#latest-news">
              {readMoreLabel}
            </SiteButton>
          </div>
        </div>
      </div>

      {/* Prev / next controls */}
      <button
        type="button"
        aria-label={previousSlideLabel}
        onClick={prev}
        className="absolute top-1/2 left-4 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 text-white transition-colors hover:bg-magenta md:left-8"
      >
        <ChevronLeft className="h-6 w-6" aria-hidden="true" />
      </button>
      <button
        type="button"
        aria-label={nextSlideLabel}
        onClick={next}
        className="absolute top-1/2 right-4 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 text-white transition-colors hover:bg-magenta md:right-8"
      >
        <ChevronRight className="h-6 w-6" aria-hidden="true" />
      </button>

      {/* Pagination 01 / 02 */}
      <div className="absolute bottom-6 left-8 z-20 flex items-center gap-2 text-[16px] font-bold text-white/60">
        {heroSlides.map((_, index) => (
          <span
            key={index}
            className={cn(
              'flex h-10 w-10 items-center justify-center rounded-full',
              index === active && 'bg-magenta text-white',
            )}
          >
            {String(index + 1).padStart(2, '0')}
          </span>
        ))}
        <span className="ml-1 text-white/60">/</span>
        <span className="text-white/60">{String(heroSlides.length).padStart(2, '0')}</span>
      </div>
    </section>
  )
}
