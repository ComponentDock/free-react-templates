import { Play } from 'lucide-react'

const tracks = [
  { id: 1, name: 'Midnight Echoes', date: 'March 15, 2024' },
  { id: 2, name: 'Rhythm of the Night', date: 'February 28, 2024' },
  { id: 3, name: 'Velvet Skies', date: 'January 10, 2024' },
] as const

export function LatestTracks() {
  return (
    <section id="tracks" className="bg-gray-50 py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <h2 className="mb-10 text-center font-heading text-3xl font-bold text-heading">
          Latest Tracks
        </h2>
        <div className="space-y-6">
          {tracks.map((track) => (
            <div
              key={track.id}
              className="flex flex-col items-center gap-4 rounded bg-white p-4 shadow-sm sm:flex-row"
            >
              <img
                src={`https://picsum.photos/seed/stave-track-${track.id}/80/80`}
                alt={track.name}
                className="h-20 w-20 rounded object-cover"
              />
              <div className="flex-1 text-center sm:text-left">
                <h3 className="font-heading text-lg font-bold text-heading">{track.name}</h3>
                <p className="font-body text-sm text-body">{track.date}</p>
              </div>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  aria-label={`Play ${track.name}`}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-brand text-white transition-colors hover:bg-brand-dark"
                >
                  <Play className="h-4 w-4" fill="currentColor" />
                </button>
                <div className="h-1.5 w-24 rounded-full bg-gray-200">
                  <div className="h-1.5 w-1/3 rounded-full bg-brand" />
                </div>
              </div>
              <button
                type="button"
                className="rounded border border-brand px-4 py-1.5 font-heading text-xs font-semibold uppercase tracking-wide text-brand transition-colors hover:bg-brand hover:text-white"
              >
                Buy
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
