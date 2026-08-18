import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { heroSlides } from '../data'

export function Hero() {
  const [index, setIndex] = useState(0)
  const count = heroSlides.length
  const slide = heroSlides[index]!

  const prev = () => setIndex((i) => (i - 1 + count) % count)
  const next = () => setIndex((i) => (i + 1) % count)

  return (
    <section id="home" aria-label="Hero" className="relative overflow-hidden bg-hero">
      <div className="relative h-[750px] max-h-[70vh] min-h-[520px]">
        {heroSlides.map((slide, i) => (
          <div
            key={slide.title}
            aria-hidden={i === index ? undefined : 'true'}
            className={cn(
              'absolute inset-0 transition-opacity duration-700',
              i === index ? 'opacity-100' : 'opacity-0',
            )}
          >
            <img
              src={slide.image}
              alt=""
              className="h-full w-full object-cover"
              loading={i === 0 ? 'eager' : 'lazy'}
            />
            {/* Cyan→blue gradient overlay on the left 74%, per the
                reference design. */}
            <div className="absolute inset-y-0 left-0 w-[74%] bg-gradient-to-r from-accent/80 via-[#00807e]/75 to-[#003468]/70" />
          </div>
        ))}

        {/* Slide caption */}
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl text-white">
              <h1 className="font-display text-5xl font-medium leading-[1.1] tracking-[-2.5px] md:text-6xl lg:text-7xl">
                {slide.title}
                <span className="block">{slide.titleAccent}</span>
              </h1>
              <p className="mt-8 max-w-xl text-base leading-relaxed text-white/90 md:text-lg">
                {slide.subtitle}
              </p>
              <a
                href="#about"
                className="mt-10 inline-block border-2 border-white px-8 py-4 text-sm font-medium uppercase tracking-wide text-white transition-colors hover:bg-white hover:text-brand"
              >
                Find Out More
              </a>
            </div>
          </div>
        </div>

        {/* Slider controls */}
        <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 items-center gap-3">
          <button
            type="button"
            aria-label="Previous slide"
            onClick={prev}
            className="flex size-11 items-center justify-center border border-white/60 text-white transition-colors hover:bg-white hover:text-brand"
          >
            <ChevronLeft aria-hidden="true" className="size-5" />
          </button>
          <button
            type="button"
            aria-label="Next slide"
            onClick={next}
            className="flex size-11 items-center justify-center border border-white/60 text-white transition-colors hover:bg-white hover:text-brand"
          >
            <ChevronRight aria-hidden="true" className="size-5" />
          </button>
          <span className="ml-2 text-sm text-white/80" aria-live="polite">
            {index + 1} / {count}
          </span>
        </div>
      </div>
    </section>
  )
}
