import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { HERO_SLIDES } from '../data/content'

export function Hero() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused) return
    const id = setInterval(() => setIndex((i) => (i + 1) % HERO_SLIDES.length), 6000)
    return () => clearInterval(id)
  }, [paused])

  const slide = HERO_SLIDES[index]!

  return (
    <section
      id="home"
      aria-label="Hero"
      className="relative h-[600px] w-full overflow-hidden md:h-[720px]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <img
        key={slide.image}
        src={slide.image}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-black/20" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <h4 className="text-sm uppercase tracking-widest text-white">{slide.eyebrow}</h4>
        <h1 className="mt-4 text-5xl font-bold uppercase leading-none text-white md:text-7xl">
          {slide.title}
        </h1>
        <p className="mt-6 max-w-xl font-light text-white">{slide.text}</p>
        <a href="#about" className="header-btn mt-8">
          Discover Now
        </a>
      </div>

      <button
        type="button"
        aria-label="Previous slide"
        onClick={() => setIndex((i) => (i - 1 + HERO_SLIDES.length) % HERO_SLIDES.length)}
        className="absolute left-4 top-1/2 z-10 -translate-y-1/2 text-white/80 transition-colors hover:text-white"
      >
        <ChevronLeft aria-hidden="true" className="h-8 w-8" />
      </button>
      <button
        type="button"
        aria-label="Next slide"
        onClick={() => setIndex((i) => (i + 1) % HERO_SLIDES.length)}
        className="absolute right-4 top-1/2 z-10 -translate-y-1/2 text-white/80 transition-colors hover:text-white"
      >
        <ChevronRight aria-hidden="true" className="h-8 w-8" />
      </button>

      <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 gap-3">
        {HERO_SLIDES.map((s, i) => (
          <button
            key={s.title}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setIndex(i)}
            className={
              i === index ? 'h-3 w-3 rounded-full bg-white' : 'h-3 w-3 rounded-full bg-white/40'
            }
          />
        ))}
      </div>
    </section>
  )
}
