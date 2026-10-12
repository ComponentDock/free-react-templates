import { SECTION_IDS, STORY_BODY, STORY_TITLE } from '../lib/site'
import { patternClass, storyBodyClass, storyMeasureClass, storySectionClass } from '../lib/styles'
import { BandHeading } from './BandHeading'

/**
 * The design's patterned white band: the faint concentric rings behind the content at 80%, the
 * script title with its two-rule ornament, and one narrow centred paragraph.
 */
export function Story() {
  return (
    <section id={SECTION_IDS.story} className={storySectionClass}>
      <span className={patternClass} aria-hidden="true" />
      <div className={storyMeasureClass}>
        <BandHeading title={STORY_TITLE} />
        <p className={storyBodyClass}>{STORY_BODY}</p>
      </div>
    </section>
  )
}
