import { GALLERY_TILES } from '../data'

/**
 * Gallery — "Our Offered Menu" band on a photo backdrop + 10-tile mosaic
 * (source `.gallery-area`): big (tall) and small tiles alternating, each with
 * a dark hover overlay revealing an orange "Delicious Food" span + white title
 * (source rgba(11,14,13,0.702) overlay). Overlay also reveals on keyboard
 * focus via group-focus-within.
 */
export function Gallery() {
  return (
    <section id="menu" className="bg-white">
      <div className="relative py-10 lg:py-[90px]">
        <img
          src="https://picsum.photos/seed/bistro-bg-menu/1920/400"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl px-4 text-center">
          <span className="text-base font-medium text-brand">Our Offered Menu</span>
          <h2 className="mt-3 font-display text-4xl font-semibold text-white lg:text-[49px]">
            Some trendy and popular courses offered
          </h2>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 pb-24 lg:pb-[140px]">
        <div className="grid auto-rows-[180px] grid-cols-2 gap-3 lg:grid-cols-4">
          {GALLERY_TILES.map((tile) => (
            <figure
              key={tile.seed}
              className={`group relative overflow-hidden ${tile.tall ? 'row-span-2' : ''}`}
            >
              <img
                src={`https://picsum.photos/seed/${tile.seed}/600/${tile.tall ? 730 : 365}`}
                alt=""
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <figcaption className="absolute inset-0 flex flex-col items-center justify-center bg-black/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100">
                <span className="text-base font-medium text-brand">Delicious Food</span>
                <h4 className="mt-2 font-display text-2xl font-semibold text-white lg:text-3xl">
                  {tile.title}
                </h4>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
