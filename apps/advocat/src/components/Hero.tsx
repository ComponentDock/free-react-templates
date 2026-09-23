import { useState, useEffect } from 'react'
import { ArrowRight } from 'lucide-react'
import { heroSlides } from '../data'

/** Hero section with auto-rotating slide background and CTA overlay. */
export function Hero() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroSlides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const slide = heroSlides[current]!

  return (
    <section className="relative flex min-h-[600px] items-center overflow-hidden">
      {heroSlides.map((s, i) => (
        <div
          key={i}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            i === current ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url(${s.image})` }}
          aria-hidden="true"
        />
      ))}

      <div className="absolute inset-0 bg-black/50" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-24">
        <div className="max-w-xl">
          <h1 className="font-heading text-4xl font-bold leading-tight text-white md:text-5xl">
            {slide.heading}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-white/80">{slide.body}</p>
          <a
            href="#contact"
            className="mt-8 inline-flex items-center gap-2 rounded bg-brand px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-brand/90"
          >
            {slide.cta} <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        {/* Slide indicators */}
        <div className="mt-10 flex gap-2">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-1 transition-all ${i === current ? 'w-8 bg-brand' : 'w-4 bg-white/40'}`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
