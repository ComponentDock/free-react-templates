import { useState, useEffect } from 'react'
import { Play } from 'lucide-react'

const slides = [
  {
    heading: 'RoxyGlow',
    subheading: 'More than a hotel... an experience',
    image: 'https://picsum.photos/seed/roxyglow-hero1/1920/1080',
  },
  {
    heading: 'Experience Epic Beauty',
    subheading: 'RoxyGlow Hotel & Resort',
    image: 'https://picsum.photos/seed/roxyglow-hero2/1920/1080',
  },
] as const

export function Hero() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const slide = slides[current]!

  return (
    <section id="home" className="relative h-[600px] overflow-hidden">
      {slides.map((s, i) => (
        <div
          key={i}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            i === current ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url(${s.image})` }}
          aria-hidden="true"
        />
      ))}
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
        <h1 className="font-display text-5xl font-bold md:text-7xl">{slide.heading}</h1>
        <h2 className="mt-4 text-xl font-light md:text-2xl">{slide.subheading}</h2>
        <div className="mt-8 flex gap-4">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => setCurrent(i)}
              className={`h-3 w-3 rounded-full transition-colors ${
                i === current ? 'bg-brand' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
      <button
        type="button"
        aria-label="Play video"
        className="absolute right-6 top-6 z-10 flex h-12 w-12 items-center justify-center border-2 border-white text-white transition-colors hover:bg-white hover:text-ink"
      >
        <Play className="h-5 w-5" />
      </button>
    </section>
  )
}
