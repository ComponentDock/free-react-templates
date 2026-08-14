import { PHOTOS } from '../data'

/* Photo gallery (source: section.section.slider-section.bg-light — centered
   "Photos" heading over a light-grey slider of placeholder photos, each with
   a caption). */
export function PhotoSlider() {
  return (
    <section className="bg-mist py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-center font-display text-4xl font-bold text-ink">Photos</h2>
        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
          {PHOTOS.map((photo) => (
            <figure key={photo.caption} className="overflow-hidden rounded-lg bg-white shadow-sm">
              <img
                src={photo.image}
                alt={photo.caption}
                className="h-40 w-full object-cover md:h-44"
              />
              <figcaption className="px-3 py-2 text-xs font-medium uppercase tracking-widest text-smoke">
                {photo.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
