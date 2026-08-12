import { useState } from 'react'
import { Play, X } from 'lucide-react'

const VIDEO_ID = '_VnYSoMI-9Q'

/* Hero recreated from the source's slider-item: a full-viewport cover
   photo under a 0.4 black overlay, the uppercase 5rem headline with a
   teal highlighter span, a 60px white circular play button, and "Watch
   Video" text; activating the play button opens a YouTube lightbox. */

export function Hero() {
  const [videoOpen, setVideoOpen] = useState(false)

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: 'url(https://picsum.photos/seed/forge-1/1920/1080)' }}
    >
      <div data-testid="hero-overlay" className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 mx-auto max-w-4xl px-4 pb-16 pt-32 text-center">
        <h1 className="mb-8 text-4xl font-bold uppercase leading-tight text-white sm:text-5xl lg:text-[5rem] lg:leading-[1.2]">
          We Are{' '}
          <span className="bg-brand shadow-[0.5em_0_0_#20c997,-0.5em_0_0_#20c997]">Creative</span>{' '}
          Agency
        </h1>
        <div className="mx-auto flex w-[100px] justify-center">
          <button
            type="button"
            aria-label="Watch video"
            onClick={() => setVideoOpen(true)}
            className="flex h-[60px] w-[60px] items-center justify-center rounded-full bg-white text-black transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2"
          >
            <Play className="h-6 w-6 fill-current" aria-hidden="true" />
          </button>
        </div>
        <p className="mt-4 text-sm font-light uppercase tracking-widest text-white">Watch Video</p>
      </div>

      {videoOpen ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
          <button
            type="button"
            aria-label="Close video"
            onClick={() => setVideoOpen(false)}
            className="absolute right-6 top-6 rounded p-2 text-white transition-colors hover:bg-white/10"
          >
            <X className="h-6 w-6" aria-hidden="true" />
          </button>
          <iframe
            title="Video player"
            src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="aspect-video w-full max-w-4xl border-0"
          />
        </div>
      ) : null}
    </section>
  )
}
