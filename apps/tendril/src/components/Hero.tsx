import { HERO_ID, LEDE, STREAK_NOTE } from '../data/site'
import { Facts } from './Facts'
import { Headline } from './Headline'
import { PhoneMock } from './PhoneMock'
import { Rating } from './Rating'
import { StoreButtons } from './StoreButtons'

/**
 * One section, one screen: the copy column on the left and the product shot on
 * the right, with the section labelled by its own headline. The streak note is
 * screen-reader copy that mirrors the decorative toast, so the claim survives
 * with the toast hidden.
 */
export function Hero() {
  return (
    <section className="td-hero" aria-labelledby={HERO_ID}>
      <div className="td-copy">
        <Rating />
        <Headline />
        <p className="td-sub">{LEDE}</p>
        <p className="td-sr">{STREAK_NOTE}</p>
        <StoreButtons />
        <Facts />
      </div>

      <PhoneMock />
    </section>
  )
}
