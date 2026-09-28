import { useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const galleryImages = [
  { seed: 'grillmark-gallery-1', alt: 'Grilled steak with herbs' },
  { seed: 'grillmark-gallery-2', alt: 'BBQ ribs with sauce' },
  { seed: 'grillmark-gallery-3', alt: 'Grilled chicken platter' },
  { seed: 'grillmark-gallery-4', alt: 'Seared tuna steak' },
  { seed: 'grillmark-gallery-5', alt: 'Lamb chops with rosemary' },
  { seed: 'grillmark-gallery-6', alt: 'Grilled seafood platter' },
  { seed: 'grillmark-gallery-7', alt: 'Smoked brisket slices' },
  { seed: 'grillmark-gallery-8', alt: 'Prime rib roast' },
]

export function FoodGallery() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    const amount = 300
    scrollRef.current!.scrollLeft += direction === 'left' ? -amount : amount
  }

  return (
    <section id="gallery" className="bg-gray-50 py-24 dark:bg-gray-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <span className="font-display text-sm tracking-wider text-brand">Gallery</span>
          <h2 className="mt-3 font-display text-3xl text-heading dark:text-white">
            Our Signature Dishes
          </h2>
        </div>

        <div className="relative">
          {/* Left arrow */}
          <button
            type="button"
            onClick={() => scroll('left')}
            aria-label="Scroll gallery left"
            className="absolute -left-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg transition-colors hover:bg-brand hover:text-white dark:bg-gray-800"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>

          {/* Right arrow */}
          <button
            type="button"
            onClick={() => scroll('right')}
            aria-label="Scroll gallery right"
            className="absolute -right-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg transition-colors hover:bg-brand hover:text-white dark:bg-gray-800"
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>

          {/* Scrollable container */}
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto scroll-smooth pb-4 scrollbar-hide"
            style={{ scrollbarWidth: 'none' }}
          >
            {galleryImages.map((img) => (
              <div key={img.seed} className="shrink-0">
                <img
                  src={`https://picsum.photos/seed/${img.seed}/400/300`}
                  alt={img.alt}
                  className="h-64 w-80 rounded object-cover shadow-md transition-transform hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
