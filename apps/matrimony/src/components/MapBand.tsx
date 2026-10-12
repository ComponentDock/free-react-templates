import { MAP_LABEL, MAP_SRC, SECTION_IDS } from '../lib/site'
import { mapFrameClass, mapIframeClass, mapSectionClass } from '../lib/styles'

/**
 * The 235px map band. The design fills it with a keyed Google Maps embed and desaturates it; the
 * recreation embeds a keyless OpenStreetMap frame under the same light grayscale filter, so the band
 * looks the same and the page carries no third-party script, no API key and no analytics tag.
 */
export function MapBand() {
  return (
    <section id={SECTION_IDS.contact} className={mapSectionClass} aria-label="Venue map">
      <div className={mapFrameClass}>
        <iframe title={MAP_LABEL} src={MAP_SRC} className={mapIframeClass} loading="lazy" />
      </div>
    </section>
  )
}
