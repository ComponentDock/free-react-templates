import { useEffect, useState } from 'react'
import { cn } from '@free-react-templates/ui'
import { heroSlides } from '../data'

const SLIDE_INTERVAL_MS = 6000

/* Full-viewport hero slider: three background photos under a dark
   overlay, with an eyebrow, italic uppercase headline, subtext and a
   "Take A Tour Now" button. Navigation is a vertical stack of thin bars
   on the right edge; the slider auto-advances. */
export function Hero() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrent((value) => (value + 1) % heroSlides.length)
    }, SLIDE_INTERVAL_MS)
    return () => window.clearInterval(timer)
  }, [])

  const slide = heroSlides[current]!

  return (
    <section
      id="home"
      aria-label="Featured highlights"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${slide.image})` }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-ink/70" aria-hidden="true" />

      <div className="relative mx-auto w-full max-w-7xl px-5 lg:px-8">
        <div className="max-w-3xl">
          <span className="text-xs font-medium uppercase tracking-[1px] text-white/80">
            {slide.eyebrow}
          </span>
          <h1 className="mt-4 font-display text-4xl font-bold uppercase italic leading-[1.1] text-white md:text-[60px]">
            {slide.title}
          </h1>
          <p className="mt-6 max-w-xl text-white/80">{slide.subtitle}</p>
          <a href="#classes" className="btn-square mt-10 inline-flex items-center gap-2">
            Take A Tour Now
          </a>
        </div>
      </div>

      <div
        className="absolute right-5 top-1/2 z-10 flex -translate-y-1/2 flex-col items-center gap-4 lg:right-8"
        aria-label="Slides"
      >
        {heroSlides.map((item, index) => (
          <button
            key={item.title}
            type="button"
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === current ? 'true' : undefined}
            onClick={() => setCurrent(index)}
            className={cn(
              'h-0.5 bg-white/80 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white',
              index === current ? 'w-8 bg-primary' : 'w-5 hover:bg-white',
            )}
          />
        ))}
      </div>
    </section>
  )
}
