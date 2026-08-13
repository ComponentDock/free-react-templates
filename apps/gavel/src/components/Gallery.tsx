import { BrandIcon } from './BrandIcon'
import { galleryImages } from '../data'

/** Full-width strip of six square image tiles that reveal an Instagram icon
 *  overlay on hover. */
export function Gallery() {
  return (
    <section aria-label="Gallery" className="bg-white">
      <div className="grid grid-cols-2 gap-px bg-black/10 sm:grid-cols-3 lg:grid-cols-6">
        {galleryImages.map((image, index) => (
          <a
            key={image}
            href="#gallery"
            aria-label={`Gallery photo ${index + 1}`}
            className="group relative block aspect-square overflow-hidden bg-gray-100"
          >
            <img
              src={image}
              alt=""
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <span className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity group-hover:opacity-100">
              <BrandIcon name="instagram" className="h-8 w-8 text-white" />
            </span>
          </a>
        ))}
      </div>
    </section>
  )
}
