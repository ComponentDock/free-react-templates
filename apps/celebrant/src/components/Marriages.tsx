import { useCallback, useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { prefersReducedMotion } from '../lib/motion'
import { MARRIAGES_TITLE, SECTION_IDS, SLIDES, SLIDE_INTERVAL_MS, type Slide } from '../lib/site'
import {
  bandClass,
  containerClass,
  dotClass,
  dotItemClass,
  dotsClass,
  marriageCaptionClass,
  marriageCaptionInnerClass,
  marriageCoupleClass,
  marriageDateClass,
  marriagePanelClass,
  marriagePhotoClass,
  marriageSlideClass,
  marriageStageClass,
  marriageStoryClass,
  marriageWrapClass,
  sliderArrowClass,
  sliderNextClass,
  sliderPrevClass,
} from '../lib/styles'
import { SectionTitle } from './SectionTitle'

const MARRIAGES_LABEL = 'Couples I have joined'

/**
 * The band of couples: one 500px photograph at a time on the design's mint panel, its date line,
 * the couple's names and a line of the story beneath, with circular white arrows at the sides and a
 * dot per couple under the caption. It steps on every six seconds, and never under reduced motion.
 */
export function Marriages() {
  const [index, setIndex] = useState(0)
  const total = SLIDES.length

  const advance = useCallback(() => {
    setIndex((current) => (current + 1) % total)
  }, [total])

  const previous = useCallback(() => {
    setIndex((current) => (current - 1 + total) % total)
  }, [total])

  useEffect(() => {
    if (prefersReducedMotion()) {
      return
    }

    const timer = window.setInterval(advance, SLIDE_INTERVAL_MS)

    return () => {
      window.clearInterval(timer)
    }
  }, [advance])

  const slide = SLIDES[index] as Slide

  return (
    <section id={SECTION_IDS.marriages} aria-label={MARRIAGES_LABEL} className={bandClass}>
      <div className={containerClass}>
        <SectionTitle roomy={false}>{MARRIAGES_TITLE}</SectionTitle>

        <div className={marriageWrapClass}>
          <div data-testid="marriage-panel" aria-hidden="true" className={marriagePanelClass} />

          <div className={marriageStageClass}>
            <div className={marriageSlideClass}>
              <div
                data-testid="marriage-photo"
                aria-hidden="true"
                className={marriagePhotoClass}
                style={{ backgroundImage: `url(${slide.photo})` }}
              />

              <div className={marriageCaptionClass}>
                <div className={marriageCaptionInnerClass}>
                  <p className={marriageDateClass}>{slide.date}</p>
                  <h3 data-testid="marriage-couple" className={marriageCoupleClass}>
                    {slide.couple}
                  </h3>
                  <p className={marriageStoryClass}>{slide.story}</p>
                </div>
              </div>
            </div>

            <ul className={dotsClass}>
              {SLIDES.map((entry, position) => (
                <li key={entry.couple} className={dotItemClass}>
                  <button
                    type="button"
                    className={dotClass(position === index)}
                    aria-label={`Show ${entry.couple}`}
                    aria-current={position === index ? 'true' : undefined}
                    onClick={() => {
                      setIndex(position)
                    }}
                  />
                </li>
              ))}
            </ul>
          </div>

          <button type="button" aria-label="Previous couple" className={sliderPrevClass} onClick={previous}>
            <ChevronLeft className={sliderArrowClass} aria-hidden="true" />
          </button>
          <button type="button" aria-label="Next couple" className={sliderNextClass} onClick={advance}>
            <ChevronRight className={sliderArrowClass} aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  )
}
