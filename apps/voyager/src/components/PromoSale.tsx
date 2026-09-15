import { Play } from 'lucide-react'

export function PromoSale() {
  return (
    <section className="relative overflow-hidden py-24" aria-label="Special offer">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: 'url(https://picsum.photos/seed/voyager-promo-bg/1600/900)',
        }}
      />
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 mx-auto max-w-6xl px-4">
        <div className="flex flex-col items-center gap-12 lg:flex-row">
          {/* Left: Sale */}
          <div className="flex-1 text-white">
            <div className="mb-6 flex items-baseline gap-2">
              <span className="text-6xl font-bold text-primary-500">45</span>
              <span className="text-2xl font-bold text-primary-500">%</span>
              <span className="text-xl text-primary-500">Off</span>
            </div>
            <h2 className="mb-4 text-2xl font-bold">Sale</h2>
            <h3 className="mb-4 text-lg font-semibold">Just hurry up limited offer!</h3>
            <p className="mb-6 max-w-md text-white/80">
              Separated they live in Bookmarksgrove right at the coast of the Semantics, a large
              language ocean.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="rounded bg-primary-500 px-6 py-3 text-sm font-semibold text-black transition-colors hover:bg-primary-600"
              >
                Book Now
              </a>
              <a
                href="#"
                className="rounded border-2 border-white px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-black"
              >
                Read more
              </a>
            </div>
          </div>

          {/* Right: Video */}
          <div className="flex-1">
            <div className="relative aspect-video overflow-hidden rounded-lg">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: 'url(https://picsum.photos/seed/voyager-video/800/450)',
                }}
              />
              <div className="absolute inset-0 bg-black/30" />
              <a
                href="#"
                className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg transition-transform hover:scale-110"
                aria-label="Play video"
              >
                <Play size={32} className="ml-1 text-black" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
