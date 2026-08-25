import { useState, useEffect } from 'react'

const slides = [
  {
    heading: 'Dentist Services that You Can Trust',
    subtext:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    cta: 'See Our Services',
  },
  {
    heading: 'A Brighter Dental Experience',
    subtext:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    cta: 'Make an Appointment',
  },
]

export function Hero() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => setActive((p) => (p + 1) % slides.length), 5000)
    return () => clearInterval(timer)
  }, [])

  const slide = slides[active]!

  return (
    <section id="home" className="relative bg-teal-500 text-white py-24 md:py-32">
      <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-teal-400 opacity-90" />
      <div className="relative container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{slide.heading}</h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">{slide.subtext}</p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#appointment"
            className="bg-white text-teal-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
          >
            {slide.cta}
          </a>
          <a
            href="#services"
            className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-teal-600 transition-colors"
          >
            View Services
          </a>
        </div>
        <div className="flex justify-center gap-2 mt-8">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`w-3 h-3 rounded-full transition-colors ${i === active ? 'bg-white' : 'bg-white/40'}`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
