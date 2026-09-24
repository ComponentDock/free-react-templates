import { useState, useEffect, useCallback } from 'react'
import { Calendar, MessageCircle } from 'lucide-react'

interface Slide {
  category: string
  date: string
  comments: number
  headline: string
  description: string
  image: string
}

const slides: Slide[] = [
  {
    category: 'Gadgets',
    date: 'March 14, 2018',
    comments: 5,
    headline: 'Nest Protect: 2nd Gen Smoke + CO Alarm',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.',
    image: 'https://picsum.photos/seed/scoop-slide1/1200/600',
  },
  {
    category: 'Technology',
    date: 'March 12, 2018',
    comments: 8,
    headline: 'Smart Home Devices That Will Change Your Life',
    description:
      'Discover the latest smart home innovations that make everyday living more convenient and connected.',
    image: 'https://picsum.photos/seed/scoop-slide2/1200/600',
  },
  {
    category: 'Science',
    date: 'March 10, 2018',
    comments: 3,
    headline: 'Breaking Ground on Quantum Computing Advances',
    description:
      'Researchers have achieved a new milestone in quantum computing that could revolutionize data processing.',
    image: 'https://picsum.photos/seed/scoop-slide3/1200/600',
  },
]

export function HeroBanner() {
  const [active, setActive] = useState(0)

  const advance = useCallback(() => {
    setActive((prev) => (prev + 1) % slides.length)
  }, [])

  useEffect(() => {
    const id = setInterval(advance, 5000)
    return () => clearInterval(id)
  }, [advance])

  const current = slides[active]!

  return (
    <section className="relative bg-heading overflow-hidden">
      <div className="relative h-[400px] md:h-[500px]">
        {slides.map((slide, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-700 ${i === active ? 'opacity-100' : 'opacity-0'}`}
          >
            <img
              src={slide.image}
              alt={slide.headline}
              className="w-full h-full object-cover"
              loading={i === 0 ? 'eager' : 'lazy'}
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>
        ))}
        <div className="absolute inset-0 flex items-center justify-center text-center text-white px-4">
          <div>
            <div className="flex items-center justify-center gap-3 text-xs mb-3">
              <span className="bg-brand px-4 py-1 rounded-full font-heading font-medium">
                {current.category}
              </span>
              <span className="flex items-center gap-1 opacity-80">
                <Calendar className="w-3 h-3" /> {current.date}
              </span>
              <span className="flex items-center gap-1 opacity-80">
                <MessageCircle className="w-3 h-3" /> {String(current.comments).padStart(2, '0')}
              </span>
            </div>
            <h2 className="text-2xl md:text-4xl font-heading font-bold mb-3 max-w-2xl mx-auto">
              {current.headline}
            </h2>
            <p className="text-sm md:text-base opacity-80 max-w-xl mx-auto font-sans">
              {current.description}
            </p>
          </div>
        </div>
      </div>
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`w-8 h-1 rounded-full transition-colors ${i === active ? 'bg-brand' : 'bg-white/30'}`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
