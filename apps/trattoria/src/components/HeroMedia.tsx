import { PHOTO } from '../data/site'

/**
 * The ground layer: one decorative photograph that covers the viewport and is
 * pushed in slowly. It is `-z-20` and `alt=""` — the headline carries the
 * meaning, the plate is atmosphere — but it keeps its declared 1400 × 933 so
 * nothing shifts while it loads.
 *
 * The wash that holds it back is the shell's `::before` (see `index.css`): three
 * layers of one pseudo-element, two above 861 and one below, so no component
 * owns a stacking context the photograph could escape.
 */
export function HeroMedia() {
  return (
    <img
      className="tt-media"
      src={PHOTO.src}
      width={PHOTO.width}
      height={PHOTO.height}
      alt=""
      fetchPriority="high"
    />
  )
}
