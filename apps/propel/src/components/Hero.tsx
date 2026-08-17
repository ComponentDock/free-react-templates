import { useEffect, useState } from 'react'
import { X } from 'lucide-react'
import { HERO } from '../data'

interface VideoModalProps {
  title: string
  embedUrl: string
  onClose: () => void
}

function VideoModal({ title, embedUrl, onClose }: VideoModalProps) {
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [onClose])

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={title}
      className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/90 p-6"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl bg-ink p-2 shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          aria-label="Close video"
          className="absolute -top-12 right-0 p-2 text-white transition-colors hover:text-brand"
          onClick={onClose}
        >
          <X className="size-7" />
        </button>
        <div className="aspect-video w-full">
          <iframe
            src={embedUrl}
            title={title}
            className="h-full w-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  )
}

/* Full-viewport photo hero under a 60% black overlay: centered headline,
   lead, white pill CTA and a "Watch the video" link that opens the video
   modal (Escape, backdrop click, and the close button all dismiss it). */
export function Hero() {
  const [videoOpen, setVideoOpen] = useState(false)

  return (
    <section
      id="home"
      aria-label="Hero"
      className="relative flex min-h-[700px] items-center justify-center overflow-hidden bg-ink"
    >
      <img
        src={HERO.image}
        alt={HERO.imageAlt}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-black/60" />

      <div className="relative mx-auto max-w-4xl px-6 py-40 text-center">
        <h1 className="mb-6 font-display text-[38px] font-bold leading-tight text-white sm:text-[50px]">
          {HERO.heading}
        </h1>
        <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-white/50">{HERO.lead}</p>
        <div className="flex flex-wrap items-center justify-center gap-6">
          <a
            href="#services"
            className="inline-block rounded-full bg-white px-8 py-3 text-xs font-bold uppercase tracking-[.1rem] text-ink transition-colors hover:bg-brand hover:text-white"
          >
            {HERO.ctaLabel}
          </a>
          <button
            type="button"
            className="inline-flex items-center gap-2 text-sm font-medium text-white underline-offset-4 transition-colors hover:text-brand hover:underline"
            onClick={() => setVideoOpen(true)}
          >
            {HERO.videoLabel}
          </button>
        </div>
      </div>

      {videoOpen && (
        <VideoModal
          title={HERO.videoTitle}
          embedUrl={HERO.videoEmbedUrl}
          onClose={() => setVideoOpen(false)}
        />
      )}
    </section>
  )
}
