import { useEffect, useState } from 'react'
import { cn } from '@free-react-templates/ui'
import { heroSlides } from '../data'

const SLIDE_INTERVAL_MS = 6000

/** Full-height hero slider: 3 background photos with a dark left overlay,
 *  a white Oswald headline whose highlight sits on the brand mint, subtext,
 *  an outlined "CHECK OUR SERVICES" button and vertical dots on the right. */
export function HeroSlider() {
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
      className="relative h-[760px] overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${slide.image})` }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/10"
        aria-hidden="true"
      />
      <div className="relative mx-auto flex h-full max-w-7xl flex-col justify-center px-6 lg:px-16">
        <div className="max-w-3xl">
          <h1 className="font-display text-5xl font-semibold leading-[1.1] text-white lg:text-[6.25rem]">
            Unlock Your <span className="block text-brand">{slide.highlight}</span> Potential
          </h1>
          <p className="mt-6 max-w-xl text-xl text-white/90">{slide.subtext}</p>
          <div className="mt-10">
            <a href="#services" className="btn-hero-outline">
              Check Our Services
            </a>
          </div>
        </div>
      </div>
      <div
        className="absolute right-6 top-1/2 flex -translate-y-1/2 flex-col gap-3 lg:right-24"
        aria-label="Slides"
      >
        {heroSlides.map((_, index) => (
          <button
            key={index}
            type="button"
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === current ? 'true' : undefined}
            onClick={() => setCurrent(index)}
            className={cn(
              'h-3 w-3 rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white',
              index === current ? 'bg-brand' : 'bg-white/50 hover:bg-white',
            )}
          />
        ))}
      </div>
    </section>
  )
}
