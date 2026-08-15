import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import {
  heroCtaLabel,
  heroDotLabel,
  heroLabel,
  heroNextLabel,
  heroPrevLabel,
  heroSlides,
} from '../data'
import { cn } from '@free-react-templates/ui'

export function HeroSlider() {
  const [index, setIndex] = useState(0)
  const slide = heroSlides[index]!

  return (
    <section
      id="home-section"
      aria-label={heroLabel}
      className="relative h-[950px] overflow-hidden bg-ink"
    >
      <img
        src={slide.image}
        alt={slide.imageAlt}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/40" aria-hidden="true" />

      <div className="absolute left-6 top-[32%] max-w-[580px] sm:left-[60px]">
        <h2 className="text-[42px] font-semibold leading-[1.2] text-white sm:text-6xl">
          {slide.title}
        </h2>
        <p className="mt-[22px] text-sm leading-[2.14] text-white">{slide.subtitle}</p>
        <a
          href="#products-section"
          className="mt-10 inline-flex h-[61px] w-[178px] items-center justify-center border-2 border-white text-base font-semibold text-white transition-colors hover:bg-white hover:text-ink"
        >
          {heroCtaLabel}
        </a>
      </div>

      {/* Numbered dots. */}
      <div className="absolute bottom-[30px] left-6 flex items-center gap-5 sm:left-[60px]">
        {heroSlides.map((s, i) => (
          <button
            key={s.imageAlt}
            type="button"
            aria-label={heroDotLabel(i + 1)}
            aria-current={index === i ? 'true' : undefined}
            onClick={() => setIndex(i)}
            className={cn(
              'text-sm font-semibold text-white transition-colors hover:text-accent',
              index === i && 'text-accent',
            )}
          >
            0{i + 1}.
          </button>
        ))}
      </div>

      {/* Prev / next controls. */}
      <div className="absolute bottom-[26px] right-6 flex items-center gap-3 sm:right-[60px]">
        <button
          type="button"
          aria-label={heroPrevLabel}
          onClick={() => setIndex((value) => (value + heroSlides.length - 1) % heroSlides.length)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/60 text-white transition-colors hover:border-white hover:text-accent"
        >
          <ChevronLeft aria-hidden="true" className="h-5 w-5" />
        </button>
        <button
          type="button"
          aria-label={heroNextLabel}
          onClick={() => setIndex((value) => (value + 1) % heroSlides.length)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/60 text-white transition-colors hover:border-white hover:text-accent"
        >
          <ChevronRight aria-hidden="true" className="h-5 w-5" />
        </button>
      </div>
    </section>
  )
}
