import { Play } from 'lucide-react'

const VIDEOS = [
  { image: 'https://picsum.photos/seed/broadsheet-vid1/400/300', label: 'Video 1' },
  { image: 'https://picsum.photos/seed/broadsheet-vid2/400/300', label: 'Video 2' },
  { image: 'https://picsum.photos/seed/broadsheet-vid3/400/300', label: 'Video 3' },
]

export function VideoSection() {
  return (
    <section
      className="relative bg-cover bg-center py-16"
      style={{ backgroundImage: 'url(https://picsum.photos/seed/broadsheet-dark/1920/600)' }}
      aria-label="Video posts"
    >
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {VIDEOS.map((video) => (
            <div
              key={video.label}
              className="group relative cursor-pointer overflow-hidden rounded"
            >
              <img
                src={video.image}
                alt={video.label}
                className="w-full object-cover transition-transform group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-brand/90 text-white transition-transform group-hover:scale-110">
                  <Play size={24} fill="white" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
