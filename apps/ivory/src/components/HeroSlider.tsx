import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { heroSlides } from '../data'

const SLIDE_INTERVAL_MS = 5000

export function HeroSlider() {
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
    <section
      id="home"
      aria-label="Featured posts"
      className="relative mx-auto mt-10 w-full max-w-7xl px-6"
    >
      <div className="relative overflow-hidden">
        <img
          src={`https://picsum.photos/seed/${slide.seed}/1400/560`}
          alt={slide.alt}
          className="h-[420px] w-full object-cover md:h-[560px]"
        />

        <button
          type="button"
          aria-label="Previous slide"
          onClick={previous}
          className="absolute left-[42px] top-1/2 hidden h-[54px] w-[54px] -translate-y-1/2 items-center justify-center bg-white text-arrow transition-colors hover:bg-gray-100 md:flex"
        >
          <ChevronLeft className="h-6 w-6" aria-hidden="true" />
        </button>
        <button
          type="button"
          aria-label="Next slide"
          onClick={next}
          className="absolute right-[42px] top-1/2 hidden h-[54px] w-[54px] -translate-y-1/2 items-center justify-center bg-white text-arrow transition-colors hover:bg-gray-100 md:flex"
        >
          <ChevronRight className="h-6 w-6" aria-hidden="true" />
        </button>

        <div className="absolute bottom-[30px] left-[38px] flex items-center gap-2">
          {heroSlides.map((item, index) => (
            <button
              key={item.seed}
              type="button"
              aria-label={`Go to slide ${index + 1}`}
              aria-current={index === active ? 'true' : undefined}
              onClick={() => goTo(index)}
              className={cn(
                'h-3 w-3 border-2 border-white bg-transparent',
                index === active && 'bg-white',
              )}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
