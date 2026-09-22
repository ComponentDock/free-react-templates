import { useState } from 'react'
import { ChevronLeft, ChevronRight, Plus } from 'lucide-react'

const images = [
  'https://picsum.photos/seed/belmont-gallery-1/600/400',
  'https://picsum.photos/seed/belmont-gallery-2/600/400',
  'https://picsum.photos/seed/belmont-gallery-3/600/400',
  'https://picsum.photos/seed/belmont-gallery-4/600/400',
  'https://picsum.photos/seed/belmont-gallery-5/600/400',
  'https://picsum.photos/seed/belmont-gallery-6/600/400',
]

const visibleCount = 3

export function Gallery() {
  const [offset, setOffset] = useState(0)

  const maxOffset = Math.max(0, images.length - visibleCount)
  const prev = () => setOffset((o) => Math.max(0, o - 1))
  const next = () => setOffset((o) => Math.min(maxOffset, o + 1))

  return (
    <section className="bg-brand-darker py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-medium tracking-[0.2em] uppercase text-accent">
            our gallery
          </p>
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">Our Gallery</h2>
        </div>

        <div className="relative">
          <div className="flex gap-4 overflow-hidden">
            {images.slice(offset, offset + visibleCount).map((src, i) => (
              <div key={src} className="group relative flex-1 overflow-hidden rounded">
                <img
                  src={src}
                  alt={`Gallery photo ${offset + i + 1}`}
                  className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105 sm:h-80"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-brand/40 opacity-0 transition-opacity group-hover:opacity-100">
                  <Plus size={32} className="text-white" />
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={prev}
            aria-label="Previous"
            className="absolute top-1/2 left-2 -translate-y-1/2 rounded-full bg-white/80 p-2 text-ink transition hover:bg-white"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={next}
            aria-label="Next"
            className="absolute top-1/2 right-2 -translate-y-1/2 rounded-full bg-white/80 p-2 text-ink transition hover:bg-white"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  )
}
