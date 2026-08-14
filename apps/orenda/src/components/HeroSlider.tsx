import { useState } from 'react'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { heroBackdrop, heroImage, heroSlides } from '../data'

/** Light-blue hero slider (2 slides) with a white bold headline, a square
 *  indigo "Get Started" CTA, a student photo beside the copy, and
 *  prev/next + dot slide controls. */
export function HeroSlider() {
  const [active, setActive] = useState(0)
  const slide = heroSlides[active]!

  const next = () => setActive((current) => (current + 1) % heroSlides.length)
  const prev = () => setActive((current) => (current - 1 + heroSlides.length) % heroSlides.length)

  return (
    <section
      id="home"
      aria-label="Hero"
      className="relative overflow-hidden bg-primary-50 dark:bg-gray-950"
    >
      <img
        src={heroBackdrop}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover opacity-40"
      />
      <div className="relative mx-auto flex min-h-[560px] max-w-6xl flex-col items-center gap-10 px-4 py-16 md:flex-row md:py-24">
        <div className="max-w-xl flex-1">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
            {slide.subHeading}
          </p>
          <h1 className="mt-4 font-display text-4xl font-bold leading-tight text-title dark:text-white md:text-6xl">
            {slide.headline}
          </h1>
          <p className="mt-5 text-base leading-relaxed text-gray-600 dark:text-gray-300">
            {slide.copy}
          </p>
          <a
            href="#courses"
            className="mt-8 inline-flex items-center gap-2 bg-brand px-8 py-4 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:bg-sweep"
          >
            Get Started
            <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </a>
        </div>

        <div className="relative hidden flex-1 md:block">
          <img
            src={heroImage}
            alt="Student learning illustration"
            className="mx-auto h-[420px] w-auto rounded-sm object-cover shadow-xl"
          />
        </div>
      </div>

      {/* Slide controls */}
      <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-4">
        <button
          type="button"
          onClick={prev}
          aria-label="Previous slide"
          className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-brand shadow-md transition-colors hover:bg-brand hover:text-white dark:bg-gray-800 dark:text-white"
        >
          <ChevronLeft aria-hidden="true" className="h-4 w-4" />
        </button>
        <div className="flex items-center gap-2" role="group" aria-label="Slide dots">
          {heroSlides.map((item, index) => (
            <button
              key={item.headline}
              type="button"
              onClick={() => setActive(index)}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={index === active}
              className={cn(
                'h-2.5 w-2.5 rounded-full transition-colors',
                index === active ? 'bg-brand' : 'bg-gray-400 hover:bg-brand',
              )}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={next}
          aria-label="Next slide"
          className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-brand shadow-md transition-colors hover:bg-brand hover:text-white dark:bg-gray-800 dark:text-white"
        >
          <ChevronRight aria-hidden="true" className="h-4 w-4" />
        </button>
      </div>
    </section>
  )
}
