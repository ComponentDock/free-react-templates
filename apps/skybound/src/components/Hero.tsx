import { useState } from 'react'
import { ArrowRight, Play, X } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'
import { HERO } from '../data/content'

export function Hero() {
  const [videoOpen, setVideoOpen] = useState(false)

  return (
    <section
      id="home"
      className="relative bg-[url('https://picsum.photos/seed/skybound-hero/1400/1000')] bg-cover bg-center md:bg-none"
    >
      <div aria-hidden="true" className="absolute inset-0 bg-black/55 md:hidden" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-6 py-20 md:grid-cols-2 md:gap-10 md:py-16">
        <div>
          <h1 className="mb-6 text-4xl leading-tight text-white md:text-5xl md:text-heading">
            {HERO.titleFirst}
            <br />
            {HERO.titleSecond}
          </h1>
          <p className="mb-12 max-w-lg text-white/85 md:text-body">{HERO.text}</p>
          <ButtonLink href="#packages" className="main-btn main-btn-hero">
            {HERO.cta}
            <span className="btn-arrow" aria-hidden="true">
              <ArrowRight className="h-4 w-4" />
            </span>
          </ButtonLink>
        </div>

        <div className="relative hidden md:block">
          <img src={HERO.photo} alt={HERO.photoAlt} className="h-[520px] w-full object-cover" />
          <div className="absolute bottom-8 left-0 flex items-center gap-5">
            <button
              type="button"
              aria-label="Play intro video"
              onClick={() => setVideoOpen(true)}
              className="play-btn"
            >
              <Play aria-hidden="true" className="relative h-6 w-6" />
            </button>
            <div>
              <h5 className="text-lg text-white">{HERO.videoTitle}</h5>
              <p className="text-xs uppercase tracking-wide text-white">{HERO.videoCaption}</p>
            </div>
          </div>
        </div>
      </div>

      {videoOpen ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Intro video"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-6"
        >
          <div className="relative w-full max-w-2xl bg-white p-10 text-center">
            <button
              type="button"
              aria-label="Close video"
              onClick={() => setVideoOpen(false)}
              className="absolute right-4 top-4"
            >
              <X aria-hidden="true" className="h-5 w-5" />
            </button>
            <h4 className="mb-4 text-2xl">{HERO.videoTitle}</h4>
            <p>{HERO.text}</p>
          </div>
        </div>
      ) : null}
    </section>
  )
}
