import { Plus } from 'lucide-react'
import { workTiles } from '../data'

/** "Our Works" gallery: six photo tiles in a responsive grid; hovering a
 *  tile reveals a rgba(0,0,0,0.4) overlay and a centered white plus icon
 *  scaling in (the reference's fancybox lightbox is not recreated — tiles
 *  are inert links). */
export function Works() {
  return (
    <section id="works" className="py-10 md:py-20">
      <div className="mx-auto max-w-[1200px] px-4 md:px-8">
        <h2 className="section-heading text-black">Our Works</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {workTiles.map((tile) => (
            <a
              key={tile.title}
              href="#works"
              aria-label={tile.title}
              className="group relative block overflow-hidden rounded"
            >
              <img src={tile.image} alt="" className="w-full object-cover" loading="lazy" />
              <span
                aria-hidden="true"
                className="absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />
              <Plus
                aria-hidden="true"
                className="absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 scale-0 text-white transition-transform duration-300 group-hover:scale-100"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
