import { GALLERY_IMAGES } from '../data'

/** Gallery — 2 rows × 4 columns of picsum.photos images with hover opacity effect. */
export function Gallery() {
  return (
    <section id="gallery" className="py-20">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="mb-12 text-center font-heading text-4xl font-bold text-ink">Our Gallery</h2>
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {GALLERY_IMAGES.map((image, index) => (
            <div key={index} className="group overflow-hidden rounded-lg">
              <img
                src={image}
                alt={`Gallery image ${index + 1}`}
                className="h-48 w-full object-cover transition-opacity duration-300 group-hover:opacity-75"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
