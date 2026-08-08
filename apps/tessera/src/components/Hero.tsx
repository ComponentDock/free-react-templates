import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { ButtonLink, cn } from '@free-react-templates/ui'

const slides = [
  {
    subheading: 'Architecture Firm',
    heading: 'We Love Modern Designs',
    copy: 'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.',
  },
  {
    subheading: 'Since - 2018',
    heading: 'We Create Amazing Architecture Designs',
    copy: 'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.',
  },
] as const

const SLIDE_MS = 6000

export function Hero() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((i) => (i + 1) % slides.length)
    }, SLIDE_MS)
    return () => window.clearInterval(timer)
  }, [index])

  const slide = slides[index]!

  return (
    <section
      aria-label="Featured"
      className="relative flex min-h-[600px] items-center justify-center overflow-hidden bg-cover bg-center lg:min-h-[750px]"
      style={{ backgroundImage: 'url(https://picsum.photos/seed/tessera-hero/1600/750)' }}
    >
      <div className="absolute inset-0 bg-black/55" aria-hidden="true" />

      <div
        className="relative z-10 mx-auto max-w-3xl px-4 py-24 text-center text-white sm:px-6"
        aria-live="polite"
      >
        <p className="text-sm font-medium uppercase tracking-[2px] text-white/80">
          {slide.subheading}
        </p>
        <h1 className="mt-4 font-display text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
          {slide.heading}
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/70">
          {slide.copy}
        </p>
        <ButtonLink href="#projects" variant="primary" size="md" className="mt-10 px-8">
          View our works
        </ButtonLink>
      </div>

      <button
        type="button"
        aria-label="Previous slide"
        onClick={() => setIndex((i) => (i - 1 + slides.length) % slides.length)}
        className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white backdrop-blur transition-colors hover:bg-brand"
      >
        <ChevronLeft className="h-6 w-6" aria-hidden="true" />
      </button>
      <button
        type="button"
        aria-label="Next slide"
        onClick={() => setIndex((i) => (i + 1) % slides.length)}
        className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white backdrop-blur transition-colors hover:bg-brand"
      >
        <ChevronRight className="h-6 w-6" aria-hidden="true" />
      </button>

      <div
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 gap-2"
        aria-label="Slides"
      >
        {slides.map((s, i) => (
          <button
            key={s.heading}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === index}
            onClick={() => setIndex(i)}
            className={cn(
              'h-2.5 w-2.5 rounded-full transition-colors',
              i === index ? 'bg-brand' : 'bg-white/40 hover:bg-white/70',
            )}
          />
        ))}
      </div>
    </section>
  )
}
