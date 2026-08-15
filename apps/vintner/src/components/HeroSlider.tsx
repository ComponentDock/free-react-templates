import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { heroSlides } from '../data'

const slideCount = heroSlides.length
const AUTOPLAY_MS = 5000

export function HeroSlider() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % slideCount), AUTOPLAY_MS)
    return () => clearInterval(id)
  }, [])

  const next = () => setIndex((i) => (i + 1) % slideCount)
  const prev = () => setIndex((i) => (i - 1 + slideCount) % slideCount)

  return (
    <section
      id="home"
      aria-label="Featured wines"
      className="relative h-screen min-h-[700px] overflow-hidden bg-[#222]"
    >
      <div
        data-track
        className="flex h-full transition-transform duration-500"
        style={{ transform: `translateX(${-index * 100}%)` }}
      >
        {heroSlides.map((slide, i) => (
          <div
            key={slide.id}
            data-slide
            aria-hidden={i !== index ? 'true' : undefined}
            className="relative h-full w-full shrink-0"
          >
            <img src={slide.image} alt={slide.alt} className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-[#222]/40" aria-hidden="true" />
            <div className="absolute inset-0 flex items-center justify-center px-4">
              <div className="text-center text-white">
                <p className="font-serif text-xl tracking-wide lg:text-2xl">{slide.subTitle}</p>
                <h1 className="mt-3 font-serif text-5xl font-bold lg:text-7xl">{slide.headline}</h1>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute inset-x-0 bottom-8 flex items-center justify-between px-6 lg:px-16">
        <button
          type="button"
          aria-label="Previous slide"
          onClick={prev}
          className="flex h-12 w-12 items-center justify-center rounded-full border border-white/40 text-white transition-colors hover:bg-white/20"
        >
          <ChevronLeft className="h-6 w-6" aria-hidden="true" />
        </button>
        <div className="flex items-center gap-3">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === index ? 'true' : undefined}
              onClick={() => setIndex(i)}
              className={cn(
                'h-3 w-3 rounded-full bg-white/40 transition-colors hover:bg-white',
                i === index && 'bg-brand',
              )}
            />
          ))}
        </div>
        <button
          type="button"
          aria-label="Next slide"
          onClick={next}
          className="flex h-12 w-12 items-center justify-center rounded-full border border-white/40 text-white transition-colors hover:bg-white/20"
        >
          <ChevronRight className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
    </section>
  )
}
