import { HERO } from '../data'
import { ButtonLink } from '@free-react-templates/ui'

/* Hero — full-height section with background image, dark overlay,
   headline, subtitle, and CTA button. */
export function Hero() {
  return (
    <section
      id="home-section"
      className="relative flex min-h-screen items-center justify-end bg-cover bg-center"
      style={{ backgroundImage: `url('${HERO.photo}')` }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-8">
        <div className="max-w-lg text-right">
          <h1 className="mb-4 text-5xl font-bold leading-tight text-white md:text-6xl">
            {HERO.headline}
          </h1>
          <p className="mb-6 text-lg text-white/80">{HERO.subtitle}</p>
          <ButtonLink
            href="#contact-section"
            className="inline-block rounded-full bg-brand px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-brand-hover"
          >
            {HERO.cta}
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
