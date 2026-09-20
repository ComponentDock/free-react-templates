import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const slides = [
  { title: 'Bespoke', subtitle: 'Presents' },
  { title: 'Creative', subtitle: 'Design' },
  { title: 'Modern', subtitle: 'Fashion' },
]

export function HeroSlider() {
  const [current, setCurrent] = useState(0)

  const next = () => setCurrent((c) => (c + 1) % slides.length)
  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length)

  const slide = slides[current]!

  return (
    <section id="home" className="relative bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-4 py-16 lg:grid-cols-2 lg:gap-16 lg:py-24">
        {/* Left — image + learn more */}
        <div className="order-2 lg:order-1">
          <img
            src="https://picsum.photos/seed/bespoke-hero/600/700"
            alt="Fashion model"
            className="w-full rounded-sm object-cover"
            loading="lazy"
          />
          <p className="mt-6 text-sm leading-relaxed text-gray-600">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
            there live the blind texts.
          </p>
          <a
            href="#about"
            className="mt-3 inline-block text-sm font-bold uppercase tracking-wide text-brand transition-colors hover:text-brand-hover"
          >
            Learn more
          </a>
        </div>

        {/* Right — carousel */}
        <div className="order-1 text-center lg:order-2 lg:text-left">
          {/* Slide counter */}
          <div className="mb-4 text-sm text-gray-400">
            <span className="font-bold text-brand">{String(current + 1).padStart(2, '0')}</span>
            <span className="mx-1 italic">of</span>
            <span>{String(slides.length).padStart(2, '0')}</span>
          </div>

          {/* Heading */}
          <h1 className="font-display text-5xl leading-tight font-bold tracking-tight text-black md:text-6xl lg:text-7xl">
            {slide.title}
            <span className="mt-2 block text-brand">{slide.subtitle}</span>
          </h1>

          {/* Image */}
          <img
            src={`https://picsum.photos/seed/bespoke-slide-${current}/500/400`}
            alt={`${slide.title} ${slide.subtitle}`}
            className="mx-auto mt-8 w-full max-w-md rounded-sm object-cover lg:mx-0"
            loading="lazy"
          />

          {/* Arrows */}
          <div className="mt-8 flex items-center justify-center gap-6 lg:justify-start">
            <button
              type="button"
              aria-label="Previous slide"
              onClick={prev}
              className="group flex h-12 w-12 items-center justify-center rounded-full border-2 border-brand transition-colors hover:bg-brand"
            >
              <ChevronLeft
                size={20}
                className="text-brand transition-colors group-hover:text-white"
              />
            </button>
            <button
              type="button"
              aria-label="Next slide"
              onClick={next}
              className="group flex h-12 w-12 items-center justify-center rounded-full border-2 border-brand transition-colors hover:bg-brand"
            >
              <ChevronRight
                size={20}
                className="text-brand transition-colors group-hover:text-white"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
