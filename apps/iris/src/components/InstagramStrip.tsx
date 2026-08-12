import { INSTAGRAM_BUTTON, INSTAGRAM_IMAGES } from '../data'

/**
 * InstagramStrip — centered white "Follow us on instagram" button over six
 * equal square photos; the strip carries a negative bottom margin so it
 * overlaps the black footer below.
 */
export function InstagramStrip() {
  return (
    <section id="gallery" className="relative bg-white">
      <div className="mx-auto max-w-7xl px-4">
        <div className="relative">
          <a
            href="#contact"
            className="absolute left-1/2 top-1/2 z-10 inline-flex h-[50px] -translate-x-1/2 -translate-y-1/2 items-center rounded-[5px] bg-white px-[45px] text-[13px] font-medium text-ink shadow-md transition-colors hover:bg-gray-100"
          >
            {INSTAGRAM_BUTTON}
          </a>
          <div className="-mb-[120px] grid grid-cols-3 lg:grid-cols-6">
            {INSTAGRAM_IMAGES.map((src, index) => (
              <a
                key={src}
                href="#contact"
                aria-label={`Instagram photo ${index + 1}`}
                className="block overflow-hidden"
              >
                <img
                  src={src}
                  alt=""
                  className="aspect-square w-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
