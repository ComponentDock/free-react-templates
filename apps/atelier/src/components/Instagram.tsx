import { INSTAGRAM_TILES } from '../data'
import { BrandIcon } from './BrandIcon'

/* instagram — horizontal strip of six photo tiles with an Instagram brand
   overlay on hover, mirroring the original's instagram row. */
export function Instagram() {
  return (
    <section aria-label="Instagram feed" className="bg-white pb-16 dark:bg-ink">
      <h2 className="text-center text-2xl font-semibold tracking-wide text-ink uppercase dark:text-white">
        Instagram
      </h2>
      <div className="mt-8 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6">
        {INSTAGRAM_TILES.map((tile) => (
          <a
            key={tile.alt}
            href="https://instagram.com"
            aria-label={`Instagram post: ${tile.alt}`}
            className="group relative block overflow-hidden"
          >
            <img
              src={`https://picsum.photos/seed/${tile.seed}/400/400`}
              alt={tile.alt}
              loading="lazy"
              className="aspect-square w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <span className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity group-hover:opacity-100">
              <BrandIcon name="instagram" className="h-6 w-6 text-white" />
            </span>
          </a>
        ))}
      </div>
    </section>
  )
}
