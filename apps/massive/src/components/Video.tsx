import { Play } from 'lucide-react'

export function Video() {
  return (
    <section
      id="video"
      aria-label="Video"
      className="relative overflow-hidden bg-navy py-20 sm:py-28"
    >
      <div
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage: "url('https://picsum.photos/seed/massive-video/1600/700')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
        <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
          Description With Video
        </h2>
        <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-gray-300">
          Rapidiously monetize market-driven web services. Completely synthesize end-to-end models
          and emerging niches. Continually visualize long-term high-impact niches.
        </p>
        <button
          type="button"
          aria-label="Play The Video"
          className="mx-auto mt-10 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-r from-aqua via-teal to-sky text-white shadow-xl transition-transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan"
        >
          <Play className="h-9 w-9 fill-current" aria-hidden="true" />
        </button>
        <p className="mt-4 text-sm font-semibold uppercase tracking-widest text-cyan">
          Play The Video
        </p>
      </div>
    </section>
  )
}
