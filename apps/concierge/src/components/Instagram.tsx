import { INSTAGRAM, IMAGES } from '../data'
import { InstagramIcon } from './icons'

/** Instagram — heading row plus a grid of image tiles carrying an
    Instagram icon overlay that appears on hover. */
export function Instagram() {
  return (
    <section id="instagram" className="bg-white" aria-label="Instagram gallery">
      <div className="mx-auto mb-12 max-w-7xl px-4 pt-28">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="font-display text-2xl font-bold uppercase text-brand">
            {INSTAGRAM.heading}
          </h2>
          <p className="hidden max-w-md text-sm leading-relaxed text-black/50 md:block">
            {INSTAGRAM.blurb}
          </p>
        </div>
      </div>
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-4 pb-28 sm:grid-cols-4">
        {IMAGES.instagram.map((src) => (
          <a
            key={src}
            href="#instagram"
            className="group relative block overflow-hidden"
            aria-label="View photo on Instagram"
          >
            <img
              src={src}
              alt=""
              loading="lazy"
              className="aspect-square w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <span className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <InstagramIcon className="h-8 w-8 text-white" />
            </span>
          </a>
        ))}
      </div>
    </section>
  )
}
