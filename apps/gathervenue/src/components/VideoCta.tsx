import { Play } from 'lucide-react'

export function VideoCta() {
  return (
    <section
      id="video-cta"
      className="relative flex items-center justify-center bg-cover bg-center bg-fixed bg-no-repeat py-32"
      style={{ backgroundImage: "url('https://picsum.photos/seed/gala-video/1920/800')" }}
    >
      <div className="absolute inset-0 bg-navy/70" />
      <div className="relative z-10 text-center text-white">
        <button
          className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-full border-2 border-white/40 bg-white/10 text-white transition-colors hover:bg-white/20"
          aria-label="Play video"
        >
          <Play size={32} fill="currentColor" />
        </button>
        <h2 className="text-3xl font-bold uppercase tracking-wide">Watch This Video</h2>
        <p className="mt-3 text-gray-300">Get a glimpse of last year's amazing event</p>
      </div>
    </section>
  )
}
