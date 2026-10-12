import { Plus, X } from 'lucide-react'
import { useCallback, useEffect, useState } from 'react'
import { MEMORIES, MEMORIES_HEADING, SECTION_IDS, photo, type Memory } from '../lib/site'
import {
  containerClass,
  lightboxCaptionClass,
  lightboxCardClass,
  lightboxClass,
  lightboxCloseClass,
  lightboxPhotoClass,
  memoriesBandClass,
  memoriesGridClass,
  memoriesOrnamentClass,
  memoryButtonClass,
  memoryFrameClass,
  memoryPhotoClass,
  memoryPlusClass,
  memoryTileClass,
  memoryVeilClass,
} from '../lib/styles'
import { LeafBranch } from './LeafBranch'
import { SectionTitle } from './SectionTitle'

function Lightbox({ memory, onClose }: { memory: Memory; onClose: () => void }) {
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
        <img src={photo(memory.photo, 1200, 1480)} alt={memory.caption} className={lightboxPhotoClass} />
        <p className={lightboxCaptionClass}>{memory.caption}</p>
      </div>
    </div>
  )
}

/**
 * Our Memories: six photographs edge to edge in a three-across, two-row grid. Each tile is covered
 * on hover and on keyboard focus by a dark wash with a ringed plus control that opens the frame at
 * full size; the enlarged view closes on its own control or on Escape.
 */
export function Memories() {
  const [active, setActive] = useState<Memory | undefined>(undefined)

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
    <section id={SECTION_IDS.gallery} className={memoriesBandClass} aria-label={MEMORIES_HEADING}>
      <LeafBranch className={memoriesOrnamentClass} />
      <LeafBranch className={`${memoriesOrnamentClass} right-0 scale-x-[-1]`} />

      <div className={containerClass}>
        <SectionTitle heading={MEMORIES_HEADING} />
      </div>

      <div className={containerClass}>
        <div className={memoriesGridClass}>
        {MEMORIES.map((memory) => (
          <div key={memory.photo} className={memoryTileClass} data-testid="memory-tile">
            <div className={memoryFrameClass}>
              <img
                src={photo(memory.photo, 780, 964)}
                alt={memory.caption}
                className={memoryPhotoClass}
                loading="lazy"
              />
              <span className={memoryVeilClass} aria-hidden="true">
                <Plus className={memoryPlusClass} />
              </span>
              <button
                type="button"
                className={memoryButtonClass}
                aria-label={`Enlarge: ${memory.caption}`}
                onClick={() => {
                  setActive(memory)
                }}
              />
            </div>
            </div>
          ))}
        </div>
      </div>

      {active === undefined ? null : <Lightbox memory={active} onClose={close} />}
    </section>
  )
}
