import { Maximize } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { gallery, gallerySpans } from '../data'

/** Full-bleed gallery (source: section.gallery-area, container-fluid p-0):
 *  six mixed-width photo tiles (xl 5/3/4/5/4/3) at 685px tall; hovering a
 *  tile shows a coral overlay, a fullscreen icon top-left and a caption that
 *  slides up. */
export function Gallery() {
  return (
    <section id="gallery" className="bg-coal">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-12">
        {gallery.map((tile, index) => (
          <div
            key={`${tile.image}-${index}`}
            className={cn('group relative overflow-hidden', gallerySpans[index])}
          >
            <img src={tile.image} alt="" className="h-[685px] w-full object-cover" loading="lazy" />
            <div
              className="absolute inset-0 bg-brand opacity-0 transition-opacity duration-300 group-hover:opacity-90"
              aria-hidden="true"
            />
            <a
              href="#gallery"
              aria-label={`Open ${tile.title}`}
              className="absolute left-[42px] top-[50px] z-10 text-white opacity-0 transition-all duration-300 group-hover:opacity-100"
            >
              <Maximize className="h-[30px] w-[30px]" aria-hidden="true" />
            </a>
            <div className="absolute bottom-10 left-10 z-10 translate-y-6 text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
              <h3 className="mb-5 font-heading text-2xl font-medium">{tile.title}</h3>
              <p className="mb-[30px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
