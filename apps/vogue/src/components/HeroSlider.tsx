import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { heroSlides } from '../data'

export function HeroSlider() {
  const [index, setIndex] = useState(0)
  const total = heroSlides.length
  const slide = heroSlides[index]!
  const prev = () => setIndex((i) => (i - 1 + total) % total)
  const next = () => setIndex((i) => (i + 1) % total)

  return (
    <section aria-label="Featured lookbook slides" aria-roledescription="carousel">
      <div
        role="group"
        aria-roledescription="slide"
        aria-label={`Slide ${index + 1} of ${total}`}
        className="relative flex min-h-[560px] items-center justify-center bg-cover bg-center grayscale md:min-h-[720px]"
        style={{ backgroundImage: `url(${slide.image})` }}
      >
        <div className="absolute inset-0 bg-black/40" aria-hidden="true" />
        <div className="relative z-10 px-4 text-center text-white">
          <p className="font-display text-6xl font-bold md:text-[110px] md:leading-none">
            {slide.eyebrow}
          </p>
          <h1 className="mt-2 font-display text-5xl font-normal text-white md:text-[96px] md:leading-none">
            {slide.title}
          </h1>
          <a
            href="#"
            className="mt-8 inline-block rounded-full border-2 border-white px-10 py-4 text-sm font-semibold uppercase tracking-wide transition-colors hover:bg-white hover:text-brand"
          >
            {slide.cta}
          </a>
        </div>
      </div>

      <button
        type="button"
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 z-10 hidden h-[68px] w-[68px] -translate-y-1/2 items-center justify-center rounded-full bg-accent text-white transition-colors hover:bg-brand md:flex"
      >
        <ChevronLeft className="h-9 w-9" />
      </button>
      <button
        type="button"
        onClick={next}
        aria-label="Next slide"
        className="absolute right-4 top-1/2 z-10 hidden h-[68px] w-[68px] -translate-y-1/2 items-center justify-center rounded-full bg-accent text-white transition-colors hover:bg-brand md:flex"
      >
        <ChevronRight className="h-9 w-9" />
      </button>

      <div className="absolute bottom-12 left-8 z-10 flex gap-3 md:left-28">
        {heroSlides.map((s, i) => (
          <button
            key={s.image}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === index ? 'true' : undefined}
            className={cn('h-[11px] w-[11px] rounded-full', i === index ? 'bg-brand' : 'bg-dot')}
          />
        ))}
      </div>
    </section>
  )
}
