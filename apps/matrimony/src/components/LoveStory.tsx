import {
  SECTION_IDS,
  STORY_PANEL_PARAGRAPHS,
  STORY_PANEL_TITLE,
  STORY_PHOTO,
  STORY_SUBTEXT,
  STORY_TITLE,
} from '../lib/site'
import {
  containerClass,
  storyColumnClass,
  storyPanelClass,
  storyPanelTextClass,
  storyPanelTitleClass,
  storyPhotoClass,
  storyRowClass,
  storySectionClass,
  storyTextClass,
} from '../lib/styles'
import { SectionHeading } from './SectionHeading'

/**
 * The love story band: the centred title block, then the design's two uneven columns — the red
 * damask panel on the left with its text inset from the panel's own edge, and the photograph on the
 * right hung 51px below and 30px left of the panel so the two overlap on desktop (the offset resets
 * and the columns stack once the viewport is too narrow to hold them side by side).
 */
export function LoveStory() {
  return (
    <section id={SECTION_IDS.story} className={storySectionClass} aria-label="Our love story">
      <div className={containerClass}>
        <SectionHeading title={STORY_TITLE} subtext={STORY_SUBTEXT} />
        <div className={storyRowClass}>
          <div className={storyColumnClass}>
            <div className={storyPanelClass}>
              <div className={storyTextClass}>
                <h3 className={storyPanelTitleClass}>{STORY_PANEL_TITLE}</h3>
                {STORY_PANEL_PARAGRAPHS.map((line) => (
                  <p key={line} className={storyPanelTextClass}>
                    {line}
                  </p>
                ))}
              </div>
            </div>
          </div>
          <div className={storyColumnClass}>
            <img
              className={storyPhotoClass}
              src={STORY_PHOTO}
              alt="Someone standing on a gravel path where the moor begins"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
