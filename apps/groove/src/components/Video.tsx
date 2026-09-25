import { Play, SkipBack, SkipForward, Volume2 } from 'lucide-react'

const playlist = [
  "Maroon 5 - Don't Wanna Know",
  'Sweet But Psycho — Ava Max',
  'Natural — Imagine Dragons',
  'Bad Guy — Billie Eilish',
] as const

export function Video() {
  return (
    <section
      id="videos"
      aria-label="Videos"
      className="relative overflow-hidden bg-gradient-to-br from-void via-deep to-primary-900 py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <span className="font-script text-xl text-accent-400">Our Videos</span>
          <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
            newest albums &amp; singles.
          </h2>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {/* Video player area */}
          <div className="lg:col-span-2">
            <div className="relative aspect-video overflow-hidden rounded-lg bg-surface">
              <img
                src="https://picsum.photos/seed/groove-video/800/450"
                alt="Video thumbnail"
                className="h-full w-full object-cover opacity-60"
                loading="lazy"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  type="button"
                  aria-label="Play video"
                  className="flex h-16 w-16 items-center justify-center rounded-full bg-primary-400/90 text-white transition-colors hover:bg-accent-400"
                >
                  <Play className="ml-1 h-7 w-7" />
                </button>
              </div>
              <h3 className="absolute bottom-4 left-4 text-sm font-semibold text-white sm:text-base">
                Maroon 5 - Don&apos;t Wanna Know ft. Kendrick Lamar
              </h3>
            </div>
            {/* Mini controls */}
            <div className="mt-4 flex items-center gap-4 rounded-lg bg-surface px-4 py-3">
              <button
                type="button"
                aria-label="Previous"
                className="text-white/60 transition-colors hover:text-accent-400"
              >
                <SkipBack className="h-4 w-4" />
              </button>
              <button
                type="button"
                aria-label="Play"
                className="text-white transition-colors hover:text-accent-400"
              >
                <Play className="h-5 w-5" />
              </button>
              <button
                type="button"
                aria-label="Next"
                className="text-white/60 transition-colors hover:text-accent-400"
              >
                <SkipForward className="h-4 w-4" />
              </button>
              <div className="h-1 flex-1 rounded-full bg-white/10">
                <div className="h-1 w-1/4 rounded-full bg-accent-400" />
              </div>
              <button
                type="button"
                aria-label="Volume"
                className="text-white/60 transition-colors hover:text-accent-400"
              >
                <Volume2 className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Playlist sidebar */}
          <div className="rounded-lg bg-surface p-6">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-muted">Playlist</h4>
            <ul className="mt-4 space-y-3">
              {playlist.map((track) => (
                <li
                  key={track}
                  className="cursor-pointer rounded-md px-3 py-2 text-sm text-white/70 transition-colors hover:bg-primary-800 hover:text-white"
                >
                  {track}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
