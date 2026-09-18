import { useState, useEffect } from 'react'
import { Play } from 'lucide-react'

const slides = [
  {
    image: 'https://picsum.photos/seed/cogwork-hero1/1920/800',
    heading: 'We Are Industrial Company',
    subtitle: 'Powering the future of industrial innovation',
  },
  {
    image: 'https://picsum.photos/seed/cogwork-hero2/1920/800',
    heading: 'Create, Enhance and Sustain',
    subtitle: 'Engineering solutions that stand the test of time',
  },
]

export function HeroSlider() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="home" className="relative h-[500px] overflow-hidden md:h-[600px]">
      {slides.map((slide, i) => (
        <div
          key={slide.heading}
          className={`absolute inset-0 transition-opacity duration-700 ${
            i === current ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img src={slide.image} alt={slide.heading} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
            <button
              className="mb-6 flex h-14 w-14 items-center justify-center rounded-full border-2 border-white/80 text-white/80 transition hover:border-white hover:text-white"
              aria-label="Play video"
            >
              <Play size={24} fill="currentColor" />
            </button>
            <h1 className="mb-4 text-3xl font-bold md:text-5xl">{slide.heading}</h1>
            <p className="w-3/4 text-lg text-white/80 md:w-1/2">{slide.subtitle}</p>
          </div>
        </div>
      ))}
    </section>
  )
}
