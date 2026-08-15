import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { heroHeadlineAccent, heroHeadlineLead, heroSlides, heroSubline } from '../data'

export function Hero() {
  const [index, setIndex] = useState(0)

  function go(delta: number) {
    setIndex((current) => (current + delta + heroSlides.length) % heroSlides.length)
  }

  return (
    <section id="home" className="relative overflow-hidden bg-white">
      {/* Pale-blue decorative curve behind the hero content. */}
      <svg
        aria-hidden="true"
        viewBox="0 0 1440 320"
        className="pointer-events-none absolute inset-x-0 top-0 h-64 w-full text-tint"
        preserveAspectRatio="none"
      >
        <path
          fill="currentColor"
          d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,261.3C960,256,1056,224,1152,208C1248,192,1344,192,1392,192L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        />
      </svg>

      <div className="relative mx-auto max-w-[1250px] px-4 pt-16 pb-20 lg:pt-24">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="text-center lg:text-left">
            <h1 className="mb-6 text-4xl leading-tight font-normal text-ink md:text-5xl lg:text-[54px]">
              {heroHeadlineLead} <span className="text-brand">{heroHeadlineAccent}</span>
            </h1>
            <p className="mb-8 text-lg text-body">{heroSubline}</p>
            <a
              href="#about"
              className="inline-flex h-[50px] min-w-[160px] items-center justify-center rounded-[50px] bg-brand px-8 text-base font-semibold text-white transition-all hover:bg-white hover:text-brand hover:shadow-[0_6px_50px_8px_rgba(21,131,233,0.15)]"
            >
              Start Exploring
            </a>
          </div>

          <div className="relative" aria-label="Device previews">
            {heroSlides.map((slide, i) => (
              <img
                key={slide.image}
                src={slide.image}
                alt={slide.alt}
                aria-hidden={i === index ? undefined : 'true'}
                className={cn(
                  'mx-auto w-full max-w-[560px] rounded-xl shadow-[0_20px_60px_rgba(21,131,233,0.15)] transition-opacity duration-300',
                  i === index ? 'block' : 'hidden',
                )}
              />
            ))}
          </div>
        </div>

        <div className="mt-10 flex items-center justify-center gap-3 lg:justify-start">
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
    </section>
  )
}
