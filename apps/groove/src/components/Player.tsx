import { Play, SkipBack, SkipForward, Shuffle, Volume2 } from 'lucide-react'

export function Player() {
  return (
    <section aria-label="Music player" className="bg-void">
      <div className="mx-auto grid max-w-6xl items-center gap-0 lg:grid-cols-2">
        {/* Left — track info + controls */}
        <div className="flex flex-col justify-center gap-8 bg-deep px-6 py-16 sm:px-12 lg:px-16">
          <div>
            <h3 className="text-2xl font-bold text-white">Sweet But Psycho</h3>
            <p className="mt-1 text-sm text-muted">Ava Max</p>
          </div>

          {/* Progress bar */}
          <div>
            <div className="h-1 w-full rounded-full bg-white/10">
              <div className="h-1 w-1/3 rounded-full bg-accent-400" />
            </div>
            <div className="mt-2 flex justify-between text-xs text-muted">
              <span>1:24</span>
              <span>3:42</span>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-6">
            <button
              type="button"
              aria-label="Shuffle"
              className="text-white/60 transition-colors hover:text-accent-400"
            >
              <Shuffle className="h-5 w-5" />
            </button>
            <button
              type="button"
              aria-label="Previous track"
              className="text-white/60 transition-colors hover:text-accent-400"
            >
              <SkipBack className="h-5 w-5" />
            </button>
            <button
              type="button"
              aria-label="Play"
              className="flex h-14 w-14 items-center justify-center rounded-full bg-primary-400 text-white transition-colors hover:bg-accent-400"
            >
              <Play className="ml-1 h-6 w-6" />
            </button>
            <button
              type="button"
              aria-label="Next track"
              className="text-white/60 transition-colors hover:text-accent-400"
            >
              <SkipForward className="h-5 w-5" />
            </button>
            <button
              type="button"
              aria-label="Volume"
              className="text-white/60 transition-colors hover:text-accent-400"
            >
              <Volume2 className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Right — album art + latest album */}
        <div className="relative flex items-center justify-center bg-surface px-6 py-16 sm:px-12 lg:px-16">
          <img
            src="https://picsum.photos/seed/groove-player/400/400"
            alt="Latest album artwork"
            className="h-64 w-64 rounded-lg object-cover shadow-2xl sm:h-80 sm:w-80"
            loading="lazy"
          />
          <div className="absolute bottom-8 left-8">
            <span className="text-xs font-semibold uppercase tracking-wider text-muted">
              Latest album
            </span>
            <h4 className="mt-1 text-lg font-bold text-white">WHEN WE ALL FALL ASLEEP</h4>
          </div>
        </div>
      </div>
    </section>
  )
}
