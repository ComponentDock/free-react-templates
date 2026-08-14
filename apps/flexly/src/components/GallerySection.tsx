import { GALLERY } from '../data'

/* Gallery — flat image grid (four blocks in the source; keep the grid
   layout with the same 4 photos). */
export function GallerySection() {
  return (
    <section aria-label="Gallery" className="py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-xl text-center">
          <span className="text-[13px] font-bold uppercase tracking-[3px] text-brand">Gallery</span>
          <h2 className="mt-2 text-4xl font-bold text-black">Our Gallery</h2>
        </div>
        <div className="mt-14 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {GALLERY.map((src, i) => (
            <img
              key={src}
              src={src}
              alt={`Gallery photo ${i + 1}`}
              loading="lazy"
              className="h-48 w-full object-cover"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
