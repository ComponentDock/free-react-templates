import { useEffect, useState } from 'react'
import { ButtonLink, cn } from '@free-react-templates/ui'
import { heroSlides } from '../data'

const SLIDE_INTERVAL_MS = 6000

export function Hero() {
  const [activeSlide, setActiveSlide] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length)
    }, SLIDE_INTERVAL_MS)
    return () => clearInterval(id)
  }, [])

  const slide = heroSlides[activeSlide]!

  return (
    <section id="home" className="bg-navy">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 lg:grid-cols-2 lg:px-8 lg:py-28">
        <div aria-live="polite">
          <h2 className="text-6xl font-bold leading-[0.95] text-white lg:text-7xl">
            {slide.headline.map((part) =>
              part.accent ? (
                <span key={part.text} className="text-brand">
                  {part.text}
                </span>
              ) : (
                <span key={part.text}>{part.text}</span>
              ),
            )}
          </h2>
          <p className="mt-6 max-w-md text-white/60">{slide.paragraph}</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <ButtonLink
              href="#download"
              className="min-w-[195px] rounded-full bg-brand px-10 py-6 text-sm font-medium uppercase tracking-wide text-white transition-colors hover:bg-brand-dark"
            >
              Download Now
            </ButtonLink>
            <ButtonLink
              href="#trial"
              className="min-w-[195px] rounded-full bg-indigo-2 px-10 py-6 text-sm font-medium uppercase tracking-wide text-white transition-colors hover:bg-navy-2"
            >
              Start free trial
            </ButtonLink>
          </div>
        </div>
        <div className="hidden lg:block">
          <img src={slide.image} alt="" loading="eager" className="h-full w-full object-cover" />
        </div>
      </div>

      {/* Slider dots */}
      <div className="flex justify-center gap-3 pb-10">
        {heroSlides.map((item, index) => (
          <button
            key={item.image}
            type="button"
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === activeSlide}
            onClick={() => setActiveSlide(index)}
            className={cn(
              'h-3 rounded-full transition-all',
              index === activeSlide ? 'w-8 bg-brand' : 'w-3 bg-white/40 hover:bg-white/70',
            )}
          />
        ))}
      </div>
    </section>
  )
}
