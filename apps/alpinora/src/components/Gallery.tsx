import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { GALLERY_IMAGES } from '../data/content'

const PER_VIEW = 3
const MAX_INDEX = GALLERY_IMAGES.length - PER_VIEW

export function Gallery() {
  const [index, setIndex] = useState(0)

  return (
    <section id="gallery" className="section-gap bg-white">
      <div className="relative mx-auto max-w-7xl px-6">
        <div
          role="region"
          aria-label="Gallery carousel"
          data-index={index}
          className="overflow-hidden"
        >
          <ul
            className="flex transition-transform duration-300"
            style={{ transform: `translateX(-${(index * 100) / PER_VIEW}%)` }}
          >
            {GALLERY_IMAGES.map((image) => (
              <li key={image.src} className="w-full shrink-0 px-3 pt-8 sm:w-1/2 lg:w-1/3">
                <img src={image.src} alt={image.alt} className="h-[200px] w-full object-cover" />
              </li>
            ))}
          </ul>
        </div>

        <div className="absolute bottom-0 right-10 flex flex-col gap-3">
          <button
            type="button"
            aria-label="Previous image"
            disabled={index === 0}
            onClick={() => setIndex((i) => Math.max(0, i - 1))}
            className="flex items-center justify-center border border-[#f5f5f5] bg-white p-3.5 shadow-[-14px_14px_20px_0px_rgba(157,157,157,0.2)] disabled:opacity-40"
          >
            <ChevronUp aria-hidden="true" className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="Next image"
            disabled={index === MAX_INDEX}
            onClick={() => setIndex((i) => Math.min(MAX_INDEX, i + 1))}
            className="flex items-center justify-center border border-[#f5f5f5] bg-white p-3.5 shadow-[-14px_14px_20px_0px_rgba(157,157,157,0.2)] disabled:opacity-40"
          >
            <ChevronDown aria-hidden="true" className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  )
}
