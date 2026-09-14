import { Play } from 'lucide-react'

export function Video() {
  return (
    <section className="relative flex min-h-[400px] items-center justify-center bg-ink dark:bg-ink-dark">
      <img
        src="https://picsum.photos/seed/stitchly-video/1400/500"
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-30"
        loading="lazy"
      />
      <div className="relative z-10 text-center">
        <a
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Watch our tailor story on YouTube"
          className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-brand text-white transition-transform hover:scale-110"
        >
          <Play className="h-8 w-8 ml-1" aria-hidden="true" />
        </a>
        <p className="mt-6 text-sm uppercase tracking-[0.2em] text-gray-300">Watch Our Story</p>
      </div>
    </section>
  )
}
