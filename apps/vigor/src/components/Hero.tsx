import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { HERO_SLIDES } from '../data'

/**
 * Hero — ~880px full-bleed photo carousel with a `rgba(0,0,0,0.3)` overlay,
 * a huge (100px on desktop) white weight-400 headline, subtext, and an
 * outlined green CTA per slide. Owl-style prev/next arrows sit at the sides;
 * the three slide indicators double as accessible jump controls.
 */
export function Hero() {
  const [index, setIndex] = useState(0)
  const count = HERO_SLIDES.length
  const slide = HERO_SLIDES[index]!

  const prev = () => setIndex((i) => (i - 1 + count) % count)
  const next = () => setIndex((i) => (i + 1) % count)

  return (
    <section id="home" className="relative flex h-[880px] items-center overflow-hidden bg-night">
      <img src={slide.image} alt="" className="absolute inset-0 h-full w-full object-cover" />
      <div aria-hidden="true" className="absolute inset-0 bg-black/30" />

      <div className="relative mx-auto w-full max-w-7xl px-4 text-center lg:px-8">
        <h2 className="text-6xl font-normal leading-tight text-white lg:text-[100px]">
          {slide.title}
        </h2>
        <p className="mx-auto mt-8 max-w-2xl text-sm font-semibold text-white">{slide.text}</p>
        <a
          href={slide.cta === 'Get a membership' ? '#pricing' : '#services'}
          className="mt-10 inline-block min-w-[200px] rounded-[10px] border-[3px] border-brand px-8 py-3 text-sm font-bold uppercase tracking-wide text-brand transition-colors hover:bg-brand hover:text-white"
        >
          {slide.cta}
        </a>
      </div>

      <button
        type="button"
        aria-label="Previous slide"
        onClick={prev}
        className="absolute left-[5%] top-1/2 hidden -translate-y-1/2 items-center rounded-[10px] border-[3px] border-brand bg-night px-4 py-2.5 text-sm font-bold uppercase tracking-wide text-white transition-opacity hover:opacity-80 lg:flex"
      >
        <ChevronLeft className="h-4 w-4" aria-hidden="true" />
      </button>
      <button
        type="button"
        aria-label="Next slide"
        onClick={next}
        className="absolute right-[5%] top-1/2 hidden -translate-y-1/2 items-center rounded-[10px] border-[3px] border-brand bg-night px-4 py-2.5 text-sm font-bold uppercase tracking-wide text-white transition-opacity hover:opacity-80 lg:flex"
      >
        <ChevronRight className="h-4 w-4" aria-hidden="true" />
      </button>

      <div className="absolute bottom-10 left-1/2 flex -translate-x-1/2 items-center gap-3">
        {HERO_SLIDES.map((item, i) => (
          <button
            key={item.title}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === index ? 'true' : undefined}
            onClick={() => setIndex(i)}
            className={cn(
              'h-2.5 w-2.5 rounded-full transition-all',
              i === index ? 'bg-brand-light' : 'bg-white/40 hover:bg-white/70',
            )}
          />
        ))}
      </div>
    </section>
  )
}
