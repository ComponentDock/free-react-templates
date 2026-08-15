import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { heroButtonLabel, heroNextLabel, heroPreviousLabel, heroSlides } from '../data'

export function HeroSlider() {
  const [index, setIndex] = useState(0)
  const slide = heroSlides[index]!

  const goPrevious = () => setIndex((value) => (value === 0 ? heroSlides.length - 1 : value - 1))
  const goNext = () => setIndex((value) => (value + 1) % heroSlides.length)

  return (
    <section
      id="home-section"
      aria-label="Featured watches"
      className="relative overflow-hidden bg-herobg"
    >
      <div className="mx-auto grid min-h-[560px] max-w-[1320px] items-center gap-10 px-6 py-16 lg:grid-cols-2 lg:px-10">
        <div className="max-w-xl">
          <h1 className="font-sans text-5xl font-bold leading-[1.2] text-black md:text-6xl lg:text-[88px]">
            {slide.title}
          </h1>
          <p className="mt-7 max-w-md text-[17px] leading-[1.6] text-[#212025]">
            {slide.paragraph}
          </p>
          <div className="mt-14">
            <a
              href="#arrivals-section"
              className="group relative inline-block overflow-hidden bg-herobtn px-7 py-5 font-sans text-base font-semibold uppercase tracking-[0.03em] text-white"
            >
              <span className="absolute inset-y-0 left-0 w-full origin-left scale-x-0 bg-brand transition-transform duration-500 ease-[cubic-bezier(0.5,1.6,0.4,0.7)] group-hover:scale-x-100" />
              <span className="relative">{heroButtonLabel}</span>
            </a>
          </div>
        </div>
        <div className="relative flex justify-center">
          <div
            aria-hidden="true"
            className="absolute top-1/2 h-[380px] w-24 -translate-y-1/2 bg-brand lg:h-[560px]"
          />
          <img
            src={slide.image}
            alt=""
            className="relative z-10 aspect-square w-full max-w-[480px] object-cover mix-blend-multiply"
          />
        </div>
      </div>
      <div className="absolute bottom-8 left-6 flex gap-3 lg:left-10">
        <button
          type="button"
          aria-label={heroPreviousLabel}
          onClick={goPrevious}
          className="flex h-12 w-12 items-center justify-center border border-navy bg-transparent text-navy transition-colors hover:bg-navy hover:text-white"
        >
          <ChevronLeft className="h-6 w-6" aria-hidden="true" />
        </button>
        <button
          type="button"
          aria-label={heroNextLabel}
          onClick={goNext}
          className="flex h-12 w-12 items-center justify-center border border-navy bg-transparent text-navy transition-colors hover:bg-navy hover:text-white"
        >
          <ChevronRight className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
    </section>
  )
}
