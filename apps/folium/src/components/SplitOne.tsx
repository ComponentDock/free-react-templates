import { useEffect, useState } from 'react'
import { Play, X } from 'lucide-react'
import { splitOne } from '../data'

/** Full-width split section: image on the left with a circular play button
 *  that opens a video modal, heading + two paragraphs on the right. */
export function SplitOne() {
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
    <section id="video" aria-label="Video introduction" className="bg-white">
      <div className="grid items-stretch lg:grid-cols-12">
        <div
          className="relative min-h-[320px] bg-cover bg-center lg:col-span-5"
          style={{ backgroundImage: `url(${splitOne.image})` }}
        >
          <button
            type="button"
            onClick={() => setVideoOpen(true)}
            aria-label="Play video"
            className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-black transition-transform hover:scale-105"
          >
            <Play aria-hidden="true" className="h-8 w-8 fill-current" />
          </button>
        </div>
        <div className="flex items-center bg-white px-6 py-16 lg:col-span-7 lg:px-[7%] lg:py-[10%]">
          <div>
            <h2 className="mb-10 text-3xl font-light text-black">{splitOne.heading}</h2>
            {splitOne.paragraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="mb-4 text-base font-light leading-relaxed text-gray-700"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>

      {videoOpen ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Video player"
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 p-4"
          onClick={() => setVideoOpen(false)}
        >
          <div className="relative w-full max-w-3xl" onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              onClick={() => setVideoOpen(false)}
              aria-label="Close video"
              className="absolute -top-12 right-0 flex h-10 w-10 items-center justify-center text-white transition-colors hover:text-primary"
            >
              <X aria-hidden="true" className="h-6 w-6" />
            </button>
            <div className="aspect-video w-full bg-black">
              <iframe
                src={splitOne.videoUrl}
                title="Company video"
                className="h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      ) : null}
    </section>
  )
}
