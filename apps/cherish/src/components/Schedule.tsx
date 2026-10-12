import type { ComponentType, CSSProperties } from 'react'
import { Cake, Camera, ChevronLeft, ChevronRight, Church, GlassWater, Music, Utensils } from 'lucide-react'
import { TitleBlock } from './title-block'
import {
  SCHEDULE_BODY,
  SCHEDULE_EVENTS,
  SCHEDULE_EYEBROW,
  SCHEDULE_HEADING,
  type EventKind,
} from '../lib/site'
import { useCarousel } from '../lib/use-carousel'
import {
  containerClass,
  dotClass,
  dotsRowClass,
  eventIconClass,
  eventIconGlyphClass,
  eventTimeClass,
  eventTitleClass,
  scheduleBandClass,
  scheduleItemClass,
  scheduleRailClass,
  scheduleTrackClass,
  scheduleViewportClass,
  sectionAnchorStyle,
  sliderButtonClass,
  sliderControlsClass,
  sliderGlyphClass,
} from '../lib/styles'

/** The glyph each moment of the day carries. */
const EVENT_GLYPHS: Record<EventKind, ComponentType<{ className?: string; 'aria-hidden'?: boolean | 'true' | 'false' }>> = {
  vows: Church,
  drinks: GlassWater,
  lunch: Utensils,
  portraits: Camera,
  dance: Music,
  cake: Cake,
}

/**
 * The day's running order: every moment on one hairline rail, each with a dot that rests on it.
 * The design hands the rail to a carousel plugin that moves on its own; here the only drivers are
 * the prev/next controls and the dots, and both ends wrap round.
 */
export function Schedule() {
  const { index, next, prev, goTo } = useCarousel(SCHEDULE_EVENTS.length)
  const trackStyle = {
    transform: `translateX(calc(-100% / ${SCHEDULE_EVENTS.length} * ${index}))`,
  } as CSSProperties

  return (
    <section
      id="schedule"
      data-testid="schedule"
      aria-labelledby="schedule-heading"
      className={scheduleBandClass}
      style={sectionAnchorStyle}
    >
      <div className={containerClass}>
        <TitleBlock
          eyebrow={SCHEDULE_EYEBROW}
          heading={SCHEDULE_HEADING}
          headingId="schedule-heading"
          lead={SCHEDULE_BODY}
          className="max-w-[62ch]"
        />
      </div>

      <div className={scheduleRailClass}>
        <div className={scheduleViewportClass} data-testid="schedule-viewport">
          <ul className={scheduleTrackClass} style={trackStyle} data-testid="schedule-track">
            {SCHEDULE_EVENTS.map((event) => {
              const Glyph = EVENT_GLYPHS[event.kind]

              return (
                <li key={event.title} className={scheduleItemClass} data-testid="schedule-item">
                  <div className={eventIconClass}>
                    <Glyph className={eventIconGlyphClass} aria-hidden="true" />
                  </div>
                  <span className={eventTimeClass}>{event.time}</span>
                  <h3 className={eventTitleClass}>{event.title}</h3>
                  <p>{event.body}</p>
                </li>
              )
            })}
          </ul>
        </div>

        <ul className={dotsRowClass}>
          {SCHEDULE_EVENTS.map((event, dotIndex) => (
            <li key={event.title}>
              <button
                type="button"
                onClick={() => {
                  goTo(dotIndex)
                }}
                aria-label={`Show ${event.title}`}
                aria-current={dotIndex === index ? 'true' : undefined}
                className={dotClass(dotIndex === index)}
              />
            </li>
          ))}
        </ul>

        <div className={sliderControlsClass}>
          <button
            type="button"
            onClick={prev}
            aria-label="Previous moment"
            className={sliderButtonClass}
          >
            <ChevronLeft className={sliderGlyphClass} aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next moment"
            className={sliderButtonClass}
          >
            <ChevronRight className={sliderGlyphClass} aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  )
}
