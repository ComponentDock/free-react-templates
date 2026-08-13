import { useState } from 'react'
import { CheckCircle2, Play, X } from 'lucide-react'
import { about } from '../data'

/**
 * Split block "Glamour A Model Agency": full-bleed photo left, text right
 * with a pink checkmark list and a video promo row (pulsing round play
 * button + "Watch our video promo" link) that opens a Vimeo modal.
 */
export function About() {
  const [videoOpen, setVideoOpen] = useState(false)

  return (
    <section id="about" className="bg-white">
      <div className="grid lg:grid-cols-2">
        <div className="min-h-[420px] bg-cover bg-center" aria-hidden="true">
          <img
            src="https://picsum.photos/seed/glamour-about/1200/900"
            alt=""
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>

        <div className="bg-black/[0.02] px-6 py-16 lg:px-14">
          <h2 className="font-heading text-3xl font-bold tracking-wide text-ink uppercase">
            {about.heading}
          </h2>
          <p className="mt-6 leading-relaxed">{about.paragraph}</p>
          <p className="mt-4 leading-relaxed">
            <strong>{about.strong}</strong>
          </p>
          <ul className="my-6 space-y-3">
            {about.checklist.map((item) => (
              <li key={item} className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-brand" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-6">
            <button
              type="button"
              aria-label="Play the video promo"
              onClick={() => setVideoOpen(true)}
              className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-brand text-white transition-colors hover:bg-ink"
            >
              <span
                aria-hidden="true"
                className="absolute inset-0 animate-ping rounded-full bg-brand/50"
              />
              <Play className="relative h-6 w-6 fill-current" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => setVideoOpen(true)}
              className="text-left text-base font-light text-ink underline-offset-4 hover:underline"
            >
              {about.video.label}
            </button>
          </div>
        </div>
      </div>

      {videoOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Video promo"
          className="fixed inset-0 z-[1003] flex items-center justify-center bg-black/80 p-6"
          onClick={() => setVideoOpen(false)}
        >
          <div className="relative w-full max-w-3xl" onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              aria-label="Close video"
              onClick={() => setVideoOpen(false)}
              className="absolute -top-12 right-0 text-white transition-opacity hover:opacity-70"
            >
              <X className="h-8 w-8" aria-hidden="true" />
            </button>
            <div className="aspect-video w-full bg-ink">
              <iframe
                src={about.video.url}
                title="Glamour video promo"
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
