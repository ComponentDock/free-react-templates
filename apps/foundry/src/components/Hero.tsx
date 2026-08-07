import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const taglines = [
  'Constructing Spaces For You',
  'Building Your Solid',
  'High Class Building',
] as const

const slides = [
  {
    seed: 'foundry-hero-1',
    alt: 'Construction worker walking through a concrete tunnel',
  },
  {
    seed: 'foundry-hero-2',
    alt: 'Steel structure of a building under construction',
  },
  {
    seed: 'foundry-hero-3',
    alt: 'High-rise building facade against a blue sky',
  },
] as const

export function Hero() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => setIndex((i) => (i + 1) % taglines.length), 6000)
    return () => clearInterval(timer)
  }, [])

  const goNext = () => setIndex((i) => (i + 1) % taglines.length)
  const goPrev = () => setIndex((i) => (i - 1 + taglines.length) % taglines.length)

  return (
    <section id="home" className="relative flex min-h-[560px] items-center bg-coal">
      <img
        src={`https://picsum.photos/seed/${slides[index]!.seed}/1600/900`}
        alt={slides[index]!.alt}
        className="absolute inset-0 h-full w-full object-cover opacity-60"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-coal/90 via-coal/70 to-coal/40" />

      <div className="relative mx-auto w-full max-w-6xl px-4 py-24 sm:px-6">
        <h1 className="font-display text-2xl font-bold uppercase tracking-[0.2em] text-brand">
          Providing all Kinds of Construction Services
        </h1>
        <p
          aria-live="polite"
          className="mt-6 font-display text-5xl font-bold uppercase leading-none text-white sm:text-6xl"
        >
          {taglines[index]}
        </p>

        <a
          href="#work"
          className="mt-10 inline-block bg-brand px-10 py-4 font-display text-sm font-semibold uppercase tracking-[0.2em] text-ink transition-colors hover:bg-brand-dark"
        >
          View Projects
        </a>
      </div>

      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 items-center gap-2">
        <button
          type="button"
          aria-label="Previous slide"
          onClick={goPrev}
          className="rounded-full border border-white/30 p-2 text-white transition-colors hover:bg-brand hover:text-ink"
        >
          <ChevronLeft className="h-5 w-5" aria-hidden="true" />
        </button>
        {taglines.map((tagline, i) => (
          <span
            key={tagline}
            aria-hidden="true"
            className={`h-2 w-2 rounded-full ${i === index ? 'bg-brand' : 'bg-white/40'}`}
          />
        ))}
        <button
          type="button"
          aria-label="Next slide"
          onClick={goNext}
          className="rounded-full border border-white/30 p-2 text-white transition-colors hover:bg-brand hover:text-ink"
        >
          <ChevronRight className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>
    </section>
  )
}
