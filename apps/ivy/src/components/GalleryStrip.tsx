import { InstagramIcon } from './social-icons'
import { GALLERY_IMAGES } from '../data'

/**
 * GalleryStrip — row of photo tiles (2 columns on mobile, 4 on desktop),
 * each with an orange circular instagram icon overlay. Tiles are
 * decorative links.
 */
export function GalleryStrip() {
  return (
    <section
      id="gallery-section"
      aria-label="Campus gallery"
      className="grid grid-cols-2 md:grid-cols-4"
    >
      {GALLERY_IMAGES.map((image, index) => (
        <a
          key={image}
          href="#gallery-section"
          aria-label={`Gallery photo ${index + 1}`}
          className="group relative block"
        >
          <img src={image} alt="" aria-hidden="true" className="w-full" loading="lazy" />
          <span className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors group-hover:bg-black/30">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-white opacity-0 transition-opacity group-hover:opacity-100">
              <InstagramIcon className="h-5 w-5" />
            </span>
          </span>
        </a>
      ))}
    </section>
  )
}
