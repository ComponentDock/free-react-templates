import { useState } from 'react'
import { Play } from 'lucide-react'
import { SectionHeading } from './SectionHeading'

export function VideoCover() {
  const [open, setOpen] = useState(false)

  return (
    <section
      id="video"
      className="relative bg-cover bg-fixed py-28"
      style={{ backgroundImage: 'url(https://picsum.photos/seed/cargolane-video-1/1600/900)' }}
    >
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative flex flex-col items-center px-4">
        <SectionHeading title="Watch The Video" align="center" tone="white" blurb={null} />
        <button
          type="button"
          aria-label="Play video"
          onClick={() => setOpen(true)}
          className="mt-10 flex h-20 w-20 items-center justify-center rounded-full border-2 border-white text-white transition-colors hover:bg-white hover:text-primary"
        >
          <Play aria-hidden="true" className="h-8 w-8" fill="currentColor" />
        </button>
      </div>
      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Video preview"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
        >
          <div className="max-w-md text-center text-white">
            <p className="text-lg">
              Video placeholder — drop in your own footage to show your logistics story.
            </p>
            <button
              type="button"
              aria-label="Close video"
              onClick={() => setOpen(false)}
              className="mt-6 rounded-none border-2 border-white px-8 py-3 text-sm uppercase tracking-[0.2em] text-white hover:bg-white hover:text-primary"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  )
}
