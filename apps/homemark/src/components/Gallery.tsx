import { galleryImages, galleryTexts } from '../data'
import { Eye } from 'lucide-react'

/** Dark-background gallery section with image thumbnails and text columns. */
export function Gallery() {
  return (
    <section className="bg-navy py-20" data-testid="gallery">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <h2 className="mb-12 text-center text-3xl font-bold text-white">Our Houses</h2>

        {/* Image carousel row */}
        <div className="mb-12 grid grid-cols-2 gap-4 md:grid-cols-4">
          {galleryImages.map((img, i) => (
            <a key={img} href={img} className="group relative overflow-hidden rounded">
              <img
                src={img}
                alt={`Gallery image ${i + 1}`}
                className="h-48 w-full object-cover transition-transform group-hover:scale-105"
                loading="lazy"
              />
              <span className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 transition-opacity group-hover:opacity-100">
                <Eye size={28} className="text-white" aria-hidden="true" />
              </span>
            </a>
          ))}
        </div>

        {/* Text columns */}
        <div className="grid gap-8 md:grid-cols-2">
          {galleryTexts.map((item) => (
            <div key={item.title} className="text-white">
              <h4 className="mb-3 text-lg font-bold">{item.title}</h4>
              <p className="text-sm leading-relaxed text-white/70">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
