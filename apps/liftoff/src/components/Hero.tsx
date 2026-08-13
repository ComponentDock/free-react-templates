import { ButtonLink } from '@free-react-templates/ui'
import { hero } from '../data'

/** Hero (reference `.site-blocks-cover`): full-height white section with the
 *  left text block (900-weight headline, gray subtext, teal pill CTA) and an
 *  illustration absolutely positioned at the right edge (in-flow above the
 *  text on mobile). */
export function Hero() {
  return (
    <section id="home-section" aria-label="Hero" className="relative min-h-[600px] overflow-hidden">
      <img
        src={hero.image}
        alt=""
        aria-hidden="true"
        className="relative mx-auto mb-8 h-auto w-full max-w-md lg:absolute lg:top-1/2 lg:right-0 lg:mb-0 lg:max-w-lg lg:-translate-y-1/2 lg:translate-x-[30%]"
      />
      <div className="relative mx-auto max-w-7xl px-4 pb-16 lg:px-8 lg:pt-24">
        <div className="max-w-lg lg:max-w-md">
          <h1 className="font-heading text-5xl font-black leading-tight text-ink lg:text-[3.5rem]">
            {hero.headline}
          </h1>
          <p className="mt-5 mb-8 text-lg text-muted">{hero.subtext}</p>
          <ButtonLink
            href="#features-section"
            className="rounded-full border-2 border-brand bg-brand px-[30px] py-3 text-base font-medium text-white shadow-[0_4px_20px_-5px_rgba(0,210,181,0.4)] transition-colors hover:bg-transparent hover:text-ink"
          >
            {hero.cta}
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
