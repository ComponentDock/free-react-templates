import { Play, Pause, Share2, Download } from 'lucide-react'
import { useState } from 'react'

interface AudioPlayerProps {
  trackTitle?: string
  artist?: string
  imageSeed?: string
}

export function AudioPlayer({
  trackTitle = 'Understanding Operating Systems',
  artist = 'Kyle Hawkins',
  imageSeed = 'sonance-track',
}: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <section aria-label="Audio player" className="bg-ink/95 py-6">
      <div className="mx-auto flex max-w-5xl items-center gap-6 px-4 sm:px-6">
        <img
          src={`https://picsum.photos/seed/${imageSeed}/80/80`}
          alt={`${trackTitle} artwork`}
          className="h-16 w-16 rounded-lg object-cover"
          loading="lazy"
        />

        <div className="min-w-0 flex-1">
          <h3 className="truncate text-sm font-bold text-white">{trackTitle}</h3>
          <p className="text-xs text-white/60">{artist}</p>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            aria-label={isPlaying ? 'Pause' : 'Play'}
            onClick={() => setIsPlaying(!isPlaying)}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-400 text-white transition-colors hover:bg-primary-500"
          >
            {isPlaying ? <Pause size={18} /> : <Play size={18} fill="currentColor" />}
          </button>

          <div className="hidden h-1.5 w-32 rounded-full bg-white/20 sm:block">
            <div className="h-full w-1/3 rounded-full bg-primary-400" />
          </div>

          <span className="hidden text-xs text-white/50 sm:inline">1:24 / 4:02</span>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label="Share"
            className="rounded-full p-2 text-white/50 transition-colors hover:bg-white/10 hover:text-white"
          >
            <Share2 size={16} />
          </button>
          <button
            type="button"
            aria-label="Download"
            className="rounded-full p-2 text-white/50 transition-colors hover:bg-white/10 hover:text-white"
          >
            <Download size={16} />
          </button>
        </div>
      </div>
    </section>
  )
}
