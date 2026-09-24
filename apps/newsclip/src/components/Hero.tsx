import { useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { heroSlides } from '../data'

export function Hero() {
  const [current, setCurrent] = useState(0)
  const timerRef = useRef<ReturnType<typeof setInterval>>(
    undefined! as ReturnType<typeof setInterval>,
  )

  const startTimer = () => {
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroSlides.length)
    }, 5000)
  }

  useEffect(() => {
    startTimer()
    return () => {
      clearInterval(timerRef.current)
    }
  }, [])

  const goTo = (index: number) => {
    clearInterval(timerRef.current)
    setCurrent(index)
    startTimer()
  }

  const prev = () => goTo((current - 1 + heroSlides.length) % heroSlides.length)
  const next = () => goTo((current + 1) % heroSlides.length)

  const slide = heroSlides[current]!

  return (
    <section aria-label="Hero carousel" className="relative h-[500px] w-full">
      {heroSlides.map((s, i) => (
        <div
          key={s.seed}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-700 ${
            i === current ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url(https://picsum.photos/seed/${s.seed}/1200/600)`,
          }}
          aria-hidden={i !== current}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
      ))}

      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6">
        <div className="max-w-lg">
          <span className="mb-3 inline-block bg-brand px-2 py-0.5 text-xs font-bold uppercase tracking-wider text-white">
            {slide.category}
          </span>
          <p className="mb-2 text-sm uppercase tracking-widest text-white/70">{slide.date}</p>
          <h2 className="mb-3 font-serif text-3xl font-bold leading-tight text-white md:text-4xl">
            {slide.title}
          </h2>
          <p className="mb-4 text-sm leading-relaxed text-white/80">{slide.excerpt}</p>
        </div>
      </div>

      {/* Nav arrows */}
      <button
        type="button"
        aria-label="Previous slide"
        onClick={prev}
        className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/40 p-2 text-white transition-colors hover:bg-black/60"
      >
        <ChevronLeft className="h-6 w-6" aria-hidden="true" />
      </button>
      <button
        type="button"
        aria-label="Next slide"
        onClick={next}
        className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/40 p-2 text-white transition-colors hover:bg-black/60"
      >
        <ChevronRight className="h-6 w-6" aria-hidden="true" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {heroSlides.map((s, i) => (
          <button
            key={s.seed}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === current ? 'true' : undefined}
            onClick={() => goTo(i)}
            className={`h-3 w-3 rounded-full border-2 border-white transition-colors ${
              i === current ? 'bg-white' : 'bg-transparent'
            }`}
          />
        ))}
      </div>
    </section>
  )
}
