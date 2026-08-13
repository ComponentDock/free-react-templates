import { galleryImages } from '../data'

/** Full-bleed, gap-free strip of four photographic tiles (source gallery
 *  row with no gutters): 2×2 on tablet, 4-across on desktop. Decorative
 *  images only. */
export function Gallery() {
  return (
    <section data-testid="gallery" aria-label="Event gallery" className="w-full">
      <div className="grid grid-cols-2 lg:grid-cols-4">
        {galleryImages.map((image) => (
          <img key={image} src={image} alt="" className="h-48 w-full object-cover md:h-56" />
        ))}
      </div>
    </section>
  )
}
