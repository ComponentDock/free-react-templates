import { useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const slides = [
  {
    image: 'https://picsum.photos/seed/domicile-hero1/1920/800',
    heading: 'We Combine Business with Finance',
    subtext:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    image: 'https://picsum.photos/seed/domicile-hero2/1920/800',
    heading: 'Strategic Solutions for Growth',
    subtext:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    image: 'https://picsum.photos/seed/domicile-hero3/1920/800',
    heading: 'Your Partner in Financial Success',
    subtext:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
] as const

export function HeroSlider() {
  const [current, setCurrent] = useState(0)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current)
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 5000)
  }

  useEffect(() => {
    resetTimer()
    return () => {
      clearInterval(timerRef.current as ReturnType<typeof setInterval>)
    }
  }, [])

  const goTo = (index: number) => {
    setCurrent(index)
    resetTimer()
  }

  const prev = () => goTo((current - 1 + slides.length) % slides.length)
  const next = () => goTo((current + 1) % slides.length)

  const slide = slides[current]!

  return (
    <section
      id="home"
      className="relative h-[500px] w-full overflow-hidden sm:h-[600px] lg:h-[700px]"
      aria-label="Hero slider"
    >
      <img
        src={slide.image}
        alt=""
        className="absolute inset-0 h-full w-full object-cover transition-opacity duration-500"
      />
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 mx-auto flex h-full max-w-6xl items-center px-4 sm:px-6">
        <div className="max-w-2xl">
          <h1 className="font-display text-4xl font-bold uppercase leading-tight text-white sm:text-5xl lg:text-6xl">
            {slide.heading}
          </h1>
          <p className="mt-4 max-w-lg text-base text-gray-300 sm:text-lg">{slide.subtext}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#about"
              className="inline-flex items-center justify-center bg-primary-400 px-10 py-3 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-primary-500"
            >
              Explore Us
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center border-2 border-white px-10 py-3 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-white hover:text-ink"
            >
              Get Free Quote
            </a>
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center bg-white/20 text-white backdrop-blur-sm transition-colors hover:bg-white/40"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        type="button"
        onClick={next}
        aria-label="Next slide"
        className="absolute right-4 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center bg-white/20 text-white backdrop-blur-sm transition-colors hover:bg-white/40"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-3 w-3 rounded-full transition-colors ${
              i === current ? 'bg-primary-400' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </section>
  )
}
