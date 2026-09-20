import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react'

const IMAGES = [
  'https://picsum.photos/seed/gala-gal1/800/500',
  'https://picsum.photos/seed/gala-gal2/800/500',
  'https://picsum.photos/seed/gala-gal3/800/500',
]

export function Gallery() {
  const [current, setCurrent] = useState(0)
  const prev = () => setCurrent((c) => (c === 0 ? IMAGES.length - 1 : c - 1))
  const next = () => setCurrent((c) => (c === IMAGES.length - 1 ? 0 : c + 1))

  return (
    <section id="gallery" className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-4">
        <h3 className="mb-8 text-center text-3xl font-bold">
          Event <span className="text-brand">Gallery</span>
        </h3>
        <div className="relative overflow-hidden rounded-sm">
          <img
            src={IMAGES[current]}
            alt={`Gallery image ${current + 1}`}
            className="h-96 w-full object-cover"
          />
          <button
            onClick={prev}
            className="absolute top-1/2 left-4 -translate-y-1/2 rounded-full bg-white/80 p-2 text-navy transition-colors hover:bg-white"
            aria-label="Previous image"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={next}
            className="absolute top-1/2 right-4 -translate-y-1/2 rounded-full bg-white/80 p-2 text-navy transition-colors hover:bg-white"
            aria-label="Next image"
          >
            <ChevronRight size={24} />
          </button>
        </div>
        <div className="mt-4 flex justify-center gap-2">
          {IMAGES.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-3 w-3 rounded-full ${i === current ? 'bg-brand' : 'bg-gray-300'}`}
              aria-label={`Go to image ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
