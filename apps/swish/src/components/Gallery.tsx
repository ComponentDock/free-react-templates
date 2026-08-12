import { galleryTiles } from '../data'
import { SectionTitle } from './SectionTitle'

export function Gallery() {
  return (
    <section id="gallery" className="py-16 md:py-24" aria-label="Gallery">
      <div className="mx-auto max-w-6xl px-4">
        <SectionTitle overline="Our Gallery" title="Latest Player Showcase" />
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {galleryTiles.map((tile) => (
            <figure key={tile.id} className="group relative overflow-hidden">
              <img
                src={tile.image}
                alt={tile.caption}
                className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105 md:h-56"
                width={400}
                height={300}
              />
              <figcaption className="absolute inset-0 flex items-end bg-black/0 p-4 text-sm font-medium text-white opacity-0 transition-opacity duration-300 group-hover:bg-black/40 group-hover:opacity-100">
                {tile.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
