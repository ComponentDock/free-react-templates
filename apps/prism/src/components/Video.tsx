import { Play } from 'lucide-react'

export function Video() {
  return (
    <section className="relative bg-primary-400 py-32">
      <div className="absolute inset-0 bg-primary-400/80" />
      <div className="relative mx-auto max-w-6xl px-4 text-center sm:px-6">
        <a
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Play video"
          className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-full border-2 border-white/50 text-white transition-colors hover:border-white hover:bg-white/10"
        >
          <Play className="h-8 w-8 ml-1" aria-hidden="true" />
        </a>
        <h3 className="font-display text-3xl font-semibold text-white">
          Everyone wants to be unique
        </h3>
      </div>
    </section>
  )
}
