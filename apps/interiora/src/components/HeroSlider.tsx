import { useState } from 'react'
import { HERO_SLIDES } from '../data'
import { PillLink } from './Pill'
import { cn } from '@free-react-templates/ui'

/* HeroSlider — full-bleed photo slider with three slides, a dark
   translucent overlay, a white headline with an underlined phrase, and
   dot navigation. Only the active slide is rendered. */
export function HeroSlider() {
  const [index, setIndex] = useState(0)
  const slide = HERO_SLIDES[index]!
  const [before, after] = slide.headline.split(slide.underline)

  return (
    <section
      aria-label="Hero"
      id="home"
      className="relative flex min-h-[600px] items-center justify-center overflow-hidden lg:min-h-[850px]"
    >
      <img
        src={slide.image}
        alt="Interior design showcase"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/20" aria-hidden="true" />
      <div className="relative z-10 mx-auto max-w-4xl px-6 py-32 text-center">
        <h1 className="font-display text-4xl font-medium leading-[1.3] text-white lg:text-[60px]">
          {before}
          <span className="underline decoration-brand underline-offset-4">{slide.underline}</span>
          {after}
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-xl text-white/90">{slide.subtext}</p>
        <PillLink href="#services" variant="dark" className="mt-10">
          Check Our Services
        </PillLink>
      </div>
      <div
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 gap-3"
        aria-label="Slide navigation"
      >
        {HERO_SLIDES.map((item, i) => (
          <button
            key={item.image}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === index ? 'true' : undefined}
            onClick={() => setIndex(i)}
            className={cn(
              'h-3 w-3 rounded-full transition-colors',
              i === index ? 'bg-brand' : 'bg-white/60 hover:bg-white',
            )}
          />
        ))}
      </div>
    </section>
  )
}
