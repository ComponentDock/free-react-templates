import { useEffect, useState } from 'react'

interface Slide {
  headline: string
  subtitle: string
  image: string
}

const slides: Slide[] = [
  {
    headline: 'Creative Photography',
    subtitle: 'Capturing moments that last forever',
    image: 'https://picsum.photos/seed/fotura-1/1920/1080',
  },
  {
    headline: 'Visual Stories',
    subtitle: 'Every frame tells a different tale',
    image: 'https://picsum.photos/seed/fotura-2/1920/1080',
  },
  {
    headline: 'Artistic Vision',
    subtitle: 'Where light meets imagination',
    image: 'https://picsum.photos/seed/fotura-3/1920/1080',
  },
  {
    headline: 'Pure Emotion',
    subtitle: 'Photographs that speak to the soul',
    image: 'https://picsum.photos/seed/fotura-4/1920/1080',
  },
]

const SLIDE_INTERVAL = 5000

export function HeroSlider() {
  const [current, setCurrent] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setIsAnimating(true)
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % slides.length)
        setIsAnimating(false)
      }, 600)
    }, SLIDE_INTERVAL)
    return () => clearInterval(timer)
  }, [])

  const goTo = (index: number) => {
    if (index === current) return
    setIsAnimating(true)
    setTimeout(() => {
      setCurrent(index)
      setIsAnimating(false)
    }, 600)
  }

  const slide = slides[current]!

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black" aria-label="Hero slider">
      {/* Background image with Ken Burns effect */}
      <div
        className={`absolute inset-0 bg-cover bg-center transition-transform duration-[8000ms] ease-out ${
          isAnimating ? 'scale-110 opacity-0' : 'scale-100 opacity-100'
        }`}
        style={{ backgroundImage: `url(${slide.image})` }}
        role="img"
        aria-label={slide.headline}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Slide content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
        <h1
          className={`mb-4 text-5xl font-semibold leading-tight tracking-wide transition-all duration-700 sm:text-6xl md:text-7xl lg:text-8xl ${
            isAnimating ? 'translate-y-4 opacity-0' : 'translate-y-0 opacity-100'
          }`}
        >
          {slide.headline}
        </h1>
        <p
          className={`mb-8 max-w-xl text-lg font-light text-white/80 transition-all delay-100 duration-700 sm:text-xl ${
            isAnimating ? 'translate-y-4 opacity-0' : 'translate-y-0 opacity-100'
          }`}
        >
          {slide.subtitle}
        </p>
        <a
          href="#portfolio"
          className={`inline-block border-b-2 border-white px-10 py-3 text-sm font-semibold uppercase tracking-[5px] text-white transition-all delay-200 duration-700 hover:border-brand hover:text-brand ${
            isAnimating ? 'translate-y-4 opacity-0' : 'translate-y-0 opacity-100'
          }`}
        >
          VISIT
        </a>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goTo(index)}
            className={`h-3 w-3 rounded-full border-2 border-white transition-colors ${
              index === current ? 'bg-white' : 'bg-transparent'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
