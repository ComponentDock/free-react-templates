const TILES = [
  'voyara-gallery-1',
  'voyara-gallery-2',
  'voyara-gallery-3',
  'voyara-gallery-4',
  'voyara-gallery-5',
  'voyara-gallery-6',
] as const

/* Edge-to-edge strip of six tiles reusing the service-tile hover pattern. */
export function Gallery() {
  return (
    <section aria-label="Hotel gallery">
      <div
        data-testid="gallery-grid"
        className="grid grid-cols-2 gap-0 sm:grid-cols-3 lg:grid-cols-6"
      >
        {TILES.map((seed) => (
          <div key={seed} className="group relative overflow-hidden">
            <img
              src={`https://picsum.photos/seed/${seed}/500/500`}
              alt="Hotel gallery view"
              loading="lazy"
              className="h-[260px] w-full object-cover"
            />
            <span
              data-testid="tile-overlay"
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-pink to-peach opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            />
            <span className="absolute inset-0 flex items-center justify-center opacity-0 transition-all duration-500 group-hover:opacity-100">
              <h3 className="text-center text-[20px] font-semibold text-white">
                Resort Holiday package
              </h3>
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
