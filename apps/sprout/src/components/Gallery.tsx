import { useState } from 'react'
import { X } from 'lucide-react'
import { galleryImages } from '../data'

export function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const open = (i: number) => setLightboxIndex(i)
  const close = () => setLightboxIndex(null)
  const prev = () => setLightboxIndex((i) => (i! - 1 + galleryImages.length) % galleryImages.length)
  const next = () => setLightboxIndex((i) => (i! + 1) % galleryImages.length)

  return (
    <section id="gallery" className="bg-warm-off py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="mb-12 text-center text-3xl font-bold text-ink">Our Gallery</h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          {galleryImages.map((src, i) => (
            <button
              key={src}
              type="button"
              onClick={() => open(i)}
              className="group relative cursor-pointer overflow-hidden rounded-none"
            >
              <img
                src={src}
                alt={`Gallery image ${i + 1}`}
                className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105 sm:h-64"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          role="dialog"
          aria-label="Image lightbox"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
          onClick={close}
        >
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              close()
            }}
            aria-label="Close lightbox"
            className="absolute right-4 top-4 text-white"
          >
            <X className="h-8 w-8" />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              prev()
            }}
            aria-label="Previous image"
            className="absolute left-4 text-4xl text-white"
          >
            ‹
          </button>
          <img
            src={galleryImages[lightboxIndex]}
            alt={`Gallery image ${lightboxIndex + 1}`}
            className="max-h-[80vh] max-w-[90vw] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              next()
            }}
            aria-label="Next image"
            className="absolute right-4 text-4xl text-white"
          >
            ›
          </button>
        </div>
      )}
    </section>
  )
}
