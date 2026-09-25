import { Play } from 'lucide-react'

export function FeaturedArtist() {
  return (
    <section
      className="relative bg-cover bg-fixed py-20"
      style={{ backgroundImage: "url('https://picsum.photos/seed/groove-feat/1920/800')" }}
    >
      <div className="absolute inset-0 bg-black/75" />

      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="flex flex-col items-center gap-12 md:flex-row">
          {/* Artist image */}
          <div className="w-full md:w-1/3">
            <img
              src="https://picsum.photos/seed/groove-artist/400/500"
              alt="Featured artist portrait"
              className="w-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="w-full md:w-2/3">
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-white/60">
              Featured Artist
            </p>
            <h2 className="mb-6 text-3xl font-bold text-white">Buy What&apos;s New</h2>
            <p className="mb-8 max-w-lg text-white/70">
              Discover the hottest tracks from our featured artist. Listen to exclusive previews and
              grab the latest releases before anyone else.
            </p>

            <div className="flex items-center gap-4">
              <span className="text-sm font-medium text-white/80">01. Main Hit Song</span>
              <button
                type="button"
                aria-label="Play Main Hit Song"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white transition-colors hover:bg-white/30"
              >
                <Play size={16} fill="currentColor" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
