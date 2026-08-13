import { useEffect, useState } from 'react'
import { ArrowRight, Play, X } from 'lucide-react'
import { about } from '../data'

/** Two-column about section: photo panel with a circular white play button
 *  that opens the company video in a client-side modal, and a caption with
 *  two brand-red stat counters and a flat red Learn More button. */
export function About() {
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
    <section id="about" className="py-[100px]">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 lg:grid-cols-2">
        <div
          className="relative flex min-h-[380px] items-center justify-center bg-cover bg-center"
          style={{ backgroundImage: `url(${about.video.image})` }}
        >
          <button
            type="button"
            onClick={() => setVideoOpen(true)}
            aria-label={about.video.label}
            className="flex h-[100px] w-[100px] items-center justify-center rounded-full bg-white text-play shadow-lg transition-transform hover:scale-105"
          >
            <Play className="h-10 w-10" fill="currentColor" aria-hidden="true" />
          </button>
        </div>

        <div className="lg:pl-[50px]">
          <span className="text-sm font-medium uppercase tracking-wider text-brand">
            {about.eyebrow}
          </span>
          <h2 className="mt-2 text-4xl font-normal leading-tight">{about.heading}</h2>
          <p className="mt-6 leading-relaxed text-body">{about.paragraph}</p>

          <div className="mt-8 flex flex-wrap gap-x-14 gap-y-8">
            {about.counters.map((counter) => (
              <div key={counter.label}>
                <span className="text-[50px] font-semibold leading-none text-brand">
                  {counter.value}
                  {counter.suffix}
                </span>
                <p className="mt-2 text-[22px] leading-snug text-navy">{counter.label}</p>
              </div>
            ))}
          </div>

          <a
            href={about.href}
            className="mt-8 inline-flex items-center bg-brand px-[33px] py-[21px] text-lg text-white transition-colors hover:bg-[#c41212]"
          >
            {about.cta}
            <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>

      {videoOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          onClick={() => setVideoOpen(false)}
        >
          <div className="relative w-full max-w-3xl" onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              aria-label="Close video"
              onClick={() => setVideoOpen(false)}
              className="absolute -top-11 right-0 text-white transition-colors hover:text-brand"
            >
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
            <iframe
              src={about.video.embed}
              title="Company video"
              className="aspect-video w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  )
}
