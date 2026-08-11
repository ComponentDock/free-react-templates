import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import {
  goToSlideLabel,
  heroSlides,
  imgUrl,
  nextSlideLabel,
  previousSlideLabel,
  sliderLabel,
} from '../data'
import { PostMeta } from './PostMeta'

const SLIDE_INTERVAL = 5000

/* Full-bleed featured-posts carousel (reference `div.owl-carousel.home-slider`,
   `a.a-block.height-lg` 500px): background photo, 30% black overlay (40% on
   hover), category badge, post meta, headline + excerpt capped at 50% width on
   desktop. State-based slider: autoplay, dot indicators, hover-revealed
   prev/next arrows. */
export function HeroSlider() {
  const [index, setIndex] = useState(0)
  const count = heroSlides.length

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % count)
    }, SLIDE_INTERVAL)
    return () => window.clearInterval(id)
  }, [count])

  const goTo = (target: number) => {
    setIndex(((target % count) + count) % count)
  }

  const slide = heroSlides[index]!

  return (
    <section aria-label={sliderLabel} className="group relative mt-5 h-[500px] overflow-hidden">
      <img
        src={imgUrl(slide.seed, 1600, 900)}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div
        className="absolute inset-0 bg-black/30 transition-colors duration-300 group-hover:bg-black/40"
        aria-hidden="true"
      />
      <div className="relative z-10 flex h-full items-center px-8 md:px-20">
        <div className="w-full md:max-w-[50%]">
          <span className="inline-block rounded bg-brand px-2 py-1 text-xs uppercase tracking-[.2em] text-white">
            {slide.category}
          </span>
          <PostMeta className="mt-4 text-white" />
          <h3 className="mt-3 font-heading text-2xl leading-snug font-bold text-white md:text-3xl">
            {slide.title}
          </h3>
          <p className="mt-3 text-white/85">{slide.excerpt}</p>
        </div>
      </div>
      <button
        type="button"
        aria-label={previousSlideLabel}
        onClick={() => goTo(index - 1)}
        className="absolute top-1/2 left-4 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/20 text-white opacity-0 transition-opacity duration-300 hover:bg-brand group-hover:opacity-100"
      >
        <ChevronLeft className="h-6 w-6" aria-hidden="true" />
      </button>
      <button
        type="button"
        aria-label={nextSlideLabel}
        onClick={() => goTo(index + 1)}
        className="absolute top-1/2 right-4 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/20 text-white opacity-0 transition-opacity duration-300 hover:bg-brand group-hover:opacity-100"
      >
        <ChevronRight className="h-6 w-6" aria-hidden="true" />
      </button>
      <div className="absolute bottom-[100px] left-1/2 z-20 flex -translate-x-1/2 items-center gap-2.5">
        {heroSlides.map((s, i) => (
          <button
            key={s.seed}
            type="button"
            aria-label={goToSlideLabel(i + 1)}
            aria-current={i === index ? 'true' : undefined}
            onClick={() => goTo(i)}
            className={cn(
              'h-2.5 w-2.5 rounded-full border-2 transition-colors',
              i === index ? 'border-white bg-white' : 'border-white/50 bg-transparent',
            )}
          />
        ))}
      </div>
    </section>
  )
}
