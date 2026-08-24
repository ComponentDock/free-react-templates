import { useState } from 'react'
import { Play, X } from 'lucide-react'

export function Video() {
  const [open, setOpen] = useState(false)

  return (
    <section className="relative flex min-h-[400px] items-center justify-center">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://picsum.photos/seed/lexicon-video/1920/600)',
        }}
      />
      <div className="absolute inset-0 bg-black/40" />

      {/* Play button */}
      <button
        onClick={() => setOpen(true)}
        className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full bg-brand/90 text-white shadow-lg transition-transform hover:scale-110"
        aria-label="Play video"
      >
        <Play size={32} fill="white" />
      </button>

      {/* Video modal */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Video player"
        >
          <div className="relative w-full max-w-3xl" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setOpen(false)}
              className="absolute -right-3 -top-3 z-10 rounded-full bg-white p-1 text-ink shadow-lg"
              aria-label="Close video"
            >
              <X size={20} />
            </button>
            <div className="aspect-video w-full bg-black">
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Hotel video"
                className="h-full w-full"
                sandbox="allow-scripts allow-same-origin allow-popups"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
