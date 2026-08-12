import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const slides = [
  { heading: 'Best Restaurant', image: 'https://picsum.photos/id/292/1920/1080' },
  { heading: 'Nutritious & Tasty', image: 'https://picsum.photos/id/431/1920/1080' },
  { heading: 'Delicious Specialties', image: 'https://picsum.photos/id/1080/1920/1080' },
] as const

const AUTOPLAY_MS = 6000

export function HeroSlider() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % slides.length)
    }, AUTOPLAY_MS)
    return () => window.clearInterval(timer)
  }, [])

  const goTo = (index: number) => setActive(index)
  const prev = () => setActive((current) => (current - 1 + slides.length) % slides.length)
  const next = () => setActive((current) => (current + 1) % slides.length)
  const slide = slides[active]!

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gray-950"
    >
      {slides.map((slide, index) => (
        <img
          key={slide.heading}
          src={slide.image}
          alt=""
          aria-hidden="true"
          className={cn(
            'absolute inset-0 h-full w-full object-cover transition-opacity duration-700',
            index === active ? 'opacity-70' : 'opacity-0',
          )}
        />
      ))}
      <div className="absolute inset-0 bg-black/50" aria-hidden="true" />

      <div className="relative mx-auto px-4 py-24 text-center lg:px-8">
        <span className="font-script text-7xl text-primary-500">Forno</span>
        <h1 className="mt-4 text-4xl font-semibold uppercase tracking-wide text-white sm:text-6xl lg:text-7xl">
          {slide.heading}
        </h1>
      </div>

      <button
        type="button"
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 hidden -translate-y-1/2 rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-primary-500 sm:block"
      >
        <ChevronLeft className="h-6 w-6" aria-hidden="true" />
      </button>
      <button
        type="button"
        onClick={next}
        aria-label="Next slide"
        className="absolute right-4 top-1/2 hidden -translate-y-1/2 rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-primary-500 sm:block"
      >
        <ChevronRight className="h-6 w-6" aria-hidden="true" />
      </button>

      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 gap-3">
        {slides.map((slide, index) => (
          <button
            key={slide.heading}
            type="button"
            onClick={() => goTo(index)}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === active}
            className={cn(
              'h-3 w-3 rounded-full transition-colors',
              index === active ? 'bg-primary-500' : 'bg-white/50 hover:bg-white',
            )}
          />
        ))}
      </div>
    </section>
  )
}
