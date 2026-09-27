import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const IMAGES = [
  { src: 'https://picsum.photos/seed/regnest-hero/600/500', alt: 'Museum interior' },
  { src: 'https://picsum.photos/seed/regnest-art/200/200', alt: 'Ancient artifact' },
  { src: 'https://picsum.photos/seed/regnest-stairs/200/200', alt: 'Grand staircase' },
]

export function ImageCarousel() {
  const [current, setCurrent] = useState(0)

  const next = () => setCurrent((i) => (i + 1) % IMAGES.length)
  const goPrev = () => setCurrent((i) => (i - 1 + IMAGES.length) % IMAGES.length)

  const mainImage = IMAGES[current]!
  const thumbIndex = (current + 1) % IMAGES.length
  const thumbImage = IMAGES[thumbIndex]!

  return (
    <div className="flex flex-col">
      <img src={mainImage.src} alt={mainImage.alt} className="h-64 w-full object-cover sm:h-80" />
      <div className="flex items-center gap-2 p-3">
        <img src={thumbImage.src} alt="Thumbnail" className="h-16 w-16 object-cover" />
        <div className="ml-auto flex gap-1">
          <button
            type="button"
            onClick={goPrev}
            aria-label="Previous image"
            className="rounded p-1 text-heading transition-colors hover:bg-gray-100"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next image"
            className="rounded p-1 text-heading transition-colors hover:bg-gray-100"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </div>
  )
}
