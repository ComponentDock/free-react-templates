import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { heroSlides } from '../data'

/** Full-viewport hero slider (height 100vh - 40px topbar): 3 background
 *  slides, each with a 28px label, a Playfair Display uppercase headline
 *  and a periwinkle "Shop Now" pill; prev/next arrows + pagination dots. */
export function HeroSlider() {
  const [current, setCurrent] = useState(0)
  const slide = heroSlides[current]!

  const goTo = (index: number) => {
    setCurrent((index + heroSlides.length) % heroSlides.length)
  }

  return (
    <section
      id="home"
      aria-label="Featured collections"
      className="relative h-[calc(100vh-40px)] overflow-hidden"
    >
      {heroSlides.map((item, index) => (
        <div
          key={item.headline}
          aria-hidden={index === current ? undefined : 'true'}
          className={cn(
            'absolute inset-0 bg-cover bg-center transition-opacity duration-700',
            index === current ? 'opacity-100' : 'opacity-0',
          )}
          style={{ backgroundImage: `url(${item.image})` }}
        >
          <div className="flex h-full max-w-[1700px] items-center px-6 lg:px-16">
            <div className="max-w-2xl">
              <p className="text-[28px] text-ink-soft">{item.label}</p>
              <h2 className="mt-2 font-display text-[60px] font-bold uppercase leading-[1.1] text-ink-soft">
                {item.headline}
              </h2>
              <a href="#products" className="btn-pill-brand mt-8">
                Shop Now
              </a>
            </div>
          </div>
        </div>
      ))}

      <button
        type="button"
        aria-label="Previous slide"
        onClick={() => goTo(current - 1)}
        className="absolute left-6 top-1/2 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/60 text-ink-soft transition-colors hover:bg-brand hover:text-white md:flex"
      >
        <ChevronLeft className="h-6 w-6" aria-hidden="true" />
      </button>
      <button
        type="button"
        aria-label="Next slide"
        onClick={() => goTo(current + 1)}
        className="absolute right-6 top-1/2 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/60 text-ink-soft transition-colors hover:bg-brand hover:text-white md:flex"
      >
        <ChevronRight className="h-6 w-6" aria-hidden="true" />
      </button>

      <div className="absolute bottom-10 left-0 right-0 flex justify-center gap-3">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            type="button"
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === current ? 'true' : undefined}
            onClick={() => goTo(index)}
            className={cn(
              'h-[6px] w-[22px] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand',
              index === current ? 'bg-brand' : 'bg-ink-soft/30 hover:bg-ink-soft/60',
            )}
          />
        ))}
      </div>

      {/* sr-only live region announcing the active slide */}
      <p className="sr-only" role="status">
        {slide.headline}
      </p>
    </section>
  )
}
