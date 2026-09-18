import { useState, useEffect } from 'react'
import { Play } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'

const slides = [
  {
    heading: 'Welcome To Techwise',
    subtext: 'We provide effective business solutions that drive growth and innovation.',
  },
  {
    heading: 'Creative Digital Agency',
    subtext: 'Empowering brands with cutting-edge design and technology.',
  },
] as const

export function Hero() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const slide = slides[current]!

  return (
    <section id="home" className="relative overflow-hidden bg-dark-bg" aria-label="Hero slider">
      <div className="absolute inset-0">
        <img
          src={`https://picsum.photos/seed/techwise-hero-${current}/1600/900`}
          alt="Creative agency workspace"
          className="h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-darker-bg/70" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 py-28 sm:px-6 lg:py-40">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="flex justify-center lg:justify-start">
            <a
              href="#video"
              aria-label="Play video"
              className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-brand text-brand transition-all hover:bg-brand hover:text-white"
            >
              <Play className="h-8 w-8 fill-current" aria-hidden="true" />
            </a>
          </div>

          <div className="text-center lg:text-left">
            <h1 className="font-display text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
              {slide.heading}
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-gray-300">{slide.subtext}</p>
            <div className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start">
              <ButtonLink
                href="#about"
                className="rounded bg-blue px-8 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-blue/80"
              >
                Learn More
              </ButtonLink>
              <ButtonLink
                href="#portfolio"
                className="rounded bg-white px-8 py-3 text-sm font-semibold uppercase tracking-wide text-dark-bg transition-colors hover:bg-gray-100"
              >
                View Portfolio
              </ButtonLink>
            </div>
          </div>
        </div>

        <div className="mt-12 flex justify-center gap-3 lg:justify-start">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setCurrent(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-3 w-3 rounded-full transition-colors ${
                i === current ? 'bg-brand' : 'bg-gray-500'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
