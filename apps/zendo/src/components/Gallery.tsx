import { galleryImages } from '../data'
import { InstagramIcon } from './gallery-icons'

/** "See the latest photos": 8 photo tiles (4 per row, responsive) with a
 *  dark hover overlay and a centered Instagram icon. */
export function Gallery() {
  return (
    <section aria-label="See the latest photos" className="py-16 md:py-[7em]">
      <div className="mx-auto max-w-[1240px] px-4">
        <h2 className="section-title">See the latest photos</h2>
        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
          {galleryImages.map((image, index) => (
            <a
              key={image}
              href="#home-section"
              aria-label={`Gallery photo ${index + 1}`}
              className="group relative block aspect-square overflow-hidden"
            >
              <img
                src={image}
                alt=""
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <span className="absolute inset-0 flex items-center justify-center bg-ink/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <InstagramIcon className="h-8 w-8 text-white" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
