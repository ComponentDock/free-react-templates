import { useCallback, useEffect, useState } from 'react'
import { X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { GALLERY, photo, SECTION_IDS, type GalleryTile } from '../lib/site'
import {
  carouselIconClass,
  galleryDiscClass,
  galleryGlyphClass,
  galleryGridClass,
  galleryHeadClass,
  galleryPhotoClass,
  galleryTileClass,
  galleryWashClass,
  lightboxCaptionClass,
  lightboxCardClass,
  lightboxClass,
  lightboxCloseClass,
  lightboxPhotoClass,
  sectionClass,
  sectionHeadingClass,
  subheadingClass,
} from '../lib/styles'
import { DovesMark } from './DovesMark'

/** The design's keyboard lightbox: one photograph, its caption, and a labelled way out. */
function Lightbox({ tile, onClose }: { tile: GalleryTile; onClose: () => void }) {
  return (
    <div className={lightboxClass} role="dialog" aria-modal="true" aria-label="Photo viewer">
      <div className={lightboxCardClass}>
        <button type="button" className={lightboxCloseClass} onClick={onClose} aria-label="Close the photo viewer">
          <X aria-hidden="true" className={carouselIconClass} />
        </button>
        <img className={lightboxPhotoClass} src={photo(tile.photo, 1200, 900)} alt={tile.alt} />
        <p className={lightboxCaptionClass}>{tile.alt}</p>
      </div>
    </div>
  )
}

/**
 * The gallery: a full-bleed, no-gutter grid of 300px frames. Hovering or focusing one reveals the
 * design's brand wash at 80% and the 70px white disc holding the two-doves mark, and activating it
 * opens the photograph in the lightbox.
 */
export function Gallery() {
  const [open, setOpen] = useState<GalleryTile | null>(null)

  const close = useCallback(() => {
    setOpen(null)
  }, [])

  useEffect(() => {
    if (open === null) {
      return
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        close()
      }
    }

    document.addEventListener('keydown', onKeyDown)

    return () => {
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [open, close])

  return (
    <section
      id={SECTION_IDS.gallery}
      className={cn(sectionClass, 'pb-0 md:pb-0')}
      aria-label="Photo gallery"
    >
      <div className={galleryHeadClass}>
        <span className={subheadingClass}>Gallery</span>
        <h2 className={sectionHeadingClass}>Photo Gallery</h2>
      </div>
      <div className={galleryGridClass}>
        {GALLERY.map((tile) => (
          <button
            key={tile.photo}
            type="button"
            className={galleryTileClass}
            aria-label={`Open photo: ${tile.alt}`}
            onClick={() => {
              setOpen(tile)
            }}
          >
            <img className={galleryPhotoClass} src={photo(tile.photo, 900, 900)} alt={tile.alt} />
            <span className={galleryWashClass} aria-hidden="true" />
            <span className={galleryDiscClass} aria-hidden="true">
              <DovesMark className={galleryGlyphClass} />
            </span>
          </button>
        ))}
      </div>
      {open ? <Lightbox tile={open} onClose={close} /> : null}
    </section>
  )
}
