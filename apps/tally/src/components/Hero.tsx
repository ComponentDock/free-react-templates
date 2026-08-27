import { useState, useEffect, useCallback } from 'react'
import { ArrowRight } from 'lucide-react'

const SLIDES = [
  {
    heading: 'Expert Financial Guidance',
    subtext: 'We help businesses navigate complex financial landscapes with confidence.',
    image: 'https://picsum.photos/seed/tally-hero1/1920/1080',
  },
  {
    heading: 'Trusted Accounting Partner',
    subtext: 'Over 50 years of experience delivering reliable accounting solutions.',
    image: 'https://picsum.photos/seed/tally-hero2/1920/1080',
  },
  {
    heading: 'Strategic Business Growth',
    subtext: 'Empowering your business with data-driven financial strategies.',
    image: 'https://picsum.photos/seed/tally-hero3/1920/1080',
  },
]

export function Hero() {
  const [current, setCurrent] = useState(0)

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % SLIDES.length)
  }, [])

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000)
    return () => clearInterval(timer)
  }, [nextSlide])

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden">
      {SLIDES.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url('${slide.image}')` }}
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-black/50" aria-hidden="true" />
          <div className="relative z-10 flex min-h-screen items-center justify-center text-center">
            <div className="max-w-3xl px-6">
              <h1 className="font-bold text-4xl md:text-6xl text-white mb-4">{slide.heading}</h1>
              <p className="text-lg md:text-xl text-white/80 mb-8">{slide.subtext}</p>
              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-full bg-brand px-8 py-3 text-white font-semibold hover:bg-brand-dark transition-colors"
              >
                Connect with us
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}
