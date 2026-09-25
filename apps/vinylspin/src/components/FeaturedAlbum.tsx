import { Play } from 'lucide-react'

export function FeaturedAlbum() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-24"
      style={{ backgroundImage: "url('https://picsum.photos/seed/vinylspin-album-bg/1920/900')" }}
    >
      <div className="absolute inset-0 bg-void/85" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Section title */}
        <div className="mb-12 text-right">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.3em] text-accent-400">
            Events
          </p>
          <h2 className="text-4xl font-bold text-ink">Featured Album</h2>
        </div>

        <div className="grid items-center gap-8 md:grid-cols-2">
          {/* Album artwork */}
          <div className="overflow-hidden rounded">
            <img
              src="https://picsum.photos/seed/vinylspin-album/600/600"
              alt="Featured album artwork"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Audio player */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted">Maria Smith</p>
                <h3 className="text-2xl font-bold text-ink">Love is all Around</h3>
              </div>
              <a
                href="#"
                className="text-xs font-semibold uppercase tracking-wider text-accent-400 transition-colors hover:text-accent-300"
              >
                Buy it on iTunes
              </a>
            </div>

            {/* Player controls */}
            <div className="flex flex-col gap-3 rounded bg-surface/50 p-4">
              <div className="flex items-center gap-3">
                <button
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-400 text-ink transition-colors hover:bg-primary-500"
                  aria-label="Play"
                >
                  <Play size={18} fill="currentColor" />
                </button>
                <div className="flex-1">
                  <div className="h-1 rounded-full bg-muted/30">
                    <div className="h-1 w-1/3 rounded-full bg-primary-400" />
                  </div>
                </div>
                <span className="text-xs text-muted">1:24 / 4:02</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
