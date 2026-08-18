import { instagramTiles } from '../data'
import { InstagramIcon } from './icons'

/**
 * Instagram strip: a responsive row of square photo tiles with a dark ink
 * overlay and Instagram icon on hover (reference: .instagram-area).
 */
export function InstagramStrip() {
  return (
    <section aria-label="Instagram feed" className="py-24">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {instagramTiles.map((tile) => (
            <a
              key={tile.alt}
              href="#contact"
              aria-label={`View photo: ${tile.alt}`}
              className="group relative block overflow-hidden"
            >
              <img
                src={tile.image}
                alt={tile.alt}
                className="aspect-square w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <span className="absolute inset-0 flex items-center justify-center bg-ink opacity-0 transition-opacity group-hover:opacity-90">
                <InstagramIcon className="h-8 w-8 text-white" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
