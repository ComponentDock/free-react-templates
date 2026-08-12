import { GALLERY, GALLERY_CAPTION, GALLERY_PLACE } from '../data'
import { SectionHeading } from './SectionHeading'

/**
 * Gallery — masonry-style "Latest Player Showcase" grid of seven photos;
 * on hover a purple overlay slides up revealing the "Lead Trainer /
 * Multi Plus Gym, USA" caption.
 */
export function Gallery() {
  return (
    <section id="gallery" className="py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading title="Latest Player Showcase" center />
        <div className="mt-10 columns-1 gap-6 sm:columns-2 lg:columns-4">
          {GALLERY.map((src, index) => (
            <figure key={src} className="group relative mb-6 overflow-hidden">
              <img
                src={src}
                alt={`Ironvault gallery image ${index + 1}`}
                className="w-full object-cover"
              />
              <figcaption className="absolute inset-x-0 bottom-0 translate-y-full bg-brand/60 p-5 text-center transition-transform duration-300 group-hover:translate-y-0">
                <p className="text-sm font-medium uppercase tracking-wide text-white">
                  {GALLERY_CAPTION}
                </p>
                <h3 className="text-lg font-bold text-white">{GALLERY_PLACE}</h3>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
