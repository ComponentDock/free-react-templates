import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { HERO_HEADLINE_1, HERO_HEADLINE_2, HERO_SLIDES } from '../data'

/**
 * HeroSlider — full-width two-image carousel with previous/next controls
 * and an HTML headline overlay ("Education for Brighter Future") that
 * replaces the text baked into the reference image.
 */
export function HeroSlider() {
  const [index, setIndex] = useState(0)
  const slide = HERO_SLIDES[index]!

  const prev = () => {
    setIndex((i) => (i - 1 + HERO_SLIDES.length) % HERO_SLIDES.length)
  }
  const next = () => {
    setIndex((i) => (i + 1) % HERO_SLIDES.length)
  }

  return (
    <section id="home-section" aria-label="Hero slideshow" className="relative">
      <div className="relative h-[70vh] min-h-[420px] w-full overflow-hidden">
        <img key={index} src={slide.image} alt={slide.alt} className="h-full w-full object-cover" />
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto w-full max-w-6xl px-4">
            <div className="max-w-xl">
              <h1 className="font-serif text-5xl italic text-primary-600 md:text-6xl">
                {HERO_HEADLINE_1}
              </h1>
              <p className="font-script text-4xl text-white drop-shadow md:text-5xl">
                {HERO_HEADLINE_2}
              </p>
            </div>
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/60 p-3 text-black transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/40"
      >
        <ChevronLeft className="h-7 w-7" aria-hidden="true" />
      </button>
      <button
        type="button"
        onClick={next}
        aria-label="Next slide"
        className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/60 p-3 text-black transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/40"
      >
        <ChevronRight className="h-7 w-7" aria-hidden="true" />
      </button>

      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        {HERO_SLIDES.map((item, i) => (
          <button
            key={item.image}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={cn(
              'h-2.5 w-2.5 rounded-full transition-colors',
              i === index ? 'bg-primary-600' : 'bg-white/60 hover:bg-white',
            )}
          />
        ))}
      </div>
    </section>
  )
}
