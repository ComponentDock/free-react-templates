import { useState } from 'react'
import { X } from 'lucide-react'

const images = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  src: `https://picsum.photos/seed/northstar-gal-${i + 1}/400/300`,
  alt: `Gallery image ${i + 1}`,
}))

export function Gallery() {
  const [selected, setSelected] = useState<number | null>(null)

  const close = () => setSelected(null)

  return (
    <section id="gallery" className="bg-white py-16" aria-label="Gallery">
      <div className="container mx-auto px-4">
        <h2 className="mb-4 text-center text-3xl font-bold text-[#212529] md:text-4xl font-heading">
          Gallery
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-[#737373]">
          A glimpse into our coaching sessions, events, and transformative moments.
        </p>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {images.map((img, index) => (
            <button
              key={img.id}
              onClick={() => setSelected(index)}
              className="group overflow-hidden rounded"
              aria-label={`View ${img.alt}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selected !== null && images[selected] && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
          onClick={close}
          role="dialog"
          aria-label="Image lightbox"
        >
          <button
            onClick={close}
            className="absolute right-4 top-4 text-white"
            aria-label="Close lightbox"
          >
            <X size={32} />
          </button>
          <img
            src={images[selected]!.src.replace('/400/300', '/1200/800')}
            alt={images[selected]!.alt}
            className="max-h-[80vh] max-w-[90vw] rounded object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  )
}
