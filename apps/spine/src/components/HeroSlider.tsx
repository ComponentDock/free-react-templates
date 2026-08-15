import { useEffect, useState } from 'react'
import { heroSlides } from '../data'

const SLIDE_INTERVAL_MS = 5000

export function HeroSlider() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const id = window.setInterval(() => {
      setActive((current) => (current + 1) % heroSlides.length)
    }, SLIDE_INTERVAL_MS)
    return () => window.clearInterval(id)
    // heroSlides is a module-scope constant — not a valid dependency.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <section id="home" aria-label="Featured books" className="relative h-[580px] overflow-hidden">
      {heroSlides.map((slide, index) => (
        <div
          key={slide.image}
          role="group"
          aria-label={`Slide ${index + 1} of ${heroSlides.length}`}
          aria-hidden={active !== index ? 'true' : undefined}
          className="absolute inset-0 flex items-center justify-center bg-cover bg-center transition-opacity duration-700"
          style={{
            backgroundImage: `url(${slide.image})`,
            opacity: active === index ? 1 : 0,
          }}
        >
          <div className="absolute inset-0 bg-black/30" aria-hidden="true" />
          <div className="relative mx-auto max-w-xl px-6 text-center">
            <span className="mb-5 inline-block rounded-[17px] bg-white px-[17px] py-1.5 text-sm font-light text-ink">
              {slide.tag}
            </span>
            <h1 className="font-display text-5xl font-normal leading-tight text-white lg:text-6xl">
              {slide.headlineFirst}
              <br />
              {slide.headlineSecond}
            </h1>
            <a
              href="#latest"
              className="mt-7 inline-block rounded-[35px] bg-brand px-11 py-4 text-base font-medium text-white transition-colors hover:bg-brand-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              {slide.buttonLabel}
            </a>
          </div>
        </div>
      ))}
      <div className="absolute bottom-7 left-0 right-0 z-10 flex items-center justify-center gap-2.5">
        {heroSlides.map((slide, index) => (
          <button
            key={slide.image}
            type="button"
            aria-label={`Go to slide ${index + 1}`}
            aria-current={active === index ? 'true' : undefined}
            onClick={() => setActive(index)}
            className={
              active === index
                ? 'h-[23px] w-[23px] rounded-full border-2 border-white'
                : 'h-2.5 w-2.5 rounded-full bg-white/60'
            }
          />
        ))}
      </div>
    </section>
  )
}
