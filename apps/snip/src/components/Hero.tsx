import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'

const slides = [
  {
    headline: 'Experienced and traditional stylish barber shop',
    kicker: 'Good Look Guaranteed',
    seed: 'snip-hero-1',
    alt: 'Barber shop with vintage chairs and mirrors',
  },
  {
    headline: 'Connect with your dream style',
    kicker: 'Book An Appointment',
    seed: 'snip-hero-2',
    alt: 'Barber trimming a client hair in the salon',
  },
] as const

export function Hero() {
  const [current, setCurrent] = useState(0)
  const slide = slides[current]!

  const next = () => setCurrent((index) => (index + 1) % slides.length)
  const previous = () => setCurrent((index) => (index - 1 + slides.length) % slides.length)

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden">
      <img
        src={`https://picsum.photos/seed/${slide.seed}/1920/1080`}
        alt={slide.alt}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-navy/70" aria-hidden="true" />
      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 py-32 text-center sm:px-6">
        <span className="font-display text-lg font-medium uppercase tracking-[0.25em] text-brand-light">
          {slide.kicker}
        </span>
        <h1 className="mx-auto mt-4 max-w-3xl font-display text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
          {slide.headline}
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
          Precision cuts, classic shaves, and modern styling from barbers who treat every chair like
          a craft.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <ButtonLink
            href="#contact"
            className="rounded-full border border-brand bg-brand px-10 uppercase tracking-[0.2em] text-white transition-colors hover:bg-brand-dark"
          >
            Book An Appointment
          </ButtonLink>
          <ButtonLink
            href="#about"
            className="rounded-full border border-white bg-transparent px-10 uppercase tracking-[0.2em] text-white transition-colors hover:bg-white hover:text-navy"
          >
            About Us
          </ButtonLink>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 items-center gap-3">
        <button
          type="button"
          onClick={previous}
          aria-label="Previous slide"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/40 text-white transition-colors hover:bg-brand"
        >
          <ChevronLeft className="h-5 w-5" aria-hidden="true" />
        </button>
        <button
          type="button"
          onClick={next}
          aria-label="Next slide"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/40 text-white transition-colors hover:bg-brand"
        >
          <ChevronRight className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>
    </section>
  )
}
