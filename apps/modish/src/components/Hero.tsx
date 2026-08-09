import { useEffect, useState } from 'react'
import { ButtonLink, cn } from '@free-react-templates/ui'

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

      <div className="relative mx-auto flex min-h-[640px] max-w-6xl flex-col items-start justify-center px-4 py-28 sm:px-6 lg:py-36">
        <div aria-live="polite" className="max-w-xl">
          <span className="text-lg font-semibold uppercase tracking-[0.2em] text-white/90">
            {slide.eyebrow}
          </span>
          <h1 className="mt-3 text-5xl font-bold uppercase leading-tight text-white sm:text-6xl">
            {slide.title}
          </h1>
          <p className="mt-4 text-lg font-light text-white/70">{slide.copy}</p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <ButtonLink
              href="#latest"
              variant="outline"
              className="rounded-full border border-white bg-transparent px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-white hover:bg-white/10 dark:border-white dark:text-white dark:hover:bg-white/10"
            >
              Discover
            </ButtonLink>
            <ButtonLink
              href="#top-selling"
              className="rounded-full bg-white px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-coal transition-colors hover:bg-white/80"
            >
              Add to Cart
            </ButtonLink>
          </div>
        </div>

        <div
          aria-label={`Offer: from $${slide.price}`}
          className="absolute right-10 top-28 hidden h-36 w-36 rotate-45 items-center justify-center rounded-full bg-brand text-center text-white shadow-xl ring-4 ring-blush/60 md:flex lg:right-24"
        >
          <div className="-rotate-45">
            <p className="text-xs font-medium uppercase tracking-widest">from</p>
            <p className="text-4xl font-normal">${slide.price}</p>
            <p className="text-[10px] font-semibold uppercase tracking-widest">Shop Now</p>
          </div>
        </div>

        <div className="mt-10 flex items-center gap-3">
          <span
            aria-label={`Slide ${index + 1} of ${slides.length}`}
            className="text-2xl font-bold text-white"
          >
            {index + 1}
            <span aria-hidden="true" className="mx-2 inline-block h-6 w-px rotate-12 bg-white/60" />
            {slides.length}
          </span>
          <div className="ml-4 flex items-center gap-2">
            {slides.map((_, dotIndex) => (
              <button
                key={dotIndex}
                type="button"
                onClick={() => goTo(dotIndex)}
                aria-label={`Go to slide ${dotIndex + 1}`}
                aria-current={dotIndex === index}
                className={cn(
                  'h-2 rounded-full transition-all',
                  dotIndex === index ? 'w-6 bg-brand' : 'w-2 bg-white/40 hover:bg-white/70',
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
