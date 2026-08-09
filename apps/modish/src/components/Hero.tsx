import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'

const slides = [
  {
    eyebrow: 'New Arrivals',
    title: 'denim jackets',
    price: 29,
    copy: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: 'https://picsum.photos/seed/modish-hero-1/1600/900',
  },
  {
    eyebrow: 'Hot Deal',
    title: 'summer dresses',
    price: 45,
    copy: 'Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.',
    image: 'https://picsum.photos/seed/modish-hero-2/1600/900',
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
    <section id="home" className="relative overflow-hidden bg-coal dark:bg-gray-950">
      <div className="absolute inset-0">
        <img src={slide.image} alt="" className="h-full w-full object-cover opacity-60" />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col items-start justify-center px-4 py-28 sm:px-6 lg:min-h-[640px] lg:py-36">
        <div aria-live="polite" className="max-w-xl">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-brand">
            {slide.eyebrow}
          </span>
          <h1 className="mt-3 text-5xl font-bold uppercase text-white sm:text-6xl">
            {slide.title}
          </h1>
          <p className="mt-4 text-white/70">{slide.copy}</p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <ButtonLink
              href="#latest"
              className="rounded-full bg-brand px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-white transition-colors hover:bg-brand-dark"
            >
              Discover
            </ButtonLink>
            <ButtonLink
              href="#top-selling"
              variant="outline"
              className="rounded-full border-white/50 px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-white hover:bg-white/10 dark:border-white/50 dark:text-white dark:hover:bg-white/10"
            >
              Add to Cart
            </ButtonLink>
          </div>
        </div>

        <div
          aria-label={`Offer: from $${slide.price}`}
          className="absolute right-10 top-28 hidden h-36 w-36 rotate-45 items-center justify-center rounded-2xl bg-brand text-center text-white shadow-xl md:flex lg:right-24"
        >
          <div className="-rotate-45">
            <p className="text-xs font-medium uppercase tracking-widest">from</p>
            <p className="text-3xl font-bold">${slide.price}</p>
            <p className="text-[10px] font-semibold uppercase tracking-widest">Shop Now</p>
          </div>
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
