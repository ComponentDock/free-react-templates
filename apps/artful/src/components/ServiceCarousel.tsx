import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const slides = [
  {
    title: 'Artistic Vision',
    text: 'We transform creative ideas into stunning visual realities with our expert team of artists and designers.',
  },
  {
    title: 'Quality Craftsmanship',
    text: 'Every project receives meticulous attention to detail, ensuring the highest quality in every brushstroke.',
  },
  {
    title: 'Creative Solutions',
    text: 'From concept to completion, we deliver innovative art solutions tailored to your unique vision.',
  },
]

export function ServiceCarousel() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c === 0 ? slides.length - 1 : c - 1))
  const next = () => setCurrent((c) => (c === slides.length - 1 ? 0 : c + 1))

  const slide = slides[current]!

  return (
    <section
      className="relative bg-cover bg-center py-24 text-white"
      style={{
        backgroundImage: 'url(https://picsum.photos/seed/artful-carousel/1920/800)',
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/75" />

      <div className="relative z-10 mx-auto max-w-6xl px-4">
        <div className="flex items-center justify-between">
          <button
            onClick={prev}
            className="rounded-full p-2 text-white/70 transition-colors hover:text-white"
            aria-label="Previous slide"
          >
            <ChevronLeft size={32} />
          </button>

          <div className="mx-8 max-w-xl text-center">
            <h2 className="mb-4 text-3xl font-semibold">{slide.title}</h2>
            <p className="text-base font-light text-white/80">{slide.text}</p>
          </div>

          <button
            onClick={next}
            className="rounded-full p-2 text-white/70 transition-colors hover:text-white"
            aria-label="Next slide"
          >
            <ChevronRight size={32} />
          </button>
        </div>
      </div>
    </section>
  )
}
