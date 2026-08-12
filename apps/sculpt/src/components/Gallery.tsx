import { Plus } from 'lucide-react'
import { GALLERY_IMAGES } from '../data'
import { SectionHeading } from './SectionHeading'

/**
 * Gallery — grid of ten photos (five per row), each revealing a white
 * plus icon on hover.
 */
export function Gallery() {
  return (
    <section id="gallery" aria-label="Gallery" className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          title="Our Gallery"
          intro="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia."
        />

        <div className="mt-12 flex flex-wrap">
          {GALLERY_IMAGES.map((image, index) => (
            <a
              key={`${image}-${index}`}
              href="#gallery"
              className="group relative block h-[300px] w-1/2 overflow-hidden sm:w-1/3 lg:w-1/5"
            >
              <img
                src={image}
                alt="Gallery photo"
                loading="lazy"
                className="h-full w-full object-cover"
              />
              <span
                aria-hidden="true"
                className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity group-hover:opacity-100"
              >
                <Plus className="h-8 w-8 text-white" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
