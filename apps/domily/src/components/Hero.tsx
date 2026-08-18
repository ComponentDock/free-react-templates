import { useState } from 'react'
import { Play, X } from 'lucide-react'
import { HERO } from '../data'
import { goldOutlineButton } from './buttonClasses'

export function Hero() {
  const [videoOpen, setVideoOpen] = useState(false)

  return (
    <section id="home" className="relative min-h-[800px] overflow-hidden bg-navy-ink">
      <img
        src={HERO.image}
        alt={HERO.imageAlt}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-[rgba(25,40,57,0.6)] to-[rgba(25,40,57,0.1)]"
      />
      <div className="relative isolate mx-auto flex min-h-[800px] max-w-[1320px] items-center px-4">
        <div className="relative isolate max-w-2xl py-24">
          {/* Navy caption panel (extends behind the text block) */}
          <div
            aria-hidden="true"
            className="absolute -left-4 top-[-225px] z-[-10] h-[223%] w-[114%] bg-navy-ink"
          />
          <h1 className="font-display text-[54px] font-semibold leading-[1.1] text-white">
            {HERO.kicker}
            <span className="block text-gold">{HERO.accent}</span>
            {HERO.end}
          </h1>
          <p className="mt-7 max-w-xl text-xl font-light text-[#CCD2E1]">{HERO.subtext}</p>
          <a href="#properties" className={`${goldOutlineButton} mt-[45px]`}>
            {HERO.cta}
          </a>
        </div>
      </div>

      {/* Vertical gold promo tab on the photo edge */}
      <div className="absolute right-0 top-1/2 flex -translate-y-1/2 items-center gap-0">
        <button
          type="button"
          onClick={() => setVideoOpen(true)}
          aria-label="Play promo video"
          className="z-10 -mr-8 flex size-16 items-center justify-center rounded-full bg-gold text-navy-ink transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
        >
          <Play className="size-6 fill-current" aria-hidden="true" />
        </button>
        <span className="bg-gold px-[22px] py-[34px] font-display text-xl font-semibold text-navy-ink [writing-mode:vertical-rl]">
          {HERO.promo}
        </span>
      </div>

      {videoOpen && (
        <div
          role="dialog"
          aria-label="Promo video"
          className="fixed inset-0 z-50 flex items-center justify-center bg-navy-ink/90 p-4"
        >
          <button
            type="button"
            onClick={() => setVideoOpen(false)}
            aria-label="Close video"
            className="absolute right-6 top-6 rounded-none p-2 text-white transition-colors hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
          >
            <X className="size-6" aria-hidden="true" />
          </button>
          <div className="aspect-video w-full max-w-3xl bg-black">
            <iframe
              className="h-full w-full"
              src="https://www.youtube.com/embed/aqz-KE-bpKQ"
              title="Promo video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  )
}
