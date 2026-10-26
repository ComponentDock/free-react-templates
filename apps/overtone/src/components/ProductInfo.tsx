import { cn } from '@free-react-templates/ui'
import { RotateCcw, ShieldCheck, Truck } from 'lucide-react'
import { AddToCart } from './AddToCart'
import { WishlistToggle } from './WishlistToggle'
import {
  COLOURS,
  COLOUR_GROUP,
  DESCRIPTION,
  EYEBROW,
  HEADLINE,
  PRICE,
  RATING,
  TITLE_ID,
  WORDMARK_HREF,
  type Colour,
} from '../data/site'

const PERKS = [
  { Icon: Truck, label: 'Free 2-day shipping' },
  { Icon: RotateCcw, label: '30-day returns' },
  { Icon: ShieldCheck, label: '2-year warranty' },
] as const

interface ProductInfoProps {
  readonly colour: Colour
  readonly onChoose: (colour: Colour) => void
  readonly onAdd: () => void
}

/**
 * The shop column, in the reference's order: eyebrow → headline → rating →
 * price → description → the colour fieldset → the stock line → the buy row →
 * the three perks on a hairline.
 *
 * Every string that changes with the finish is read off the selected `Colour`
 * object rather than looked up from the checked swatch, so renaming a colour
 * cannot desynchronise the caption from the stock line.
 */
export function ProductInfo({ colour, onChoose, onAdd }: ProductInfoProps) {
  const low = /only/i.test(colour.stock)

  return (
    <div className="ot-info">
      <p className="ot-eyebrow">
        <span className="ot-pill">{EYEBROW.pill}</span>
        {EYEBROW.text}
      </p>

      <h1 className="ot-title" id={TITLE_ID}>
        {HEADLINE}
      </h1>

      <p className="ot-rating">
        <span className="ot-stars" aria-hidden="true">
          {RATING.stars}
        </span>
        <span>
          {RATING.score} ·{' '}
          <a href={WORDMARK_HREF} className="ot-rating-link">
            {RATING.reviews}
          </a>
        </span>
      </p>

      <p className="ot-price">
        <span className="ot-now">{PRICE.now}</span>
        <s className="ot-was">
          <span className="ot-sr">{PRICE.wasLabel}</span>
          {PRICE.was}
        </s>
        <span className="ot-save">{PRICE.save}</span>
      </p>

      <p className="ot-desc">{DESCRIPTION}</p>

      <fieldset className="ot-colours">
        <legend className="ot-legend">
          Colour: <strong>{colour.name}</strong>
        </legend>
        <div className="ot-swatches">
          {COLOURS.map((option) => {
            const checked = option.name === colour.name
            return (
              <label key={option.name} className={cn('ot-swatch', checked && 'is-checked')}>
                <input
                  className="ot-radio"
                  type="radio"
                  name={COLOUR_GROUP}
                  value={option.name}
                  checked={checked}
                  onChange={() => onChoose(option)}
                />
                <span className="ot-disc" style={{ background: option.sw }} aria-hidden="true" />
                <span className="ot-ring" aria-hidden="true" />
                <span className="ot-sr">{option.name}</span>
              </label>
            )
          })}
        </div>
      </fieldset>

      {/* The live region wraps the dot and the text; only the text node changes. */}
      <p className={cn('ot-stock', low && 'is-low')} aria-live="polite">
        <span className="ot-stock-dot" aria-hidden="true" />
        {`${colour.name}: ${colour.stock}`}
      </p>

      <div className="ot-buy">
        <AddToCart onAdd={onAdd} />
        <WishlistToggle />
      </div>

      <ul className="ot-perks">
        {PERKS.map(({ Icon, label }) => (
          <li key={label}>
            <Icon size={15} aria-hidden="true" />
            {label}
          </li>
        ))}
      </ul>
    </div>
  )
}
