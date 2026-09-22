import { ZoomIn } from 'lucide-react'
import { GALLERY_IMAGES } from '../data'

export function Gallery() {
  return (
    <section id="gallery" className="bg-offwhite py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-center font-heading text-4xl font-bold text-dark">Photo Gallery</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-muted">
          Take a visual tour of our beautiful hotel and facilities.
        </p>
        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
          {GALLERY_IMAGES.map((src, index) => (
            <div key={src} className="group relative overflow-hidden rounded-lg">
              <img
                src={src}
                alt={`Hotel gallery image ${index + 1}`}
                className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-110 md:h-56"
                loading="lazy"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-300 group-hover:bg-black/40">
                <ZoomIn className="h-8 w-8 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
