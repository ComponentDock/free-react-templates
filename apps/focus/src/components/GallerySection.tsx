import { useState } from 'react'
import { X } from 'lucide-react'
import { GALLERY } from '../data'

/* Selected-projects gallery: a no-gutter 3-column grid of photo tiles
   with an overlay caption; clicking a tile opens a lightbox with the
   full-size image (close via X or overlay click). */
export function GallerySection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="work" className="bg-ink py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 text-center">
          <h2 className="text-base font-bold tracking-[0.2em] text-muted uppercase">
            Selected Projects
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-white/90">
            A small river named Duden flows by their place and supplies it with the necessary
            regelialia. It is a paradisematic country.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-0 sm:grid-cols-2 lg:grid-cols-3">
        {GALLERY.photos.map((photo, index) => (
          <button
            key={photo}
            type="button"
            onClick={() => setOpenIndex(index)}
            aria-label={`${GALLERY.caption} ${index + 1}`}
            className="group relative block aspect-square overflow-hidden"
          >
            <img
              src={photo}
              alt=""
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-4 text-left text-xs tracking-wider text-white uppercase opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              {GALLERY.caption}
            </span>
          </button>
        ))}
      </div>
      {openIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
          onClick={() => setOpenIndex(null)}
          className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/90 p-6"
        >
          <button
            type="button"
            aria-label="Close lightbox"
            onClick={() => setOpenIndex(null)}
            className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-brand hover:text-ink"
          >
            <X aria-hidden="true" className="h-5 w-5" />
          </button>
          <img
            src={GALLERY.photos[openIndex]!}
            alt={GALLERY.caption}
            onClick={(event) => event.stopPropagation()}
            className="max-h-full max-w-full object-contain"
          />
        </div>
      )}
    </section>
  )
}
