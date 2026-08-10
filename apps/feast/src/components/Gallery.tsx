import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { galleryLabel, gallerySeeds, imgUrl, scrollLeftLabel, scrollRightLabel } from '../data'

export function Gallery() {
  const [index, setIndex] = useState(0)

  const showPrevious = () => setIndex((i) => (i - 1 + gallerySeeds.length) % gallerySeeds.length)
  const showNext = () => setIndex((i) => (i + 1) % gallerySeeds.length)

  return (
    <section aria-label={galleryLabel} className="bg-white py-16 dark:bg-gray-950">
      <h2 className="sr-only">{galleryLabel}</h2>
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative overflow-hidden">
          <div
            data-testid="gallery-track"
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {gallerySeeds.map((seed) => (
              <img
                key={seed}
                src={imgUrl(seed, 600, 320)}
                alt=""
                className="h-80 w-full shrink-0 object-cover"
              />
            ))}
          </div>
        </div>
        <button
          type="button"
          onClick={showPrevious}
          aria-label={scrollLeftLabel}
          className="absolute left-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white/80 text-ink transition-colors hover:bg-primary hover:text-white"
        >
          <ChevronLeft className="h-5 w-5" aria-hidden="true" />
        </button>
        <button
          type="button"
          onClick={showNext}
          aria-label={scrollRightLabel}
          className="absolute right-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white/80 text-ink transition-colors hover:bg-primary hover:text-white"
        >
          <ChevronRight className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>
    </section>
  )
}
