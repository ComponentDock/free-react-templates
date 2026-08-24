import { Play } from 'lucide-react'

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[70vh] items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://picsum.photos/seed/voyage-hero/1920/1080"
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-4 text-center sm:px-6">
        <h1 className="font-heading text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
          It is Better to Travel Well Than to Arrive
        </h1>

        <div className="mt-8">
          <button
            type="button"
            className="inline-flex items-center gap-3 rounded-full border-2 border-white px-8 py-3 text-sm font-bold text-white transition-all hover:bg-white hover:text-ink"
          >
            <Play className="h-4 w-4" aria-hidden="true" />
            Watch Video
          </button>
        </div>
      </div>
    </section>
  )
}
