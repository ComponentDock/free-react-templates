import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'

const slides = [
  {
    eyebrow: 'Peony Salon',
    title: 'Get Pretty Look',
    copy: 'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country.',
    image: 'https://picsum.photos/seed/peony-hero-1/1600/900',
  },
  {
    eyebrow: 'Natural Beauty',
    title: 'Beauty Salon',
    copy: 'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country.',
    image: 'https://picsum.photos/seed/peony-hero-2/1600/900',
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
    <section id="home" className="relative overflow-hidden bg-plum dark:bg-gray-950">
      <div className="absolute inset-0">
        <img src={slide.image} alt="" className="h-full w-full object-cover opacity-40" />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col items-start justify-center px-4 py-32 sm:px-6 lg:min-h-[560px] lg:py-44">
        <div aria-live="polite" className="max-w-xl">
          <span className="font-script text-2xl text-brand">{slide.eyebrow}</span>
          <h1 className="mt-3 font-display text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
            {slide.title}
          </h1>
          <p className="mt-4 text-white/70">{slide.copy}</p>
          <ButtonLink
            href="#about"
            className="mt-8 inline-flex rounded-full bg-brand px-8 py-3.5 text-sm font-semibold uppercase tracking-[0.2em] text-white transition-colors hover:bg-brand-dark"
          >
            Discover Now
          </ButtonLink>
        </div>

        <div className="mt-10 flex items-center gap-3">
          <button
            type="button"
            onClick={() => goTo(index - 1)}
            aria-label="Previous slide"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white/80 transition-colors hover:border-brand hover:text-brand"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => goTo(index + 1)}
            aria-label="Next slide"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white/80 transition-colors hover:border-brand hover:text-brand"
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>
          <span className="ml-2 text-sm tracking-[0.2em] text-white/60">
            {index + 1} / {slides.length}
          </span>
        </div>
      </div>
    </section>
  )
}
