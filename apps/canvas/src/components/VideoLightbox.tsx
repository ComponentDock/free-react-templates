import { useEffect } from 'react'
import { X } from 'lucide-react'
import { VIMEO_VIDEO_URL } from '../data'

/* fancybox-style Vimeo lightbox: full-screen backdrop (click to close),
   centered 16:9 iframe, close button, Escape to close. */
interface VideoLightboxProps {
  onClose: () => void
}

export function VideoLightbox({ onClose }: VideoLightboxProps) {
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [onClose])

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Video player"
      onClick={onClose}
      className="fixed inset-0 z-[2000] flex items-center justify-center bg-black/80 p-4"
    >
      <div className="relative w-full max-w-3xl" onClick={(event) => event.stopPropagation()}>
        <button
          type="button"
          aria-label="Close video"
          onClick={onClose}
          className="absolute -top-12 right-0 cursor-pointer text-white/80 transition-colors hover:text-white"
        >
          <X aria-hidden="true" className="h-8 w-8" />
        </button>
        <iframe
          title="Video player"
          src={VIMEO_VIDEO_URL}
          className="aspect-video w-full border-0"
          allow="autoplay; fullscreen"
          allowFullScreen
        />
      </div>
    </div>
  )
}
