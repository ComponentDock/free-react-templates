import { useState } from 'react'
import { Play } from 'lucide-react'
import { VIDEO_IMAGE } from '../data'
import { VideoLightbox } from './VideoLightbox'

/* div.site-section (white) — centered header: amber "See The Video"
   eyebrow + serif h2; media block with rgba(0,0,0,.2) overlay and a
   70x70px circular play button (2px white border, white icon) that opens
   the video lightbox. */
export function Video() {
  const [open, setOpen] = useState(false)

  return (
    <section className="bg-white py-16 md:py-24 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold tracking-widest text-brand uppercase">
            See The Video
          </span>
          <h2 className="mt-2 font-display text-3xl font-bold text-ink sm:text-4xl">
            See The Video
          </h2>
        </div>
        <div className="relative mx-auto mt-12 max-w-4xl overflow-hidden rounded">
          <img
            src={VIDEO_IMAGE}
            alt="Wedding photography highlight video"
            className="w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20" aria-hidden="true" />
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Play video"
            className="absolute inset-0 m-auto flex h-[70px] w-[70px] cursor-pointer items-center justify-center rounded-full border-2 border-white text-white transition-transform hover:scale-105"
          >
            <Play className="h-8 w-8 fill-current" aria-hidden="true" />
          </button>
        </div>
      </div>
      {open && <VideoLightbox onClose={() => setOpen(false)} />}
    </section>
  )
}
