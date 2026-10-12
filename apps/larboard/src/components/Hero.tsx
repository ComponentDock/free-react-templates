import { HERO_PHOTO, PANELS } from '../lib/site'
import { AnchorPanel } from './AnchorPanel'

/**
 * The page's only content band, and its single photographic surface: a full-bleed
 * cover band that the transparent header floats over. The first frame is the
 * photograph alone — wordmark and hamburger and nothing else — because the
 * materialised targets start one viewport down, inside the same band. There is no
 * scrim over the image and no artificially padded body: the band's own height is
 * what makes the page scroll.
 */
export function Hero() {
  return (
    <section
      id="hero"
      aria-label="Hero band"
      className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${HERO_PHOTO})` }}
    >
      <div
        data-testid="band-panels"
        className="mx-auto grid w-full grid-cols-1 gap-6 px-[15px] pt-[100vh] pb-24 sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] lg:grid-cols-2 xl:max-w-[1140px]"
      >
        {PANELS.map((panel) => (
          <AnchorPanel key={panel.id} panel={panel} />
        ))}
      </div>
    </section>
  )
}
