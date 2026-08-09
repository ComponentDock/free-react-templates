import { useEffect, useState } from 'react'
import { cn } from '@free-react-templates/ui'

const slides = [
  {
    title: 'Show Stopper.',
    subtitle: 'Jessica Smith. 22. Model.',
    image: 'https://picsum.photos/seed/allure-hero-1/1920/1080',
  },
  {
    title: 'Runway Ready.',
    subtitle: 'Ava Johnson. 19. Model.',
    image: 'https://picsum.photos/seed/allure-hero-2/1920/1080',
  },
  {
    title: 'The New Face.',
    subtitle: 'Mia Chen. 24. Model.',
    image: 'https://picsum.photos/seed/allure-hero-3/1920/1080',
  },
] as const

const AUTOPLAY_MS = 6000

export function Hero() {
  const [index, setIndex] = useState(0)
  const slide = slides[index]!

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((current) => (current + 1) % slides.length)
    }, AUTOPLAY_MS)
    return () => clearInterval(id)
  }, [])

  const goTo = (next: number) => {
    setIndex(((next % slides.length) + slides.length) % slides.length)
  }

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-ink pt-20 lg:pt-24"
    >
      <div className="absolute inset-0">
        <img key={slide.image} src={slide.image} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-brand/40" />
      </div>

      <div aria-live="polite" className="relative z-10 px-6 text-center">
        <h1 className="font-display text-5xl font-bold leading-none text-white sm:text-7xl lg:text-[130px]">
          {slide.title}
        </h1>
        <p className="mt-6 text-xl text-white/90 sm:text-2xl">{slide.subtitle}</p>
      </div>

      <div className="absolute bottom-8 left-8 z-10 flex gap-3">
        {slides.map((item, dotIndex) => (
          <button
            key={item.image}
            type="button"
            onClick={() => goTo(dotIndex)}
            aria-label={`Go to slide ${String(dotIndex + 1).padStart(2, '0')}`}
            aria-current={dotIndex === index}
            className={cn(
              'flex h-10 w-14 items-center justify-center text-sm font-bold text-white transition-colors',
              dotIndex === index ? 'bg-brand' : 'bg-white/20 hover:bg-white/40',
            )}
          >
            {String(dotIndex + 1).padStart(2, '0')}
          </button>
        ))}
      </div>

      <div className="absolute bottom-8 right-8 z-10 flex bg-white">
        <button
          type="button"
          onClick={() => goTo(index - 1)}
          className="w-32 py-4 text-lg text-navtext transition-colors hover:text-brand"
        >
          Previous
        </button>
        <span className="my-3 w-0.5 bg-rule" aria-hidden="true" />
        <button
          type="button"
          onClick={() => goTo(index + 1)}
          className="w-32 py-4 text-lg text-navtext transition-colors hover:text-brand"
        >
          Next
        </button>
      </div>
    </section>
  )
}
