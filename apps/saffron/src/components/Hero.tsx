import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { heroSlides } from '../data'

const SLIDE_MS = 6000

export function Hero() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % heroSlides.length)
    }, SLIDE_MS)
    return () => window.clearInterval(timer)
  }, [])

  const goTo = (index: number) => {
    setActive((index + heroSlides.length) % heroSlides.length)
  }

  return (
    <section
      aria-label="Featured stories"
      className="relative h-[calc(100vh-265px)] min-h-[550px] overflow-hidden bg-midnight"
    >
      {heroSlides.map((slide, index) => (
        <div
          key={slide.seed}
          role="group"
          aria-roledescription="slide"
          aria-label={`Slide ${index + 1} of ${heroSlides.length}`}
          aria-hidden={active !== index}
          className={cn(
            'absolute inset-0 transition-opacity duration-700',
            active === index ? 'opacity-100' : 'pointer-events-none opacity-0',
          )}
        >
          <img
            src={`https://picsum.photos/seed/${slide.seed}/1600/800`}
            alt=""
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/25" aria-hidden="true" />
          <div className="absolute bottom-[16%] left-5 max-w-[560px] rounded-[3px] bg-black/60 px-10 py-6 text-white md:left-[30%]">
            <a
              href="#blog"
              className="inline-block rounded-[1px] bg-brand px-[15px] py-[7px] text-[0.8rem] font-medium uppercase tracking-[2px] text-white transition-colors hover:bg-transparent hover:text-brand"
            >
              {slide.category}
            </a>
            <h2 className="mt-2 font-bold leading-tight tracking-[3px]">{slide.headline}</h2>
            <p className="mt-1 font-body text-sm text-white/80">{slide.date}</p>
          </div>
        </div>
      ))}

      <button
        type="button"
        aria-label="Previous slide"
        onClick={() => goTo(active - 1)}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 text-white/80 transition-colors hover:text-brand"
      >
        <ChevronLeft className="h-8 w-8" aria-hidden="true" />
      </button>
      <button
        type="button"
        aria-label="Next slide"
        onClick={() => goTo(active + 1)}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 text-white/80 transition-colors hover:text-brand"
      >
        <ChevronRight className="h-8 w-8" aria-hidden="true" />
      </button>

      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 gap-2">
        {heroSlides.map((slide, index) => (
          <button
            key={slide.seed}
            type="button"
            aria-label={`Go to slide ${index + 1}`}
            aria-current={active === index ? 'true' : undefined}
            onClick={() => setActive(index)}
            className={cn(
              'h-[3px] w-[22px] transition-colors',
              active === index ? 'bg-brand' : 'bg-white/60',
            )}
          />
        ))}
      </div>
    </section>
  )
}
