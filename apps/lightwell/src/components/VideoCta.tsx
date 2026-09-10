import { Play } from 'lucide-react'

export function VideoCta() {
  return (
    <section
      aria-label="Video call to action"
      className="relative flex items-center justify-center overflow-hidden py-24"
    >
      <div className="absolute inset-0 bg-overlay-green" aria-hidden="true" />
      <div className="relative z-10 mx-auto max-w-3xl px-4 text-center sm:px-6">
        <button
          type="button"
          aria-label="Play video"
          className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border-2 border-white bg-white/20 text-white transition-colors hover:bg-white/30"
        >
          <Play className="h-7 w-7" aria-hidden="true" />
        </button>
        <h2 className="mt-8 text-2xl font-bold text-white sm:text-3xl">
          Being unique is the preference
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-white/80">
          We bring a fresh perspective to every project. Let us help you stand out in a crowded
          market with innovative solutions tailored to your goals.
        </p>
      </div>
    </section>
  )
}
