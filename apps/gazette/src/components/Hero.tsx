import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight, MessageCircle } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { heroSlides, photoCards } from '../data'

const SLIDE_INTERVAL_MS = 5000

export function Hero() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const id = setInterval(
      () => setActive((current) => (current + 1) % heroSlides.length),
      SLIDE_INTERVAL_MS,
    )
    return () => clearInterval(id)
  }, [])

  const goTo = (index: number) => setActive(index)
  const previous = () =>
    setActive((current) => (current - 1 + heroSlides.length) % heroSlides.length)
  const next = () => setActive((current) => (current + 1) % heroSlides.length)

  const slide = heroSlides[active]!

  return (
    <section id="home" className="bg-white dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-6 pt-10">
        <div className="relative h-[500px] overflow-hidden">
          <a
            href="#home"
            className="group relative block h-full w-full bg-cover bg-center"
            style={{ backgroundImage: `url(https://picsum.photos/seed/${slide.seed}/1200/500)` }}
          >
            <span
              className="absolute inset-0 bg-black/30 transition-colors group-hover:bg-black/40"
              aria-hidden="true"
            />
            <span className="relative z-10 flex h-full max-w-[50%] flex-col items-start justify-center p-[30px]">
              <span className="rounded bg-brand px-2 py-0.5 text-xs font-medium uppercase text-white">
                {slide.category}
              </span>
              <span className="mt-4 flex items-center gap-2 text-[13px] font-medium uppercase tracking-[0.1em] text-white">
                {slide.date}
                <span className="flex items-center gap-1">
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  {slide.comments}
                </span>
              </span>
              <span className="mt-4 font-sans text-3xl font-bold leading-tight text-white lg:text-4xl">
                {slide.title}
              </span>
              <span className="mt-4 text-sm leading-relaxed text-white/90">{slide.excerpt}</span>
            </span>
          </a>

          <button
            type="button"
            aria-label="Previous slide"
            onClick={previous}
            className="absolute left-4 top-1/2 z-20 -translate-y-1/2 text-white/80 transition-colors hover:text-white"
          >
            <ChevronLeft className="h-9 w-9" aria-hidden="true" />
          </button>
          <button
            type="button"
            aria-label="Next slide"
            onClick={next}
            className="absolute right-4 top-1/2 z-20 -translate-y-1/2 text-white/80 transition-colors hover:text-white"
          >
            <ChevronRight className="h-9 w-9" aria-hidden="true" />
          </button>

          <div className="absolute bottom-6 left-6 z-20 flex items-center gap-2">
            {heroSlides.map((item, index) => (
              <button
                key={item.seed}
                type="button"
                aria-label={`Go to slide ${index + 1}`}
                aria-current={index === active ? 'true' : undefined}
                onClick={() => goTo(index)}
                className={cn(
                  'h-[10px] w-[10px] rounded-full border-2 border-white/50',
                  index === active && 'border-transparent bg-brand',
                )}
              />
            ))}
          </div>
        </div>

        <div className="grid gap-6 pb-14 pt-6 md:grid-cols-3">
          {photoCards.map((card) => (
            <a
              key={card.seed}
              href="#home"
              className="group relative block h-[400px] bg-cover bg-center"
              style={{ backgroundImage: `url(https://picsum.photos/seed/${card.seed}/600/400)` }}
            >
              <span
                className="absolute inset-0 bg-black/30 transition-colors group-hover:bg-black/40"
                aria-hidden="true"
              />
              <span className="relative z-10 flex h-full flex-col justify-end p-6">
                <span className="w-fit rounded bg-brand px-2 py-0.5 text-xs font-medium uppercase text-white">
                  {card.category}
                </span>
                <span className="mt-3 text-[13px] uppercase tracking-[0.1em] text-white">
                  {card.date}
                </span>
                <span className="mt-2 font-sans text-xl font-bold text-white">{card.title}</span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
