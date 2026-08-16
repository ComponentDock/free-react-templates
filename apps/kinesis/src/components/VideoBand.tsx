import { Play, Quote } from 'lucide-react'
import { successQuotes } from '../data'

/* Blue-striped video band: pulsing circular play button, white heading,
   a video thumbnail and two member success quotes. */
export function VideoBand() {
  return (
    <section aria-label="Members success stories" className="relative overflow-hidden py-20">
      <div className="stripe-video absolute inset-0" aria-hidden="true" />
      <div className="relative z-10 mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <button
            type="button"
            aria-label="Play video"
            className="relative flex h-[60px] w-[60px] items-center justify-center rounded-full border border-white/40 text-white transition-colors hover:border-primary hover:text-primary"
          >
            <span
              className="absolute inset-0 rounded-full bg-[rgba(225,25,62,0.4)] animate-ping"
              aria-hidden="true"
            />
            <Play className="relative h-[30px] w-[30px] fill-current" aria-hidden="true" />
          </button>
          <span className="mt-6 text-[13px] font-bold uppercase tracking-wide text-white/80">
            Watch Our Stories
          </span>
          <h2 className="mt-2 font-display text-3xl font-extrabold uppercase text-white lg:text-[34px]">
            Members Success Stories
          </h2>
        </div>

        <div className="mt-12 grid items-center gap-10 lg:grid-cols-2">
          <div className="relative h-[400px] overflow-hidden rounded">
            <img
              src="https://picsum.photos/seed/kinesis-video/800/500"
              alt="Member training while a coach watches"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-ink/30">
              <button
                type="button"
                aria-label="Play member video"
                className="flex h-14 w-14 items-center justify-center rounded-full border border-white/70 text-white"
              >
                <Play className="h-6 w-6 fill-current" aria-hidden="true" />
              </button>
            </div>
          </div>
          <div className="space-y-8">
            {successQuotes.map((quote) => (
              <figure key={quote}>
                <Quote className="h-8 w-8 text-primary" aria-hidden="true" />
                <blockquote className="mt-3 font-display text-2xl font-semibold leading-snug text-white md:text-[28px]">
                  &ldquo;{quote}&rdquo;
                </blockquote>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
