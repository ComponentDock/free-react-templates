import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { heroDotLabel, heroNextLabel, heroPrevLabel, heroSectionLabel, heroSlides } from '../data'

const picsum = (seed: string, width: number, height: number) =>
  `https://picsum.photos/seed/${seed}/${width}/${height}`

export function HeroSlider() {
  const [index, setIndex] = useState(0)
  const slide = heroSlides[index]!

  const prev = () => setIndex((current) => (current - 1 + heroSlides.length) % heroSlides.length)
  const next = () => setIndex((current) => (current + 1) % heroSlides.length)

  return (
    <section aria-label={heroSectionLabel} id="home" className="relative">
      <div className="relative h-[650px] w-full overflow-hidden bg-black">
        <img
          src={picsum(slide.seed, 1600, 650)}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/10" aria-hidden="true" />

        <div className="relative z-10 mx-auto flex h-full max-w-6xl items-end px-4 pb-16 sm:px-6">
          <div className="max-w-xl bg-white p-6 shadow-xl dark:bg-coal dark:text-white/80 md:p-8">
            <p className="mb-2 text-xs font-medium uppercase tracking-widest text-ink dark:text-white/70">
              <a href="#" className="font-bold text-heading hover:text-brand dark:text-white">
                {slide.category}
              </a>{' '}
              <span>{slide.date}</span> <span>By {slide.author}</span>
            </p>
            <h1 className="text-2xl font-bold leading-snug text-heading dark:text-white md:text-[28px]">
              {slide.title}
            </h1>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2">
        <button
          type="button"
          aria-label={heroPrevLabel}
          onClick={prev}
          className="flex h-10 w-10 items-center justify-center rounded bg-white text-heading shadow transition-colors hover:bg-brand hover:text-white"
        >
          <ChevronLeft className="h-5 w-5" aria-hidden="true" />
        </button>
        {heroSlides.map((_, dotIndex) => (
          <button
            key={dotIndex}
            type="button"
            aria-label={heroDotLabel(dotIndex)}
            aria-current={dotIndex === index ? 'true' : undefined}
            onClick={() => setIndex(dotIndex)}
            className={cn(
              'h-2.5 w-2.5 rounded-full transition-colors',
              dotIndex === index ? 'bg-brand' : 'bg-white/70 hover:bg-white',
            )}
          />
        ))}
        <button
          type="button"
          aria-label={heroNextLabel}
          onClick={next}
          className="flex h-10 w-10 items-center justify-center rounded bg-white text-heading shadow transition-colors hover:bg-brand hover:text-white"
        >
          <ChevronRight className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>
    </section>
  )
}
