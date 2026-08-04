import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const slides = [
  {
    heading: 'We Love Pets',
    copy: 'Every dog deserves a loving home, good food, and long walks. Our community helps you find the perfect companion and care for it like family.',
    seed: 'breed-hero-1',
  },
  {
    heading: 'Care for dogs',
    copy: 'From daily grooming to health checkups, we share everything you need to keep your dog happy, healthy, and by your side for years to come.',
    seed: 'breed-hero-2',
  },
] as const

export function Hero() {
  const [index, setIndex] = useState(0)

  const goTo = (next: number) => setIndex(Math.min(Math.max(next, 0), slides.length - 1))

  return (
    <section id="top" className="relative min-h-[700px] overflow-hidden bg-night">
      {slides.map((slide, i) => (
        <div
          key={slide.heading}
          hidden={i !== index}
          className="absolute inset-0 flex items-center justify-center"
        >
          <img
            src={`https://picsum.photos/seed/${slide.seed}/1600/900`}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20" aria-hidden="true" />
          <div className="relative z-10 mx-auto max-w-3xl px-4 py-28 text-center sm:px-6">
            <h1 className="text-5xl font-bold text-white sm:text-6xl lg:text-7xl">
              {slide.heading}
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-sm font-light leading-relaxed text-white/90">
              {slide.copy}
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
              <a
                href="#about"
                className="border-2 border-white px-8 py-3 text-sm font-medium uppercase tracking-[0.2em] text-white transition-colors hover:bg-white hover:text-gray-900"
              >
                Get Started
              </a>
              <a
                href="#breeds"
                className="text-sm font-medium uppercase tracking-[0.2em] text-white underline decoration-brand decoration-2 underline-offset-8 transition-colors hover:text-brand"
              >
                Download
              </a>
            </div>
          </div>
        </div>
      ))}

      <button
        type="button"
        aria-label="Previous slide"
        onClick={() => goTo(index - 1)}
        className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/40 p-2 text-white transition-colors hover:bg-brand hover:border-brand"
      >
        <ChevronLeft className="h-6 w-6" aria-hidden="true" />
      </button>
      <button
        type="button"
        aria-label="Next slide"
        onClick={() => goTo(index + 1)}
        className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/40 p-2 text-white transition-colors hover:bg-brand hover:border-brand"
      >
        <ChevronRight className="h-6 w-6" aria-hidden="true" />
      </button>

      <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-3">
        {slides.map((slide, i) => (
          <button
            key={slide.heading}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === index}
            onClick={() => goTo(i)}
            className={`h-2.5 rounded-full transition-all ${
              i === index ? 'w-8 bg-brand' : 'w-2.5 bg-white/50 hover:bg-white'
            }`}
          />
        ))}
      </div>
    </section>
  )
}
