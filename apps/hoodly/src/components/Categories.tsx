import { useState } from 'react'
import { X, ZoomIn } from 'lucide-react'
import { categories } from '../data'

/** Categories mosaic: one large tile plus a 2×2 grid of tiles, each with a
 *  photo background, a black text box (title, listing count, View All), and
 *  a client-side lightbox on click. */
export function Categories() {
  const [active, setActive] = useState<number | null>(null)

  return (
    <section id="categories" aria-label="Categories" className="bg-white pb-20">
      <div className="mx-auto max-w-[1280px] px-6">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          <div className="lg:col-span-5">
            {categories.tiles
              .filter((tile) => tile.large)
              .map((tile, index) => (
                <CategoryTile key={tile.name} tile={tile} tall onOpen={() => setActive(index)} />
              ))}
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-7">
            {categories.tiles
              .filter((tile) => !tile.large)
              .map((tile, index) => (
                <CategoryTile key={tile.name} tile={tile} onOpen={() => setActive(index + 1)} />
              ))}
          </div>
        </div>
      </div>

      {active !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${categories.tiles[active]!.name} photo`}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-6"
          onClick={() => setActive(null)}
        >
          <img
            src={categories.tiles[active]!.image}
            alt=""
            className="max-h-[85vh] max-w-full object-contain"
          />
          <button
            type="button"
            aria-label="Close lightbox"
            onClick={() => setActive(null)}
            className="absolute right-6 top-6 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
      )}
    </section>
  )
}

interface CategoryTileProps {
  tile: {
    name: string
    listings: string
    image: string
  }
  tall?: boolean
  onOpen: () => void
}

function CategoryTile({ tile, tall, onOpen }: CategoryTileProps) {
  return (
    <article
      className={`group relative w-full overflow-hidden ${tall ? 'h-[380px] lg:h-[745px]' : 'h-[360px]'}`}
    >
      <img
        src={tile.image}
        alt=""
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <button
        type="button"
        onClick={onOpen}
        aria-label={`Zoom ${tile.name}`}
        className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-black/30 text-white opacity-0 transition-opacity group-hover:opacity-100"
      >
        <ZoomIn className="h-5 w-5" />
      </button>
      <div className="absolute bottom-0 left-0 z-10 max-w-[333px] bg-black px-5 py-6 pl-10">
        <h3 className="text-[22px] font-bold text-white">{tile.name}</h3>
        <p className="mt-1 text-base font-bold text-open-grey">{tile.listings}</p>
        <a
          href="#categories"
          className="mt-1 inline-block text-base font-bold text-brand hover:text-white"
        >
          View All
        </a>
      </div>
    </article>
  )
}
