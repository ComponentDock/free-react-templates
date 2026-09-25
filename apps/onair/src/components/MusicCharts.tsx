import { musicTracks } from '../data'

export function MusicCharts() {
  return (
    <section
      id="charts"
      className="relative bg-cover bg-center bg-no-repeat py-16"
      style={{
        backgroundImage: 'url(https://picsum.photos/seed/onair-charts/1600/800)',
      }}
    >
      <div className="absolute inset-0 bg-black/70" />
      <div className="relative z-10 mx-auto max-w-6xl px-4 lg:px-8">
        <div className="mb-10 flex items-center justify-between">
          <h2 className="text-3xl font-bold uppercase text-white">Music Chart</h2>
          <a
            href="#charts"
            className="rounded border border-white/30 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white/10"
          >
            Show All Trending (Top 10)
          </a>
        </div>

        <div className="space-y-4">
          {musicTracks.map((track, idx) => (
            <div
              key={track.id}
              className="flex items-center justify-between rounded bg-white/5 p-4 backdrop-blur-sm transition-colors hover:bg-white/10"
            >
              <div className="flex items-center gap-4">
                <span className="w-8 text-center text-lg font-bold text-white/60">{idx + 1}.</span>
                <img
                  src={track.image}
                  alt={track.title}
                  className="h-14 w-14 rounded object-cover"
                  loading="lazy"
                />
                <div>
                  <h5 className="font-semibold text-white">
                    {track.title} — <span className="text-white/60">{track.artist}</span>
                  </h5>
                </div>
              </div>
              <a
                href="#charts"
                className="rounded bg-brand px-6 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
              >
                {track.price}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
