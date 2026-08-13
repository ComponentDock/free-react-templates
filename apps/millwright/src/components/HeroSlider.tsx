import { useState } from 'react'
import { ChevronLeft, ChevronRight, Play } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { heroSlides } from '../data'

/** Full-height hero slider (reference: two owl-carousel slides): cover
 *  background photo, dark top gradient, white circular play button, uppercase
 *  white headline (NO orange highlight block — this variant differs from the
 *  sibling Industrial template), subtext, and prev/next + dot navigation. */
export function HeroSlider() {
  const [index, setIndex] = useState(0)

  const next = () => setIndex((current) => (current + 1) % heroSlides.length)
  const prev = () => setIndex((current) => (current - 1 + heroSlides.length) % heroSlides.length)

  return (
    <section id="home" className="relative h-screen min-h-[700px] overflow-hidden bg-dark-700">
      {heroSlides.map((slide, i) => (
        <div
          key={slide.headline}
          aria-hidden={i !== index}
          className={cn(
            'absolute inset-0 transition-opacity duration-700',
            i === index ? 'opacity-100' : 'opacity-0',
          )}
        >
          <img
            src={slide.image}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div
            className="absolute inset-x-0 top-0 h-[500px] bg-gradient-to-b from-black to-transparent"
            aria-hidden="true"
          />
          <div className="relative z-10 flex h-full items-center justify-center">
            <div className="mx-auto max-w-3xl px-4 text-center">
              <div className="mx-auto flex h-[100px] w-[100px] items-center justify-center">
                <a
                  href="#home"
                  aria-label="Play video"
                  className="flex h-[60px] w-[60px] items-center justify-center rounded-full bg-white transition-all duration-300 hover:h-20 hover:w-20"
                >
                  <Play className="h-5 w-5 fill-black text-black" aria-hidden="true" />
                </a>
              </div>
              <h1 className="mt-4 font-heading text-4xl leading-[1.2] font-light text-white uppercase md:text-[50px]">
                {slide.headline}
              </h1>
              <p className="mx-auto mt-6 max-w-xl text-lg font-light text-white md:text-xl">
                {slide.text}
              </p>
            </div>
          </div>
        </div>
      ))}

      <button
        type="button"
        onClick={prev}
        aria-label="Previous slide"
        className="absolute top-1/2 left-4 z-20 -translate-y-1/2 rounded-full border border-white/30 p-3 text-white transition-colors hover:bg-white hover:text-black"
      >
        <ChevronLeft className="h-6 w-6" aria-hidden="true" />
      </button>
      <button
        type="button"
        onClick={next}
        aria-label="Next slide"
        className="absolute top-1/2 right-4 z-20 -translate-y-1/2 rounded-full border border-white/30 p-3 text-white transition-colors hover:bg-white hover:text-black"
      >
        <ChevronRight className="h-6 w-6" aria-hidden="true" />
      </button>

      <div className="absolute inset-x-0 bottom-24 z-20 flex justify-center gap-2">
        {heroSlides.map((slide, i) => (
          <button
            key={slide.headline}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === index ? 'true' : undefined}
            className={cn(
              'h-1.5 rounded-full bg-white transition-all',
              i === index ? 'w-12' : 'w-3 opacity-60 hover:opacity-100',
            )}
          />
        ))}
      </div>
    </section>
  )
}
