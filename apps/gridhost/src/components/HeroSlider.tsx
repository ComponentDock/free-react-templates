import { useEffect, useState } from 'react'
import { cn } from '@free-react-templates/ui'
import { SLIDES, SOCIAL_LINKS } from '../lib/site'
import { prefersReducedMotion } from '../lib/prefers-reduced-motion'
import { HeroArt } from './HeroArt'
import { PillLink } from './Pill'
import { BrandGlyph } from './BrandGlyph'

const AUTOPLAY_MS = 6000

/**
 * The hero: a midnight-navy band at least 900px tall carrying three slides, each
 * with a 65px white Oswald headline, a sub-line and one brand pill, beside the
 * isometric illustration. The chrome is the measured cyan/navy vertical dot rail
 * at `bottom:14%; right:35px` — 3px bars, 20px tall at rest and 34px when
 * selected — plus a rotated icon rail on the edge. The carousel advances on its
 * own unless the visitor asked for reduced motion.
 */
export function HeroSlider() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (prefersReducedMotion()) return

    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % SLIDES.length)
    }, AUTOPLAY_MS)

    return () => window.clearInterval(id)
  }, [])

  return (
    <section
      id="home"
      aria-label="Hosting highlights"
      aria-roledescription="carousel"
      className="relative min-h-[600px] overflow-hidden bg-navy min-[992px]:min-h-[900px] min-[1200px]:min-h-[1000px]"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <span className="absolute top-[-60px] left-[-40px] h-[220px] w-[220px] rounded-full bg-white/[0.03]" />
        <span className="absolute top-[120px] right-[-70px] h-[260px] w-[260px] rounded-full border border-white/[0.06]" />
        <span className="absolute bottom-[95px] left-[67px] h-[120px] w-[120px] bg-[radial-gradient(rgba(255,255,255,0.25)_1.5px,transparent_1.5px)] bg-[length:12px_12px]" />
      </div>

      {SLIDES.map((slide, slideIndex) => {
        const isActive = slideIndex === index

        return (
          <div
            key={slide.id}
            id={`panel-${slide.id}`}
            role="tabpanel"
            aria-labelledby={`dot-${slide.id}`}
            aria-hidden={!isActive}
            data-testid={slide.id}
            className={cn(
              'absolute inset-0 mx-auto flex w-full max-w-[1140px] items-center px-[15px] py-[90px] transition-opacity duration-500',
              isActive ? 'opacity-100' : 'pointer-events-none opacity-0',
            )}
          >
            <div className="w-full lg:w-1/2">
              {slideIndex === 0 ? (
                <h1 className="mb-[32px] max-w-[560px] font-heading text-[29px] leading-[1.3] font-bold text-white min-[768px]:text-[50px] min-[992px]:text-[55px] min-[1200px]:text-[65px]">
                  {slide.headline}
                </h1>
              ) : (
                <h2 className="mb-[32px] max-w-[560px] font-heading text-[29px] leading-[1.3] font-bold text-white min-[768px]:text-[50px] min-[992px]:text-[55px] min-[1200px]:text-[65px]">
                  {slide.headline}
                </h2>
              )}
              <p className="mb-[54px] text-[16px] leading-[1.7] text-white min-[1200px]:pr-[155px]">
                {slide.subline}
              </p>
              <PillLink href="#pricing">Get started</PillLink>
            </div>

            <div className="hidden lg:flex lg:w-1/2 lg:items-center lg:justify-end">
              <span
                aria-hidden="true"
                className="mr-[18px] h-[240px] w-px bg-white/20"
              />
              <HeroArt />
            </div>
          </div>
        )
      })}

      <div
        role="tablist"
        aria-label="Hero slides"
        className="absolute right-[35px] bottom-[14%] z-[5] flex flex-col items-end gap-[10px]"
      >
        {SLIDES.map((slide, slideIndex) => (
          <button
            key={slide.id}
            id={`dot-${slide.id}`}
            type="button"
            role="tab"
            aria-controls={`panel-${slide.id}`}
            aria-selected={slideIndex === index}
            aria-label={`${slideIndex + 1} of ${SLIDES.length}`}
            onClick={() => setIndex(slideIndex)}
            className={cn(
              'w-[3px] transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white',
              slideIndex === index ? 'h-[34px] bg-dot-active' : 'h-[20px] bg-dot-idle',
            )}
          />
        ))}
      </div>

      <div className="absolute right-[-20px] bottom-2/5 hidden rotate-[-90deg] gap-[14px] lg:flex">
        {SOCIAL_LINKS.map((social) => (
          <a
            key={social.label}
            href={social.href}
            aria-label={`Gridhost on ${social.label}`}
            className="text-hero-rail transition-colors hover:text-hero-rail-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <BrandGlyph name={social.label} className="h-[14px] w-[14px]" />
          </a>
        ))}
      </div>
    </section>
  )
}
