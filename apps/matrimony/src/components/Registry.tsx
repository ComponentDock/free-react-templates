import { REGISTRY_MARKS, REGISTRY_SUBTEXT, REGISTRY_TITLE, SECTION_IDS } from '../lib/site'
import {
  containerClass,
  registryCardClass,
  registryMarkClass,
  registryNameClass,
  registrySectionClass,
  registryStripClass,
} from '../lib/styles'
import { SectionHeading } from './SectionHeading'

/**
 * The registry strip: the centred title block over six cards, each carrying a neutral mark drawn
 * inline and its own invented house name. The design runs a logo carousel of its partners there; the
 * recreation keeps the scale and the six-up run — a single row from the design's 992px tier up, a
 * scroll-snapping row below it — and copies none of the logos.
 */
export function Registry() {
  return (
    <section id={SECTION_IDS.registry} className={registrySectionClass} aria-label="Registry gift">
      <div className={containerClass}>
        <SectionHeading title={REGISTRY_TITLE} subtext={REGISTRY_SUBTEXT} />
        <ul className={registryStripClass}>
          {REGISTRY_MARKS.map((mark) => (
            <li key={mark.name} className={registryCardClass}>
              <svg
                className={registryMarkClass}
                viewBox="0 0 48 48"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinejoin="round"
                aria-hidden="true"
                focusable="false"
              >
                <path d={mark.path} />
              </svg>
              <span className={registryNameClass}>{mark.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
