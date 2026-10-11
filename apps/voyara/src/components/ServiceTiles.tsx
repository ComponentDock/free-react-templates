const TILES = ['voyara-service-1', 'voyara-service-2', 'voyara-service-3'] as const

/* Centered section header plus three image tiles. Hovering a tile fades the
   brand-gradient overlay in and reveals the centered white title. Each tile
   is a single link labelled by the package name. */
export function ServiceTiles() {
  return (
    <section id="facilities" className="bg-white py-[100px]">
      <div className="mx-auto max-w-[1140px] px-4">
        <div className="mx-auto mb-[70px] max-w-[720px] text-center">
          <h1 className="text-[36px] font-semibold text-ink">Superb Facilities</h1>
          <p className="mt-4">
            Tell us where you want to wake up and we help you plan the holiday around it — flights,
            rooms, and the little extras in between.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {TILES.map((seed) => (
            <a
              key={seed}
              href="#book"
              aria-label="Resort Holiday package"
              className="group relative mx-auto block w-full max-w-[400px] overflow-hidden"
            >
              <img
                src={`https://picsum.photos/seed/${seed}/400/300`}
                alt="Sunlit resort room with a balcony view"
                loading="lazy"
                className="h-[300px] w-full object-cover"
              />
              <span
                data-testid="tile-overlay"
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-pink to-peach opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              />
              <span className="absolute inset-0 flex items-center justify-center opacity-0 transition-all duration-500 group-hover:opacity-100">
                <h3 className="text-[22px] font-semibold text-white">Resort Holiday package</h3>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
