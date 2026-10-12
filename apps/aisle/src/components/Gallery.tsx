import { useCallback, useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'
import {
  GALLERY_CTA_HREF,
  GALLERY_CTA_LABEL,
  GALLERY_LABEL,
  GALLERY_TILES,
  GALLERY_TITLE,
  LIGHTBOX_CLOSE_LABEL,
  LIGHTBOX_LABEL,
  LIGHTBOX_NEXT_LABEL,
  LIGHTBOX_PREV_LABEL,
  SECTION_IDS,
  type GalleryTile,
} from '../lib/site'
import {
  containerClass,
  galleryCtaClass,
  galleryCtaRowClass,
  galleryGridClass,
  galleryPhotoClass,
  gallerySectionClass,
  galleryTileClass,
  galleryWashClass,
  lightboxCaptionClass,
  lightboxCardClass,
  lightboxClass,
  lightboxCloseClass,
  lightboxGlyphClass,
  lightboxNextClass,
  lightboxPhotoClass,
  lightboxPrevClass,
} from '../lib/styles'
import { BandHeading } from './BandHeading'

/** The design's gallery frames are 600×400; the app's own placeholders keep that shape. */
function photo(seed: string): string {
  return `https://picsum.photos/seed/${seed}/600/400`
}

interface LightboxProps {
  tile: GalleryTile
  position: number
  total: number
  onClose: () => void
  onMove: (step: number) => void
  onClosed: () => void
}

/**
 * The reference's jQuery lightbox, rebuilt: a `rgba(0,0,0,.8)` overlay holding one photograph, its
 * description and a counter, with `Escape` to close, `←`/`→` to walk the six frames, an explicit
 * close control, and focus moved into the dialog on open and handed back to the tile it was opened
 * from when the dialog unmounts.
 */
function Lightbox({ tile, position, total, onClose, onMove, onClosed }: LightboxProps) {
  const focusOnMount = useCallback((node: HTMLDivElement | null) => {
    node?.focus()
  }, [])

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
        return
      }

      if (event.key === 'ArrowRight') {
        onMove(1)
        return
      }

      if (event.key === 'ArrowLeft') {
        onMove(-1)
      }
    }

    document.addEventListener('keydown', onKeyDown)

    return () => {
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [onClose, onMove])

  useEffect(() => onClosed, [onClosed])

  return (
    <div
      ref={focusOnMount}
      className={lightboxClass}
      role="dialog"
      aria-modal="true"
      aria-label={LIGHTBOX_LABEL}
      tabIndex={-1}
    >
      <div className={lightboxCardClass}>
        <button type="button" className={lightboxCloseClass} aria-label={LIGHTBOX_CLOSE_LABEL} onClick={onClose}>
          <X className={lightboxGlyphClass} aria-hidden="true" />
        </button>

        <button
          type="button"
          className={lightboxPrevClass}
          aria-label={LIGHTBOX_PREV_LABEL}
          onClick={() => {
            onMove(-1)
          }}
        >
          <ChevronLeft className={lightboxGlyphClass} aria-hidden="true" />
        </button>

        <img className={lightboxPhotoClass} src={photo(tile.seed)} alt={tile.alt} />

        <button
          type="button"
          className={lightboxNextClass}
          aria-label={LIGHTBOX_NEXT_LABEL}
          onClick={() => {
            onMove(1)
          }}
        >
          <ChevronRight className={lightboxGlyphClass} aria-hidden="true" />
        </button>

        <p className={lightboxCaptionClass}>
          {`${position + 1} / ${total} — ${tile.alt}`}
        </p>
      </div>
    </div>
  )
}

/**
 * The design's six-tile gallery: three across from 768px, two from 576px, each frame a single
 * control that opens the photograph, and the rose-outlined button under the grid.
 */
export function Gallery() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState(0)
  const opener = useRef<HTMLElement | null>(null)

  const restoreFocus = useCallback(() => {
    ;(opener.current as HTMLElement).focus()
  }, [])

  const closeLightbox = useCallback(() => {
    setOpen(false)
  }, [])

  const moveLightbox = useCallback((step: number) => {
    setActive((current) => (current + step + GALLERY_TILES.length) % GALLERY_TILES.length)
  }, [])

  return (
    <section id={SECTION_IDS.gallery} className={gallerySectionClass}>
      <div className={containerClass}>
        <BandHeading title={GALLERY_TITLE} />
        <div className={galleryGridClass}>
          {GALLERY_TILES.map((tile, position) => (
            <button
              key={tile.seed}
              type="button"
              className={galleryTileClass}
              aria-label={`${GALLERY_LABEL}: ${tile.alt}`}
              onClick={(event) => {
                opener.current = event.currentTarget
                setActive(position)
                setOpen(true)
              }}
            >
              <img
                className={galleryPhotoClass}
                src={photo(tile.seed)}
                alt={tile.alt}
                loading={position === 0 ? 'eager' : 'lazy'}
                decoding="async"
              />
              <span className={galleryWashClass} aria-hidden="true" />
            </button>
          ))}
        </div>
        <p className={galleryCtaRowClass}>
          <ButtonLink href={GALLERY_CTA_HREF} className={galleryCtaClass}>
            {GALLERY_CTA_LABEL}
          </ButtonLink>
        </p>
      </div>

      {open && (
        <Lightbox
          tile={GALLERY_TILES[active] as GalleryTile}
          position={active}
          total={GALLERY_TILES.length}
          onClose={closeLightbox}
          onMove={moveLightbox}
          onClosed={restoreFocus}
        />
      )}
    </section>
  )
}
