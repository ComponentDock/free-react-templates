import { HERO_PHOTO } from '../lib/site'

/**
 * The page's single photographic surface: an empty, frame-filling cover band
 * below the header. No copy, no scrim, no overlay — the reference's band is the
 * photograph and nothing else.
 */
export function Hero() {
  return (
    <section
      aria-label="Hero band"
      className="h-screen w-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${HERO_PHOTO})` }}
    />
  )
}
