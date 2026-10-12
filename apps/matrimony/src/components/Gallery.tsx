import { useCallback, useEffect, useState } from 'react'
import { Plus, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { GALLERY, SECTION_IDS, type GalleryTile } from '../lib/site'
import {
  containerClass,
  galleryCaptionClass,
  galleryCaptionWrapClass,
  galleryCornerClass,
  galleryGridClass,
  galleryPhotoClass,
  galleryPlusClass,
  galleryPlusIconClass,
  gallerySectionClass,
  galleryTileClass,
  galleryWashClass,
  lightboxCaptionClass,
  lightboxCardClass,
  lightboxClass,
  lightboxCloseClass,
  lightboxCloseIconClass,
  lightboxPhotoClass,
} from '../lib/styles'
import { Flourish } from './Flourish'

/**
 * The design's keyboard viewer: one photograph, its caption and a labelled way out. The source opens
 * it through a popup bundle; a dialog-shaped panel with `Escape` wired in does the same job with no
 * dependency, and the tile that opened it stays the focused element behind it.
 */
function Lightbox({ tile, onClose }: { tile: GalleryTile; onClose: () => void }) {
  return (
    <div className={lightboxClass} role="dialog" aria-modal="true" aria-label="Photo viewer">
      <div className={lightboxCardClass}>
        <button
          type="button"
          className={lightboxCloseClass}
          onClick={onClose}
          aria-label="Close the photo viewer"
        >
          <X aria-hidden="true" className={lightboxCloseIconClass} />
        </button>
        <img className={lightboxPhotoClass} src={tile.full} alt={tile.alt} />
        <p className={lightboxCaptionClass}>{tile.caption}</p>
      </div>
    </div>
  )
}

/**
 * The gallery: a heading-less band of four 565px tiles in the design's 4/8/8/4 run, reflowing to a
 * single column on small screens. Hovering or focusing a tile brings up the scarlet wash, the 24px
 * caption and the white-bordered plus disc; activating it opens the photograph in the viewer.
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
    <section id={SECTION_IDS.gallery} className={gallerySectionClass} aria-label="Photo gallery">
      <div className={containerClass}>
        <div className={galleryGridClass}>
          {GALLERY.map((tile) => (
            <button
              key={tile.caption}
              type="button"
              data-testid={`tile-${tile.caption.replace(' ', '-')}`}
              className={cn(galleryTileClass, tile.span)}
              aria-label={`Open photo: ${tile.alt}`}
              onClick={() => {
                setOpen(tile)
              }}
            >
              <img className={galleryPhotoClass} src={tile.src} alt={tile.alt} />
              <span className={galleryWashClass} aria-hidden="true" />
              <span className={galleryCaptionWrapClass}>
                <span className={galleryCaptionClass}>{tile.caption}</span>
                <span className={galleryPlusClass} aria-hidden="true">
                  <Plus className={galleryPlusIconClass} />
                </span>
                <Flourish variant="corner" className={galleryCornerClass} />
              </span>
            </button>
          ))}
        </div>
      </div>
      {open ? <Lightbox tile={open} onClose={close} /> : null}
    </section>
  )
}
