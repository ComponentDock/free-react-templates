import { useState } from 'react'
import { Play } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const videos = [
  {
    id: 1,
    title: 'Assemble Your Squad and Join the Battle',
    platform: 'Nintendo Wii, PS4, XBox 360',
    rating: '8.3/10',
    thumbnail: 'https://picsum.photos/seed/joystick-vid1/120/80',
  },
  {
    id: 2,
    title: 'Tips to Improve Your Game',
    platform: 'Nintendo Wii, PS4, XBox 360',
    rating: '8.3/10',
    thumbnail: 'https://picsum.photos/seed/joystick-vid2/120/80',
  },
  {
    id: 3,
    title: 'Game Reviews: The Best of 2024',
    platform: 'Nintendo Wii, PS4, XBox 360',
    rating: '8.3/10',
    thumbnail: 'https://picsum.photos/seed/joystick-vid3/120/80',
  },
  {
    id: 4,
    title: 'Top Multiplayer Experiences',
    platform: 'Nintendo Wii, PS4, XBox 360',
    rating: '8.3/10',
    thumbnail: 'https://picsum.photos/seed/joystick-vid4/120/80',
  },
]

const mainImages: Record<number, string> = {
  1: 'https://picsum.photos/seed/joystick-main1/800/450',
  2: 'https://picsum.photos/seed/joystick-main2/800/450',
  3: 'https://picsum.photos/seed/joystick-main3/800/450',
  4: 'https://picsum.photos/seed/joystick-main4/800/450',
}

export function VideoReviews() {
  const [activeVideo, setActiveVideo] = useState(1)

  return (
    <section className="py-20 bg-gray-100" aria-label="Video Reviews">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left: Video nav list */}
          <div className="lg:w-1/3 flex flex-col gap-3">
            {videos.map((video) => (
              <button
                key={video.id}
                onClick={() => setActiveVideo(video.id)}
                className={cn(
                  'flex items-center gap-3 p-3 rounded text-left transition-colors',
                  activeVideo === video.id
                    ? 'bg-primary-400 text-white'
                    : 'bg-white text-ink hover:bg-gray-200',
                )}
                aria-label={`Play ${video.title}`}
              >
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-20 h-14 object-cover rounded flex-shrink-0"
                  loading="lazy"
                />
                <div className="min-w-0">
                  <p className="text-sm font-semibold truncate">{video.title}</p>
                  <p className="text-xs opacity-75 truncate">{video.platform}</p>
                </div>
                <span className="ml-auto text-xs font-bold flex-shrink-0">{video.rating}</span>
              </button>
            ))}
          </div>

          {/* Right: Main video preview */}
          <div className="lg:w-2/3">
            <div
              className="relative bg-cover bg-center rounded overflow-hidden aspect-video"
              style={{ backgroundImage: `url(${mainImages[activeVideo]})` }}
            >
              <div className="absolute inset-0 bg-black/30" />
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  className="bg-primary-400/90 hover:bg-primary-400 rounded-full p-5 transition-colors"
                  aria-label="Play video"
                >
                  <Play className="h-8 w-8 text-white fill-white" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
