import { instagram } from '../data'
import { BrandIcon } from './BrandIcon'

/**
 * "Follow us on Instagram": centered heading, a gold-bordered handle
 * button and a four-column grid of four square photos.
 */
export function Instagram() {
  return (
    <section id="instagram" className="bg-ink pb-[120px]">
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6">
        <div className="mb-[70px] flex flex-col items-center gap-6 text-center">
          <h2 className="font-display text-[40px] leading-[1.3] text-heading">
            {instagram.heading}
          </h2>
          <a
            href="#instagram"
            className="inline-flex items-center gap-2 border border-brand px-[36px] py-[13px] text-[15px] text-brand transition-colors hover:bg-brand hover:text-ink"
          >
            <BrandIcon name="instagram" className="h-4 w-4" />
            {instagram.handle}
          </a>
        </div>
        <ul className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {instagram.photos.map((photo) => (
            <li key={photo.src}>
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                className="aspect-square w-full object-cover"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
