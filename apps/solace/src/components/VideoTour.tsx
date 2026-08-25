import { useState } from 'react'
import { Play } from 'lucide-react'

export function VideoTour() {
  const [playing, setPlaying] = useState(false)

  return (
    <section
      id="tour"
      className="relative flex min-h-[400px] items-center justify-center bg-ink bg-cover bg-center"
      style={{
        backgroundImage:
          'linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url(https://picsum.photos/seed/solace-tour/1920/800)',
      }}
    >
      <div className="text-center">
        <h2 className="font-heading text-3xl font-bold text-white md:text-5xl">Take A Tour</h2>
        <p className="mt-4 text-white/70">
          Explore our beautiful hotel and its stunning surroundings
        </p>
        <button
          onClick={() => setPlaying(true)}
          className="mt-8 inline-flex h-16 w-16 items-center justify-center rounded-full bg-brand text-white transition-colors hover:bg-brand-dark"
          aria-label="Play video tour"
        >
          <Play size={28} className="ml-1" />
        </button>
        {playing && <div className="mt-6 text-sm text-white/60">Video player would open here</div>}
      </div>
    </section>
  )
}
