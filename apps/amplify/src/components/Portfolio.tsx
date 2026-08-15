import { useState } from 'react'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { portfolioSlides } from '../data'

export function Portfolio() {
  const [index, setIndex] = useState(0)

  function go(delta: number) {
    setIndex((current) => (current + delta + portfolioSlides.length) % portfolioSlides.length)
  }

  return (
    <section id="portfolio" className="relative overflow-hidden bg-white py-20">
      {/* Decorative pale-blue curve at the bottom-right edge. */}
      <svg
        aria-hidden="true"
        viewBox="0 0 1440 320"
        className="pointer-events-none absolute -right-40 -bottom-24 h-72 w-[640px] text-tint"
        preserveAspectRatio="none"
      >
        <path
          fill="currentColor"
          d="M1440,224L1380,208C1320,192,1200,160,1080,160C960,160,840,192,720,208C600,224,480,224,360,208C240,192,120,160,60,144L0,128L0,320L1440,320Z"
        />
      </svg>

      <div className="relative mx-auto max-w-[1250px] px-4">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-normal text-ink md:text-5xl">Our Portfolio</h2>
          <p className="mt-4 text-body">
            We stay on top of our industry by being experts in yours.
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div
              data-track
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {portfolioSlides.map((slide) => (
                <figure
                  key={slide.image}
                  data-slide
                  className="group relative w-full shrink-0 overflow-hidden rounded-xl bg-tint"
                >
                  <img
                    src={slide.image}
                    alt={slide.alt}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <figcaption className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-ink/80 via-ink/40 to-transparent p-6 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <h3 className="text-xl font-semibold">{slide.title}</h3>
                    <p className="mt-2 text-sm text-white/85">{slide.blurb}</p>
                  </figcaption>
                  <button
                    type="button"
                    aria-label={`View ${slide.title}`}
                    className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-brand opacity-0 shadow transition-opacity duration-300 group-hover:opacity-100"
                  >
                    <ArrowRight className="h-5 w-5" aria-hidden="true" />
                  </button>
                </figure>
              ))}
            </div>
          </div>

          <div className="mt-8 flex items-center justify-center gap-3">
            <button
              type="button"
              aria-label="Previous slide"
              onClick={() => go(-1)}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-tint text-brand transition-colors hover:bg-brand hover:text-white"
            >
              <ChevronLeft className="h-5 w-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              aria-label="Next slide"
              onClick={() => go(1)}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-tint text-brand transition-colors hover:bg-brand hover:text-white"
            >
              <ChevronRight className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
