import { useState } from 'react'
import { ChevronLeft, ChevronRight, Sparkle } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const slides = [
  {
    seed: 'feature-hero-1',
    number: 1,
    title: 'Top 5 Places To Start Your Vacation This Summer',
    date: 'January 20, 2017',
  },
  {
    seed: 'feature-hero-2',
    number: 2,
    title: '6 Facts - The Health Benefits of Swimming & Surfing',
    date: 'January 20, 2017',
  },
  {
    seed: 'feature-hero-3',
    number: 3,
    title: 'Popular Lifestyle Tips',
    date: 'January 20, 2017',
  },
  {
    seed: 'feature-hero-4',
    number: 4,
    title: '7 Tricks of Skateboarding For A Beginner',
    date: 'January 20, 2017',
  },
] as const

export function HeroSlider() {
  const [active, setActive] = useState(0)

  const goTo = (index: number) => {
    setActive((index + slides.length) % slides.length)
  }

  return (
    <section aria-label="Featured stories" className="relative">
      <div className="relative h-[650px] w-full overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={slide.seed}
            aria-hidden={index !== active}
            className={cn(
              'absolute inset-0 transition-opacity duration-500',
              index === active ? 'opacity-100' : 'opacity-0',
            )}
          >
            <img
              src={`https://picsum.photos/seed/${slide.seed}/1600/650`}
              alt=""
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black/10" aria-hidden="true" />
            <div className="absolute bottom-0 left-0 max-w-3xl px-8 pb-10 sm:px-12 sm:pb-14">
              <span className="flex h-15 w-15 items-center justify-center bg-brand-500 font-numeral text-2xl text-white">
                {slide.number}
              </span>
              <h1 className="mt-4 pl-20 font-serif text-[28px] leading-[1.3] text-black dark:text-white">
                {slide.title}
              </h1>
              <p className="mt-3 flex items-center gap-2 pl-20 text-sm font-semibold uppercase tracking-[0.28em] text-brand-500">
                <Sparkle className="h-6 w-6 text-gold-400" aria-hidden="true" />
                {slide.date}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute right-6 bottom-6 z-10 flex items-center gap-3">
        <button
          type="button"
          aria-label="Previous slide"
          onClick={() => goTo(active - 1)}
          className="flex h-11 w-11 items-center justify-center rounded bg-black/40 text-white transition-colors hover:bg-brand-500"
        >
          <ChevronLeft className="h-5 w-5" aria-hidden="true" />
        </button>
        <button
          type="button"
          aria-label="Next slide"
          onClick={() => goTo(active + 1)}
          className="flex h-11 w-11 items-center justify-center rounded bg-black/40 text-white transition-colors hover:bg-brand-500"
        >
          <ChevronRight className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>

      <ol className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2">
        {slides.map((slide, index) => (
          <li key={slide.seed}>
            <button
              type="button"
              aria-label={`Go to slide ${index + 1}`}
              aria-current={index === active}
              onClick={() => goTo(index)}
              className={cn(
                'flex h-8 w-8 items-center justify-center bg-black/40 font-numeral text-sm text-white transition-colors hover:bg-brand-500',
                index === active && 'bg-brand-500',
              )}
            >
              {index + 1}
            </button>
          </li>
        ))}
      </ol>
    </section>
  )
}
