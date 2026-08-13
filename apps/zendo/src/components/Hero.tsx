import { useEffect, useState } from 'react'
import { ButtonLink } from '@free-react-templates/ui'
import { cn } from '@free-react-templates/ui'
import { hero } from '../data'

const AUTOPLAY_MS = 6000

/** Full-height hero slider: 2 cover-photo slides under a white overlay with
 *  a centered serif H1, sans H3 subheading and a "View our works" outline
 *  button; pink dots below. Autoplays and wraps. */
export function Hero() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((current) => (current + 1) % hero.slides.length)
    }, AUTOPLAY_MS)
    return () => clearInterval(id)
  }, [])

  const goTo = (next: number) => {
    setIndex(((next % hero.slides.length) + hero.slides.length) % hero.slides.length)
  }

  return (
    <section
      id="home-section"
      data-testid="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-light"
    >
      {hero.slides.map((slide, slideIndex) => (
        <div
          key={slide.heading}
          aria-hidden={slideIndex !== index}
          className={cn(
            'absolute inset-0 transition-opacity duration-700',
            slideIndex === index ? 'opacity-100' : 'pointer-events-none opacity-0',
          )}
        >
          <img src={slide.image} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-white/60" />
        </div>
      ))}

      <div className="relative z-10 px-6 text-center">
        <h1 className="font-display text-4xl font-semibold leading-tight text-ink md:text-[80px] md:leading-[1.2]">
          {hero.slides[index]!.heading}
        </h1>
        <h3 className="mx-auto mt-4 max-w-xl text-sm font-light text-body md:text-base">
          {hero.slides[index]!.subheading}
        </h3>
        <ButtonLink
          href="#classes-section"
          variant="outline"
          className="mt-6 border border-white bg-white px-4 py-3 text-xs font-semibold uppercase tracking-[0.15em] text-ink transition-colors hover:border-brand hover:bg-white hover:text-brand"
        >
          {hero.cta}
        </ButtonLink>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {hero.slides.map((slide, dotIndex) => (
          <button
            key={slide.heading}
            type="button"
            aria-label={`Go to slide ${dotIndex + 1}`}
            aria-current={dotIndex === index ? 'true' : undefined}
            onClick={() => goTo(dotIndex)}
            className={cn(
              'h-2.5 rounded-full transition-all',
              dotIndex === index ? 'w-8 bg-brand' : 'w-2.5 bg-ink/30 hover:bg-brand/60',
            )}
          />
        ))}
      </div>
    </section>
  )
}
