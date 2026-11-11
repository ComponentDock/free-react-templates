import { STAY_CARD } from '../data/site'

/** A placeholder photograph — seeded, portrait, and never the reference asset. */
export const PHOTO = {
  src: 'https://picsum.photos/seed/alpine/900/960',
  width: 900,
  height: 960,
  alt: 'A wooden jetty running out over still water under a wide sky',
}

/**
 * The framed photograph with the stay card parked inside it. The card is
 * positioned against the `figure`, not the image: the figure stretches to the
 * copy column's height while the photograph is `clamp(380px, 58vh, 600px)`, so
 * the card's `top: 28` measures from the row's top edge.
 */
export function HeroMedia() {
  return (
    <figure className="lk-media">
      <img
        className="lk-photo"
        src={PHOTO.src}
        width={PHOTO.width}
        height={PHOTO.height}
        alt={PHOTO.alt}
        fetchPriority="high"
        decoding="sync"
      />
      <figcaption className="lk-card">
        <span className="lk-card-top">
          <span>{STAY_CARD.title}</span>
          <span className="lk-card-rating" aria-label={STAY_CARD.ratingLabel}>
            ★ {STAY_CARD.rating}
          </span>
        </span>
        <span className="lk-card-place">{STAY_CARD.place}</span>
        <span className="lk-card-price">
          <strong>{STAY_CARD.price}</strong> {STAY_CARD.suffix}
        </span>
      </figcaption>
    </figure>
  )
}
