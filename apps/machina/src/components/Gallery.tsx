import { GALLERY_ITEMS } from '../data'

/**
 * Gallery — full-bleed three-tile project gallery (source
 * `div.gallery-area.container-fluid.p-0`): each tile reveals a title + line
 * overlay on hover/focus.
 */
export function Gallery() {
  return (
    <section aria-label="Projects" className="grid grid-cols-1 md:grid-cols-3">
      {GALLERY_ITEMS.map((item) => (
        <a
          key={item.title}
          href="#"
          aria-label={item.title}
          className="group relative block aspect-[4/3] overflow-hidden"
        >
          <img
            src={`https://picsum.photos/seed/${item.seed}/800/600`}
            alt=""
            aria-hidden="true"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 flex items-end bg-ink/70 p-8 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
            <div>
              <h3 className="font-display text-xl font-bold text-white">{item.title}</h3>
              <p className="mt-1 text-sm text-white/75">{item.line}</p>
            </div>
          </div>
        </a>
      ))}
    </section>
  )
}
