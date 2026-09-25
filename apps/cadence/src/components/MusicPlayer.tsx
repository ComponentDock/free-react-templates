import { Play } from 'lucide-react'

const tracks = [
  { title: 'Drop that beat', artist: 'Cadence Band' },
  { title: 'Hey, Mister DJ', artist: 'Cadence Band' },
  { title: 'Message to my future self', artist: 'Cadence Band' },
  { title: 'Bring back the love', artist: 'Cadence Band' },
]

export function MusicPlayer() {
  return (
    <section className="bg-gray-900 py-24" id="player">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-black uppercase text-white md:text-5xl">Now Playing</h2>
          <p className="text-sm uppercase tracking-wider text-white/60">
            Featured tracks from our latest album
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {tracks.map((track, i) => (
            <div
              key={track.title}
              className="group overflow-hidden rounded-lg bg-gray-800 transition-shadow hover:shadow-xl"
            >
              <div className="relative">
                <img
                  src={`https://picsum.photos/seed/cadence-track${i + 1}/400/400`}
                  alt={track.title}
                  className="aspect-square w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity group-hover:opacity-100">
                  <button
                    aria-label={`Play ${track.title}`}
                    className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-cadence-pink to-cadence-purple text-white"
                  >
                    <Play size={24} fill="white" />
                  </button>
                </div>
              </div>
              <div className="p-4">
                <h5 className="font-bold text-white">{track.title}</h5>
                <p className="text-sm text-white/50">{track.artist}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
