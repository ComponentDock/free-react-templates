import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { ButtonLink, cn } from '@free-react-templates/ui'
import { HERO_SLIDES } from '../data'

/**
 * HeroSlider — 600px hero carousel with two background-photo slides
 * under a dark gradient overlay, each with a white headline, Duden copy,
 * an orange "Contact Us" button and a pager (1 / 2).
 */
export function HeroSlider() {
  const [index, setIndex] = useState(0)
  const count = HERO_SLIDES.length
  const slide = HERO_SLIDES[index]!

  const prev = () => setIndex((current) => (current - 1 + count) % count)
  const next = () => setIndex((current) => (current + 1) % count)

  return (
    <section id="home-section" className="relative h-[600px] overflow-hidden">
      {HERO_SLIDES.map((item, i) => (
        <div
          key={item.image}
          aria-hidden={i !== index}
          className={cn(
            'absolute inset-0 bg-cover bg-center transition-opacity duration-700',
            i === index ? 'opacity-100' : 'opacity-0',
          )}
          style={{ backgroundImage: `url(${item.image})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/30" />
        </div>
      ))}

      <div className="pointer-events-none absolute inset-0 flex items-center">
        <div className="mx-auto max-w-3xl px-4 text-center text-white">
          <h1 className="text-4xl font-bold md:text-5xl">{slide.headline}</h1>
          <p className="mx-auto mt-4 max-w-xl text-white/80">{slide.copy}</p>
          <div className="pointer-events-auto mt-8">
            <ButtonLink
              href="#contact-section"
              className="rounded-xl border-2 border-primary bg-primary px-6 py-3 text-white hover:-translate-y-0.5 hover:bg-primary-hover hover:shadow-[0_4px_14px_rgba(253,95,0,0.25)]"
            >
              Contact Us
            </ButtonLink>
          </div>
        </div>
      </div>

      <button
        type="button"
        aria-label="Previous slide"
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2.5 text-navy transition-colors hover:bg-white"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        type="button"
        aria-label="Next slide"
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2.5 text-navy transition-colors hover:bg-white"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      <span className="absolute bottom-4 right-4 rounded-full bg-white/20 px-3 py-1 text-sm font-semibold text-white">
        {index + 1} / {count}
      </span>
    </section>
  )
}
