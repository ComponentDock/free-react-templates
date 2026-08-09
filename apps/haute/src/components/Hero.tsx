import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const slides = [
  { image: 'https://picsum.photos/seed/haute-hero-1/1920/1080' },
  { image: 'https://picsum.photos/seed/haute-hero-2/1920/1080' },
  { image: 'https://picsum.photos/seed/haute-hero-3/1920/1080' },
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
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-ink"
    >
      <div className="absolute inset-0">
        <img key={slide.image} src={slide.image} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-black/25" aria-hidden="true" />
      </div>

      <div aria-live="polite" className="relative z-10 px-6 text-center">
        <h1 className="font-display text-5xl font-medium leading-tight text-white sm:text-7xl lg:text-8xl">
          Style is forever
        </h1>
        <a
          href="#brand"
          className="mt-10 inline-block border-2 border-white px-10 py-4 text-sm font-medium uppercase tracking-[0.2em] text-white transition-colors hover:border-brand hover:text-brand"
        >
          Read More
        </a>
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

      <div className="absolute bottom-8 right-8 z-10 flex gap-3">
        <button
          type="button"
          onClick={() => goTo(index - 1)}
          aria-label="Previous slide"
          className="flex h-12 w-12 items-center justify-center rounded-full border border-white/40 text-white transition-colors hover:border-brand hover:text-brand"
        >
          <ChevronLeft className="h-5 w-5" aria-hidden="true" />
        </button>
        <button
          type="button"
          onClick={() => goTo(index + 1)}
          aria-label="Next slide"
          className="flex h-12 w-12 items-center justify-center rounded-full border border-white/40 text-white transition-colors hover:border-brand hover:text-brand"
        >
          <ChevronRight className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>
    </section>
  )
}
