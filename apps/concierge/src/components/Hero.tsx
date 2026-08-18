import { useEffect, useState } from 'react'
import { Play, X } from 'lucide-react'
import { pillPrimary } from './buttonClasses'

const heroImage = 'https://picsum.photos/seed/concierge-hero/1920/1080'
const videoImage = 'https://picsum.photos/seed/concierge-video/800/450'

/**
 * Full-height hero (reference: .hero.overlay) with a flat 40% black overlay,
 * centered Work Sans headline, and a "See video" pill that opens a
 * client-side modal (source used glightbox — recreated with React state).
 */
export function Hero() {
  const [videoOpen, setVideoOpen] = useState(false)

  useEffect(() => {
    if (!videoOpen) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setVideoOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [videoOpen])

  return (
    <section
      id="home"
      aria-label="Welcome"
      className="relative flex h-screen min-h-[780px] items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="absolute inset-0 bg-black/40" aria-hidden="true" />
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
        <h1 className="mb-8 font-heading text-[50px] font-bold leading-tight text-white">
          Once a year go someplace you've never been before.
        </h1>
        <button type="button" onClick={() => setVideoOpen(true)} className={pillPrimary}>
          <Play className="mr-2 h-4 w-4" aria-hidden="true" />
          See video
        </button>
      </div>

      {videoOpen && (
        <div
          role="presentation"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          onClick={() => setVideoOpen(false)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Intro video"
            className="relative w-full max-w-2xl rounded-lg bg-white p-6"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              aria-label="Close video"
              onClick={() => setVideoOpen(false)}
              className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full text-black/60 transition-colors hover:bg-black/5 hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/20"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
            <h2 className="mb-3 pr-10 font-heading text-2xl font-bold text-ink">
              A glimpse of your next escape
            </h2>
            <img
              src={videoImage}
              alt="Tropical resort pier over turquoise water"
              className="w-full rounded-md object-cover"
            />
            <p className="mt-3 text-sm text-black/60">
              A two-minute journey through the resort, the reefs, and the islands beyond.
            </p>
          </div>
        </div>
      )}
    </section>
  )
}
