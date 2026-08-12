import { socialTiles } from '../data'
import { BrandIcon } from './BrandIcon'
import { SectionTitle } from './SectionTitle'

export function Social() {
  return (
    <section id="social" className="py-16 md:py-24" aria-label="Social media">
      <div className="mx-auto max-w-6xl px-4">
        <SectionTitle overline="Social Media" title="Follow Us Instagram" />
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {socialTiles.map((tile) => (
            <a
              key={tile.id}
              href="#social"
              className="group relative block aspect-square overflow-hidden"
              aria-label="Instagram post"
            >
              <img
                src={tile.image}
                alt=""
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                width={300}
                height={300}
              />
              <span className="absolute inset-0 flex items-center justify-center bg-brand/60 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <BrandIcon name="instagram" ariaLabel="" className="h-6 w-6" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
