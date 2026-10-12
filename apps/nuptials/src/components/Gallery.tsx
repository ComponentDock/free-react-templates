import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import {
  GALLERY,
  GALLERY_LEAD,
  GALLERY_NEXT,
  GALLERY_PREV,
  GALLERY_TITLE,
  SECTION_IDS,
} from '../lib/site'
import {
  containerClass,
  galleryControlsClass,
  galleryCounterClass,
  galleryPhotoClass,
  gallerySectionClass,
  gallerySlideClass,
  gallerySlideOpacity,
  galleryTrackClass,
  galleryViewportClass,
  sectionHeadingClass,
  sectionLeadClass,
  sliderButtonClass,
  sliderIconClass,
} from '../lib/styles'

const TOTAL = GALLERY.length

/**
 * The six frames the design runs as a slider — no filters, no grid: every photograph stays in the
 * track, the track slides a frame at a time, and the counters and arrows sit under it. The row that
 * is off-frame steps back to 60% so a reduced-motion visitor still sees which frame is current.
 */
export function Gallery() {
  const [index, setIndex] = useState(0)

  const goPrev = () => {
    setIndex((current) => (current + TOTAL - 1) % TOTAL)
  }

  const goNext = () => {
    setIndex((current) => (current + 1) % TOTAL)
  }

  return (
    <section id={SECTION_IDS.gallery} className={gallerySectionClass} aria-label="Photo gallery">
      <div className={containerClass}>
        <h2 className={sectionHeadingClass}>{GALLERY_TITLE}</h2>
        <p className={sectionLeadClass}>{GALLERY_LEAD}</p>

        <div className={galleryViewportClass}>
          <ul
            data-testid="gallery-track"
            className={galleryTrackClass}
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {GALLERY.map((tile, position) => (
              <li
                key={tile.src}
                data-active={position === index}
                className={cn(gallerySlideClass, gallerySlideOpacity(position === index))}
              >
                <img className={galleryPhotoClass} src={tile.src} alt={tile.alt} />
              </li>
            ))}
          </ul>
        </div>

        <div className={galleryControlsClass}>
          <button type="button" className={sliderButtonClass} aria-label={GALLERY_PREV} onClick={goPrev}>
            <ChevronLeft aria-hidden="true" className={sliderIconClass} />
          </button>
          <p className={galleryCounterClass} data-testid="gallery-counter">
            {index + 1} / {TOTAL}
          </p>
          <button type="button" className={sliderButtonClass} aria-label={GALLERY_NEXT} onClick={goNext}>
            <ChevronRight aria-hidden="true" className={sliderIconClass} />
          </button>
        </div>
      </div>
    </section>
  )
}
