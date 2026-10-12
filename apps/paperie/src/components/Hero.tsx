import { Pause, Play } from 'lucide-react'
import { useEffect, useState } from 'react'
import { cn } from '@free-react-templates/ui'
import { prefersReducedMotion } from '../lib/motion'
import {
  COUPLE,
  HERO_DATE,
  HERO_SLIDES,
  HERO_TAGLINE,
  SECTION_IDS,
  SLIDE_PAUSE,
  SLIDE_PLAY,
  photo,
} from '../lib/site'
import {
  containerClass,
  discClass,
  discRingClass,
  heroBodyClass,
  heroClass,
  heroDashClass,
  heroDateClass,
  heroDateRowClass,
  heroNamesClass,
  heroPhotoClass,
  heroScrimClass,
  heroTaglineClass,
  slideGlyphClass,
  slideToggleClass,
} from '../lib/styles'

/** How long each photograph holds before the hero cross-fades to the next. */
export const SLIDE_MS = 7000

/**
 * The hero: a full-bleed photograph under a light wash, carrying the design's signature element — a
 * translucent magenta disc with a dashed white ring that turns slowly. The disc holds the date
 * between two white dashes, the couple's names and the tagline, each rising into place in turn. The
 * slider cross-fades between two photographs and can be held still; with motion unwanted it neither
 * turns nor advances.
 */
export function Hero() {
  const canAnimate = !prefersReducedMotion()
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (!canAnimate || paused) {
      return
    }

    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % HERO_SLIDES.length)
    }, SLIDE_MS)

    return () => {
      window.clearInterval(timer)
    }
  }, [canAnimate, paused])

  return (
    <section id={SECTION_IDS.home} className={heroClass} aria-label="The invitation">
      {HERO_SLIDES.map((seed, slide) => (
        <div
          key={seed}
          data-testid={`hero-slide-${slide}`}
          data-active={String(slide === index)}
          aria-hidden={slide !== index}
          className={cn(
            heroPhotoClass,
            'transition-opacity duration-1000',
            slide === index ? 'opacity-100' : 'opacity-0',
          )}
          style={{ backgroundImage: `url(${photo(seed, 1920, 1080)})` }}
        />
      ))}
      <div className={heroScrimClass} aria-hidden="true" />

      <div className={heroBodyClass}>
        <div className={containerClass}>
          <div className={discClass} data-testid="hero-disc">
          <span className={cn(discRingClass, canAnimate && 'disc-spin')} aria-hidden="true" />
          <div key={index} className="flex flex-col items-center" data-testid="hero-copy">
            <div className={heroDateRowClass}>
              <span className={heroDashClass} data-testid="hero-dash" aria-hidden="true" />
              <p
                className={cn(heroDateClass, canAnimate && 'copy-rise')}
                style={{ animationDelay: '0.3s' }}
              >
                {HERO_DATE}
              </p>
              <span className={heroDashClass} data-testid="hero-dash" aria-hidden="true" />
            </div>
            <h1
              className={cn(heroNamesClass, canAnimate && 'copy-rise')}
              style={{ animationDelay: '0.5s' }}
            >
              {COUPLE}
            </h1>
            <p
              className={cn(heroTaglineClass, canAnimate && 'copy-rise')}
              style={{ animationDelay: '0.9s' }}
            >
              {HERO_TAGLINE}
            </p>
          </div>
          </div>
        </div>
      </div>

      <button
        type="button"
        className={slideToggleClass}
        aria-label={paused ? SLIDE_PLAY : SLIDE_PAUSE}
        onClick={() => {
          setPaused((current) => !current)
        }}
      >
        {paused ? (
          <Play className={slideGlyphClass} aria-hidden="true" />
        ) : (
          <Pause className={slideGlyphClass} aria-hidden="true" />
        )}
      </button>
    </section>
  )
}
