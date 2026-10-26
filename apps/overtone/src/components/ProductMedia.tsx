import { cn } from '@free-react-templates/ui'
import { BADGES, type Colour } from '../data/site'

interface ProductMediaProps {
  readonly colour: Colour
  /** True for the 180 ms the photograph is faded out before its `src` swaps. */
  readonly swapping: boolean
}

/**
 * The 5:4 frame with the photograph, the colour pill in its top-left corner and
 * the three-chip spec strip along its bottom edge. The frame's `#1c1d21` ground
 * is what shows through while the photo fades, so the swap reads as a change of
 * finish rather than a blank frame.
 */
export function ProductMedia({ colour, swapping }: ProductMediaProps) {
  return (
    <div className="ot-media">
      <figure className={cn('ot-frame', swapping && 'is-swapping')}>
        <img
          className="ot-img"
          src={colour.src}
          alt={colour.alt}
          width={900}
          height={600}
          fetchPriority="high"
        />
        <figcaption className="ot-caption">
          <span className="ot-caption-dot" style={{ background: colour.sw }} aria-hidden="true" />
          {colour.name}
        </figcaption>
      </figure>

      <ul className="ot-badges" aria-label="Highlights">
        {BADGES.map((badge) => (
          <li key={badge.label}>
            <strong>{badge.value}</strong>
            <span>{badge.label}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
