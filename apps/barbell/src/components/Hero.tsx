import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'

const slides = [
  {
    label: 'Slide 1 of 3',
    image: 'https://picsum.photos/seed/barbell-training/1920/703',
    alt: 'Athlete training on snowy mountain peaks',
  },
  {
    label: 'Slide 2 of 3',
    image: 'https://picsum.photos/seed/barbell-lift/1920/703',
    alt: 'Powerful ocean wave crashing over rocks',
  },
  {
    label: 'Slide 3 of 3',
    image: 'https://picsum.photos/seed/barbell-summit/1920/703',
    alt: 'Moody mountain lake beneath clouded summits',
  },
] as const

export function Hero() {
  const [index, setIndex] = useState(0)
  const slide = slides[index]!

  const prev = () => setIndex((current) => (current - 1 + slides.length) % slides.length)
  const next = () => setIndex((current) => (current + 1) % slides.length)

  return (
    <section
      id="home"
      aria-label={slide.label}
      className="relative flex h-[560px] items-center overflow-hidden md:h-[703px]"
    >
      <img
        src={slide.image}
        alt={slide.alt}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-ink/50" aria-hidden="true" />
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 text-left sm:px-6 lg:px-8">
        <h1 className="font-display text-6xl font-bold uppercase leading-none text-white md:text-[90px]">
          What is Crossfit?
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-white/90 md:text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <ButtonLink
          href="#classes"
          className="mt-8 rounded-none bg-brand px-14 py-5 font-display text-sm font-medium uppercase tracking-wider text-white hover:bg-brand-dark"
        >
          Read More
        </ButtonLink>
      </div>

      <button
        type="button"
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-0 top-1/2 z-10 flex h-16 w-16 -translate-y-1/2 items-center justify-center bg-ink text-white transition-colors hover:bg-brand md:h-[84px] md:w-[84px]"
      >
        <ChevronLeft className="h-8 w-8" aria-hidden="true" />
      </button>
      <button
        type="button"
        onClick={next}
        aria-label="Next slide"
        className="absolute right-0 top-1/2 z-10 flex h-16 w-16 -translate-y-1/2 items-center justify-center bg-ink text-white transition-colors hover:bg-brand md:h-[84px] md:w-[84px]"
      >
        <ChevronRight className="h-8 w-8" aria-hidden="true" />
      </button>
    </section>
  )
}
