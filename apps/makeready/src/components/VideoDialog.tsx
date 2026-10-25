import { useEffect } from 'react'
import { X } from 'lucide-react'
import { hero } from '../content'

export interface VideoDialogProps {
  open: boolean
  onClose: () => void
}

/**
 * The hero's third control opens the house demo reel rather than linking
 * anywhere. Escape and the backdrop both close it, and the close control takes
 * focus as the dialog mounts.
 */
export function VideoDialog({ open, onClose }: VideoDialogProps) {
  useEffect(() => {
    if (!open) {
      return
    }

    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [onClose, open])

  if (!open) {
    return null
  }

  return (
    <div
      data-testid="video-dialog"
      role="dialog"
      aria-modal="true"
      aria-label="Demo reel"
      className="fixed inset-0 z-[100] grid place-items-center bg-black/80 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div className="relative w-full max-w-4xl" onClick={(event) => event.stopPropagation()}>
        <button
          autoFocus
          type="button"
          onClick={onClose}
          aria-label="Close the video"
          className="absolute -top-10 right-0 grid h-9 w-9 place-items-center rounded-lg text-white hover:bg-white/10"
        >
          <X aria-hidden="true" className="h-5 w-5" />
        </button>
        <div className="aspect-video w-full overflow-hidden rounded-lg bg-black shadow-2xl">
          <iframe
            title="Demo reel"
            src={hero.videoUrl}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope"
            allowFullScreen
            className="h-full w-full"
          />
        </div>
      </div>
    </div>
  )
}
