import { useEffect, useState } from 'react'
import { Play, X } from 'lucide-react'
import { IMAGES } from '../data/content'

interface VideoDialogProps {
  onClose: () => void
}

function VideoDialog({ onClose }: VideoDialogProps) {
  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [onClose])

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-navy-deep/95 p-4">
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Island video"
        className="relative w-full max-w-3xl bg-navy p-6 text-white"
      >
        <button
          type="button"
          aria-label="Close video"
          onClick={onClose}
          className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center text-white transition-colors hover:text-brand"
        >
          <X aria-hidden="true" className="h-5 w-5" />
        </button>
        <div className="font-body flex aspect-video items-center justify-center border border-white/25 bg-white/5 text-center text-sm text-white/80">
          Island video placeholder — this recreation ships no video assets.
        </div>
      </div>
    </div>
  )
}

export function VideoTeaser() {
  const [open, setOpen] = useState(false)

  return (
    <section className="relative isolate overflow-hidden">
      <img
        src={IMAGES.video}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-navy/70" />

      <div className="flex flex-col items-center px-4 py-28 text-center">
        <h2 className="text-2xl font-light text-white sm:text-3xl">A day on the island</h2>
        <p className="mt-1 text-sm font-light text-white">A trip organized by Trailmark's team</p>

        <button
          type="button"
          aria-label="Play the island video"
          aria-haspopup="dialog"
          aria-expanded={open}
          onClick={() => setOpen(true)}
          className="mt-10 flex h-24 w-24 items-center justify-center rounded-full border-2 border-white text-white transition-colors duration-400 hover:bg-white/15"
        >
          <Play aria-hidden="true" className="ml-1 h-7 w-7" fill="currentColor" />
        </button>
      </div>

      {open ? <VideoDialog onClose={() => setOpen(false)} /> : null}
    </section>
  )
}
