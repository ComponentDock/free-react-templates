import { useState } from 'react'
import { galleryCategories, galleryImages } from '../data'

/** Light #f9f9ff gallery section with the same filter pills as the menu
 *  and a photo grid that filters client-side. */
export function Gallery() {
  const [active, setActive] = useState<string>('All Menu')

  const visible =
    active === 'All Menu'
      ? galleryImages
      : galleryImages.filter((image) => image.category === active)

  return (
    <section id="gallery" className="bg-section py-[120px]">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="mb-6 text-4xl font-semibold">Food and Customer Gallery</h1>
          <p className="leading-relaxed">
            Who are in extremely love with eco friendly system. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua.
          </p>
        </div>

        <div className="mt-14 flex flex-wrap justify-center gap-0 rounded-[10px] bg-white py-2 shadow-[0px_10px_30px_0px_rgba(153,153,153,0.2)]">
          {galleryCategories.map((category, index) => (
            <button
              key={category}
              type="button"
              onClick={() => setActive(category)}
              aria-pressed={active === category}
              className={`px-5 py-2 text-xs font-medium transition-colors ${
                index < galleryCategories.length - 1 ? 'border-r border-[#edf6ff]' : ''
              } ${
                active === category
                  ? 'bg-brand text-white'
                  : 'bg-transparent text-ink hover:text-brand'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((image) => (
            <img
              key={image.src}
              src={image.src}
              alt={image.alt}
              loading="lazy"
              className="h-64 w-full rounded-[10px] object-cover transition-opacity duration-300 hover:opacity-80"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
