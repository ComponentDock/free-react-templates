import { Search } from 'lucide-react'
import { GALLERY_ITEMS } from '../data'

/* Gallery — Furniture Collection: 8 image tiles with a caption + search
   icon that appear on hover behind a dark overlay. */
export function Gallery() {
  return (
    <section aria-label="Gallery" id="collection" className="bg-paper pb-16 pt-8">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-10 max-w-xl text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-muted">Our Finish Projects</p>
          <h2 className="mt-2 font-display text-[38px] font-medium text-ink">
            Furniture Collection
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-2 lg:grid-cols-4">
          {GALLERY_ITEMS.map((item) => (
            <a
              key={item.caption}
              href="#collection"
              aria-label={`View ${item.caption}`}
              className="group relative block h-44 overflow-hidden lg:h-[340px]"
            >
              <img
                src={item.image}
                alt={item.caption}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div
                className="absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                aria-hidden="true"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <Search className="h-6 w-6" aria-hidden="true" />
                <h3 className="px-4 text-center font-display text-xl font-semibold">
                  {item.caption}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
