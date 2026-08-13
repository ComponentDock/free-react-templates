import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { heroSlides } from '../data'

/** Full-height hero slider: two photo slides with a rgba(0,0,0,0.7)
 *  overlay, left-aligned 4.5rem white headline, light-grey paragraph and a
 *  coral-outline "Get in touch" CTA; prev/next arrows + pagination dots. */
export function Hero() {
  const [active, setActive] = useState(0)
  const count = heroSlides.length
  // active is always a valid index: initialised to 0 and only changed via
  // go() which wraps into [0, count).
  const slide = heroSlides[active]!

  const go = (next: number) => setActive(((next % count) + count) % count)

  return (
    <section
      id="home-section"
      data-testid="hero"
      className="relative flex min-h-[700px] items-center overflow-hidden"
      aria-label="Featured"
    >
      {heroSlides.map((slide, index) => (
        <div
          key={slide.image}
          data-testid="hero-slide"
          aria-hidden={index !== active}
          className={cn(
            'absolute inset-0 bg-cover bg-center transition-opacity duration-500',
            index === active ? 'opacity-100' : 'opacity-0',
          )}
          style={{ backgroundImage: `url('${slide.image}')` }}
        >
          <div aria-hidden="true" className="absolute inset-0 bg-black/70" />
        </div>
      ))}

      <div className="relative z-10 mx-auto w-full max-w-[1140px] px-4">
        <div className="max-w-[600px]">
          <h1 className="text-[2rem] leading-none text-white md:text-[4.5rem]">{slide.headline}</h1>
          <p className="mt-4 max-w-[400px] text-lg text-[#999999]">{slide.paragraph}</p>
          <a
            href="#contact-section"
            className="mt-8 inline-block rounded border-2 border-brand px-5 py-2 text-base font-bold text-brand transition-colors hover:bg-brand hover:text-white"
          >
            Get in touch
          </a>
        </div>
      </div>

      <button
        type="button"
        aria-label="Previous slide"
        onClick={() => go(active - 1)}
        className="absolute left-5 top-1/2 z-10 -translate-y-1/2 text-white/40 transition-colors hover:text-white"
      >
        <ChevronLeft className="h-8 w-8" />
      </button>
      <button
        type="button"
        aria-label="Next slide"
        onClick={() => go(active + 1)}
        className="absolute right-5 top-1/2 z-10 -translate-y-1/2 text-white/40 transition-colors hover:text-white"
      >
        <ChevronRight className="h-8 w-8" />
      </button>

      <div className="absolute bottom-[-30px] left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {heroSlides.map((slide, index) => (
          <button
            key={slide.image}
            type="button"
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === active ? 'true' : undefined}
            onClick={() => setActive(index)}
            className={cn(
              'h-2 w-2 rounded-full transition-colors',
              index === active ? 'bg-white' : 'bg-white/40',
            )}
          />
        ))}
      </div>
    </section>
  )
}
