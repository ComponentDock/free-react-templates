import { REGISTRY, REGISTRY_HEADING, REGISTRY_INTRO, SECTION_IDS, type MarkShape } from '../lib/site'
import {
  containerClass,
  registryItemClass,
  registryMarkClass,
  registryNameClass,
  registryRowClass,
  sectionClass,
} from '../lib/styles'
import { SectionTitle } from './SectionTitle'

/** Five invented marks — no registry's own artwork is reproduced. */
const MARK_PATHS: Record<MarkShape, string> = {
  rings: 'M6 20a6 6 0 1 0 12 0 6 6 0 1 0-12 0M14 20a6 6 0 1 0 12 0 6 6 0 1 0-12 0',
  leaf: 'M16 4c6 5 8 13 0 24C8 17 10 9 16 4ZM16 4v24',
  kettle: 'M8 14h16v9a5 5 0 0 1-5 5h-6a5 5 0 0 1-5-5v-9ZM12 14V9a4 4 0 0 1 8 0v5M24 17h4',
  wave: 'M4 14c4-4 8 4 12 0s8 4 12 0M4 22c4-4 8 4 12 0s8 4 12 0',
  star: 'M16 4l3.6 7.6 8.4 1.1-6.1 5.8 1.5 8.3L16 23l-7.4 3.8 1.5-8.3L4 12.7l8.4-1.1L16 4Z',
}

function RegistryMark({ shape }: { shape: MarkShape }) {
  return (
    <svg
      viewBox="0 0 32 32"
      aria-hidden="true"
      focusable="false"
      className={registryMarkClass}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d={MARK_PATHS[shape]} />
    </svg>
  )
}

/**
 * The gift registry: five houses, each a mark and a name, resting at half strength and coming up to
 * full on hover. The design runs its row as an auto-scrolling carousel; this one is a plain wrapping
 * row so no carousel machinery has to be carried into the page.
 */
export function GiftRegistry() {
  return (
    <section id={SECTION_IDS.registry} className={sectionClass} aria-label="Gift registry">
      <div className={containerClass}>
        <SectionTitle heading={REGISTRY_HEADING} intro={REGISTRY_INTRO} />

        <ul className={registryRowClass}>
          {REGISTRY.map((item) => (
            <li key={item.name} className={registryItemClass}>
              <RegistryMark shape={item.shape} />
              <span className={registryNameClass}>{item.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
