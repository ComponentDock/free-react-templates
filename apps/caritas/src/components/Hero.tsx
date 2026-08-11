import { Play } from 'lucide-react'
import { HERO_CTA_LABEL, HERO_SUBTITLE, HERO_TITLE } from '../data'
import { BTN_2 } from '../buttons'

/* section.banner_part — height 950px (700px ≤991px), cover photo
   (banner_img.png → seeded picsum) + purple gradient overlay, centered
   white 80px H1 + lorem + "Start Donation" (.btn_2). Below the text, a
   video thumbnail with a centered play button (.banner_video) hangs
   over the hero's bottom edge on desktop (bottom: -245px). */
const HERO_IMAGE = 'https://picsum.photos/seed/caritas-hero/1920/950'
const VIDEO_IMAGE = 'https://picsum.photos/seed/caritas-video/800/500'

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[950px] flex-col justify-center bg-cover bg-center bg-no-repeat max-[991px]:min-h-[700px]"
      style={{ backgroundImage: `url('${HERO_IMAGE}')` }}
    >
      {/* Purple gradient overlay (source: rgba 0.7 of #9300ff→#d500ff). */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(16deg,#9300ff_0%,#d500ff_100%)] opacity-70"
      />

      <div className="relative z-[2] mx-auto flex w-full max-w-6xl flex-col items-center px-4 pt-28 pb-16 text-center">
        <h1 className="max-w-[900px] text-[80px] leading-[1.06] font-bold text-white max-[576px]:text-4xl">
          {HERO_TITLE}
        </h1>
        <p className="mt-8 max-w-[620px] text-[16px] leading-[1.9] text-white/90">
          {HERO_SUBTITLE}
        </p>
        <a href="#causes" className={`${BTN_2} mt-12`}>
          {HERO_CTA_LABEL}
        </a>
      </div>

      {/* .banner_video — thumbnail + centered play button (decorative; the
          source opens a video lightbox, no backend recreated). Desktop:
          absolute, hanging 245px below the hero's bottom edge. */}
      <div className="relative z-[2] mx-auto w-full max-w-6xl px-4 pb-10 lg:absolute lg:bottom-[-245px] lg:left-1/2 lg:z-10 lg:translate-x-[-50%] lg:pb-0">
        <div className="relative mx-auto max-w-[800px]">
          <img src={VIDEO_IMAGE} alt="" className="w-full rounded-[10px] object-cover" />
          <button
            type="button"
            aria-label="Play video"
            className="absolute top-1/2 left-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white text-brand transition-transform hover:scale-105"
          >
            <Play aria-hidden="true" className="ml-0.5 h-6 w-6 fill-current" />
          </button>
        </div>
      </div>
    </section>
  )
}
