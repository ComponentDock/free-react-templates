import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { ABOUT_SLIDES, SECTION_IDS, SLIDE_NEXT, SLIDE_PREV, type AboutSlide } from '../lib/site'
import {
  aboutControlsClass,
  aboutEmphasisClass,
  aboutFigureClass,
  aboutHeadingClass,
  aboutParagraphClass,
  aboutPhotoClass,
  aboutRowClass,
  aboutSectionClass,
  aboutTextClass,
  containerClass,
  slideCounterClass,
  sliderButtonClass,
  sliderIconClass,
} from '../lib/styles'

const TOTAL = ABOUT_SLIDES.length

/**
 * The two-slide story: the bride's turn, then the groom's, each with its own portrait on the right
 * and the design's own square arrows (drawn as a stacked pair) beneath the copy. The heading keeps
 * the design's shape — a thin line whose last word steps up to semibold.
 */
export function About() {
  const [index, setIndex] = useState(0)
  const slide = ABOUT_SLIDES[index] as AboutSlide

  const goPrev = () => {
    setIndex((current) => (current + TOTAL - 1) % TOTAL)
  }

  const goNext = () => {
    setIndex((current) => (current + 1) % TOTAL)
  }

  return (
    <section id={SECTION_IDS.about} className={aboutSectionClass} aria-label="About the couple">
      <div className={containerClass}>
        <div className={aboutRowClass}>
          <div className={aboutTextClass}>
            <h2 className={aboutHeadingClass}>
              {slide.lead} <span className={aboutEmphasisClass}>{slide.emphasis}</span>
            </h2>

            {slide.paragraphs.map((text) => (
              <p key={text} className={aboutParagraphClass}>
                {text}
              </p>
            ))}

            <div className={aboutControlsClass}>
              <button type="button" className={sliderButtonClass} aria-label={SLIDE_PREV} onClick={goPrev}>
                <ChevronUp aria-hidden="true" className={sliderIconClass} />
              </button>
              <button type="button" className={sliderButtonClass} aria-label={SLIDE_NEXT} onClick={goNext}>
                <ChevronDown aria-hidden="true" className={sliderIconClass} />
              </button>
              <p className={cn(slideCounterClass)} data-testid="about-counter">
                {index + 1} / {TOTAL}
              </p>
            </div>
          </div>

          <figure className={aboutFigureClass}>
            <img className={aboutPhotoClass} src={slide.src} alt={slide.alt} />
          </figure>
        </div>
      </div>
    </section>
  )
}
