import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { heroSlides, imgUrl, shareNames, socialLabels } from '../data'
import { BrandIcon } from './BrandIcon'

const SLIDE_INTERVAL = 5000

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
    <section
      aria-label="Featured posts"
      className="relative h-screen min-h-[560px] overflow-hidden"
    >
      <img
        src={imgUrl(slide.seed, 1600, 900)}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-x-0 bottom-5 z-10 mx-auto w-[calc(100%-40px)] max-w-[500px] bg-white p-10 text-center shadow-[0_15px_30px_0_rgba(0,0,0,0.05)] sm:left-1/2 sm:right-auto sm:-translate-x-1/2">
        <div className="mb-4 flex items-center justify-center gap-2">
          {shareNames.map((name) => (
            <a
              key={name}
              href="#"
              aria-label={socialLabels[name]}
              className="flex h-[30px] w-[30px] items-center justify-center rounded bg-tile text-ink transition-colors hover:bg-brand hover:text-white"
            >
              <BrandIcon name={name} className="h-3.5 w-3.5" />
            </a>
          ))}
        </div>
        <a href="#" className="text-xs font-bold tracking-wide text-brand uppercase">
          {slide.category}
        </a>
        <h2 className="mt-2 font-display text-2xl leading-snug font-medium text-ink">
          <a href="#" className="text-ink transition-colors hover:text-brand">
            {slide.title}
          </a>
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-meta/70">{slide.excerpt}</p>
        <p className="mt-4 text-sm text-meta/70">{slide.meta}</p>
      </div>

      <button
        type="button"
        aria-label="Previous slide"
        onClick={() => goTo(index - 1)}
        className="absolute top-1/2 left-4 z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center bg-white text-ink shadow transition-colors hover:bg-brand hover:text-white md:flex"
      >
        <ChevronLeft className="h-6 w-6" aria-hidden="true" />
      </button>
      <button
        type="button"
        aria-label="Next slide"
        onClick={() => goTo(index + 1)}
        className="absolute top-1/2 right-4 z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center bg-white text-ink shadow transition-colors hover:bg-brand hover:text-white md:flex"
      >
        <ChevronRight className="h-6 w-6" aria-hidden="true" />
      </button>

      <div className="absolute bottom-2 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {heroSlides.map((post, i) => (
          <button
            key={post.seed}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === index ? 'true' : undefined}
            onClick={() => goTo(i)}
            className={cn(
              'h-2.5 w-2.5 rounded-full bg-white/70 transition-colors hover:bg-brand',
              i === index && 'bg-brand',
            )}
          />
        ))}
      </div>
    </section>
  )
}
