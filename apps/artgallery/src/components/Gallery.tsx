import { useState } from 'react'
import { X } from 'lucide-react'

const IMAGES = Array.from({ length: 6 }, (_, i) => ({
  id: i,
  src: `https://picsum.photos/seed/artgallery-${i + 1}/600/400`,
  alt: `Artwork ${i + 1}`,
}))

export function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  return (
    <section id="gallery" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="mb-12 text-center text-3xl font-bold text-navy">
          <span className="font-[family-name:var(--font-playfair)]">Our Gallery</span>
        </h2>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {IMAGES.map((img, idx) => (
            <button
              key={img.id}
              type="button"
              onClick={() => setLightboxIndex(idx)}
              className="group relative cursor-pointer overflow-hidden"
              aria-label={`View ${img.alt}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-110 md:h-64"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/40" />
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
          role="dialog"
          aria-label="Image lightbox"
          onClick={() => setLightboxIndex(null)}
        >
          <button
            type="button"
            className="absolute right-4 top-4 text-white"
            onClick={() => setLightboxIndex(null)}
            aria-label="Close lightbox"
          >
            <X className="h-8 w-8" />
          </button>
          <img
            src={IMAGES[lightboxIndex]!.src}
            alt={IMAGES[lightboxIndex]!.alt}
            className="max-h-[80vh] max-w-[90vw] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  )
}
