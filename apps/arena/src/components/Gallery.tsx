import { galleryTiles } from '../data'

export function Gallery() {
  return (
    <section id="fighter" className="bg-navy-900 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="mb-3 text-xs font-medium uppercase tracking-widest text-ember-500">Gallery</p>
        <h2 className="font-display text-4xl text-white uppercase">All Fighter</h2>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {galleryTiles.map((tile) => (
            <figure
              key={tile.id}
              className="group relative overflow-hidden rounded-lg border border-white/10"
            >
              <img
                src={tile.image}
                alt={tile.caption}
                className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div
                className="absolute inset-0 flex items-end bg-gradient-to-l from-ember-500/80 via-magenta-500/60 to-ember-500/80 p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                aria-hidden="true"
              />
              <figcaption className="absolute inset-x-0 bottom-0 p-5 text-sm font-medium text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                {tile.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
