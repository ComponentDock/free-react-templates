import { useState, useEffect } from 'react'
import { Play } from 'lucide-react'

const slides = [
  {
    subtitle: 'You only have to know one thing',
    heading: 'Best Online Learning System',
    image: 'https://picsum.photos/seed/erudit-hero1/1600/800',
  },
  {
    subtitle: 'You only have to know one thing',
    heading: 'Online Free Courses',
    image: 'https://picsum.photos/seed/erudit-hero2/1600/800',
  },
  {
    subtitle: 'You only have to know one thing',
    heading: 'Education is a Key to Success',
    image: 'https://picsum.photos/seed/erudit-hero3/1600/800',
  },
  {
    subtitle: 'You only have to know one thing',
    heading: 'Best Online Learning Center',
    image: 'https://picsum.photos/seed/erudit-hero4/1600/800',
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
    <section id="home" className="relative h-[500px] md:h-[600px] overflow-hidden">
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === current ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img src={slide.image} alt="" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
            <p className="text-lg md:text-xl mb-2 font-light">{slide.subtitle}</p>
            <h1 className="text-3xl md:text-5xl font-bold mb-6">{slide.heading}</h1>
            <a
              href="#courses"
              className="inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-600 text-white px-8 py-3 rounded-md text-lg font-medium transition-colors"
            >
              <Play size={20} />
              Start Learning Now!
            </a>
          </div>
        </div>
      ))}

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition-colors ${
              i === current ? 'bg-sky-500' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
