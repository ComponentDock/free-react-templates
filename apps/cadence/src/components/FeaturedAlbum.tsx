import { Play } from 'lucide-react'

const songs = [
  'Drop that beat',
  'Hey, Mister DJ',
  'Message to my future self',
  'Bring back the love',
  'Hey, Mister DJ - Remix',
  'Message to my future self',
  'Drop that beat',
  'Hey, Mister DJ',
]

export function FeaturedAlbum() {
  return (
    <section className="bg-white py-24" id="album">
      <div className="mx-auto max-w-6xl px-4">
        <div className="overflow-hidden rounded-2xl bg-gray-900 shadow-2xl">
          <div className="grid md:grid-cols-2">
            {/* Album thumbnail */}
            <div
              className="min-h-[300px] bg-cover bg-center md:min-h-[500px]"
              style={{ backgroundImage: 'url(https://picsum.photos/seed/cadence-album/800/600)' }}
            />

            {/* Song list */}
            <div className="flex flex-col p-8">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-wider text-cadence-accent">
                    Featured Album
                  </p>
                  <h4 className="text-2xl font-bold text-white">Love is all Around</h4>
                </div>
                <a
                  href="#"
                  className="rounded-full bg-gradient-to-r from-cadence-pink to-cadence-purple px-5 py-2 text-sm font-bold text-white transition-opacity hover:opacity-90"
                >
                  Buy on iTunes
                </a>
              </div>

              <div className="flex-1 space-y-1 overflow-y-auto">
                {songs.map((song, i) => (
                  <div
                    key={`${song}-${i}`}
                    className={`flex items-center justify-between rounded-lg px-4 py-3 transition-colors ${
                      i === 0
                        ? 'bg-gradient-to-r from-cadence-pink/20 to-cadence-purple/20'
                        : 'hover:bg-white/5'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-6 text-right text-sm text-white/40">{i + 1}</span>
                      <h6 className="text-sm font-medium text-white">{song}</h6>
                    </div>
                    <button aria-label={`Play ${song}`} className="text-white/40 hover:text-white">
                      <Play size={16} />
                    </button>
                  </div>
                ))}
              </div>

              {/* Now playing bar */}
              <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-4">
                <div>
                  <p className="text-xs text-white/40">Playing</p>
                  <h6 className="text-sm font-bold text-white">Drop that beat</h6>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-1 w-32 overflow-hidden rounded-full bg-white/10">
                    <div className="h-full w-1/3 rounded-full bg-gradient-to-r from-cadence-pink to-cadence-purple" />
                  </div>
                  <span className="text-xs text-white/40">1:23</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
