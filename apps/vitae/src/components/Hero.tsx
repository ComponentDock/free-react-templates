import { ButtonLink } from '@free-react-templates/ui'
import { hero } from '../data'

/** 100vh light hero (#f8f9fa): "I'm Ben Carson" serif headline + lead +
 *  green pill "Portfolio" button, with a large portrait bleeding off the
 *  right edge (right: -5% desktop, -25% below 992px). */
export function Hero() {
  return (
    <section
      id="home-section"
      data-testid="hero"
      className="relative flex min-h-[600px] items-center overflow-hidden bg-light md:h-screen"
    >
      <div className="relative z-10 mx-auto w-full max-w-6xl px-4">
        <div className="max-w-lg">
          <h1 className="text-5xl text-ink md:text-[3rem]">{hero.heading}</h1>
          <p className="mt-4 text-[1.3rem] text-lead">{hero.lead}</p>
          <ButtonLink
            href={hero.href}
            variant="primary"
            className="mt-8 rounded-full px-[30px] py-[10px] text-base"
          >
            {hero.cta}
          </ButtonLink>
        </div>
      </div>
      <img
        src={hero.image}
        alt={hero.alt}
        className="absolute bottom-0 right-[-5%] z-[1] max-w-[950px] object-contain md:right-[-25%] md:max-w-[520px] lg:right-[-5%] lg:max-w-[950px]"
      />
    </section>
  )
}
