import { useState, useEffect } from 'react'

const slides = [
  { headline: 'We Are The Piston Gym', sub: 'Get in shape with our expert trainers' },
  { headline: 'Challenge Yourself', sub: 'Push your limits every single day' },
]

export function Hero() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setCurrent((c) => (c + 1) % slides.length), 5000)
    return () => clearInterval(id)
  }, [])

  const slide = slides[current]!

  return (
    <section id="home" className="relative flex h-screen items-center justify-center">
      <img
        src="https://picsum.photos/seed/piston-hero/1920/1080"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 text-center text-white">
        <h1 className="mb-4 text-5xl font-bold md:text-6xl">{slide.headline}</h1>
        <p className="mb-8 text-lg text-gray-300">{slide.sub}</p>
        <a
          href="#contact"
          className="inline-block rounded bg-brand px-8 py-3 font-semibold text-dark transition hover:bg-brand-dark"
        >
          Get Started Now
        </a>
      </div>
    </section>
  )
}
