import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { dashboardSlides, heroParagraph, typewriterWords } from '../data'

/** Rotating-word headline: cycles the words, keeps an aria-live region. */
function Typewriter() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % typewriterWords.length)
    }, 4000)
    return () => window.clearInterval(id)
  }, [])

  return (
    <h1 className="mb-4 text-3xl leading-tight font-normal text-ink md:text-4xl">
      Template for{' '}
      <span aria-live="polite" className="text-brand">
        {typewriterWords[index]}
        <span className="typewriter-caret" aria-hidden="true">
          |
        </span>
      </span>
    </h1>
  )
}

/** Lightweight dashboard carousel: one slide at a time, prev/next controls. */
function DashboardCarousel() {
  const [index, setIndex] = useState(0)
  const last = dashboardSlides.length - 1

  return (
    <div className="relative" aria-roledescription="carousel" aria-label="Dashboard previews">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {dashboardSlides.map((slide, i) => (
            <figure
              key={slide.image}
              className="min-w-full shrink-0"
              aria-hidden={i !== index ? 'true' : undefined}
            >
              <img
                src={slide.image}
                alt={slide.alt}
                className="h-auto w-full rounded-lg shadow-xl"
                loading={i === 0 ? 'eager' : 'lazy'}
              />
            </figure>
          ))}
        </div>
      </div>
      <div className="mt-4 flex items-center justify-center gap-2">
        <button
          type="button"
          aria-label="Previous dashboard"
          className="rounded-full border border-gray-300 p-2 text-ink transition-colors hover:bg-band"
          onClick={() => setIndex((current) => (current === 0 ? last : current - 1))}
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        {dashboardSlides.map((slide, i) => (
          <button
            key={slide.image}
            type="button"
            aria-label={`Go to dashboard ${i + 1}`}
            aria-current={i === index ? 'true' : undefined}
            className={cn(
              'h-2 w-2 rounded-full transition-colors',
              i === index ? 'bg-brand' : 'bg-gray-300',
            )}
            onClick={() => setIndex(i)}
          />
        ))}
        <button
          type="button"
          aria-label="Next dashboard"
          className="rounded-full border border-gray-300 p-2 text-ink transition-colors hover:bg-band"
          onClick={() => setIndex((current) => (current === last ? 0 : current + 1))}
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  )
}

export function Hero() {
  return (
    <section
      id="home"
      aria-label="Hero"
      className="bg-[linear-gradient(45deg,#f0f0f0_0%,#fff_55%,#fff_100%)] pt-16"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:py-24">
        <div>
          <Typewriter />
          <p className="mb-8 max-w-md text-ink/80">{heroParagraph}</p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#quote"
              className="rounded-none bg-btn px-6 py-3 text-base text-ink transition-colors hover:bg-btn-hover"
            >
              Get a Quote
            </a>
            <a
              href="#work"
              className="rounded-none border border-btn px-6 py-3 text-base text-btn transition-colors hover:bg-btn hover:text-ink"
            >
              Our Portfolio
            </a>
          </div>
        </div>
        <div className="self-end">
          <DashboardCarousel />
        </div>
      </div>
    </section>
  )
}
