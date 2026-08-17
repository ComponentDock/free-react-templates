import { useState } from 'react'
import { HERO_CTA, HERO_SLIDES } from '../data'
import { cn } from '@free-react-templates/ui'

/* Hero — 700px full-width photo slider with a dark-green tint overlay,
   a centered white headline, sub-line, a white pill CTA, and white dot
   controls. Only the active slide is rendered. */
export function Hero() {
  const [index, setIndex] = useState(0)
  const slide = HERO_SLIDES[index]!

  return (
    <section
      aria-label="Hero"
      id="home"
      className="relative flex h-[700px] items-center justify-center overflow-hidden bg-mint"
    >
      <img
        src={slide.image}
        alt={`Garden scene ${index + 1}`}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-[rgba(48,85,52,0.2)]" aria-hidden="true" />
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <h1 className="font-display text-5xl font-medium leading-[1.2] text-paper lg:text-[60px]">
          {slide.headline}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-xl leading-relaxed text-paper lg:text-2xl">
          {slide.subtext}
        </p>
        <a
          href={HERO_CTA.href}
          className="mt-10 inline-block rounded-[30px] bg-paper px-9 py-3.5 text-lg font-medium text-forest transition-colors hover:bg-transparent hover:text-paper hover:outline hover:outline-2 hover:outline-paper"
        >
          {HERO_CTA.label}
        </a>
      </div>
      <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 items-center gap-3">
        {HERO_SLIDES.map((item, i) => (
          <button
            key={item.image}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === index ? 'true' : undefined}
            onClick={() => setIndex(i)}
            className={cn(
              'rounded-full transition-all',
              i === index
                ? 'h-6 w-6 border-2 border-paper bg-transparent'
                : 'h-2 w-2 bg-paper/70 hover:bg-paper',
            )}
          />
        ))}
      </div>
    </section>
  )
}
