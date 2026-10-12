import { Expand, X } from 'lucide-react'
import { useCallback, useEffect, useState } from 'react'
import { MOMENTS, MOMENTS_HEADING, MOMENTS_INTRO, photo, SECTION_IDS, type Moment } from '../lib/site'
import {
  containerClass,
  lightboxCaptionClass,
  lightboxCardClass,
  lightboxClass,
  lightboxCloseClass,
  lightboxPhotoClass,
  momentExpandClass,
  momentFrameClass,
  momentOverlayClass,
  momentPhotoClass,
  momentTileClass,
  momentsBandClass,
  momentsGridClass,
  sectionClass,
} from '../lib/styles'
import { SectionTitle } from './SectionTitle'

function Lightbox({ moment, onClose }: { moment: Moment; onClose: () => void }) {
  return (
    <div className={lightboxClass} role="dialog" aria-modal="true" aria-label="Enlarged photograph">
      <div className={lightboxCardClass}>
        <button
          type="button"
          className={lightboxCloseClass}
          aria-label="Close the enlarged photograph"
          onClick={onClose}
        >
          <X aria-hidden="true" className="h-[24px] w-[24px]" />
        </button>
        <img src={photo(moment.photo, 1200, 800)} alt={moment.caption} className={lightboxPhotoClass} />
        <p className={lightboxCaptionClass}>{moment.caption}</p>
      </div>
    </div>
  )
}

/**
 * The moments band: six equal frames across the full width, each covered on hover (and on keyboard
 * focus) by a dark wash and an expand control that opens the photograph at full size. The close
 * control is labelled, and Escape closes the enlarged view as well.
 */
export function Moments() {
  const [active, setActive] = useState<Moment | undefined>(undefined)

  const close = useCallback(() => {
    setActive(undefined)
  }, [])

  useEffect(() => {
    if (active === undefined) {
      return
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActive(undefined)
      }
    }

    document.addEventListener('keydown', onKeyDown)

    return () => {
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [active])

  return (
    <section id={SECTION_IDS.gallery} className={sectionClass} aria-label="Special moments captured">
      <div className={containerClass}>
        <SectionTitle heading={MOMENTS_HEADING} intro={MOMENTS_INTRO} />
      </div>

      <div className={momentsBandClass}>
        <div className={momentsGridClass}>
          {MOMENTS.map((moment) => (
            <div key={moment.photo} className={momentTileClass}>
              <div className={momentFrameClass}>
                <img
                  src={photo(moment.photo, 600, 600)}
                  alt={moment.caption}
                  className={momentPhotoClass}
                  loading="lazy"
                />
                <button
                  type="button"
                  className={momentOverlayClass}
                  aria-label={`Enlarge: ${moment.caption}`}
                  onClick={() => {
                    setActive(moment)
                  }}
                >
                  <Expand aria-hidden="true" className={momentExpandClass} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {active === undefined ? null : <Lightbox moment={active} onClose={close} />}
    </section>
  )
}
