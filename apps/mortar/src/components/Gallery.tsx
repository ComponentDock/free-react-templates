import { useState } from 'react'
import { Search, X } from 'lucide-react'

const images = [
  { src: 'https://picsum.photos/seed/mortar-gallery-1/600/400', alt: 'Creative workspace design' },
  { src: 'https://picsum.photos/seed/mortar-gallery-2/600/400', alt: 'Team brainstorming session' },
  { src: 'https://picsum.photos/seed/mortar-gallery-3/600/400', alt: 'Brand presentation mockup' },
  {
    src: 'https://picsum.photos/seed/mortar-gallery-4/600/400',
    alt: 'Office interior architecture',
  },
  { src: 'https://picsum.photos/seed/mortar-gallery-5/600/400', alt: 'Digital product showcase' },
  { src: 'https://picsum.photos/seed/mortar-gallery-6/600/400', alt: 'Marketing campaign visuals' },
] as const

export function Gallery() {
  const [selected, setSelected] = useState<string | null>(null)

  return (
    <section id="gallery" aria-label="Gallery" className="bg-white py-20 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl text-center">
          <h2 className="text-3xl font-medium text-ink dark:text-gray-100">Our Gallery</h2>
          <p className="mt-5 leading-relaxed text-smoke dark:text-gray-400">
            A visual collection of our work and creative process.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {images.map((image) => (
            <button
              key={image.src}
              type="button"
              onClick={() => setSelected(image.src)}
              className="group relative cursor-pointer overflow-hidden rounded"
              aria-label={`View ${image.alt}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105 sm:h-56"
                loading="lazy"
              />
              <span className="absolute inset-0 flex items-center justify-center bg-ink/0 transition-colors group-hover:bg-ink/40">
                <Search
                  className="h-6 w-6 text-white opacity-0 transition-opacity group-hover:opacity-100"
                  aria-hidden="true"
                />
              </span>
            </button>
          ))}
        </div>
      </div>

      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/80 p-4"
          role="dialog"
          aria-label="Image preview"
          onClick={() => setSelected(null)}
        >
          <div className="relative max-h-[80vh] max-w-[90vw]" onClick={(e) => e.stopPropagation()}>
            <img
              src={selected}
              alt="Gallery preview"
              className="max-h-[80vh] rounded object-contain"
            />
            <button
              type="button"
              onClick={() => setSelected(null)}
              aria-label="Close preview"
              className="absolute -right-3 -top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white text-ink shadow-lg"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}
    </section>
  )
}
