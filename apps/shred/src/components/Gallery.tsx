import { GALLERY } from '../data'

/* Gallery — "See the latest photos" heading with a strip of photos. */
export function Gallery() {
  return (
    <section id="gallery-section" aria-label="Gallery" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-xl text-center">
          <span className="text-[13px] font-bold uppercase tracking-[3px] text-brand">Gallery</span>
          <h2 className="mt-2 text-4xl font-semibold text-black">See the latest photos</h2>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-3 md:grid-cols-4">
          {GALLERY.map((src) => (
            <img key={src} src={src} alt="" className="aspect-square w-full object-cover" />
          ))}
        </div>
      </div>
    </section>
  )
}
