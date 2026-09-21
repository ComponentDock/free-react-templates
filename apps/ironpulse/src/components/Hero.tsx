import { useState } from 'react'
import { Play, X } from 'lucide-react'

export function Hero() {
  const [videoOpen, setVideoOpen] = useState(false)

  return (
    <>
      <section id="home" className="relative flex h-screen items-center justify-center">
        <img
          src="https://picsum.photos/seed/ironpulse-hero/1920/1080"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center text-white">
          <h1 className="mb-2 text-6xl font-extrabold md:text-8xl">
            Iron
            <br />
            Pulse
          </h1>
          <p className="mb-8 text-xl font-light tracking-wide text-gray-300">
            Crossfit. Working Harder
          </p>
          <button
            type="button"
            aria-label="Play video"
            onClick={() => setVideoOpen(true)}
            className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border-2 border-white text-white transition hover:bg-brand hover:border-brand hover:text-dark"
          >
            <Play size={28} fill="currentColor" />
          </button>
        </div>
      </section>

      {/* Video modal overlay */}
      {videoOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80"
          role="dialog"
          aria-modal="true"
          aria-label="Video player"
        >
          <div className="relative flex w-full max-w-3xl flex-col items-center">
            <button
              type="button"
              aria-label="Close video"
              className="absolute -top-12 right-0 text-white hover:text-brand"
              onClick={() => setVideoOpen(false)}
            >
              <X size={32} />
            </button>
            <div className="flex h-80 w-full items-center justify-center rounded bg-darker text-gray-400 md:h-[450px]">
              Video content placeholder
            </div>
          </div>
        </div>
      )}
    </>
  )
}
