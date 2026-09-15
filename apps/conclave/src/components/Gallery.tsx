import { Plus } from 'lucide-react'

const GALLERY_IMAGES = Array.from(
  { length: 6 },
  (_, i) => `https://picsum.photos/seed/conclave-gallery${i + 1}/400/400`,
)

/* Gallery section: dark background image with 6-image grid.
   Each image shows a hover overlay with a plus icon. */

export function Gallery() {
  return (
    <section id="gallery" className="relative overflow-hidden py-[100px]">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(https://picsum.photos/seed/conclave-gallery-bg/1920/1080)' }}
      />
      <div aria-hidden="true" className="absolute inset-0 bg-[#111429]/85" />

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center">
          <p
            className="text-sm font-medium uppercase tracking-wider text-[#ea0763]"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Our Gallery
          </p>
          <h2
            className="mt-3 text-3xl font-bold uppercase tracking-wide text-white md:text-[38px]"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Event Gallery
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {GALLERY_IMAGES.map((image, i) => (
            <a
              key={image}
              href="#gallery"
              aria-label={`Gallery image ${i + 1}`}
              className="group relative overflow-hidden rounded-[10px]"
            >
              <img
                src={image}
                alt=""
                className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-[#3b1d82]/0 transition-colors duration-300 group-hover:bg-[#3b1d82]/70">
                <Plus
                  className="h-10 w-10 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  aria-hidden="true"
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
