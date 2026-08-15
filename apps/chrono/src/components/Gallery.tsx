import { galleryImages } from '../data'

export function Gallery() {
  return (
    <section id="gallery-section" className="bg-paper">
      <div className="mx-auto grid max-w-[1320px] gap-6 px-6 pb-8 sm:grid-cols-2 lg:px-10">
        {galleryImages.map((tile) => (
          <a
            key={tile.label}
            href="#gallery-section"
            className={`group relative block overflow-hidden ${tile.big ? 'h-[330px] lg:h-[560px]' : 'h-[260px] lg:h-[330px]'}`}
          >
            <img
              src={tile.image}
              alt={tile.label}
              className="h-full w-full scale-[1.06] object-cover transition-transform duration-500 group-hover:scale-100"
            />
            <span
              aria-hidden="true"
              className="absolute inset-0 bg-[#010a1c]/30 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            />
          </a>
        ))}
      </div>
    </section>
  )
}
