import { useState } from 'react'
import { X } from 'lucide-react'

const GALLERY_IMAGES = [
  { seed: 'fc-gallery1', alt: 'Restaurant interior' },
  { seed: 'fc-gallery2', alt: 'Plated dish' },
  { seed: 'fc-gallery3', alt: 'Fresh ingredients' },
  { seed: 'fc-gallery4', alt: 'Dessert display' },
]

export function PhotoGallery() {
  const [lightbox, setLightbox] = useState<string | null>(null)

  return (
    <div>
      <p className="mb-2 text-sm uppercase tracking-wider text-orange">Galleries</p>
      <h2
        className="mb-8 text-3xl font-bold text-white"
        style={{ fontFamily: 'var(--font-playfair)' }}
      >
        Photo Galleries
      </h2>

      <div className="grid grid-cols-2 gap-3">
        {GALLERY_IMAGES.map((img) => (
          <button
            key={img.seed}
            onClick={() => setLightbox(img.seed)}
            className="group overflow-hidden"
            aria-label={`View ${img.alt}`}
          >
            <img
              src={`https://picsum.photos/seed/${img.seed}/400/300`}
              alt={img.alt}
              className="h-32 w-full object-cover transition-transform group-hover:scale-105 md:h-40"
              loading="lazy"
            />
          </button>
        ))}
      </div>

      <a
        href="#gallery"
        className="mt-6 inline-block rounded-full border border-white px-6 py-2 text-sm text-white transition-colors hover:bg-white hover:text-heading"
      >
        More Galleries
      </a>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-label="Gallery lightbox"
        >
          <button
            className="absolute right-6 top-6 text-white"
            onClick={() => setLightbox(null)}
            aria-label="Close lightbox"
          >
            <X size={32} />
          </button>
          <img
            src={`https://picsum.photos/seed/${lightbox}/1200/800`}
            alt="Gallery image"
            className="max-h-[80vh] max-w-[90vw] object-contain"
          />
        </div>
      )}
    </div>
  )
}
