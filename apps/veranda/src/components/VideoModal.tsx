import { useEffect, useRef } from 'react'
import { X } from 'lucide-react'

export interface VideoModalProps {
  open: boolean
  onClose: () => void
}

/**
 * The demo player. The iframe is only mounted while the modal is open, so no
 * third-party request happens before the visitor asks for it. Escape, the close
 * control and a backdrop click all dismiss it.
 */
export function VideoModal({ open, onClose }: VideoModalProps) {
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!open) {
      return
    }

    ;(closeRef.current as HTMLButtonElement).focus()

    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open, onClose])

  if (!open) {
    return null
  }

  return (
    <div
      role="presentation"
      onClick={onClose}
      data-testid="video-backdrop"
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur"
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Veranda tour"
        onClick={(event) => event.stopPropagation()}
        className="relative w-full max-w-3xl"
      >
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Close video"
          className="absolute -top-12 right-0 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
        >
          <X aria-hidden="true" className="h-5 w-5" />
        </button>
        <div className="aspect-video overflow-hidden rounded-xl bg-black shadow-2xl">
          <iframe
            title="Veranda tour"
            src="https://www.youtube-nocookie.com/embed/aqz-KE-bpKQ?autoplay=1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope"
            sandbox="allow-scripts allow-same-origin allow-presentation allow-popups"
            allowFullScreen
            className="h-full w-full"
          />
        </div>
      </div>
    </div>
  )
}
