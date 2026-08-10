import { useEffect, useState } from 'react'
import { Play, X } from 'lucide-react'
import {
  closeVideoLabel,
  imgUrl,
  playVideoLabel,
  videoParagraph,
  videoTitle,
  videoUrl,
} from '../data'

/** Dark video-promo band with a circular play button opening a YouTube modal. */
export function VideoPromo() {
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
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open])

  return (
    <section
      className="intro-video-section relative flex h-[757px] items-end bg-cover bg-center"
      style={{ backgroundImage: `url(${imgUrl('pixelpress-video', 1920, 757)})` }}
    >
      <div aria-hidden="true" className="absolute inset-0 bg-[#0c062e]/70" />
      <button
        type="button"
        aria-label={playVideoLabel}
        onClick={() => setOpen(true)}
        className="absolute top-1/2 left-1/2 z-10 flex h-[100px] w-[100px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white text-white transition-colors hover:border-magenta hover:bg-magenta"
      >
        <Play className="h-10 w-10 fill-current" aria-hidden="true" />
      </button>
      <div className="relative z-10 mx-auto w-full max-w-[1200px] px-4 pb-24 text-center">
        <h2 className="mb-4 text-[40px] font-medium text-white">{videoTitle}</h2>
        <p className="mx-auto max-w-[560px] text-[15px] font-medium text-white/60">
          {videoParagraph}
        </p>
      </div>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={videoTitle}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative aspect-video w-full max-w-[900px] bg-black"
            onClick={(event) => event.stopPropagation()}
          >
            <iframe
              src={videoUrl}
              title={videoTitle}
              className="h-full w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            <button
              type="button"
              aria-label={closeVideoLabel}
              onClick={() => setOpen(false)}
              className="absolute -top-12 right-0 flex h-10 w-10 items-center justify-center text-white transition-colors hover:text-magenta-bright"
            >
              <X className="h-7 w-7" aria-hidden="true" />
            </button>
          </div>
        </div>
      )}
    </section>
  )
}
