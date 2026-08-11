import { useState } from 'react'
import { Play } from 'lucide-react'
import { HERO_HEADLINE, HERO_LEAD } from '../data'
import { VideoLightbox } from './VideoLightbox'

/* div.site-section-cover — SOLID BLACK hero (the source has no hero image),
   height calc(100vh - 196px), min-height 677px (mobile calc(70vh - 196px) /
   600px). Centered Poppins-900 headline (4rem, 2rem mobile), 18px lead at
   rgba(255,255,255,.6), and a 50px white circle play button with a small
   black glyph opening a Vimeo lightbox. */
export function Hero() {
  const [lightboxOpen, setLightboxOpen] = useState(false)

  return (
    <section
      id="home"
      aria-label="Introduction"
      className="flex h-[calc(100vh-196px)] min-h-[677px] items-center justify-center bg-ink px-4 text-center max-md:h-[calc(70vh-196px)] max-md:min-h-[600px]"
    >
      <div className="max-w-4xl">
        <h1 className="font-sans text-[2rem] leading-[1.3] font-black text-white md:text-[4rem]">
          {HERO_HEADLINE}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-[18px] leading-relaxed text-white/60">
          {HERO_LEAD}
        </p>
        <div className="mt-10 flex justify-center">
          <button
            type="button"
            aria-label="Play video"
            onClick={() => setLightboxOpen(true)}
            className="flex h-[50px] w-[50px] cursor-pointer items-center justify-center rounded-full bg-white text-ink"
          >
            <Play aria-hidden="true" className="h-[14px] w-[14px]" fill="currentColor" />
          </button>
        </div>
      </div>

      {lightboxOpen && <VideoLightbox onClose={() => setLightboxOpen(false)} />}
    </section>
  )
}
