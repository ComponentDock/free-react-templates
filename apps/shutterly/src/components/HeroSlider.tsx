import { useState } from 'react'
import { ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { heroSlides } from '../data'

export function HeroSlider() {
  const [active, setActive] = useState(0)
  const slide = heroSlides[active]!

  const goNext = () => setActive((i) => (i + 1) % heroSlides.length)
  const goPrev = () => setActive((i) => (i - 1 + heroSlides.length) % heroSlides.length)

  return (
    <section
      id="home"
      aria-label="Featured work"
      className="relative h-[950px] overflow-hidden bg-ink"
    >
      <img
        src={slide.image}
        alt={slide.title}
        className="absolute inset-0 h-full w-full object-cover"
      />
      {/* Dark gradient overlay — darkest at the top so the bottom-center caption stays legible */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to bottom, rgba(10,10,10,0.8), rgba(10,10,10,0.05) 18%, rgba(10,10,10,0.7))',
        }}
      />

      <div className="absolute inset-x-0 bottom-24 px-6 text-center text-white">
        <span className="mb-3 block text-xl font-light">{slide.span}</span>
        <h1 className="font-display text-[54px] font-normal uppercase leading-[1.1] sm:text-[70px]">
          {slide.title}
        </h1>
      </div>

      <button
        type="button"
        aria-label="Previous slide"
        onClick={goPrev}
        className="absolute left-6 top-1/2 flex size-12 -translate-y-1/2 items-center justify-center border border-white/40 text-white transition-colors hover:bg-white/10"
      >
        <ChevronLeft aria-hidden="true" className="size-6" />
      </button>
      <button
        type="button"
        aria-label="Next slide"
        onClick={goNext}
        className="absolute right-6 top-1/2 flex size-12 -translate-y-1/2 items-center justify-center border border-white/40 text-white transition-colors hover:bg-white/10"
      >
        <ChevronRight aria-hidden="true" className="size-6" />
      </button>

      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 items-center gap-3">
        {heroSlides.map((s, i) => (
          <button
            key={s.id}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === active ? 'true' : undefined}
            onClick={() => setActive(i)}
            className={cn(
              'size-3 rounded-full transition-colors',
              i === active ? 'bg-white' : 'bg-white/40 hover:bg-white/70',
            )}
          />
        ))}
      </div>

      <a
        href="#about"
        aria-label="Scroll to about section"
        className="absolute bottom-8 right-8 flex size-11 items-center justify-center border border-white/40 text-white transition-colors hover:bg-white/10"
      >
        <ChevronDown aria-hidden="true" className="size-5" />
      </a>
    </section>
  )
}
