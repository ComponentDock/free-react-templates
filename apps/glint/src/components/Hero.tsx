import { useState, useEffect, useCallback } from 'react'
import { ButtonLink } from '@free-react-templates/ui'

const slides = [
  {
    heading: 'Love your smile',
    text: 'Donec malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum. Ut ac ligula sapien. Suspendisse cursus faucibus finibus.',
    image: 'https://picsum.photos/seed/glint-hero-1/1600/900',
  },
  {
    heading: 'Best Dentist.',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum.',
    image: 'https://picsum.photos/seed/glint-hero-2/1600/900',
  },
] as const

function getSlide(index: number): (typeof slides)[number] {
  return slides[index]!
}

export function Hero() {
  const [current, setCurrent] = useState(0)

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % slides.length)
  }, [])

  useEffect(() => {
    const timer = setInterval(next, 5000)
    return () => clearInterval(timer)
  }, [next])

  const slide = getSlide(current)

  return (
    <section
      id="home"
      className="relative flex min-h-[500px] items-center bg-cover bg-center"
      style={{ backgroundImage: `url(${slide.image})` }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <div className="max-w-2xl text-white">
          <h2 className="mb-4 text-4xl font-bold md:text-5xl">{slide.heading}</h2>
          <p className="mb-8 text-lg text-gray-200">{slide.text}</p>
          <ButtonLink
            href="#contact"
            className="rounded bg-brand px-8 py-3 font-semibold text-white transition-colors hover:bg-brand-dark"
          >
            Get Appointment
          </ButtonLink>
        </div>
      </div>
      {/* Slide indicators */}
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-3 rounded-full transition-colors ${i === current ? 'w-8 bg-brand' : 'w-3 bg-white/50'}`}
          />
        ))}
      </div>
    </section>
  )
}
