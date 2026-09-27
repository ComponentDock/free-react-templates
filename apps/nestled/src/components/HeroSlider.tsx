import { useState } from 'react'
import { ChevronLeft, ChevronRight, Bath, BedDouble, Square } from 'lucide-react'

const slides = [
  {
    price: '$999,000',
    oldPrice: '$1,000,299',
    address: '62/1 Braybrooke Street, Bruce',
    baths: 2,
    beds: 4,
    sqft: 120,
    img: 'nestled-slide1',
  },
  {
    price: '$1,250,000',
    oldPrice: '$1,300,000',
    address: '15 Kangaroo Street, Canberra',
    baths: 3,
    beds: 5,
    sqft: 180,
    img: 'nestled-slide2',
  },
  {
    price: '$849,000',
    oldPrice: '$899,000',
    address: '32/13-15 Sturt Avenue, Griffith',
    baths: 2,
    beds: 3,
    sqft: 95,
    img: 'nestled-slide3',
  },
  {
    price: '$1,500,000',
    oldPrice: '$1,650,000',
    address: '78 Northbourne Avenue, Canberra',
    baths: 3,
    beds: 4,
    sqft: 200,
    img: 'nestled-slide4',
  },
]

export function HeroSlider() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c === 0 ? slides.length - 1 : c - 1))
  const next = () => setCurrent((c) => (c === slides.length - 1 ? 0 : c + 1))

  const slide = slides[current]!

  return (
    <section className="relative h-[500px] overflow-hidden" aria-label="Property hero slider">
      <div
        className="absolute inset-0 bg-cover bg-center transition-opacity"
        style={{ backgroundImage: `url(https://picsum.photos/seed/${slide.img}/1600/900)` }}
      />
      <div className="absolute inset-0 bg-black/30" />
      <div className="relative mx-auto max-w-7xl px-4 h-full flex items-end pb-16">
        <div className="text-white">
          <p className="text-secondary text-lg font-bold mb-1">{slide.price}</p>
          <span className="text-white/50 line-through text-sm">{slide.oldPrice}</span>
          <h1 className="text-3xl font-bold mt-2 mb-4">{slide.address}</h1>
          <div className="flex items-center gap-6 text-sm text-white/80">
            <span className="flex items-center gap-1.5">
              <Bath size={16} aria-hidden="true" /> {slide.baths}
            </span>
            <span className="flex items-center gap-1.5">
              <BedDouble size={16} aria-hidden="true" /> {slide.beds}
            </span>
            <span className="flex items-center gap-1.5">
              <Square size={16} aria-hidden="true" /> {slide.sqft} m²
            </span>
          </div>
        </div>
      </div>
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 hover:bg-white/40 rounded-full flex items-center justify-center text-white transition-colors"
        aria-label="Previous property"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 hover:bg-white/40 rounded-full flex items-center justify-center text-white transition-colors"
        aria-label="Next property"
      >
        <ChevronRight size={20} />
      </button>
    </section>
  )
}
