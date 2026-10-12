import { HERO_PHOTO } from '../lib/site'

/**
 * The page's first band and its single photographic surface: full-bleed, exactly one
 * viewport tall, covered and centred with no scrim — the transparent bar floats on
 * top of it, so first paint is the photograph plus one row of chrome and nothing
 * else. The sections the menu declares start one viewport down, which is what gives
 * the composition the scroll room the original has.
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
