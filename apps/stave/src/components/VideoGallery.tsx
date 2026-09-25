import { Play } from 'lucide-react'

const videos = [
  { id: 1, event: 'Music Event', title: 'Summer Concert 2024' },
  { id: 2, event: 'Live Show', title: 'Acoustic Sessions' },
  { id: 3, event: 'Festival', title: 'Rock Festival Highlights' },
  { id: 4, event: 'Studio', title: 'Behind the Scenes' },
] as const

export function VideoGallery() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {videos.map((video) => (
            <div key={video.id} className="group relative overflow-hidden rounded">
              <img
                src={`https://picsum.photos/seed/stave-video-${video.id}/400/300`}
                alt={video.title}
                className="h-56 w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <button
                  type="button"
                  aria-label={`Play ${video.title}`}
                  className="flex h-14 w-14 items-center justify-center rounded-full bg-brand text-white"
                >
                  <Play className="h-6 w-6" fill="currentColor" />
                </button>
              </div>
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="font-heading text-xs font-semibold uppercase tracking-wider text-brand">
                  {video.event}
                </span>
                <h3 className="font-heading text-sm font-bold text-white">{video.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
