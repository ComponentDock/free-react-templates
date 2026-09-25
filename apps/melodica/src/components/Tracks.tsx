import { Play, Heart } from 'lucide-react'

const tracks = [
  { id: 1, title: 'Midnight Echo', duration: '3:42', seed: 'melodica-track-1' },
  { id: 2, title: 'Neon Dreams', duration: '4:15', seed: 'melodica-track-2' },
  { id: 3, title: 'Pulse', duration: '3:58', seed: 'melodica-track-3' },
  { id: 4, title: 'Horizon', duration: '4:33', seed: 'melodica-track-4' },
  { id: 5, title: 'Velocity', duration: '3:21', seed: 'melodica-track-5' },
  { id: 6, title: 'Ember', duration: '4:07', seed: 'melodica-track-6' },
]

export function Tracks() {
  return (
    <section id="tracks" className="bg-deep-950 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-accent-purple">
            Featured Tracks
          </p>
          <h2 className="font-heading text-3xl font-bold text-white md:text-4xl">
            Latest Releases
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tracks.map((track) => (
            <div
              key={track.id}
              className="group relative overflow-hidden rounded-xl bg-white/5 transition-colors hover:bg-white/10"
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={`https://picsum.photos/seed/${track.seed}/400/400`}
                  alt={`Album art for ${track.title}`}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-deep-950/40 opacity-0 transition-opacity group-hover:opacity-100">
                  <button
                    type="button"
                    className="flex h-14 w-14 items-center justify-center rounded-full bg-accent-green text-deep-950 transition-transform hover:scale-110"
                    aria-label={`Play ${track.title}`}
                  >
                    <Play size={24} fill="currentColor" />
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-between px-4 py-3">
                <div>
                  <h3 className="font-heading text-sm font-semibold text-white">{track.title}</h3>
                  <p className="text-xs text-white/50">{track.duration}</p>
                </div>
                <button
                  type="button"
                  className="text-white/40 transition-colors hover:text-accent-purple"
                  aria-label={`Like ${track.title}`}
                >
                  <Heart size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
