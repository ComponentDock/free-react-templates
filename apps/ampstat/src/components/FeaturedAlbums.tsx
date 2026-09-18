import { useState } from 'react'
import { Play, Pause } from 'lucide-react'

const ALBUMS = [
  { title: 'Midnight Echoes', artist: 'The Midnight Echo', year: '2024', tracks: 12 },
  { title: 'Neon Horizons', artist: 'Synthwave Collective', year: '2023', tracks: 10 },
  { title: 'Acoustic Sessions', artist: 'Luna Park', year: '2024', tracks: 8 },
] as const

export default function FeaturedAlbums() {
  const [playingIndex, setPlayingIndex] = useState<number | null>(null)

  return (
    <section data-testid="featured-albums" className="py-20 bg-brand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-text-dark text-center mb-12">Featured Albums</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ALBUMS.map((album, i) => (
            <div
              key={i}
              data-testid="album-item"
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="relative">
                <img
                  src={`https://picsum.photos/seed/ampstat-album-${i}/400/400`}
                  alt={album.title}
                  className="w-full aspect-square object-cover"
                  loading="lazy"
                />
                <button
                  data-testid="album-play"
                  className="absolute bottom-4 right-4 w-12 h-12 rounded-full bg-brand-green flex items-center justify-center text-white shadow-lg hover:bg-brand-green/90 transition-colors"
                  onClick={() => setPlayingIndex(playingIndex === i ? null : i)}
                  aria-label={playingIndex === i ? `Pause ${album.title}` : `Play ${album.title}`}
                >
                  {playingIndex === i ? (
                    <Pause className="w-5 h-5" />
                  ) : (
                    <Play className="w-5 h-5 ml-0.5" />
                  )}
                </button>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-text-dark">{album.title}</h3>
                <p className="text-text-muted text-sm">{album.artist}</p>
                <p className="text-text-light text-xs mt-1">
                  {album.year} · {album.tracks} tracks
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
