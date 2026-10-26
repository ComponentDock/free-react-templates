import { HEADLINE_ID, HERO_ID } from '../data/site'
import { Headline } from './Headline'
import { HeroFoot } from './HeroFoot'
import { Kicker } from './Kicker'
import { RingBadge } from './RingBadge'

/**
 * One section, one screen. `pw-head` is a flex item of the hero column, which is
 * what keeps the `h1`'s top and bottom margins *inside* its box — turn it into a
 * plain block and the margins collapse out, shrinking the head by 108 px and
 * dragging the badge up with it.
 */
export function Hero() {
  return (
    <section id={HERO_ID} className="pw-hero" aria-labelledby={HEADLINE_ID}>
      <Kicker />

      <div className="pw-head">
        <Headline />
        <RingBadge />
      </div>

      <HeroFoot />
    </section>
  )
}
