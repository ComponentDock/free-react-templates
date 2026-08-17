import { useEffect, useState } from 'react'
import { Plane, Play, Ship, X } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { ABOUT, VIDEO_URL, type AboutIcon } from '../data'

const FEATURE_ICONS: Record<AboutIcon, LucideIcon> = {
  plane: Plane,
  ship: Ship,
}

/* About — split section: a video-wrap image with a circular play control
   on the right (opens an inline dialog player) and a Mission heading, copy,
   and two icon feature rows on the left. */
export function About() {
  const [videoOpen, setVideoOpen] = useState(false)

  useEffect(() => {
    if (!videoOpen) return
    function onKey(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setVideoOpen(false)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [videoOpen])

  return (
    <section aria-label="About" className="px-4 py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-2">
        <div className="relative order-2 lg:order-2">
          <img
            src={ABOUT.videoImage}
            alt="Inside the Consignly logistics hub"
            className="h-64 w-full rounded object-cover lg:h-96"
          />
          <button
            type="button"
            aria-label="Play video"
            onClick={() => setVideoOpen(true)}
            className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-black/30 text-white transition-transform hover:scale-110"
          >
            <Play className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        <div className="order-1 lg:order-1">
          <span className="text-[11px] font-bold uppercase tracking-[.1rem] text-label">
            {ABOUT.subheading}
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-black lg:text-4xl">
            {ABOUT.heading}
          </h2>
          <p className="mt-5 leading-relaxed text-muted">{ABOUT.text}</p>
          <div className="mt-10 space-y-8">
            {ABOUT.features.map((feature) => {
              const Icon = FEATURE_ICONS[feature.icon]
              return (
                <div key={feature.heading} className="flex gap-5">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded text-accent-soft">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-display text-base font-bold text-black">
                      {feature.heading}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{feature.text}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {videoOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          role="dialog"
          aria-label="About video"
          onClick={() => setVideoOpen(false)}
        >
          <div className="w-full max-w-3xl" onClick={(event) => event.stopPropagation()}>
            <video
              controls
              autoPlay
              playsInline
              poster={ABOUT.videoImage}
              className="w-full rounded bg-black"
            >
              <source src={VIDEO_URL} type="video/mp4" />
            </video>
            <div className="mt-4 flex items-center justify-between">
              <p className="text-sm text-white/80">{ABOUT.videoTitle}</p>
              <button
                type="button"
                aria-label="Close video"
                onClick={() => setVideoOpen(false)}
                className="inline-flex items-center gap-2 rounded bg-white px-4 py-2 text-sm font-semibold text-brand"
              >
                <X className="h-4 w-4" aria-hidden="true" />
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
