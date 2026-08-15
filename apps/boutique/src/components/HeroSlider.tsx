import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import {
  heroButtonLabel,
  heroNextLabel,
  heroPreviousLabel,
  heroSlideLabel,
  heroSlides,
} from '../data'

export function HeroSlider() {
  const [index, setIndex] = useState(0)
  const slide = heroSlides[index]!

  const previous = () => setIndex((value) => (value === 0 ? heroSlides.length - 1 : value - 1))
  const next = () => setIndex((value) => (value === heroSlides.length - 1 ? 0 : value + 1))

  return (
    <section
      id="home-section"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${slide.image})` }}
    >
      <div
        className="absolute inset-0 bg-gradient-to-b from-[#aa7ad0]/40 via-transparent to-black/30"
        aria-hidden="true"
      />
      <div className="relative px-4 pb-16 text-center">
        <p className="text-lg font-medium uppercase tracking-wide text-white">{slide.eyebrow}</p>
        <h1 className="mt-4 text-6xl font-normal uppercase leading-[0.9] text-white sm:text-7xl lg:text-[110px]">
          {slide.title}
        </h1>
        <a
          href="#products-section"
          className="mt-10 inline-flex min-w-[138px] items-center justify-center bg-ink px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-brand"
        >
          {heroButtonLabel}
        </a>
      </div>

      <button
        type="button"
        aria-label={heroPreviousLabel}
        onClick={previous}
        className="absolute left-4 top-1/2 hidden -translate-y-1/2 items-center justify-center p-2 text-white transition-opacity hover:opacity-70 sm:flex"
      >
        <ChevronLeft className="h-8 w-8" aria-hidden="true" />
      </button>
      <button
        type="button"
        aria-label={heroNextLabel}
        onClick={next}
        className="absolute right-4 top-1/2 hidden -translate-y-1/2 items-center justify-center p-2 text-white transition-opacity hover:opacity-70 sm:flex"
      >
        <ChevronRight className="h-8 w-8" aria-hidden="true" />
      </button>

      <div
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 gap-3"
        role="group"
        aria-label="Slide controls"
      >
        {heroSlides.map((item, dotIndex) => (
          <button
            key={item.image}
            type="button"
            aria-label={heroSlideLabel(dotIndex)}
            aria-current={dotIndex === index}
            onClick={() => setIndex(dotIndex)}
            className={`h-3 w-3 rounded-full transition-colors ${
              dotIndex === index ? 'bg-brand' : 'bg-white/50 hover:bg-white'
            }`}
          />
        ))}
      </div>
    </section>
  )
}
