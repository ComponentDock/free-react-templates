import { useEffect, useRef } from 'react'
import type { RefObject } from 'react'
import { X } from 'lucide-react'

export interface VideoDialogProps {
  open: boolean
  onClose: () => void
  url: string
  /** Focus returns here on close, when there is a trigger to return to. */
  trigger?: RefObject<HTMLButtonElement | null>
}

/**
 * A 16:9 overlay that behaves: Escape and the backdrop both dismiss it, focus
 * starts on the close control, Tab stays inside, and the trigger gets focus
 * back when it goes.
 */
export function VideoDialog({ open, onClose, url, trigger }: VideoDialogProps) {
  const closeRef = useRef<HTMLButtonElement | null>(null)

  useEffect(() => {
    if (!open) {
      return
    }
    closeRef.current?.focus()
    const returnTo = trigger?.current
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
        return
      }
      if (event.key === 'Tab') {
        event.preventDefault()
        closeRef.current?.focus()
      }
    }
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      returnTo?.focus()
    }
  }, [onClose, open, trigger])

  if (!open) {
    return null
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Studio film"
      data-testid="video-dialog"
      onClick={onClose}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
    >
      <div className="relative w-full max-w-4xl" onClick={(event) => event.stopPropagation()}>
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Close the film"
          className="absolute -top-12 right-0 grid h-10 w-10 place-items-center rounded-lg bg-white/10 text-white transition-colors hover:bg-white/20"
        >
          <X aria-hidden="true" className="h-5 w-5" />
        </button>
        <div className="aspect-video w-full overflow-hidden rounded-lg bg-black shadow-2xl">
          <iframe
            src={url}
            title="Studio film"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            sandbox="allow-scripts allow-same-origin allow-presentation"
            className="h-full w-full"
          />
        </div>
      </div>
    </div>
  )
}
