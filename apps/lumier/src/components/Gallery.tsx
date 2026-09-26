import { Search } from 'lucide-react'
import { useState } from 'react'

const photos = [
  { id: 1, seed: 'lumier-p1' },
  { id: 2, seed: 'lumier-p2' },
  { id: 3, seed: 'lumier-p3' },
  { id: 4, seed: 'lumier-p4' },
  { id: 5, seed: 'lumier-p5' },
  { id: 6, seed: 'lumier-p6' },
  { id: 7, seed: 'lumier-p7' },
  { id: 8, seed: 'lumier-p8' },
  { id: 9, seed: 'lumier-p9' },
  { id: 10, seed: 'lumier-p10' },
  { id: 11, seed: 'lumier-p11' },
  { id: 12, seed: 'lumier-p12' },
  { id: 13, seed: 'lumier-p13' },
  { id: 14, seed: 'lumier-p14' },
  { id: 15, seed: 'lumier-p15' },
  { id: 16, seed: 'lumier-p16' },
  { id: 17, seed: 'lumier-p17' },
  { id: 18, seed: 'lumier-p18' },
]

export function Gallery() {
  const [lightbox, setLightbox] = useState<string | null>(null)

  return (
    <section id="section-photos" className="py-0">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-0">
        {photos.map((photo) => (
          <button
            key={photo.id}
            onClick={() => setLightbox(`https://picsum.photos/seed/${photo.seed}/1200/800`)}
            className="group relative overflow-hidden cursor-pointer aspect-square"
            aria-label={`View photo ${photo.id}`}
          >
            <img
              src={`https://picsum.photos/seed/${photo.seed}/400/400`}
              alt={`Photography ${photo.id}`}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <Search className="text-white w-5 h-5" />
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-label="Photo viewer"
        >
          <img
            src={lightbox}
            alt="Enlarged photo"
            className="max-w-full max-h-[90vh] object-contain"
          />
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-4 right-4 text-white text-3xl"
            aria-label="Close lightbox"
          >
            &times;
          </button>
        </div>
      )}
    </section>
  )
}
