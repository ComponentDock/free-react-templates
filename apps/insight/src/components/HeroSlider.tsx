import { useEffect, useState } from 'react'

const slides: { heading: string; image: string }[] = [
  {
    heading: 'We help you to grow your business',
    image: 'https://picsum.photos/seed/insight-hero1/1920/800',
  },
  {
    heading: 'Your trusted consulting partner',
    image: 'https://picsum.photos/seed/insight-hero2/1920/800',
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

  const slide = slides[current]!

  return (
    <section className="relative h-[500px] overflow-hidden md:h-[600px]">
      {slides.map((s, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-700"
          style={{ opacity: i === current ? 1 : 0 }}
        >
          <img src={s.image} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-black/30" />
        </div>
      ))}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        <h1 className="mb-6 max-w-3xl text-3xl font-black uppercase leading-tight text-navy md:text-5xl">
          {slide.heading}
        </h1>
        <a
          href="#contact"
          className="inline-block rounded-[5px] bg-brand px-8 py-3 text-sm font-medium uppercase tracking-wide text-white transition-colors hover:bg-brand-dark"
        >
          Contact Now
        </a>
      </div>
    </section>
  )
}
