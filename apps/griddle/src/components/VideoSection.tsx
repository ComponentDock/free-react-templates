/**
 * VideoSection — dark overlay with play button. Source: .video_area.
 * Shows "Burger Bachelor" heading + "How we make delicious Burger" subtitle
 * + a play button.
 */
export function VideoSection() {
  return (
    <section className="relative overflow-hidden bg-ink py-32">
      <img
        src="https://picsum.photos/seed/griddle-video/1920/600"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover opacity-40"
      />
      <div className="relative mx-auto max-w-4xl px-4 text-center text-white">
        <h2 className="font-display text-4xl font-bold uppercase leading-tight md:text-5xl">
          Burger <br /> Bachelor
        </h2>
        <p className="mt-4 text-lg text-white/80">How we make delicious Burger</p>
        <a
          href="https://www.youtube.com/watch?v=vLnPwxZdW4Y"
          aria-label="Play video"
          className="mt-8 inline-flex h-16 w-16 items-center justify-center rounded-full border-2 border-white/40 text-white transition-colors hover:border-brand hover:text-brand"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="ml-1 h-6 w-6">
            <path d="M8 5v14l11-7z" />
          </svg>
        </a>
      </div>
    </section>
  )
}
