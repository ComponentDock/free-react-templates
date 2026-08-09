import { Play } from 'lucide-react'

export function Video() {
  return (
    <section aria-label="Video" className="relative overflow-hidden bg-ink py-24 dark:bg-ink-dark">
      <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
        <span className="font-display text-lg font-semibold uppercase tracking-[0.25em] text-brand">
          Intro Video
        </span>
        <h2 className="mt-4 font-display text-4xl font-bold uppercase text-white sm:text-5xl">
          View Our Work
        </h2>
        <a
          href="#video"
          aria-label="Play the shop tour video"
          className="mx-auto mt-10 flex h-20 w-20 items-center justify-center rounded-full bg-brand text-white shadow-xl transition-transform hover:scale-110"
        >
          <Play className="h-8 w-8 fill-current" aria-hidden="true" />
        </a>
        <p className="mt-6 text-sm uppercase tracking-[0.2em] text-gray-400">05:35 — Tour</p>
      </div>
    </section>
  )
}
