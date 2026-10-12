import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { GREETINGS, photo, SECTION_IDS } from '../lib/site'
import { prefersReducedMotion } from '../lib/motion'
import {
  carouselClass,
  carouselControlClass,
  carouselControlsClass,
  carouselIconClass,
  carouselItemActiveClass,
  carouselItemClass,
  carouselItemInactiveClass,
  carouselPauseClass,
  carouselTrackClass,
  containerClass,
  greetingAvatarClass,
  greetingBlurbClass,
  greetingCardClass,
  greetingDiscClass,
  greetingGlyphClass,
  greetingNameClass,
  greetingRoleClass,
  greetingsBandClass,
  sectionClass,
} from '../lib/styles'
import { DoveMark } from './DovesMark'
import { SectionHeading } from './SectionHeading'

/** How long a guest message holds the stage before the next one takes it. */
export const CARD_INTERVAL_MS = 6000

/**
 * Greetings: the light band's carousel of guest messages. Every card is a white card with the
 * design's 40px brand disc peeking above its top-left corner, an avatar in the 5px pale frame and a
 * name over a role. The stage advances itself, pauses on request, and stays still for a visitor who
 * asks for reduced motion; the arrows and the pause control are ordinary buttons, so the whole
 * carousel is keyboard-operable.
 */
export function Greetings() {
  const reduce = prefersReducedMotion()
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused || reduce) {
      return
    }

    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % GREETINGS.length)
    }, CARD_INTERVAL_MS)

    return () => {
      window.clearInterval(id)
    }
  }, [paused, reduce])

  const go = (delta: number) => {
    setIndex((current) => (current + delta + GREETINGS.length) % GREETINGS.length)
  }

  return (
    <section
      id={SECTION_IDS.greeting}
      className={cn(greetingsBandClass, sectionClass)}
      aria-label="Guest messages"
    >
      <div className={containerClass}>
        <SectionHeading subheading="Greetings" title="Sweet Messages" />
        <div
          className={carouselClass}
          role="group"
          aria-roledescription="carousel"
          aria-label="Messages from our guests"
        >
          <ul
            className={carouselTrackClass}
            style={{ transform: `translateX(-${index * 100}%)` }}
            data-testid="carousel-track"
          >
            {GREETINGS.map((card, position) => (
              <li
                key={card.name}
                className={cn(
                  carouselItemClass,
                  position === index ? carouselItemActiveClass : carouselItemInactiveClass,
                )}
                aria-hidden={position === index ? undefined : 'true'}
                data-active={position === index}
              >
                <div className={greetingCardClass}>
                  <span className={greetingDiscClass} aria-hidden="true">
                    <DoveMark className={greetingGlyphClass} />
                  </span>
                  <img className={greetingAvatarClass} src={photo(card.photo, 160, 160)} alt={card.alt} />
                  <p className={greetingBlurbClass}>{card.blurb}</p>
                  <h3 className={greetingNameClass}>{card.name}</h3>
                  <p className={greetingRoleClass}>{card.role}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className={carouselControlsClass}>
          <button
            type="button"
            className={carouselControlClass}
            aria-label="Previous message"
            onClick={() => {
              go(-1)
            }}
          >
            <ChevronLeft aria-hidden="true" className={carouselIconClass} />
          </button>
          <button
            type="button"
            className={carouselPauseClass}
            aria-pressed={paused}
            onClick={() => {
              setPaused((current) => !current)
            }}
          >
            {paused ? 'Play' : 'Pause'}
          </button>
          <button
            type="button"
            className={carouselControlClass}
            aria-label="Next message"
            onClick={() => {
              go(1)
            }}
          >
            <ChevronRight aria-hidden="true" className={carouselIconClass} />
          </button>
        </div>
      </div>
    </section>
  )
}
