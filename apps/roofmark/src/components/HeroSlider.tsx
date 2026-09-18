import { useState } from 'react'
import { ChevronRight, ChevronLeft } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const slides = [
  {
    image: 'https://picsum.photos/seed/roofmark-1/1920/800',
    address: '123 Street, New York, USA',
    price: '$1,200',
  },
  {
    image: 'https://picsum.photos/seed/roofmark-2/1920/800',
    address: '456 Avenue, Los Angeles, USA',
    price: '$2,500',
  },
  {
    image: 'https://picsum.photos/seed/roofmark-3/1920/800',
    address: '789 Boulevard, Chicago, USA',
    price: '$980',
  },
]

export function HeroSlider() {
  const [current, setCurrent] = useState(0)

  const next = () => setCurrent((c) => (c + 1) % slides.length)
  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length)

  return (
    <section className="relative w-full h-[600px] overflow-hidden">
      {slides.map((slide, i) => (
        <div
          key={i}
          className={cn(
            'absolute inset-0 transition-opacity duration-700',
            i === current ? 'opacity-100' : 'opacity-0',
          )}
        >
          <img src={slide.image} alt={slide.address} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/30" />
        </div>
      ))}

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white z-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
          {slides[current]!.address}
        </h1>
        <span className="bg-brand-green text-white text-lg font-semibold px-6 py-2 rounded">
          {slides[current]!.price}
        </span>
      </div>

      {/* Nav arrows */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full backdrop-blur-sm transition-colors"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full backdrop-blur-sm transition-colors"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={cn(
              'w-3 h-3 rounded-full transition-colors',
              i === current ? 'bg-brand-green' : 'bg-white/50',
            )}
          />
        ))}
      </div>
    </section>
  )
}
