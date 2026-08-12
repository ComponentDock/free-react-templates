import { useState } from 'react'
import { ArrowRight, ChevronLeft, ChevronRight, Play } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'
import { HERO_IMAGE, HERO_LEARN_MORE_LABEL, HERO_SLIDES } from '../data'
import { VideoModal } from './VideoModal'

/**
 * Hero — full-bleed 765px industrial photo slider (source `div.slider-area`,
 * bg h1_hero.png) with two headline slides, a red square "Learn More"
 * button, and a circular play button opening the video modal. Prev/next
 * arrows and dots switch slides.
 */
export function Hero() {
  const [active, setActive] = useState(0)
  const [videoOpen, setVideoOpen] = useState(false)
  const slide = HERO_SLIDES[active]!

  const goTo = (index: number) => setActive((index + HERO_SLIDES.length) % HERO_SLIDES.length)
  const prev = () => goTo(active - 1)
  const next = () => goTo(active + 1)

  return (
    <section
      id="home"
      className="relative flex min-h-[765px] items-center overflow-hidden"
      aria-label="Hero"
    >
      <img
        src={HERO_IMAGE}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-ink/40" aria-hidden="true" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 lg:px-6">
        <div className="max-w-2xl">
          <h1 className="font-display text-4xl font-bold leading-tight text-white md:text-5xl">
            {slide.headline.map((part) => (
              <span key={part.text} className={part.accent ? 'text-brand' : undefined}>
                {part.text}{' '}
              </span>
            ))}
          </h1>
          <p className="mt-4 text-lg text-white/85">{slide.paragraph}</p>
          <div className="mt-8 flex items-center gap-6">
            <ButtonLink
              href="#about"
              variant="primary"
              className="h-auto rounded-none px-14 py-4 text-sm font-bold uppercase"
            >
              {HERO_LEARN_MORE_LABEL}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </ButtonLink>
            <button
              type="button"
              aria-label="Play video"
              onClick={() => setVideoOpen(true)}
              className="flex h-16 w-16 items-center justify-center rounded-full bg-white/20 text-white ring-1 ring-white/50 transition-colors hover:bg-brand"
            >
              <Play className="h-6 w-6 fill-current" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>

      <div className="absolute right-4 bottom-8 z-10 flex items-center gap-3 lg:right-6">
        <button
          type="button"
          aria-label="Previous slide"
          onClick={prev}
          className="flex h-10 w-10 items-center justify-center border border-white/40 text-white transition-colors hover:bg-brand hover:border-brand"
        >
          <ChevronLeft className="h-5 w-5" aria-hidden="true" />
        </button>
        <button
          type="button"
          aria-label="Next slide"
          onClick={next}
          className="flex h-10 w-10 items-center justify-center border border-white/40 text-white transition-colors hover:bg-brand hover:border-brand"
        >
          <ChevronRight className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2">
        {HERO_SLIDES.map((item, index) => (
          <button
            key={item.headline[0]!.text}
            type="button"
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === active ? 'true' : undefined}
            onClick={() => goTo(index)}
            className={`h-2.5 w-2.5 rounded-full transition-colors ${
              index === active ? 'bg-brand' : 'bg-white/50 hover:bg-white'
            }`}
          />
        ))}
      </div>

      <VideoModal open={videoOpen} onClose={() => setVideoOpen(false)} />
    </section>
  )
}
