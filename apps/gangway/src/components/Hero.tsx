import { HERO_PHOTO } from '../lib/site'

/**
 * The page's first band and its single photographic surface: full-bleed, exactly one
 * viewport tall, covered and centred with no scrim and no call to action of its own —
 * the transparent bar floats on top of it, so first paint is one photograph plus one
 * row of chrome. The sections the bar declares start one viewport down, which is what
 * gives the composition the scroll room the design has.
 */
export function Hero() {
  return (
    <section
      id="hero"
      aria-label="Hero band"
      className="relative h-screen w-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${HERO_PHOTO})` }}
    />
  )
}
