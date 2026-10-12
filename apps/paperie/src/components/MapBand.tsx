import { MAP_CAPTION, MAP_SRC, MAP_TITLE, SECTION_IDS } from '../lib/site'
import { mapCaptionClass, mapFrameClass } from '../lib/styles'

/**
 * The location band: a full-width map of the orchard and its lane, embedded without a key and loaded
 * only as it approaches the viewport.
 */
export function MapBand() {
  return (
    <section id={SECTION_IDS.location} aria-label="Our location">
      <iframe
        src={MAP_SRC}
        title={MAP_TITLE}
        className={mapFrameClass}
        loading="lazy"
        sandbox="allow-scripts"
        referrerPolicy="no-referrer-when-downgrade"
      />
      <p className={mapCaptionClass}>{MAP_CAPTION}</p>
    </section>
  )
}
