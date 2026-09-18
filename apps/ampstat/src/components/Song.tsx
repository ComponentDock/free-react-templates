import { useState } from 'react'
import { Play, Pause, Volume2, VolumeX } from 'lucide-react'

export default function Song() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const progress = 35

  return (
    <section data-testid="song" className="relative py-32 overflow-hidden">
      {/* Parallax background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url('https://picsum.photos/seed/ampstat-song/1920/600')` }}
      />
      <div className="absolute inset-0 bg-black/70" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-white text-sm font-bold uppercase tracking-[4px] mb-4">
          Song of the Week
        </h2>

        {/* Album art */}
        <div className="w-64 h-64 mx-auto mb-8 rounded-lg overflow-hidden shadow-2xl">
          <img
            src="https://picsum.photos/seed/ampstat-album/256/256"
            alt="Album art"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Player controls */}
        <div className="max-w-lg mx-auto">
          <div className="flex items-center justify-center gap-4 mb-4">
            <button
              data-testid="play-button"
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-14 h-14 rounded-full bg-brand-green flex items-center justify-center text-white hover:bg-brand-green/90 transition-colors"
              aria-label={isPlaying ? 'Pause' : 'Play'}
            >
              {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6 ml-1" />}
            </button>
          </div>

          {/* Artist name */}
          <p className="text-white text-lg font-bold mb-4">The Midnight Echo</p>

          {/* Progress bar */}
          <div className="flex items-center gap-3 mb-4">
            <span className="text-white text-xs">1:24</span>
            <div className="flex-1 h-1 bg-white/30 rounded-full overflow-hidden">
              <div
                className="h-full bg-brand-green rounded-full transition-all"
                style={{ width: `${progress}%` }}
              />
            </div>
            <span className="text-white text-xs">4:02</span>
          </div>

          {/* Volume */}
          <div className="flex items-center justify-center gap-3">
            <button
              data-testid="mute-button"
              onClick={() => setIsMuted(!isMuted)}
              className="text-white hover:text-brand-yellow-light transition-colors"
              aria-label={isMuted ? 'Unmute' : 'Mute'}
            >
              {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
            </button>
            <input
              type="range"
              min={0}
              max={100}
              defaultValue={75}
              className="w-24 accent-brand-green"
              aria-label="Volume"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
