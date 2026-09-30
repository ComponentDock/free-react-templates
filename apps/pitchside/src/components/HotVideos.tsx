import { useState } from 'react'
import { Play, X } from 'lucide-react'
import { videos } from '../data'
import { SectionTitle } from './SectionTitle'

type Video = (typeof videos)[number]

/** Hot videos (reference `.video-section`): dark band with a thumbnail
 *  grid; the play button reveals on hover and opens a state-driven modal
 *  (no popup library) that closes via the button or Escape. */
export function HotVideos() {
  const [active, setActive] = useState<Video | null>(null)

  function handleKeyDown(event: { key: string }) {
    if (event.key === 'Escape') {
      setActive(null)
    }
  }

  return (
    <section className="bg-dark py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionTitle light>Hot Videos</SectionTitle>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {videos.map((video) => (
            <article key={video.title} className="group relative h-[200px] overflow-hidden">
              <img
                src={video.thumb}
                alt={video.title}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40" aria-hidden="true" />
              <h5 className="absolute inset-x-4 top-4 z-10 text-base font-medium text-white">
                {video.title}
              </h5>
              <button
                type="button"
                onClick={() => setActive(video)}
                aria-label={`Play ${video.title}`}
                className="absolute inset-0 z-10 flex items-center justify-center"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-brand/80 opacity-0 transition-opacity group-hover:opacity-100 focus-visible:opacity-100">
                  <Play className="h-6 w-6 text-white" aria-hidden="true" />
                </span>
              </button>
              <span className="absolute bottom-3 right-3 bg-black/70 px-2 py-1 text-xs text-white">
                {video.duration}
              </span>
            </article>
          ))}
        </div>
      </div>

      {active ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setActive(null)}
          onKeyDown={handleKeyDown}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label={active.title}
            className="w-full max-w-2xl bg-dark p-6"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <h4 className="text-xl font-medium text-white">{active.title}</h4>
              <button
                type="button"
                autoFocus
                onClick={() => setActive(null)}
                aria-label="Close video"
                className="text-white transition-colors hover:text-brand"
              >
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-4 flex aspect-video items-center justify-center bg-black">
              <span className="text-sm uppercase tracking-widest text-white/60">
                Video preview — {active.duration}
              </span>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  )
}
