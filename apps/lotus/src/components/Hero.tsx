import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { heroSlides } from '../data'
import { ButtonLink } from '@free-react-templates/ui'

const AUTOPLAY_MS = 6000

export function Hero() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % heroSlides.length)
    }, AUTOPLAY_MS)
    return () => window.clearInterval(timer)
  }, [])

  const slide = heroSlides[index]!
  const goTo = (next: number) => setIndex((next + heroSlides.length) % heroSlides.length)

  return (
    <section
      id="home"
      aria-label="Featured classes"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-ink"
    >
      {heroSlides.map((item, i) => (
        <div
          key={item.headline}
          aria-hidden={i !== index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-700 ${
            i === index ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url(${item.image})` }}
        />
      ))}
      <div className="absolute inset-0 bg-black/30" aria-hidden="true" />

      <div className="relative mx-auto w-full max-w-6xl px-6">
        <div key={slide.headline} className="max-w-2xl">
          <h1 className="text-4xl font-normal leading-tight text-white md:text-6xl lg:text-7xl">
            {slide.headline}
          </h1>
          <p className="mt-6 max-w-xl text-lg font-light leading-relaxed text-white/85 md:text-xl">
            {slide.copy}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <ButtonLink
              href="#contact"
              className="rounded bg-brand px-6 py-4 text-base text-ink hover:bg-brand-dark"
            >
              Get in touch
            </ButtonLink>
            <ButtonLink
              href="#classes"
              variant="outline"
              className="rounded border-white px-6 py-4 text-base text-white hover:bg-white/10"
            >
              Explore our classes
            </ButtonLink>
          </div>
        </div>
      </div>

      <button
        type="button"
        aria-label="Previous slide"
        onClick={() => goTo(index - 1)}
        className="absolute left-4 top-1/2 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand md:flex"
      >
        <ChevronLeft className="h-6 w-6" aria-hidden="true" />
      </button>
      <button
        type="button"
        aria-label="Next slide"
        onClick={() => goTo(index + 1)}
        className="absolute right-4 top-1/2 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand md:flex"
      >
        <ChevronRight className="h-6 w-6" aria-hidden="true" />
      </button>

      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 gap-3">
        {heroSlides.map((item, i) => (
          <button
            key={item.headline}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === index}
            onClick={() => goTo(i)}
            className={`h-2.5 rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand ${
              i === index ? 'w-8 bg-brand' : 'w-2.5 bg-white/60 hover:bg-white'
            }`}
          />
        ))}
      </div>
    </section>
  )
}
