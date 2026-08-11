import { useEffect, useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import {
  amenityCardLabel,
  amenities,
  heroAutoplayMs,
  heroHeadline,
  heroSectionLabel,
  heroSlides,
} from '../data'

/* Hero slider — 938px full-width photo slider (reference: .hero-slider /
   .single-slider-item): the left-aligned white serif headline sits over a
   dark overlay, and three amenity cards (photo + uppercase label + gold
   arrow on a #353535 bar) act as the slide navigation, auto-advancing
   every heroAutoplayMs. */
export function Hero() {
  const [active, setActive] = useState(0)
  const slide = heroSlides[active]!

  useEffect(() => {
    const id = setInterval(() => {
      setActive((current) => (current + 1) % heroSlides.length)
    }, heroAutoplayMs)
    return () => clearInterval(id)
  }, [])

  return (
    <section
      id="home"
      aria-label={heroSectionLabel}
      className="relative min-h-[620px] overflow-hidden bg-charcoal lg:h-[938px]"
    >
      <div className="absolute inset-0">
        <img
          key={slide.seed}
          src={`https://picsum.photos/seed/${slide.seed}/1920/1080`}
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 pt-28 pb-24 sm:pt-36 lg:px-6 lg:pt-[340px]">
        <h1 className="max-w-4xl font-serif text-5xl leading-tight text-white sm:text-6xl lg:text-[88px] lg:leading-[96px]">
          {heroHeadline}
        </h1>

        <ul className="mt-12 flex flex-col gap-4 sm:flex-row sm:justify-end lg:mt-16">
          {amenities.map((amenity, index) => {
            const isActive = index === active
            return (
              <li key={amenity.name}>
                <button
                  type="button"
                  onClick={() => setActive(index)}
                  aria-label={amenityCardLabel(amenity.name)}
                  aria-current={isActive ? 'true' : undefined}
                  className="group block w-full text-left sm:w-44"
                >
                  <img
                    src={`https://picsum.photos/seed/${amenity.seed}/340/260`}
                    alt=""
                    className="h-40 w-full object-cover sm:h-44"
                  />
                  <span
                    className={cn(
                      'flex items-center justify-between border border-t-0 px-4 py-2.5 transition-colors',
                      isActive
                        ? 'border-gold-border bg-white'
                        : 'border-charcoal bg-charcoal group-hover:border-gold-border group-hover:bg-white',
                    )}
                  >
                    <span
                      className={cn(
                        'text-base font-bold tracking-wide uppercase transition-colors',
                        isActive ? 'text-ink' : 'text-white group-hover:text-ink',
                      )}
                    >
                      {amenity.name}
                    </span>
                    <ArrowRight aria-hidden="true" className="h-5 w-5 text-gold" />
                  </span>
                </button>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
