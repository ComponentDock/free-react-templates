import { ButtonLink } from '@free-react-templates/ui'
import { hero } from '../data'

/* Full-viewport photo hero with a subtle dark overlay, centered white
 * headline and a pill-shaped pink call to action (source .site-blocks-cover
 * #home-section). */
export function Hero() {
  return (
    <section
      id="home"
      data-testid="hero"
      className="relative flex min-h-screen items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${hero.image})` }}
    >
      <div aria-hidden="true" data-testid="hero-overlay" className="absolute inset-0 bg-black/20" />
      <div className="relative z-10 mx-auto max-w-3xl px-4 pb-24 pt-32 text-center">
        <h1 className="text-4xl font-black leading-tight text-white md:text-6xl">
          {hero.headline}
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg font-light text-white/90">{hero.subtext}</p>
        <ButtonLink
          href={hero.ctaHref}
          className="mt-10 rounded-full bg-brand px-10 py-3.5 text-base font-medium text-white transition-colors hover:bg-white hover:text-brand"
        >
          {hero.ctaLabel}
        </ButtonLink>
      </div>
    </section>
  )
}
