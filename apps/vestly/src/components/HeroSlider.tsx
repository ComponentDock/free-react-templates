import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const slides = [
  {
    heading: 'A new World is coming',
    text: 'Donec vel ante rhoncus, posuere nulla quis, interdum nisi. Vestibulum laoreet lacinia diam, eget blandit sem gravida at.',
  },
  {
    heading: 'Invest in the future',
    text: 'Sed ut iaculis elit, quis varius mauris. Integer ut ultricies orci, lobortis egestas sem. Morbi ut dapibus dui.',
  },
  {
    heading: 'Blockchain for everyone',
    text: 'Duis non volutpat arcu. Sed ut iaculis elit, quis varius mauris. Integer ut ultricies orci, lobortis egestas sem.',
  },
] as const

export function HeroSlider() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c === 0 ? slides.length - 1 : c - 1))
  const next = () => setCurrent((c) => (c === slides.length - 1 ? 0 : c + 1))

  const slide = slides[current]

  return (
    <section
      className="relative flex h-screen items-center justify-center overflow-hidden"
      aria-label="Hero slider"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://picsum.photos/seed/vestly-hero/1920/1080"
          alt=""
          className="h-full w-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-dark/83" />
      </div>

      {/* Slide content */}
      {slide && (
        <div className="relative z-10 text-center text-white">
          <h1 className="mb-4 text-4xl font-normal md:text-5xl lg:text-6xl">{slide.heading}</h1>
          <p className="mx-auto mb-8 max-w-2xl text-sm leading-relaxed text-body-text md:text-base">
            {slide.text}
          </p>
          <a
            href="#intro"
            className="inline-block bg-brand px-10 py-4 text-sm font-semibold uppercase tracking-wide text-dark transition-colors hover:bg-brand-hover"
          >
            read more
          </a>
        </div>
      )}

      {/* Nav arrows */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center bg-dark/50 text-white transition-colors hover:bg-dark/70"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center bg-dark/50 text-white transition-colors hover:bg-dark/70"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2.5 w-2.5 rounded-full transition-colors ${
              i === current ? 'bg-slider-dot-active' : 'bg-slider-dot-inactive'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
