import { useEffect } from 'react'
import { Play, X } from 'lucide-react'
import { HERO_VIDEO_IMAGE } from '../data'

interface VideoModalProps {
  open: boolean
  onClose: () => void
}

/**
 * VideoModal — placeholder video popup (source `div.video-icon` magnific
 * popup): dark backdrop with the hero's video poster and a play mark.
 * Escape or a backdrop/close click dismisses it.
 */
export function VideoModal({ open, onClose }: VideoModalProps) {
  useEffect(() => {
    if (!open) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open, onClose])

  if (!open) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Company video"
      className="fixed inset-0 z-[800] flex items-center justify-center bg-ink/95 p-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl overflow-hidden bg-black"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close video"
          className="absolute top-3 right-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-ink transition-colors hover:bg-white"
        >
          <X className="h-5 w-5" aria-hidden="true" />
        </button>
        <div className="relative aspect-video">
          <img
            src={HERO_VIDEO_IMAGE}
            alt=""
            aria-hidden="true"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-ink/30">
            <span
              aria-hidden="true"
              className="flex h-20 w-20 items-center justify-center rounded-full bg-brand text-white ring-4 ring-white/30"
            >
              <Play className="h-8 w-8 fill-current" />
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
