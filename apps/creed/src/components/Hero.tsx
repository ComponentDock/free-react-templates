import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react'

const slides = [
  {
    date: 'December 2025',
    title: 'Let God guide your path',
    subtitle: 'Children Camp',
    description:
      'Join us for a weekend of faith, fellowship, and fun activities for children of all ages.',
    time: 'Sunday Worship: 10:30 AM',
    image: 'https://picsum.photos/seed/creed-hero1/1920/800',
  },
  {
    date: 'January 2026',
    title: 'Walking in faith together',
    subtitle: 'Community Outreach',
    description: 'Come together as a community to serve those in need and share the love of God.',
    time: 'Saturday Service: 9:00 AM',
    image: 'https://picsum.photos/seed/creed-hero2/1920/800',
  },
] as const

export function Hero() {
  const [current, setCurrent] = useState(0)

  const next = () => setCurrent((c) => (c + 1) % slides.length)
  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length)
  const slide = slides[current]!

  return (
    <section
      id="home"
      className="relative flex min-h-[500px] items-center bg-cover bg-center"
      style={{ backgroundImage: `url(${slide.image})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 py-20 text-white">
        <div className="max-w-xl">
          <span className="mb-2 inline-block rounded bg-primary-400 px-3 py-1 text-sm font-medium">
            {slide.date}
          </span>
          <h1 className="mb-4 text-4xl font-bold leading-tight md:text-5xl">{slide.title}</h1>
          <p className="mb-2 text-lg font-medium text-primary-200">{slide.subtitle}</p>
          <p className="mb-6 text-gray-200">{slide.description}</p>
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium text-primary-200">{slide.time}</span>
          </div>
        </div>
      </div>

      {/* Nav arrows */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/20 p-2 text-white transition-colors hover:bg-white/40"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/20 p-2 text-white transition-colors hover:bg-white/40"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-3 w-3 rounded-full transition-colors ${
              i === current ? 'bg-primary-400' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
