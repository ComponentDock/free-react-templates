import { useState } from 'react'
import { Eye, X } from 'lucide-react'
import { GALLERY_IMAGES } from '../data'

/* Screens Gallery recreated from the source's gallery_area: four screenshot
   images that open a lightbox on click, with an eye icon hint on hover. */

export function Gallery() {
  const [lightbox, setLightbox] = useState<number | null>(null)

  return (
    <section id="gallery" className="bg-white py-24 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="relative mb-20 text-center">
          <h2
            aria-hidden="true"
            className="font-display text-7xl font-bold leading-[60px] text-brand opacity-10"
          >
            Screens Gallery
          </h2>
          <h2 className="font-display -mt-10 text-4xl font-bold text-ink dark:text-white">
            Screens Gallery
          </h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {GALLERY_IMAGES.map((src, index) => (
            <button
              key={src}
              type="button"
              aria-label={`Open screenshot ${index + 1}`}
              onClick={() => setLightbox(index)}
              className="group relative block overflow-hidden rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
            >
              <img
                src={src}
                alt=""
                className="aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
              <span className="absolute inset-0 flex items-center justify-center bg-purple-deep/0 transition-colors duration-300 group-hover:bg-purple-deep/50">
                <Eye
                  className="h-8 w-8 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  aria-hidden="true"
                />
              </span>
            </button>
          ))}
        </div>
      </div>

      {lightbox !== null ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Screenshot lightbox"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-6"
          onClick={() => setLightbox(null)}
        >
          <div
            className="relative max-h-full max-w-4xl"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={GALLERY_IMAGES[lightbox]}
              alt="Game screenshot enlarged"
              className="max-h-[80vh] w-full rounded-xl object-contain"
            />
            <button
              type="button"
              aria-label="Close lightbox"
              onClick={() => setLightbox(null)}
              className="absolute -right-4 -top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-gray-900 shadow-lg transition-colors hover:bg-gray-200"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      ) : null}
    </section>
  )
}
