import { useState } from 'react'
import { X } from 'lucide-react'
import { HERO, IMAGES } from '../data'

/** Hero — full-height cover photo under a flat 40% black overlay with a
    centered white headline and a teal pill "See video" button that opens
    a client-side modal hosting the embedded video. */
export function Hero() {
  const [videoOpen, setVideoOpen] = useState(false)

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${IMAGES.hero})`, minHeight: '780px' }}
    >
      <div className="absolute inset-0 bg-black/40" aria-hidden="true" />
      <div className="relative z-10 mx-auto max-w-4xl px-4 py-32 text-center">
        <h1 className="font-display text-5xl font-bold leading-tight text-white">
          {HERO.headline}
        </h1>
        <button
          type="button"
          onClick={() => setVideoOpen(true)}
          className="mt-10 rounded-full bg-brand px-8 py-4 text-sm font-bold text-ink transition-colors hover:bg-brand-hover"
        >
          {HERO.videoLabel}
        </button>
      </div>

      {videoOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Video player"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setVideoOpen(false)}
        >
          <div className="relative w-full max-w-3xl" onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              aria-label="Close video"
              onClick={() => setVideoOpen(false)}
              className="absolute -top-12 right-0 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/25"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
            <div className="aspect-video w-full overflow-hidden bg-black shadow-2xl">
              <iframe
                src={HERO.videoUrl}
                title="Concierge travel video"
                className="h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
