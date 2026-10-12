import { HERO_PHOTO } from '../lib/site'
import { heroClass } from '../lib/styles'

/**
 * The page's first band and its single photographic surface: full-bleed, exactly one
 * viewport tall, covered and centred with no scrim and no call to action of its own.
 * It starts at the bar's bottom edge rather than behind it, because the bar is solid
 * and in the flow — so first paint is one white row of chrome and then one
 * photograph. The six sections the bar declares begin one viewport down, which is
 * what gives the composition the scroll room the design has.
 */
export function Hero() {
  return (
    <section
      id="hero"
      aria-label="Hero band"
      data-testid="hero-band"
      className={heroClass}
      style={{ backgroundImage: `url(${HERO_PHOTO})` }}
    />
  )
}
