import { ButtonLink, cn } from '@free-react-templates/ui'
import { photo, SECTION_IDS, STORY_CTA, STORY_DATE, STORY_HEADING, STORY_NAMES, STORY_VENUE } from '../lib/site'
import {
  containerClass,
  mainButtonClass,
  sectionClass,
  storyFrameClass,
  storyFrameOrnamentClass,
  storyGridClass,
  storyHeadingClass,
  storyMetaClass,
  storyPhotoClass,
  storyTextClass,
} from '../lib/styles'
import { Ornament } from './Ornament'

const LEFT_ALT = 'Two frames propped on a windowsill beside a folded linen runner'
const RIGHT_ALT = 'A close-up of a hand-written place card resting on a set table'

/**
 * The invitation band: an ornate photograph on each side of a centred block that carries the
 * heading, the date, the names and the venue, and the square pink button into the story itself.
 */
export function Story() {
  return (
    <section id={SECTION_IDS.story} className={cn(sectionClass, 'bg-white')} aria-label="Cordially invited">
      <div className={containerClass}>
        <div className={storyGridClass}>
          <div className={storyFrameClass}>
            <img
              src={photo('trousseau-2', 700, 900)}
              alt={LEFT_ALT}
              className={storyPhotoClass}
              loading="lazy"
            />
            <Ornament className={cn(storyFrameOrnamentClass, 'mt-[15px]')} />
          </div>

          <div className={storyTextClass}>
            <h3 className={storyHeadingClass}>{STORY_HEADING}</h3>
            <p className={storyMetaClass}>
              <span className="block">{STORY_DATE}</span>
              <span className="block">{STORY_NAMES}</span>
              <span className="block">{STORY_VENUE}</span>
            </p>
            <ButtonLink href="#journey" className={mainButtonClass}>
              {STORY_CTA}
            </ButtonLink>
          </div>

          <div className={storyFrameClass}>
            <img
              src={photo('trousseau-3', 700, 900)}
              alt={RIGHT_ALT}
              className={storyPhotoClass}
              loading="lazy"
            />
            <Ornament className={cn(storyFrameOrnamentClass, 'mt-[15px]')} />
          </div>
        </div>
      </div>
    </section>
  )
}
