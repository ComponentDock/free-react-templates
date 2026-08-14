import { useEffect, useState } from 'react'
import { ButtonLink, cn } from '@free-react-templates/ui'
import { heroCta, heroSlides } from '../data'

const SLIDE_MS = 6000

/** Full-width hero carousel (source: .home-slider owl carousel with 2
 *  .slider-item slides): background photo + dark teal overlay, uppercase
 *  subheading, 60px/900 white headline, teal pill "Our Services" CTA, and
 *  carousel dots. Auto-advances every 6s and wraps. */
export function HeroSlider() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((current) => (current + 1) % heroSlides.length)
    }, SLIDE_MS)
    return () => clearInterval(id)
  }, [])

  const slide = heroSlides[index]!

  return (
    <section id="home" className="relative">
      <section
        id="hero-slide"
        aria-label="Hero"
        className="relative flex min-h-[560px] items-center justify-center bg-cover bg-center text-center lg:min-h-[680px]"
        style={{ backgroundImage: `url(${slide.image})` }}
      >
        <div className="absolute inset-0 bg-black/45" aria-hidden="true" />
        <div className="absolute inset-0 bg-brand/25" aria-hidden="true" />
        <div className="relative z-10 max-w-3xl px-4">
          <p className="text-sm font-bold uppercase tracking-[2px] text-white">
            {slide.subheading}
          </p>
          <h1 className="mt-4 text-4xl font-black leading-[1.2] text-white lg:text-6xl">
            {slide.heading}
          </h1>
          <ButtonLink
            href="#services"
            className="mt-6 rounded-full bg-brand px-8 py-3 font-semibold text-white hover:bg-brand-hover"
          >
            {heroCta}
          </ButtonLink>
        </div>
      </section>

      <div className="absolute bottom-5 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {heroSlides.map((item, i) => (
          <button
            key={item.heading}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === index}
            className={cn(
              'h-2.5 w-2.5 rounded-full transition-colors',
              i === index ? 'bg-white' : 'bg-white/40 hover:bg-white/70',
            )}
          />
        ))}
      </div>
    </section>
  )
}
