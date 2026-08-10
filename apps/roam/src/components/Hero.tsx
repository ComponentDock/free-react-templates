import { useEffect, useState } from 'react'
import { Calendar, ChevronLeft, ChevronRight, MessageCircle } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { heroSlides, imgUrl, readMoreLabel } from '../data'

const SLIDE_INTERVAL = 5000

export function Hero() {
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
      className="relative h-[618px] overflow-hidden bg-white sm:h-[752px]"
    >
      <img
        src={imgUrl(slide.seed, 1600, 900)}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      {/* Soft white wash behind the text column — the original pairs black
          serif text with a light editorial photo (the preview's blog_text
          also gains a white background under 1250px). */}
      <div className="absolute inset-0 bg-gradient-to-l from-white/85 via-white/40 to-transparent" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-4 sm:px-6">
        <div className="ml-auto w-full max-w-xl lg:mr-[6%]">
          <div className="flex items-center gap-5 text-sm text-ink">
            <span className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-aqua" aria-hidden="true" />
              {slide.date}
            </span>
            <span className="flex items-center gap-2">
              <MessageCircle className="h-4 w-4 text-sky" aria-hidden="true" />
              {slide.comments}
            </span>
          </div>
          <h1 className="mt-6 font-display text-5xl leading-tight font-bold text-ink lg:text-6xl">
            <a
              href="#"
              className="transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
            >
              {slide.headline}
            </a>
          </h1>
          <a
            href="#"
            className="mt-8 inline-block text-[15px] font-medium text-ink transition-opacity hover:opacity-70 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
          >
            {readMoreLabel}
          </a>
        </div>
      </div>

      <img
        src={imgUrl(`${slide.seed}-cutout`, 700, 700)}
        alt=""
        className="absolute right-0 bottom-0 z-[5] hidden w-[38%] max-w-[560px] opacity-90 mix-blend-multiply lg:block"
      />

      <button
        type="button"
        aria-label="Previous slide"
        onClick={() => goTo(index - 1)}
        className="absolute top-1/2 left-4 z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center bg-white/80 text-ink shadow transition-colors hover:bg-primary hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary md:flex"
      >
        <ChevronLeft className="h-6 w-6" aria-hidden="true" />
      </button>
      <button
        type="button"
        aria-label="Next slide"
        onClick={() => goTo(index + 1)}
        className="absolute top-1/2 right-4 z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center bg-white/80 text-ink shadow transition-colors hover:bg-primary hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary md:flex"
      >
        <ChevronRight className="h-6 w-6" aria-hidden="true" />
      </button>

      <div className="absolute bottom-8 left-8 z-20 flex gap-2">
        {heroSlides.map((slideItem, i) => (
          <button
            key={slideItem.seed}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === index ? 'true' : undefined}
            onClick={() => goTo(i)}
            className={cn(
              'h-2.5 w-2.5 rounded-full bg-gray-500/60 transition-colors hover:bg-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary',
              i === index && 'bg-primary',
            )}
          />
        ))}
      </div>
    </section>
  )
}
