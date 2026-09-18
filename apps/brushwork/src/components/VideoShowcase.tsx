import { Play } from 'lucide-react'

export function VideoShowcase() {
  return (
    <section aria-label="Video showcase" className="relative overflow-hidden bg-ink py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div className="relative">
          <img
            src="https://picsum.photos/seed/brushwork-video/600/400"
            alt="Video showcase preview"
            className="w-full rounded-2xl object-cover"
          />
          <a
            href="#video"
            onClick={(e) => e.preventDefault()}
            aria-label="Play the showcase video"
            className="absolute inset-0 flex items-center justify-center bg-black/60 transition-colors hover:bg-black/40"
          >
            <span className="flex h-20 w-20 items-center justify-center rounded-full bg-brand text-white shadow-xl transition-transform hover:scale-110">
              <Play className="h-8 w-8 fill-current" aria-hidden="true" />
            </span>
          </a>
        </div>
        <div>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Crafting stories through art and design
          </h2>
          <p className="mt-6 text-sm leading-relaxed text-gray-400">
            Watch how our team brings creative visions to life. From concept to completion, every
            project is a journey of discovery, innovation, and artistic expression that inspires and
            delights.
          </p>
        </div>
      </div>
    </section>
  )
}
