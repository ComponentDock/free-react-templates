import { SECTION_IDS, STORY_HEADING, STORY_PARAGRAPHS, STORY_PHOTO, photo } from '../lib/site'
import {
  containerClass,
  storyBandClass,
  storyCaptionClass,
  storyCaptionSprigClass,
  storyCopyClass,
  storyGridClass,
  storyHeadingClass,
  storyOrnamentClass,
  storyPhotoClass,
  storyPhotoImgClass,
  storySprigClass,
} from '../lib/styles'
import { LeafBranch } from './LeafBranch'
import { Sprig } from './Sprig'

/**
 * Our Story: a portrait on the left with a sprig overlapping its lower-left corner, the copy on the
 * right under its own sprig — and, on the widest screens, a pale leaf branch flush with each edge of
 * the band.
 */
export function OurStory() {
  return (
    <section id={SECTION_IDS.story} className={storyBandClass} aria-label={STORY_HEADING}>
      <LeafBranch className={storyOrnamentClass} />
      <LeafBranch className={`${storyOrnamentClass} right-0 scale-x-[-1]`} />

      <div className={containerClass}>
        <div className={storyGridClass}>
          <div className={storyPhotoClass}>
            <img
              src={photo(STORY_PHOTO, 1060, 1250)}
              alt="A pair of ivory shoes set out on the floor the night before"
              className={storyPhotoImgClass}
              loading="lazy"
            />
            <span className={storySprigClass} data-testid="story-photo-sprig">
              <Sprig className="h-full w-full" />
            </span>
          </div>

          <div className={storyCaptionClass}>
            <Sprig className={storyCaptionSprigClass} />
            <h2 className={storyHeadingClass}>{STORY_HEADING}</h2>
            {STORY_PARAGRAPHS.map((paragraph) => (
              <p key={paragraph} className={storyCopyClass}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
