import { useEffect, useState } from 'react'
import { Play, X } from 'lucide-react'
import { about } from '../data'

/**
 * The 1,110×724 video figure, lifted into the band above. The play disc opens a placeholder
 * dialog (no third-party embed) that closes on Escape, on the close button, or on the backdrop.
 */
export function VideoFigure() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) {
      return
    }
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false)
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => {
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  return (
    <div className="-mt-40">
      <figure className="relative mx-auto max-w-[1110px]">
        <img
          src={about.videoPoster}
          alt="A quay crane lifting a container onto a waiting truck"
          width={1900}
          height={1239}
          loading="lazy"
          className="aspect-[1110/724] w-full object-cover"
        />
        <button
          type="button"
          aria-label="Play the Dockyard showreel"
          onClick={() => {
            setOpen(true)
          }}
          className="absolute top-1/2 left-1/2 flex size-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-brand transition-all duration-300 hover:size-[90px]"
        >
          <Play aria-hidden="true" className="size-7" fill="currentColor" />
        </button>
      </figure>

      {open ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/80 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Dockyard showreel"
        >
          <button
            type="button"
            aria-label="Close the showreel"
            onClick={() => {
              setOpen(false)
            }}
            className="absolute top-6 right-6 text-white"
          >
            <X aria-hidden="true" className="size-8" />
          </button>
          <div className="flex aspect-video w-full max-w-[900px] flex-col items-center justify-center gap-3 bg-footer text-center">
            <p className="text-[16px] text-white">Showreel placeholder</p>
            <p className="max-w-[320px] text-[14px] text-white/60">
              A production build swaps this frame for the freight film — the embed id is not part of
              the template.
            </p>
          </div>
        </div>
      ) : null}
    </div>
  )
}
